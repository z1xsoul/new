const messages = [
    { text: "You are my joy", music: "music/music1.mp3", image: "https://i.pinimg.com/474x/cc/d8/30/ccd830c9a0d40b72a4f09f4cc49cf9df.jpg" },
    { text: "Every moment with you is gold", music: "music/music2.mp3", image: "https://i.pinimg.com/474x/39/3d/36/393d36b5ac246a46ccf29464ed4227b0.jpg" },
    { text: "You are my medicine", music: "music/music3.mp3", image: "https://i.pinimg.com/474x/7c/be/90/7cbe905becd9096ab5d41d068af2e3e5.jpg" },
    { text: "I love you more than words can express 😘", music: "music/music4.mp3", image: "https://i.pinimg.com/474x/cc/65/1a/cc651a1480a8b9496b6d2e74ab2e4059.jpg" },
    { text: "You are my heart’s greatest joy ❤️", music: "music/music5.mp3", image: "https://i.pinimg.com/474x/39/3d/36/393d36b5ac246a46ccf29464ed4227b0.jpg" }
];

let currentIndex = 0;
let audio = document.getElementById("backgroundMusic");
let progressBar = document.getElementById("musicProgress");
let currentTimeDisplay = document.getElementById("currentTime");
let totalTimeDisplay = document.getElementById("totalTime");
let imageElement = document.getElementById("displayImage");

document.getElementById("generateMessage").addEventListener("click", function() {
    let selectedMessage = messages[currentIndex];

    
    document.getElementById("messageDisplay").innerText = selectedMessage.text;

  
    audio.src = selectedMessage.music;
    audio.play();

    
    imageElement.src = selectedMessage.image;
    imageElement.style.display = "block";

  
    progressBar.value = 0;

   
    currentIndex++;
    if (currentIndex >= messages.length) {
        currentIndex = 0;
    }
});


audio.addEventListener("timeupdate", function() {
    if (audio.duration) {
        progressBar.max = audio.duration;
        progressBar.value = audio.currentTime;
        currentTimeDisplay.innerText = formatTime(audio.currentTime);
        totalTimeDisplay.innerText = formatTime(audio.duration);
    }
});


progressBar.addEventListener("input", function() {
    audio.currentTime = progressBar.value;
});


function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
