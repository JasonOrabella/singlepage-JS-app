import { clearElementChildren } from "../domHelper.js"
import { displayOneSong } from "./displayOneSong.js"
import { deleteAlbum, fetchArtists } from "../fetchArtists.js"
import { displayAllArtists } from "./displayAllArtists.js"
export { displayOneAlbum}

const displayOneAlbum = (artistContainer, album) =>{
    clearElementChildren(artistContainer)

    const artistInfo = document.createElement("section")
    artistInfo.classList.add("artist-info")

    const div = document.createElement("div")
    div.classList.add("artist-grid")
    artistInfo.append(div)
    artistContainer.append(artistInfo)

    const h1 = document.createElement("h1")
    div.append(h1)
    h1.innerHTML=`${album.title}`

    const div2 = document.createElement("div")
    div2.classList = "artist-grid-item2"
    artistInfo.append(div2)

    const albumImg = document.createElement("img")
    div2.append(albumImg)
    albumImg.src= album.imageSource
    albumImg.classList = "single-artist-art"

    const ol = document.createElement("ol")
    album.songs.forEach(song => {
        const li = document.createElement("li")
        li.innerHTML= `<p>${song.songTitle}</p>`
        ol.append(li)
        li.addEventListener("click", () => {
            displayOneSong(artistContainer, song, album);
          });
    });
    div.append(ol)

    const albumDetails = document.createElement("section")
    albumDetails.classList.add("album-details")  
    const strongAlbum = document.createElement("strong")
    albumDetails.appendChild(strongAlbum)
    const ulAlbum = document.createElement("ul");
    strongAlbum.appendChild(ulAlbum)
    const recordLi = document.createElement("li")
    recordLi.innerHTML = `${album.recordLabel}`
    ulAlbum.appendChild(recordLi)
    const ratingLi = document.createElement("li")
    ulAlbum.appendChild(ratingLi)
    ratingLi.innerHTML = `${album.rating}`
    artistInfo.append(albumDetails)

    const span = document.createElement("span");
    span.classList.add("album-description")
    albumDetails.append(span);
    span.innerHTML = `${album.description}`
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X Delete Album";
    deleteButton.classList.add("delete-box-submit");
    artistContainer.appendChild(deleteButton);
    
    deleteButton.addEventListener ("click", ()=>{
       deleteAlbum(album,album.id).then((updatedAlbumList)=>{
        fetchArtists()
        .then(artists => {
            displayAllArtists(artists)
        })
       });
    })
}