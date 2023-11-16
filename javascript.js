function setTitle(title) {
    document.getElementById('page-title').textContent = title;
}

function setDescription(description) {
    document.getElementById('page-description').textContent = description;
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function setFontColor(color) {
    document.body.style.color = color;
}

function setTheme(themeName) {
    document.body.classList.remove('dark-theme', 'light-theme');
    if (themeName === 'dark' || themeName === 'light') {
        document.body.classList.add(`${themeName}-theme`);
    }
}

//Completes the assignment.