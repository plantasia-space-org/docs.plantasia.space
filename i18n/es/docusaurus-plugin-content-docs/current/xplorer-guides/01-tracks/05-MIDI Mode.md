---
title: MIDI Learn Mode
sidebar_label: MIDI Learn Mode
cover: /img/orbiters/how-to.jpg
sidebar_position: 2
---
# MIDI Learn Mode xPlorer Guide

Welcome to MIDI Learn Mode! This feature lets you seamlessly connect and control your application's parameters using a MIDI device. Whether you're mapping sliders, knobs, buttons, or menu items, MIDI Learn Mode is designed to make your creative workflow more intuitive.

---

## **What is MIDI Learn Mode?**

MIDI Learn Mode enables you to:
- **Connect MIDI Devices**: Plug in your MIDI controller and bring your setup to life.
- **Map MIDI Controls**: Assign MIDI hardware parameters (e.g., knobs, sliders, buttons) to software elements like sliders, knobs, and menu buttons in the app.
- **Use MIDI Learn Mode**: Quickly and easily assign hardware controls to software elements with real-time feedback.

### **How Does It Work?**
1. **Activate MIDI**: Once your MIDI device is connected, activate MIDI in the app settings or automatically on detection.
2. **Enter MIDI Learn Mode**:
   - Go into MIDI Learn mode by enabling it in the menu or pressing the dedicated button.
   - You'll see visual overlays and highlights on mappable elements like sliders, knobs, buttons, and menu items.
3. **Assign MIDI Controls**:
   - Click on any mappable element in the app to select it.
   - Move a control on your MIDI device (e.g., turn a knob, move a slider, or press a button).
   - If the input is valid, the app will assign the control and provide a confirmation.
4. **Enjoy Mapping**:
   - Once a mapping is set, you can use your MIDI controller to adjust the parameters or trigger actions in real-time.

---

## **Troubleshooting**

Here are some common issues and solutions to ensure a smooth experience:

### **1. MIDI Device Not Detected**
- **What Happened**: The app doesn’t recognize your MIDI device.
- **What to Do**:
  - Ensure your MIDI device is properly connected and powered on.
  - Refresh the app or reconnect the device.
  - Check if your browser supports the Web MIDI API (e.g., Chrome, Edge).

---

### **2. MIDI Learn Mode Not Working**
- **What Happened**: MIDI Learn mode isn’t activating or responding.
- **What to Do**:
  - Make sure MIDI is activated before entering MIDI Learn mode.
  - Check if the element you're trying to map is marked as mappable. Look for visual indicators like overlays or highlights.
  - If nothing happens when moving a MIDI control, ensure your device is sending a valid Control Change (CC) message.

---

### **3. Mapping Isn’t Saved**
- **What Happened**: You assigned a control, but it doesn’t seem to work.
- **What to Do**:
  - Ensure you completed the mapping by moving the control fully.
  - Check if the app confirms the mapping with a toast notification.
  - Verify that the MIDI control (knob, slider, button) sends data within the supported range (0–127 for CC messages).

---

### **4. Device Disconnected**
- **What Happened**: The app loses connection with your MIDI device.
- **What to Do**:
  - Reconnect your device. The app will automatically detect it.
  - If the issue persists, check the device’s power and connection cables.

---

## **Notifications and What They Mean**

| **Message**                                   | **Type**   | **What It Means**                                                                 |
|-----------------------------------------------|------------|-----------------------------------------------------------------------------------|
| **"Web MIDI API not supported."**             | Error      | Your browser or device does not support the Web MIDI API.                        |
| **"No MIDI inputs found. Please connect a MIDI device."** | Warning    | No MIDI devices are detected by the app.                                         |
| **"MIDI device [device name] is now [state]."** | Info       | Indicates that a MIDI device is connected or disconnected.                       |
| **"MIDI is not activated. Cannot enter MIDI Learn mode."** | Warning    | MIDI is not enabled; activate it before using MIDI Learn mode.                   |
| **"Perform a MIDI action to assign it to [control]."** | Info       | Waiting for input from your MIDI controller to complete mapping.                 |
| **"Assigned CC [number] to '[control]'."**    | Success    | The MIDI control was successfully mapped to the selected element.                |
| **"Cleared MIDI mapping for '[control]'."**   | Success    | A previous mapping was successfully removed.                                     |
| **"No MIDI mapping exists for '[control]'."** | Error      | No mapping was found to clear for the selected element.                          |

---

## **Tips for a Better Experience**

1. **Keep It Organized**:
   - Label your MIDI device controls so you know what each one is mapped to in the app.
   - Use the visual indicators to double-check which controls are already mapped.

2. **Check Compatibility**:
   - Ensure your MIDI device supports sending Control Change (CC) messages.
   - If possible, use a MIDI controller that sends clear and predictable signals.

3. **Debug Mode**:
   - Use the browser console (F12 → Console) to see detailed logs if something isn’t working as expected.

---

MIDI Learn Mode transforms your workflow, giving you precise and hands-on control of your app's features. If you run into any issues, refer to this guide or contact support. Enjoy creating! 🎵