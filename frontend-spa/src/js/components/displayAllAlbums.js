export { displayAllAlbums }
import { clearElementChildren } from "../domHelper.js"
import { displayOneAlbum } from "./displayOneAlbum.js"

const displayAllAlbums = (allAlbumsContainer, albums) => {
    clearElementChildren(allAlbumsContainer);
    allAlbumsContainer.classList.remove(`all-songs-container`);
    allAlbumsContainer.classList.remove(`song-container`);
    allAlbumsContainer.classList.add("all-artists-container");
    allAlbumsContainer.classList.add("all-albums-container");

    const ulSection = document.createElement("ul");
    allAlbumsContainer.appendChild(ulSection);
    for (let i = 0; i < albums.length; i++) {
        const liSection = document.createElement("li");
        liSection.classList.add('album');
        liSection.innerHTML = `<p>${albums[i].title}</p>`
        const albumImg = new Image;
        albumImg.src = albums[i].imageSource;
        albumImg.classList.add("album-art");
        liSection.appendChild(albumImg);
        liSection.addEventListener('click', () => {
            displayOneAlbum(allAlbumsContainer, albums[i]);
        })
        ulSection.appendChild(liSection);
    }  
}

