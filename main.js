function toggleMute() {
    let audio = document.getElementById("bg-music");
    let button = document.querySelector(".mute-button");

    if (audio.muted) {
        audio.muted = false;
        button.innerHTML = "🔊 Mute";
    } else {
        audio.muted = true;
        button.innerHTML = "🔇 Unmute";
    }
}