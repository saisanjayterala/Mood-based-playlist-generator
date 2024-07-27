// taken help from youtube 
const moodSelector = document.getElementById('moodSelector');
const genreSelector = document.getElementById('genreSelector');
const decadeSelector = document.getElementById('decadeSelector');
const generateBtn = document.getElementById('generateBtn');
const luckyBtn = document.getElementById('luckyBtn');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const playlistDiv = document.getElementById('playlist');
const moodDescriptionDiv = document.getElementById('moodDescription');
const logoutBtn = document.getElementById('logoutBtn');
const saveModal = document.getElementById('saveModal');
const saveSelectedBtn = document.getElementById('saveSelectedBtn');
const saveAllBtn = document.getElementById('saveAllBtn');
const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const mainApp = document.getElementById('mainApp');
const loginSubmit = document.getElementById('loginSubmit');
const registerSubmit = document.getElementById('registerSubmit');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

const moodDescriptions = {
    happy: "Upbeat and cheerful songs to boost your mood.",
    sad: "Melancholic tunes to help you process your emotions.",
    energetic: "High-tempo tracks to get you pumped up.",
    relaxed: "Calming melodies to help you unwind.",
    romantic: "Love songs and ballads for those special moments.",
    focused: "Instrumental tracks to improve concentration.",
    angry: "Intense songs to channel your frustration.",
    nostalgic: "Classic hits to take you back in time."
};


