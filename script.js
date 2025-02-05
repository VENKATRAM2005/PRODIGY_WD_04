const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? "☀️" : "🌙";
});

/* Light Mode Styling */
document.styleSheets[0].insertRule(`
    .light-mode {
        background-color: #fff;
        color: #000;
    }
    .light-mode .btn {
        background: black;
        color: white;
    }
    .light-mode .btn:hover {
        background: gray;
    }
    .light-mode header {
        background: rgba(255, 255, 255, 0.9);
    }
    .light-mode nav ul li a {
        color: black;
    }
    .light-mode .skills-grid span {
        background: rgba(0, 0, 0, 0.1);
    }
    .light-mode .skills-grid span:hover {
        background: black;
        color: white;
    }
`, 0);
