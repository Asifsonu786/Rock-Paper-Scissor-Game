# 🪨 📄 ✂️ Rock Paper Scissors Game

A simple, interactive, and responsive web-based **Rock Paper Scissors** game built using vanilla HTML5, CSS3, and JavaScript. Challenge the computer, track your scores in real-time, and get instant visual feedback on every move!

---

## 📌 Overview

This project is a classic browser-based game where a player competes against an automated computer AI. The game calculates choices instantly, detects winners or draws, updates the scoreboard dynamically, and changes the UI background color based on the round's result to enhance the gameplay experience.

---

## ✨ Features

- **Real-Time Score Tracking:** Automatically updates and tracks scores for both the player and the computer during the session.
- **Dynamic Contextual Feedback:** The message bar instantly changes color based on the outcome:
  - 🟢 **Green** for a Win
  - 🔴 **Red** for a Loss
  - 🔵 **Light Blue** (`#90e0ef`) for a Draw
- **Randomized Computer AI:** Seamless logic that generates unbiased choices using `Math.random()`.
- **Clean & Interactive UI:** Smooth hover transitions on options with a centralized flexbox layout.
- **Modular Codebase:** Organized cleanly into dedicated structural, presentation, and logic files.

---

## 🛠️ Technologies Used

- **HTML5:** Core layout, game board container, and score structures using `index.html`.
- **CSS3:** Flexbox alignment, circular custom frames, hover states, and responsive spacing using `style.css`.
- **JavaScript (ES6):** Event listeners, game loop conditionals, DOM updates, and score state management using `app.js`.

---

## 📂 Project Structure

```text
├── Images/
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
├── index.html   # Main HTML structure and UI elements
├── style.css    # Layout designing, typography, and hover effects
└── app.js       # Core game engine logic and AI generation
```

🚀 How to Run
Clone this repository:

Bash
   git clone [https://github.com/your-username/rock-paper-scissors.git](https://github.com/your-username/rock-paper-scissors.git)
Open the project folder.

Open the index.html file in any modern web browser.

No extra installations or dependencies are required!

🎯 Game Rules
Click on any of the three choices: Rock, Paper, or Scissors to make your move.

The computer will make its choice simultaneously.

Winning Criteria:

🪨 Rock beats ✂️ Scissors.

📄 Paper beats 🪨 Rock.

✂️ Scissors beats 📄 Paper.

If both choices are identical, the the game declares a Draw.

📸 Screenshots

🏠 Main Gameplay Screen

Initial screen when the game loads, showing the scoreboard and options.
<img width="1920" height="1020" alt="screenshot-1" src="https://github.com/user-attachments/assets/bc27b4fe-90a8-470f-9fe8-875f1d5e212b" />


🏆 Winning State

Visual look when the player wins a round (Green alert highlight).
<img width="1920" height="1020" alt="Screenshot-2" src="https://github.com/user-attachments/assets/8f230a00-f8e9-4bda-b794-6cfcf800f6c4" />


🤝 Draw State

Visual look when a round ends in a tie (Light Blue alert highlight).
<img width="1920" height="1020" alt="Screenshot-4" src="https://github.com/user-attachments/assets/e665982c-db0a-4f57-a7e9-3cbf7b66ea42" />

❌ Losing State

Visual look when the player loses a round (Red alert highlight).
<img width="1920" height="1020" alt="Screenshot-3" src="https://github.com/user-attachments/assets/52c1228d-6c57-4801-95d9-b4ec680f1632" />


🔮 Future Improvements

Add a "Reset Game" button to clear scoreboard history.

Add sound effects for win, lose, and draw events.

Implement a best-of-5 or best-of-10 match mode.

Introduce Dark Mode / Theme toggles.

Add smooth animations when choices are selected.

👨‍💻 Author

Muhammad Asif

Feel free to fork this project, suggest improvements, or open an issue/PR!

📄 License

This project is open-source and available under the MIT License.
