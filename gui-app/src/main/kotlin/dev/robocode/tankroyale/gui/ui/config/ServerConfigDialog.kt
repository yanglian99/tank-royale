package dev.robocode.tankroyale.gui.ui.config

import dev.robocode.tankroyale.gui.settings.ServerSettings
import dev.robocode.tankroyale.gui.ui.MainFrame
import dev.robocode.tankroyale.gui.ui.Messages
import dev.robocode.tankroyale.gui.ui.Strings
import dev.robocode.tankroyale.gui.ui.components.PortInputField
import dev.robocode.tankroyale.gui.ui.components.RcDialog
import dev.robocode.tankroyale.gui.ui.components.SwitchButton
import net.miginfocom.swing.MigLayout
import java.awt.Color
import java.awt.Dimension
import java.awt.Font
import javax.swing.JPanel
import javax.swing.*
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.addOkButton
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.addCancelButton
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.addButton
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.addLabel
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.enableAll
import dev.robocode.tankroyale.gui.ui.extensions.JComponentExt.showMessage
import dev.robocode.tankroyale.gui.ui.server.RemoteServer
import dev.robocode.tankroyale.gui.util.Event
import java.awt.event.ItemEvent
import java.awt.event.ItemListener


object ServerConfigDialog : RcDialog(MainFrame, "server_config_dialog") {

    init {
        contentPane.add(ServerConfigPanel)
        pack()
        setLocationRelativeTo(MainFrame) // center on main window
    }
}

object ServerConfigPanel : JPanel() {

    val onToggleRemoteServer = Event<Boolean>()
    val onPortUpdated = Event<Short>()

    val onOk = Event<JButton>()
    val onCancel = Event<JButton>()
    val onTest = Event<JButton>()
    val onAdd = Event<JButton>()
    val onRemove = Event<JButton>()

    val selectedServerLabel = JLabel(ServerSettings.serverUrl()).apply {
        font = Font(font.family, Font.BOLD, font.size)
        foreground = Color(0x00, 0x7f, 0x00)
    }

    val serverSwitchButton = SwitchButton(ServerSettings.useRemoteServer).apply {
        addSwitchHandler { isSelected -> onToggleRemoteServer.fire(isSelected) }
    }

    val useRemoveOrLocalServerLabel = JLabel().apply {
        text = getUseRemoveOrLocalServerText(serverSwitchButton.isSelected)
    }

    val localPortInputField = PortInputField(ServerSettings.localPort).apply {
        addPortUpdatedHandler { port -> onPortUpdated.fire(port) }
    }

    val remoteServerComboBox = JComboBox(getRemoteServerUrls()).apply {
        preferredSize = Dimension(150, preferredSize.height)
        selectedItem = ServerSettings.useRemoteServerUrl

        addItemListener(ItemListener { itemEvent ->
            if (itemEvent.getStateChange() == ItemEvent.SELECTED) {
                val serverUrl = itemEvent.item as String
                ServerSettings.useRemoteServerUrl = serverUrl

                updateSelectedServerLabel()
            }
        })
    }

    val localServerPanel: JPanel
    var remoteServerPanel: JPanel

    init {
        var okButton: JButton? = null

        layout = MigLayout("insets 10, fillx", "[grow]", "[]10[]10[]20[]")

        // Upper panel
        val upperPanel = JPanel(MigLayout("fillx", "[right][grow]", "[][]")).apply {
            addLabel("selected_server")
            add(selectedServerLabel, "growx, wrap")

            addLabel("use_remote_server")

            val switchPanel = JPanel(MigLayout("", "[right][grow]")).apply {
                add(serverSwitchButton)
                add(useRemoveOrLocalServerLabel)
            }
            add(switchPanel, "wrap")
        }
        add(upperPanel, "wrap")

        // Local server group
        localServerPanel = JPanel(MigLayout("insets 10, fillx", "", "[][]")).apply {
            setBorder(BorderFactory.createTitledBorder(Strings.get("local_server")))

            val portPanel = JPanel().apply {
                addLabel("port")
                add(localPortInputField, "wrap")
            }
            add(portPanel, "wrap")

//            add(JCheckBox("Secure server (WSS)"), "wrap")
        }
        add(localServerPanel, "growx, wrap")

        // Remote server group
        remoteServerPanel = JPanel(MigLayout("insets 10, fillx", "[right][grow][]", "[][]")).apply {
            setBorder(BorderFactory.createTitledBorder(Strings.get("remote_server")))
            addLabel("server")
            add(remoteServerComboBox, "growx")

            addButton("test", onTest, "wrap")
            addButton("add", onAdd, "skip 1, split 2")
            addButton("remove", onRemove)
        }
        add(remoteServerPanel, "growx, wrap")

        // OK and Cancel buttons
        val buttonPanel = JPanel(MigLayout("insets 0, center")).apply {
            okButton = addOkButton(onOk, "split 2")
            addCancelButton(onCancel)
        }
        add(buttonPanel, "growx")

        onToggleRemoteServer.subscribe(this) { isSelected ->
            toggleRemoteServer(isSelected)
        }

        onPortUpdated.subscribe(this) { port ->
            ServerSettings.localPort = port
        }

        toggleRemoteServer(ServerSettings.useRemoteServer)

        onTest.subscribe(this) { testServerConnection() }
    }

    private fun getRemoteServerUrls(): Array<String> {
        return ServerSettings.remoteServerUrls.toTypedArray()
    }

    private fun toggleRemoteServer(useRemoteServer: Boolean) {
        ServerSettings.useRemoteServer = useRemoteServer

        updateSelectedServerLabel()

        useRemoveOrLocalServerLabel.text = getUseRemoveOrLocalServerText(useRemoteServer)

        remoteServerPanel.enableAll(useRemoteServer)
        localServerPanel.enableAll(!useRemoteServer)
    }

    private fun getUseRemoveOrLocalServerText(useRemoteServer: Boolean) =
        Strings.get(if (useRemoteServer) "remove_server_is_used" else "local_server_is_used")

    private fun updateSelectedServerLabel() {
        selectedServerLabel.text = ServerSettings.serverUrl()
    }

    private fun testServerConnection() {
        var serverUrl = remoteServerComboBox.selectedItem as String
        if (RemoteServer.isRunning(serverUrl)) {
            showMessage(String.format(Messages.get("server_is_running"), serverUrl))
        } else {
            showMessage(String.format(Messages.get("server_not_found"), serverUrl))
        }
    }
}


fun main() {
    ServerConfigDialog.isVisible = true
}