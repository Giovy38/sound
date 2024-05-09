const btn = document.getElementById("srcBtn");
const imgFound = document.getElementById("song-found-img");
const titleFound = document.getElementById("song-found-title");
const artistFound = document.getElementById("song-found-artist");
const durationFound = document.getElementById("song-found-duration");
const inputSong = document.getElementById("input-search");

btn.addEventListener("click", onSearch);

async function onSearch() {
  songTitle = inputSong.value;

  if (songTitle !== "") {
    const url = `https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${songTitle}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9b912a4c64msh23ebabddf3aa292p1f8049jsnc9ea28512336",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      // assegn value to see
      imgFound.src = data.spotifyTrack.album.cover[0].url;
      titleFound.textContent = data.spotifyTrack.name;
      artistFound.textContent = data.spotifyTrack.artists[0].name;
      durationFound.textContent = data.spotifyTrack.durationText;

      // reset input value
      inputSong.value = "";
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("insert a song to search");
  }
}
