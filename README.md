# Module 4 Assignment - Hello / Goodbye

This is a working solution for the Module 4 Coursera assignment (HTML, CSS, and JavaScript for Web Developers).

How it works:
- index.html loads speakHello.js and speakGoodbye.js, then script.js.
- speakHello.js exposes `helloSpeaker` with `speak(name)` and `speakSimple(name)`.
- speakGoodbye.js exposes `byeSpeaker` with `speak(name)` and `speakSimple(name)`.
- script.js loops over a names array and calls the appropriate speaker depending on whether the name starts with "j" or "J".

Usage:
1. Put these files in a folder (e.g., `module4-solution`) in your repository.
2. Open `index.html` in a browser (or host via GitHub Pages).
3. Open the browser console to see the greetings printed.

Feel free to modify the `names` array in `script.js` to test additional names.
