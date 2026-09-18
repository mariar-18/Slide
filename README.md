# Slide - Gesture based Presentation Controller

## Description
Slide is a browser-based presentation controller that allows users to control PDF presentations using simple hand gestures. It uses the device camera and computer vision to detect hand movements and translate them into presentation controls such as moving between slides, activating a virtual pointer, and exiting the presentation.

The project provides a hands-free alternative to traditional presentation remotes while keeping the interaction simple and accessible. Users can upload a PDF, start the presentation directly in the browser, and control it using gestures without requiring a separate mobile application or dedicated hardware.

## Gesture Controls

| Gesture | Action |
|---------|--------|
| Swipe Right | Next Slide |
| Swipe Left | Previous Slide |
| Open Palm | Toggle Pointer |
| Index Finger | Move Pointer |
| Fist | Exit Presentation |

## Live Demo
[slide-production-f36f.up.railway.app](slide-production-f36f.up.railway.app)


## Tech Stack

**Frontend:** HTML, CSS, JavaScript  
**Computer Vision:** MediaPipe Hands  
**PDF Rendering:** PDF.js  
**Backend:** Node.js, Express.js, Multer  
**Version Control:** Git, GitHub  
**Deployment:** Railway


## Features

### Presentation Control

- Upload PDF presentations
- Display presentations directly in the browser
- Move to the next slide using a swipe gesture
- Move to the previous slide using a swipe gesture
- Enter fullscreen presentation mode
- Exit the presentation using a hand gesture

### Virtual Pointer

- Enable or disable the pointer using an open-palm gesture
- Move the pointer using the index finger
- Use the pointer directly over the presentation

### Camera

- Start the camera when needed
- Stop the camera manually
- No video recording

