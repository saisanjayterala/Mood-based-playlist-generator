const moodSelector = document.getElementById('moodSelector');
const generateBtn = document.getElementById('generateBtn');
const playlistDiv = document.getElementById('playlist');

const playlists = {
    happy: [
        "Don't Stop Me Now - Queen",
        "Happy - Pharrell Williams",
        "Walking on Sunshine - Katrina and The Waves",
        "I Gotta Feeling - The Black Eyed Peas",
        "Can't Stop the Feeling! - Justin Timberlake"
    ],
    sad: [
        "Someone Like You - Adele",
        "Fix You - Coldplay",
        "Hurt - Johnny Cash",
        "The Sound of Silence - Simon & Garfunkel",
        "Everybody Hurts - R.E.M."
    ],
    energetic: [
        "Eye of the Tiger - Survivor",
        "Lose Yourself - Eminem",
        "Stronger - Kanye West",
        "The Final Countdown - Europe",
        "Thunderstruck - AC/DC"
    ],
    relaxed: [
        "Here Comes the Sun - The Beatles",
        "Wonderwall - Oasis",
        "Imagine - John Lennon",
        "What a Wonderful World - Louis Armstrong",
        "Somewhere Over the Rainbow - Israel Kamakawiwo'ole"
    ]
};

generateBtn.addEventListener('click', () => {
    const selectedMood = moodSelector.value;
    if (selectedMood) {
        const playlist = playlists[selectedMood];
        displayPlaylist(playlist);
    } else {
        playlistDiv.innerHTML = '<p>Please select a mood.</p>';
    }
});

function displayPlaylist(playlist) {
    playlistDiv.innerHTML = '<h2>Your Playlist:</h2>';
    playlist.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.textContent = `${index + 1}. ${song}`;
        playlistDiv.appendChild(songElement);
    });
}