const moodSelector = document.getElementById('moodSelector');
const genreSelector = document.getElementById('genreSelector');
const decadeSelector = document.getElementById('decadeSelector');
const generateBtn = document.getElementById('generateBtn');
const playlistDiv = document.getElementById('playlist');
const moodDescriptionDiv = document.getElementById('moodDescription');

const moodDescriptions = {
    happy: "Upbeat and cheerful songs to boost your mood and bring a smile to your face.",
    sad: "Melancholic and emotional tracks to help you process your feelings and find solace.",
    energetic: "High-energy songs to get you pumped up and ready to take on any challenge.",
    relaxed: "Calm and soothing melodies to help you unwind and de-stress.",
    romantic: "Love songs and ballads to set the mood for a romantic evening.",
    focused: "Instrumental and ambient tracks to improve concentration and productivity.",
    angry: "Intense and powerful songs to channel your frustration and anger.",
    nostalgic: "Classic hits and throwbacks to take you on a trip down memory lane."
};

const playlists = {
    happy: [
        { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock", year: 1978 },
        { title: "Happy", artist: "Pharrell Williams", genre: "Pop", year: 2013 },
        { title: "Walking on Sunshine", artist: "Katrina and The Waves", genre: "Pop", year: 1983 },
        { title: "I Gotta Feeling", artist: "The Black Eyed Peas", genre: "Pop", year: 2009 },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", genre: "Pop", year: 2016 },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Pop", year: 2014 },
        { title: "Good Vibrations", artist: "The Beach Boys", genre: "Rock", year: 1966 }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele", genre: "Pop", year: 2011 },
        { title: "Fix You", artist: "Coldplay", genre: "Rock", year: 2005 },
        { title: "Hurt", artist: "Johnny Cash", genre: "Country", year: 2002 },
        { title: "The Sound of Silence", artist: "Simon & Garfunkel", genre: "Folk", year: 1964 },
        { title: "Everybody Hurts", artist: "R.E.M.", genre: "Rock", year: 1992 },
        { title: "Hallelujah", artist: "Jeff Buckley", genre: "Rock", year: 1994 },
        { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", genre: "Pop", year: 1990 }
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
};

generateBtn.addEventListener('click', () => {
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
});

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
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

moodSelector.addEventListener('change', updateMoodDescription);

function updateMoodDescription() {
    const selectedMood = moodSelector.value;
    if (selectedMood) {
        moodDescriptionDiv.textContent = moodDescriptions[selectedMood];
    } else {
        moodDescriptionDiv.textContent = '';
    }
}

genreSelector.addEventListener('change', () => {
    if (moodSelector.value) {
        generateBtn.click();
    }
});

decadeSelector.addEventListener('change', () => {
    if (moodSelector.value) {
        generateBtn.click();
    }
});

function getRandomMood() {
    const moods = Object.keys(playlists);
    return moods[Math.floor(Math.random() * moods.length)];
}

const luckyBtn = document.createElement('button');
luckyBtn.id = 'luckyBtn';
luckyBtn.textContent = "I'm Feeling Lucky";
luckyBtn.addEventListener('click', () => {
    const randomMood = getRandomMood();
    moodSelector.value = randomMood;
    updateMoodDescription();
    generateBtn.click();
});
document.querySelector('.mood-selector').appendChild(luckyBtn);

const clearBtn = document.createElement('button');
clearBtn.id = 'clearBtn';
clearBtn.textContent = "Clear Selections";
clearBtn.addEventListener('click', () => {
    moodSelector.value = '';
    genreSelector.value = '';
    decadeSelector.value = '';
    moodDescriptionDiv.textContent = '';
    playlistDiv.innerHTML = '';
});
document.querySelector('.additional-options').appendChild(clearBtn);

function savePlaylist(playlist) {
    localStorage.setItem('savedPlaylist', JSON.stringify(playlist));
}

function loadSavedPlaylist() {
    const savedPlaylist = localStorage.getItem('savedPlaylist');
    return savedPlaylist ? JSON.parse(savedPlaylist) : null;
}

const saveBtn = document.createElement('button');
saveBtn.id = 'saveBtn';
saveBtn.textContent = "Save Playlist";
saveBtn.addEventListener('click', () => {
    const currentPlaylist = Array.from(playlistDiv.querySelectorAll('.song')).map(songElement => {
        return {
            title: songElement.querySelector('.song-title').textContent,
            genre: songElement.querySelector('.song-genre').textContent,
            year: songElement.querySelector('.song-year').textContent
        };
    });
    savePlaylist(currentPlaylist);
    alert('Playlist saved!');
});

const loadBtn = document.createElement('button');
loadBtn.id = 'loadBtn';
loadBtn.textContent = "Load Saved Playlist";
loadBtn.addEventListener('click', () => {
    const savedPlaylist = loadSavedPlaylist();
    if (savedPlaylist) {
        displayPlaylist(savedPlaylist);
    } else {
        alert('No saved playlist found.');
    }
});

document.querySelector('.container').appendChild(saveBtn);
document.querySelector('.container').appendChild(loadBtn);