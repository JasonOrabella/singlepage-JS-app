export { displayAllArtists }
import { fetchArtists, postNewArtist }from "../fetchArtists.js"
import{ clearElementChildren }from "../domHelper.js"
import{ displayOneArtist }from "./displayOneArtist.js"

const displayAllArtists = (artists) => {
  clearElementChildren(allArtistsContainer);
  allArtistsContainer.classList.remove(`all-songs-container`);
  allArtistsContainer.classList.remove(`song-container`);
  allArtistsContainer.classList.add("all-artists-container");

  const ulSection = document.createElement("ul");
  allArtistsContainer.appendChild(ulSection);
  for (let i = 0; i < artists.length; i++) {
    const liSection = document.createElement("li");
    liSection.classList.add('artist');
    liSection.innerHTML = ` <p>${artists[i].name}</p> `;
    const artistImg = new Image;
    artistImg.src = artists[i].imageSource;
    artistImg.classList.add("artist-art");
    liSection.appendChild(artistImg);
    liSection.addEventListener('click',() =>{
      displayOneArtist(allArtistsContainer, artists[i]);
    })
    ulSection.appendChild(liSection);
  };
  drawArtistForm(allArtistsContainer);
}

function drawArtistForm(allArtistsContainer) {
  const inputContainer = document.createElement('container');
  inputContainer.classList.add('input-container');

  const artistNameInput = document.createElement('input');
  artistNameInput.type = 'text';
  artistNameInput.placeholder = ' New Artist Name';
  artistNameInput.classList.add('input-box');
  inputContainer.appendChild(artistNameInput);

  const artistDescriptionInput = document.createElement('input');
  artistDescriptionInput.type = 'text';
  artistDescriptionInput.placeholder = ' New Artist description';
  artistDescriptionInput.classList.add('input-box');
  inputContainer.appendChild(artistDescriptionInput);

  const artistRecordLabelInput = document.createElement('input');
  artistRecordLabelInput.type = 'text';
  artistRecordLabelInput.placeholder = ' New Record Label';
  artistRecordLabelInput.classList.add('input-box');
  inputContainer.appendChild(artistRecordLabelInput);

  const artistImageInput = document.createElement('input');
  artistImageInput.type = 'text';
  artistImageInput.placeholder = ' New Artist Image URL';
  artistImageInput.classList.add('input-box');
  inputContainer.appendChild(artistImageInput);

  const submitButton = document.createElement('button');
  submitButton.innerText = 'Add New Artist';
  submitButton.classList.add('input-box-submit');
  inputContainer.appendChild(submitButton);
  allArtistsContainer.prepend(inputContainer);

  submitButton.addEventListener('click', () => {
    const artist = {
      "name": artistNameInput.value,
      "description": artistDescriptionInput.value,
      "recordLabel": artistRecordLabelInput.value,
      "imageSource": artistImageInput.value
    }
    postNewArtist(artist)
      .then(artists => {
        displayAllArtists(artists)
          })
    fetchArtists()
      .then(artists => {
        displayAllArtists( artists)
      })
  })
}
const allArtistsContainer = document.querySelector(".all-artists-container")