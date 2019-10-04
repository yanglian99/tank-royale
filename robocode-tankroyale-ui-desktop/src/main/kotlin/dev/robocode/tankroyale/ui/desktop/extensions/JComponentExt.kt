package dev.robocode.tankroyale.ui.desktop.extensions

import dev.robocode.tankroyale.ui.desktop.ui.ResourceBundles.UI_TITLES
import dev.robocode.tankroyale.ui.desktop.ui.ResourceBundles.STRINGS
import dev.robocode.tankroyale.ui.desktop.util.Event
import javax.swing.JButton
import javax.swing.JComponent
import javax.swing.JLabel
import javax.swing.JOptionPane

object JComponentExt {

    fun JComponent.addNewLabel(stringResourceName: String, layoutConstraints: String? = null): JLabel {
        val label = JLabel(STRINGS.get(stringResourceName) + ':')
        add(label, layoutConstraints)
        return label
    }

    fun JComponent.addNewButton(
        stringResourceName: String, event: Event<JButton>, layoutConstraints: String? = null
    ): JButton {
        val button = JButton(STRINGS.get(stringResourceName))
        button.addActionListener { event.publish(button) }
        add(button, layoutConstraints)
        return button
    }

    fun JComponent.showMessage(msg: String) {
        JOptionPane.showMessageDialog(this, msg, UI_TITLES.get("message_dialog"), JOptionPane.INFORMATION_MESSAGE)
    }

    fun JComponent.showError(msg: String) {
        JOptionPane.showMessageDialog(this, msg, UI_TITLES.get("error_dialog"),JOptionPane.ERROR_MESSAGE)
    }

    fun JComponent.showWarning(msg: String) {
        JOptionPane.showMessageDialog(this, msg, UI_TITLES.get("warning_dialog"),JOptionPane.WARNING_MESSAGE)
    }
}
