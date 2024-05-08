let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");

ctrlIcon.addEventListener("click", onPlay);

function songLoad() {
  song.load();
}

function onPlay() {
  if (ctrlIcon.classList.contains("bx-pause")) {
    song.pause();
    ctrlIcon.classList.remove("bx-pause");
    ctrlIcon.classList.add("bx-play");
  } else {
    song.play();
    ctrlIcon.classList.add("bx-pause");
    ctrlIcon.classList.remove("bx-play");
    progress.max = song.duration;
    progress.value = song.currentTime;
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
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
      case "100 messaggi":
        songPlay.src = "/assets/music/100 messaggi.mp3";
        break;
      case "come un tuono":
        songPlay.src = "/assets/music/come un tuono.mp3";
        break;
      case "dopo le 4":
        songPlay.src = "/assets/music/dopo le 4.mp3";
        break;
      case `l'ultima poesia`:
        songPlay.src = "/assets/music/lultima poesia.mp3";
        break;
    }

    songLoad();
    onPlay();
  });
});

window.addEventListener("DOMContentLoaded", () => song.pause());
