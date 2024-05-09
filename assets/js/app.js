let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");

// set time to playing song
let currentTimePlaying = document.getElementById("current-time");
let songDuration = document.getElementById("song-duration");

// add click event on play

ctrlIcon.addEventListener("click", onPlay);

function songLoad() {
  song.load();
}

function onPlay() {
  if (source.src !== "http://127.0.0.1:5500/") {
    if (ctrlIcon.classList.contains("bx-pause")) {
      song.pause();
      ctrlIcon.classList.remove("bx-pause");
      ctrlIcon.classList.add("bx-play");
    } else {
      song.play();
      ctrlIcon.classList.add("bx-pause");
      ctrlIcon.classList.remove("bx-play");
    }
  } else {
    alert("select a song from list before play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    progress.max = song.duration;
    // set current time
    let timeSet = song.currentTime / 60;
    currentTimePlaying.textContent = parseFloat(timeSet.toFixed(2).toString());

    // set total time
    let durationSet = song.duration / 60;
    songDuration.textContent = parseFloat(durationSet.toFixed(2).toString());
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("bx-pause");
  ctrlIcon.classList.remove("bx-play");
};

// SELECT SONG TO PLAY

const songSelect = document.querySelectorAll(".single-song");

songSelect.forEach((song) => {
  let songImg;
  let songTitle;
  let songArtist;

  const playImg = document.getElementById("img-play-song");
  const playTitle = document.getElementById("song-play-title");
  const playArtist = document.getElementById("song-play-artist");

  song.addEventListener("click", () => {
    songImg = `${song.children[0].children[0].src}`;
    songTitle = song.children[1].children[0].textContent;
    songArtist = song.children[1].children[1].textContent;

    playImg.src = songImg;
    playTitle.textContent = songTitle;
    playArtist.textContent = songArtist;

    const songPlay = document.getElementById("source");

    switch (songTitle) {
      case "shine":
        songPlay.src = "/assets/music/spektrem shine.mp4";
        break;
      case "mortals":
        songPlay.src = "/assets/music/Warriyo - Mortals.mp4";
        break;
      case "heroes tonight":
        songPlay.src = "/assets/music/janji - heroes tonight .mp4";
        break;
      case `on & on`:
        songPlay.src = "/assets/music/cartoon, jeja - on & on.mp4";
        break;
    }

    songLoad();
    onPlay();
  });
});

window.addEventListener("DOMContentLoaded", () => song.pause());

// IMPLEMENT PREW AND NEXT SONG

const prewSong = document.getElementById("prew-song");
const nextSong = document.getElementById("next-song");

// preview song

prewSong.addEventListener("click", () => {
  let songImg;
  let songTitle;
  let songArtist;
  let songPosition;

  const playImg = document.getElementById("img-play-song");
  const playTitle = document.getElementById("song-play-title");
  const playArtist = document.getElementById("song-play-artist");

  // select all single song to take info

  const playableSong = document.querySelectorAll(".single-song");

  console.log(source.src);

  if (source.src !== "http://127.0.0.1:5500/") {
    switch (source.src) {
      case "http://127.0.0.1:5500/assets/music/spektrem%20shine.mp4":
        songPosition = 3;
        source.src =
          "http://127.0.0.1:5500/assets/music/cartoon,%20jeja%20-%20on%20&%20on.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/Warriyo%20-%20Mortals.mp4":
        songPosition = 0;
        source.src = "http://127.0.0.1:5500/assets/music/spektrem%20shine.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/janji%20-%20heroes%20tonight%20.mp4":
        songPosition = 1;
        source.src =
          "http://127.0.0.1:5500/assets/music/Warriyo%20-%20Mortals.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/cartoon,%20jeja%20-%20on%20&%20on.mp4":
        songPosition = 2;
        source.src =
          "http://127.0.0.1:5500/assets/music/janji%20-%20heroes%20tonight%20.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
    }

    playImg.src = songImg;
    playTitle.textContent = songTitle;
    playArtist.textContent = songArtist;

    songLoad();
    onPlay();
  } else {
    alert("you must choice a song to play first");
  }
});

// next song

nextSong.addEventListener("click", () => {
  let songImg;
  let songTitle;
  let songArtist;
  let songPosition;

  const playImg = document.getElementById("img-play-song");
  const playTitle = document.getElementById("song-play-title");
  const playArtist = document.getElementById("song-play-artist");

  // select all single song to take info

  const playableSong = document.querySelectorAll(".single-song");

  if (source.src !== "http://127.0.0.1:5500/") {
    switch (source.src) {
      case "http://127.0.0.1:5500/assets/music/spektrem%20shine.mp4":
        songPosition = 1;
        source.src =
          "http://127.0.0.1:5500/assets/music/Warriyo%20-%20Mortals.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/Warriyo%20-%20Mortals.mp4":
        songPosition = 2;
        source.src =
          "http://127.0.0.1:5500/assets/music/janji%20-%20heroes%20tonight%20.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/janji%20-%20heroes%20tonight%20.mp4":
        songPosition = 3;
        source.src =
          "http://127.0.0.1:5500/assets/music/cartoon,%20jeja%20-%20on%20&%20on.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
      case "http://127.0.0.1:5500/assets/music/cartoon,%20jeja%20-%20on%20&%20on.mp4":
        songPosition = 0;
        source.src = "http://127.0.0.1:5500/assets/music/spektrem%20shine.mp4";
        songImg = `${playableSong[songPosition].children[0].children[0].src}`;
        songTitle = `${playableSong[songPosition].children[1].children[0].textContent}`;
        songArtist = `${playableSong[songPosition].children[1].children[1].textContent}`;
        break;
    }

    playImg.src = songImg;
    playTitle.textContent = songTitle;
    playArtist.textContent = songArtist;

    songLoad();
    onPlay();
  } else {
    alert("you must choice a song to play first");
  }
});

// SET VOLUME

const slider = document.getElementById("volumeSlider");
const audio = document.getElementById("song");

slider.oninput = function () {
  audio.volume = this.value;
};
