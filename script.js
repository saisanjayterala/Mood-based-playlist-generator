const moodSelector = document.getElementById('moodSelector');
const generateBtn = document.getElementById('generateBtn');
const playlistDiv = document.getElementById('playlist');
const moodDescriptionDiv = document.getElementById('moodDescription');

const moodDescriptions = {
    happy: "Upbeat and cheerful songs to boost your mood and bring a smile to your face.",
    sad: "Melancholic and emotional tracks to help you process your feelings and find solace.",
    energetic: "High-energy songs to get you pumped up and ready to take on any challenge.",
    relaxed: "Calm and soothing melodies to help you unwind and de-stress.",
    romantic: "Love songs and ballads to set the mood for a romantic evening.",
    focused: "Instrumental and ambient tracks to improve concentration and productivity."
};

const playlists = {
    happy: [
        { title: "Don't Stop Me Now", artist: "Queen" },
        { title: "Happy", artist: "Pharrell Williams" },
        { title: "Walking on Sunshine", artist: "Katrina and The Waves" },
        { title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
        { title: "Good Vibrations", artist: "The Beach Boys" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele" },
        { title: "Fix You", artist: "Coldplay" },
        { title: "Hurt", artist: "Johnny Cash" },
        { title: "The Sound of Silence", artist: "Simon & Garfunkel" },
        { title: "Everybody Hurts", artist: "R.E.M." },
        { title: "Hallelujah", artist: "Jeff Buckley" },
        { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor" }
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor" },
        { title: "Lose Yourself", artist: "Eminem" },
        { title: "Stronger", artist: "Kanye West" },
        { title: "The Final Countdown", artist: "Europe" },
        { title: "Thunderstruck", artist: "AC/DC" },
        { title: "Don't Stop Believin'", artist: "Journey" },
        { title: "Pump It", artist: "The Black Eyed Peas" }
    ],
    relaxed: [
        { title: "Here Comes the Sun", artist: "The Beatles" },
        { title: "Wonderwall", artist: "Oasis" },
        { title: "Imagine", artist: "John Lennon" },
        { title: "What a Wonderful World", artist: "Louis Armstrong" },
        { title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwo'ole" },
        { title: "Chasing Cars", artist: "Snow Patrol" },
        { title: "The Scientist", artist: "Coldplay" }
    ],
    romantic: [
        { title: "Can't Help Falling in Love", artist: "Elvis Presley" },
        { title: "All of Me", artist: "John Legend" },
        { title: "Perfect", artist: "Ed Sheeran" },
        { title: "At Last", artist: "Etta James" },
        { title: "I Will Always Love You", artist: "Whitney Houston" },
        { title: "Unchained Melody", artist: "The Righteous Brothers" },
        { title: "Make You Feel My Love", artist: "Adele" }
    ],
    focused: [
        { title: "The Four Seasons: Spring", artist: "Antonio Vivaldi" },
        { title: "Clair de Lune", artist: "Claude Debussy" },
        { title: "Gymnopedie No.1", artist: "Erik Satie" },
        { title: "Piano Concerto No. 21", artist: "Wolfgang Amadeus Mozart" },
        { title: "Weightless", artist: "Marconi Union" },
        { title: "Experience", artist: "Ludovico Einaudi" },
        { title: "Music for Airports", artist: "Brian Eno" }
    ]
};

generateBtn.addEventListener('click', () => {
    const selectedMood = moodSelector.value;
    if (selectedMood) {
        const playlist = playlists[selectedMood];
        displayMoodDescription(selectedMood);
        displayPlaylist(playlist);
    } else {
        moodDescriptionDiv.innerHTML = '';
        playlistDiv.innerHTML = '<p>Please select a mood.</p>';
    }
});

function displayMoodDescription(mood) {
    moodDescriptionDiv.textContent = moodDescriptions[mood];
}

function displayPlaylist(playlist) {
    playlistDiv.innerHTML = '<h2>Your Playlist:</h2>';
    playlist.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <span class="song-number">${index + 1}.</span>
            <span class="song-title">${song.title} - ${song.artist}</span>
            <i class="fas fa-music song-icon"></i>
        `;
        playlistDiv.appendChild(songElement);
    });
}