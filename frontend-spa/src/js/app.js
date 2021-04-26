import { createHeader }from "./header.js"
import { fetchArtists }from "./fetchArtists.js"
import { displayAllArtists }from "./components/displayAllArtists.js"
import{ createSubHeader }from "./subHeader.js"

fetchArtists()
    .then(artists => renderPage(artists)) 

const renderPage = (artists) => {
    const container = document.querySelector('.container');
    container.prepend(createHeader(artists))
    container.append(createSubHeader(artists))
    displayAllArtists(artists)
}