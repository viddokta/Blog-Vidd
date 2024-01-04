// script.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }

    // Check the user's preference for dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state
    if (isDarkMode) {
        enableDarkMode();
        darkModeSwitch.checked = true; // Update the switch state
    } else {
        disableDarkMode();
        darkModeSwitch.checked = false; // Update the switch state
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

// Fungsi JavaScript untuk menampilkan/sembunyikan daftar latihan
function toggleExerciseList(materiId) {
    var exerciseList = document.getElementById('exercise-list-' + materiId);
    if (exerciseList.style.display === 'none') {
        exerciseList.style.display = 'block';
    } else {
        exerciseList.style.display = 'none';
    }
}

function tampilkanKonten(id) {
    var konten = document.getElementById(id);
    var tombol = document.querySelector('a[href="javascript:void(0);"][onclick="tampilkanKonten(\'' + id + '\')"]');

    if (konten.style.display === 'none' || konten.style.display === '') {
        konten.style.display = 'block';
        tombol.innerHTML = 'Sembunyikan';
    } else {
        konten.style.display = 'none';
        tombol.innerHTML = 'Baca Selengkapnya';
    }
}