const playlists = {
  happy: [
        {title: "Happy", artist: "Pharrell Williams", genre: "Pop", year: 2013},
        {title: "Don't Stop Me Now", artist: "Queen", genre: "Rock", year: 1979},
        {title: "Dancing Queen", artist: "ABBA", genre: "Pop", year: 1976},
        {title: "Macarena", artist: "Los del Río", genre: "Pop", year: 1993},
        {title: "Jai Ho", artist: "A.R. Rahman", genre: "Hindi", year: 2008},
        {title: "Whatta Man", artist: "Salt-N-Pepa", genre: "Hip Hop", year: 1993},
        {title: "Buttabomma", artist: "Armaan Malik", genre: "Telugu", year: 2020},
    ],
       sad: [
        {title: "Someone Like You", artist: "Adele", genre: "Pop", year: 2011},
        {title: "Hurt", artist: "Johnny Cash", genre: "Rock", year: 2002},
        {title: "The Sound of Silence", artist: "Simon & Garfunkel", genre: "Folk", year: 1964},
        {title: "Tears in Heaven", artist: "Eric Clapton", genre: "Rock", year: 1992},
        {title: "Tadap Tadap", artist: "K.K.", genre: "Hindi", year: 1999},
        {title: "Emptiness", artist: "Tune Mere Jaana", genre: "Hindi", year: 2010},
        {title: "Varsham Munduga", artist: "Shankar Mahadevan", genre: "Telugu", year: 2004},
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor", genre: "Rock", year: 1982 },
        { title: "Lose Yourself", artist: "Eminem", genre: "Hip Hop", year: 2002 },
        { title: "Stronger", artist: "Kanye West", genre: "Hip Hop", year: 2007 },
        { title: "The Final Countdown", artist: "Europe", genre: "Rock", year: 1986 },
        { title: "Thunderstruck", artist: "AC/DC", genre: "Rock", year: 1990 },
        { title: "Don't Stop Believin'", artist: "Journey", genre: "Rock", year: 1981 },
        { title: "Pump It", artist: "The Black Eyed Peas", genre: "Hip Hop", year: 2006 }
    ],
    relaxed: [
        { title: "Here Comes the Sun", artist: "The Beatles", genre: "Rock", year: 1969 },
        { title: "Wonderwall", artist: "Oasis", genre: "Rock", year: 1995 },
        { title: "Imagine", artist: "John Lennon", genre: "Rock", year: 1971 },
        { title: "What a Wonderful World", artist: "Louis Armstrong", genre: "Jazz", year: 1967 },
        { title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwo'ole", genre: "Folk", year: 1993 },
        { title: "Chasing Cars", artist: "Snow Patrol", genre: "Rock", year: 2006 },
        { title: "The Scientist", artist: "Coldplay", genre: "Rock", year: 2002 }
    ],
    romantic: [
        { title: "Can't Help Falling in Love", artist: "Elvis Presley", genre: "Pop", year: 1961 },
        { title: "All of Me", artist: "John Legend", genre: "R&B", year: 2013 },
        { title: "Perfect", artist: "Ed Sheeran", genre: "Pop", year: 2017 },
        { title: "At Last", artist: "Etta James", genre: "Jazz", year: 1960 },
        { title: "I Will Always Love You", artist: "Whitney Houston", genre: "Pop", year: 1992 },
        { title: "Unchained Melody", artist: "The Righteous Brothers", genre: "Pop", year: 1965 },
        { title: "Make You Feel My Love", artist: "Adele", genre: "Pop", year: 2008 }
    ],
    focused: [
        { title: "The Four Seasons: Spring", artist: "Antonio Vivaldi", genre: "Classical", year: 1725 },
        { title: "Clair de Lune", artist: "Claude Debussy", genre: "Classical", year: 1905 },
        { title: "Gymnopedie No.1", artist: "Erik Satie", genre: "Classical", year: 1888 },
        { title: "Piano Concerto No. 21", artist: "Wolfgang Amadeus Mozart", genre: "Classical", year: 1785 },
        { title: "Weightless", artist: "Marconi Union", genre: "Ambient", year: 2012 },
        { title: "Experience", artist: "Ludovico Einaudi", genre: "Contemporary Classical", year: 2013 },
        { title: "Music for Airports", artist: "Brian Eno", genre: "Ambient", year: 1978 }
    ],
    angry: [
        { title: "Break Stuff", artist: "Limp Bizkit", genre: "Nu Metal", year: 2000 },
        { title: "Killing in the Name", artist: "Rage Against the Machine", genre: "Alternative Metal", year: 1992 },
        { title: "Down with the Sickness", artist: "Disturbed", genre: "Nu Metal", year: 2000 },
        { title: "Bodies", artist: "Drowning Pool", genre: "Nu Metal", year: 2001 },
        { title: "Given Up", artist: "Linkin Park", genre: "Alternative Rock", year: 2007 },
        { title: "I Hate Everything About You", artist: "Three Days Grace", genre: "Alternative Rock", year: 2003 },
        { title: "Angry Again", artist: "Megadeth", genre: "Thrash Metal", year: 1993 }
    ],
    nostalgic: [
        { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Grunge", year: 1991 },
        { title: "Stayin' Alive", artist: "Bee Gees", genre: "Disco", year: 1977 },
        { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock", year: 1987 },
        { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop", year: 1983 },
        { title: "Like a Prayer", artist: "Madonna", genre: "Pop", year: 1989 },
        { title: "I Want to Hold Your Hand", artist: "The Beatles", genre: "Rock", year: 1963 },
        { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", year: 1975 }
    ]
};function init() {
    if (isLoggedIn()) {
        showMainApp();
    } else {
        showLoginPage();
    }
}

function showLoginPage() {
    loginPage.style.display = 'flex';
    registerPage.style.display = 'none';
    mainApp.style.display = 'none';
}

function showRegisterPage() {
    loginPage.style.display = 'none';
    registerPage.style.display = 'flex';
    mainApp.style.display = 'none';
}

function showMainApp() {
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    mainApp.style.display = 'block';
    initializeAnimations();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        showMainApp();
    } else {
        alert('Please enter both username and password.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        showMainApp();
    } else {
        alert('Please enter both username and password.');
    }
}

function logout() {
    localStorage.removeItem('user');
    showLoginPage();
}

function isLoggedIn() {
    return !!localStorage.getItem('user');
}

function generatePlaylist() {
    const selectedMood = moodSelector.value;
    const selectedGenre = genreSelector.value;
    const selectedDecade = decadeSelector.value;

    if (selectedMood) {
        const playlist = filterPlaylist(playlists[selectedMood], selectedGenre, selectedDecade);
        displayMoodDescription(selectedMood);
        displayPlaylist(playlist);
    } else {
        moodDescriptionDiv.innerHTML = '';
        playlistDiv.innerHTML = '<p>Please select a mood.</p>';
    }
}

function filterPlaylist(playlist, genre, decade) {
    return playlist.filter(song => {
        const matchesGenre = !genre || song.genre.toLowerCase() === genre.toLowerCase();
        const matchesDecade = !decade || getDecade(song.year) === decade;
        return matchesGenre && matchesDecade;
    });
}

function getDecade(year) {
    const decadeStart = Math.floor(year / 10) * 10;
    return `${decadeStart}s`;
}

function displayMoodDescription(mood) {
    moodDescriptionDiv.textContent = moodDescriptions[mood];
    animateElement(moodDescriptionDiv);
}

function displayPlaylist(playlist) {
    playlistDiv.innerHTML = '<h2>Your Playlist:</h2>';
    if (playlist.length === 0) {
        playlistDiv.innerHTML += '<p>No songs match your criteria. Try adjusting your genre or decade preference.</p>';
        return;
    }
    playlist.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <input type="checkbox" class="song-checkbox" id="song-${index}" checked>
            <span class="song-number">${index + 1}.</span>
            <div class="song-info">
                <span class="song-title">${song.title} - ${song.artist}</span>
                <div class="song-details">
                    <span class="song-genre">${song.genre}</span>
                    <span class="song-year">${song.year}</span>
                </div>
            </div>
            <i class="fas fa-music song-icon"></i>
        `;
        playlistDiv.appendChild(songElement);
        animateElement(songElement, index * 100);
    });
}

function generateRandomPlaylist() {
    const randomMood = getRandomMood();
    moodSelector.value = randomMood;
    updateMoodDescription();
    generatePlaylist();
}

function getRandomMood() {
    const moods = Object.keys(playlists);
    return moods[Math.floor(Math.random() * moods.length)];
}

function clearSelections() {
    moodSelector.value = '';
    genreSelector.value = '';
    decadeSelector.value = '';
    moodDescriptionDiv.textContent = '';
    playlistDiv.innerHTML = '';
}

function updateMoodDescription() {
    const selectedMood = moodSelector.value;
    if (selectedMood) {
        moodDescriptionDiv.textContent = moodDescriptions[selectedMood];
    } else {
        moodDescriptionDiv.textContent = '';
    }
}

function showSaveModal() {
    const playlist = Array.from(playlistDiv.querySelectorAll('.song'));
    if (playlist.length === 0) {
        alert('No playlist to save. Generate a playlist first.');
        return;
    }

    const savePlaylistContent = document.getElementById('savePlaylistContent');
    savePlaylistContent.innerHTML = '';
    playlist.forEach((song, index) => {
        const songTitle = song.querySelector('.song-title').textContent;
        savePlaylistContent.innerHTML += `
            <div>
                <input type="checkbox" id="save-song-${index}" checked>
                <label for="save-song-${index}">${songTitle}</label>
            </div>
        `;
    });

    saveModal.style.display = 'block';
}

function savePlaylist(selectedOnly) {
    const playlist = Array.from(playlistDiv.querySelectorAll('.song'));
    const savedPlaylist = playlist.filter((song, index) => {
        if (selectedOnly) {
            const checkbox = document.getElementById(`save-song-${index}`);
            return checkbox && checkbox.checked;
        }
        return true;
    }).map(song => {
        return {
            title: song.querySelector('.song-title').textContent,
            genre: song.querySelector('.song-genre').textContent,
            year: song.querySelector('.song-year').textContent
        };
    });

    if (savedPlaylist.length === 0) {
        alert('No songs selected to save.');
        return;
    }

    localStorage.setItem('savedPlaylist', JSON.stringify(savedPlaylist));
    alert('Playlist saved!');
    saveModal.style.display = 'none';
}

function loadSavedPlaylist() {
    const savedPlaylist = localStorage.getItem('savedPlaylist');
    if (savedPlaylist) {
        displayPlaylist(JSON.parse(savedPlaylist));
    } else {
        alert('No saved playlist found.');
    }
}

function animateElement(element, delay = 0) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: delay
    });
}

function initializeAnimations() {
    anime({
        targets: '.animated-title',
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 300
    });

    anime({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: 500
    });

    anime({
        targets: '.button-group button',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 600,
        delay: anime.stagger(100, {start: 700})
    });

    anime({
        targets: 'select',
        opacity: [0, 1],
        translateX: [-20, 0],
        easing: 'easeOutExpo',
        duration: 600,
        delay: anime.stagger(100, {start: 900})
    });
}

generateBtn.addEventListener('click', generatePlaylist);
luckyBtn.addEventListener('click', generateRandomPlaylist);
clearBtn.addEventListener('click', clearSelections);
saveBtn.addEventListener('click', showSaveModal);
loadBtn.addEventListener('click', loadSavedPlaylist);
moodSelector.addEventListener('change', updateMoodDescription);
genreSelector.addEventListener('change', () => {
    if (moodSelector.value) generatePlaylist();
});
decadeSelector.addEventListener('change', () => {
    if (moodSelector.value) generatePlaylist();
});
logoutBtn.addEventListener('click', logout);
loginSubmit.addEventListener('click', login);
registerSubmit.addEventListener('click', register);
saveSelectedBtn.addEventListener('click', () => savePlaylist(true));
saveAllBtn.addEventListener('click', () => savePlaylist(false));
showRegister.addEventListener('click', showRegisterPage);
showLogin.addEventListener('click', showLoginPage);

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        saveModal.style.display = 'none';
    });
});

init();