import{ clearElementChildren } from "../domHelper.js"
import { displayOneSong }from "./displayOneSong.js"
export{ displayAllSongs }

const displayAllSongs = (allArtistsContainer,albums) =>{
    clearElementChildren(allArtistsContainer);
    const allSongsContainer = document.createElement("container");
    allSongsContainer.classList.add("all-songs-container");
    allArtistsContainer.append(allSongsContainer);

    const songSection = document.createElement("section");
    songSection.classList.add("songSection");
    allSongsContainer.append(songSection);

    albums.forEach(album => {
        album.songs.forEach(song => {
        const songData = document.createElement("ul");
        songData.classList.add("songData");
        songData.innerHTML = 
          `<li>${song.songTitle}</li>
           <li>${album.title}</li>
           <li>${song.songDuration}</li>`
        songSection.append(songData);
        songData.addEventListener('click', () =>{
            displayOneSong(allArtistsContainer,song,album);
        })
    })
    }) 
}

