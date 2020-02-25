package dev.robocode.tankroyale.ui.desktop.ui.battle

import dev.robocode.tankroyale.ui.desktop.bootstrap.BootstrapProcess
import dev.robocode.tankroyale.ui.desktop.bootstrap.BotEntry
import dev.robocode.tankroyale.ui.desktop.extensions.JComponentExt.addButton
import dev.robocode.tankroyale.ui.desktop.extensions.JListExt.toList
import dev.robocode.tankroyale.ui.desktop.extensions.JListExt.onChanged
import dev.robocode.tankroyale.ui.desktop.extensions.WindowExt.onActivated
import dev.robocode.tankroyale.ui.desktop.model.BotInfo
import dev.robocode.tankroyale.ui.desktop.ui.MainWindow
import dev.robocode.tankroyale.ui.desktop.ui.ResourceBundles
import dev.robocode.tankroyale.ui.desktop.util.Event
import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.UnstableDefault
import net.miginfocom.swing.MigLayout
import java.awt.Dimension
import java.awt.EventQueue
import java.util.*
import javax.swing.*
import kotlin.collections.ArrayList

@UnstableDefault
@ImplicitReflectionSerializer
object SelectBotsForBootUpDialog : JDialog(MainWindow, ResourceBundles.UI_TITLES.get("boot_up_dialog")) {

    init {
        defaultCloseOperation = DISPOSE_ON_CLOSE

        size = Dimension(600, 600)

        setLocationRelativeTo(null) // center on screen

        val selectBotsAndStartPanel = SelectBotsForBootUpPanel

        contentPane.add(selectBotsAndStartPanel)

        onActivated {
            selectBotsAndStartPanel.apply {
                updateAvailableBots()
                clearSelectedBots()
            }
        }
    }
}

@UnstableDefault
@ImplicitReflectionSerializer
object SelectBotsForBootUpPanel : JPanel(MigLayout("fill")) {
    // Private events
    private val onOK = Event<JButton>()
    private val onCancel = Event<JButton>()

    private val selectPanel = SelectBotsWithBotInfoPanel()

    private val botEntries: List<BotEntry> by lazy { BootstrapProcess.list() }

    private val selectedBotFiles: List<String>
        get() {
            val files = ArrayList<String>()
            selectPanel.selectedBotList.toList().forEach { botInfo ->
                files += botInfo.host // host serves as filename here
            }
            return Collections.unmodifiableList(files)
        }


    init {
        val buttonPanel = JPanel(MigLayout("center, insets 0"))

        val lowerPanel = JPanel(MigLayout("insets 10, fill")).apply {
            add(selectPanel, "north")
            add(buttonPanel, "center")
        }
        add(lowerPanel, "south")

        val okButton: JButton

        buttonPanel.apply {
            okButton = addButton("ok", onOK, "tag ok")
            addButton("cancel", onCancel, "tag cancel")
        }
        okButton.isEnabled = false

        selectPanel.selectedBotList.onChanged {
            okButton.isEnabled = selectPanel.selectedBotListModel.size >= 1
        }

        onOK.subscribe {
            bootUpBots()
            SelectBotsForBootUpDialog.dispose()
        }

        onCancel.subscribe { SelectBotsForBootUpDialog.dispose() }

        updateAvailableBots()
    }

    fun clearSelectedBots() {
        selectPanel.selectedBotListModel.clear()
    }

    fun updateAvailableBots() {
        SwingUtilities.invokeLater {
            val availableBotListModel = selectPanel.availableBotListModel

            availableBotListModel.clear()

            botEntries.forEach { botEntry ->
                val info = botEntry.info
                selectPanel.availableBotListModel.addElement(
                    BotInfo(
                        info.name,
                        info.version,
                        info.author,
                        info.description,
                        info.url,
                        info.countryCode,
                        info.platform,
                        info.programmingLang,
                        info.gameTypes,
                        host = botEntry.filename, // host serves as filename here
                        port = -1
                    )
                )
            }
        }
    }

    private fun bootUpBots() {
        SelectBotsForBattleDialog.isVisible = true
        BootstrapProcess.run(selectedBotFiles)
    }
}

@UnstableDefault
@ImplicitReflectionSerializer
private fun main() {
    UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName())

    EventQueue.invokeLater {
        SelectBotsForBootUpDialog.isVisible = true
    }
}