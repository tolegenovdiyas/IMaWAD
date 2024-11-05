const tracks = [
    {
        name: "Billie Eilish – Bad Guy",
        src: "tracks/Billie Eilish – Bad Guy.mp3",
        cover: "covers/bad-guy.jpg"
    },
    {
        name: "Billie Eilish – Bellyache",
        src: "tracks/Billie Eilish – Bellyache.mp3",
        cover: "covers/bellyache.jpg"
    },
    {
        name: "Billie Eilish, Khalid – Lovely",
        src: "tracks/Billie Eilish, Khalid – Lovely.mp3",
        cover: "covers/lovely.jpg"
    }
];

let currentTrackIndex = 0;
let isPlaying = false;
const audio = new Audio(tracks[currentTrackIndex].src);
const previousButton = document.getElementById("previous");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const coverImage = document.getElementById("cover");
const trackList = document.getElementById("track-list");

function loadTrack(index) {
    currentTrackIndex = index;
    audio.src = tracks[currentTrackIndex].src;
    coverImage.src = tracks[currentTrackIndex].cover;
    audio.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}

function playPauseTrack() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    playPauseButton.textContent = isPlaying ? "⏸️" : "▶️";
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
}
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
}

function renderTrackList() {
    tracks.forEach((track, index) => {
        const trackItem = document.createElement("li");
        trackItem.textContent = track.name;
        trackItem.addEventListener("click", () => {
            loadTrack(index);
            audio.play();
            isPlaying = true;
            updatePlayPauseIcon();
            trackPlaying;
        });
        trackList.appendChild(trackItem);
    });
}

playPauseButton.addEventListener("click", playPauseTrack);
nextButton.addEventListener("click", nextTrack);
previousButton.addEventListener("click", previousTrack)
renderTrackList();
const trackPlaying = document.getElementById("cover");
const trackNameDisplay = document.getElementById("track-name");

function loadTrack(index) {
    currentTrackIndex = index;
    audio.src = tracks[currentTrackIndex].src;
    coverImage.src = tracks[currentTrackIndex].cover;
    trackNameDisplay.textContent = tracks[currentTrackIndex].name;
    audio.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}
