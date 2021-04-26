export { displayOneArtist };
import { clearElementChildren } from "../domHelper.js";
import { displayOneAlbum } from "./displayOneAlbum.js";
import { postNewAlbum, deleteArtist } from "../fetchArtists.js";
import { displayAllArtists } from "./displayAllArtists.js";


const displayOneArtist = (allArtistsContainer, artist) => {
  clearElementChildren(allArtistsContainer);
  const artistContainer = document.createElement("container")
  artistContainer.classList.add("artist-container");

  const artistInfo = document.createElement("section");
  artistInfo.classList.add("artist-info");

  const artistDiv = document.createElement("div")
  artistDiv.classList.add("artist-grid")
  artistInfo.appendChild(artistDiv)

  const artistUl = document.createElement("ul")
  artistDiv.appendChild(artistUl)

  const nameLi = document.createElement("li")
  const nameH2 = document.createElement("h2")
  nameLi.appendChild(nameH2)
  nameH2.innerHTML = `${artist.name}`
  artistDiv.appendChild(nameLi)

  const descriptionLi = document.createElement("li")
  descriptionLi.innerHTML = `${artist.description}`
  artistDiv.appendChild(descriptionLi)

  const labelLi = document.createElement("li")
  labelLi.innerHTML = ` ${artist.recordLabel}`
  artistDiv.appendChild(labelLi)

  const artistGridItem2 = document.createElement("div");
  artistGridItem2.classList.add("artist-grid-item2");

  const singleArtistArt = new Image();
  singleArtistArt.src = artist.imageSource;
  singleArtistArt.classList.add("single-artist-art");
  artistGridItem2.appendChild(singleArtistArt);
  artistInfo.appendChild(artistGridItem2);
  artistContainer.appendChild(artistInfo);

  const artistAlbums = document.createElement("section");
  artistAlbums.classList.add("artist-albums");

  const albumUl = document.createElement("ul");
  artist.albums.forEach((album) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${album.title}</p>`;

    const albumArt = new Image();
    albumArt.classList.add("album-art");
    albumArt.src = album.imageSource;
    li.appendChild(albumArt);
    li.addEventListener("click", () => {
      displayOneAlbum(allArtistsContainer, album);
    });
    albumUl.appendChild(li);
  });
  artistContainer.appendChild(albumUl);
  allArtistsContainer.append(artistContainer);
  drawAlbumForm(artistContainer);

  function drawAlbumForm(artistContainer) {
    const inputContainer = document.createElement("container");
    inputContainer.classList.add("input-container");

    const albumNameInput = document.createElement("input");
    albumNameInput.type = "text";
    albumNameInput.placeholder = " New album name";
    albumNameInput.classList.add("input-box");
    inputContainer.appendChild(albumNameInput);

    const albumDescriptionInput = document.createElement("input");
    albumDescriptionInput.type = "text";
    albumDescriptionInput.placeholder = " New album description";
    albumDescriptionInput.classList.add("input-box");
    inputContainer.appendChild(albumDescriptionInput);

    const albumRecordLabelInput = document.createElement("input");
    albumRecordLabelInput.type = "text";
    albumRecordLabelInput.placeholder = " New album record label";
    albumRecordLabelInput.classList.add("input-box");
    inputContainer.appendChild(albumRecordLabelInput);

    const albumRatingInput = document.createElement("input");
    albumRatingInput.type = "text";
    albumRatingInput.placeholder = " New album rating";
    albumRatingInput.classList.add("input-box");
    inputContainer.appendChild(albumRatingInput);

    const albumImageInput = document.createElement("input");
    albumImageInput.type = "text";
    albumImageInput.placeholder = " Enter image url";
    albumImageInput.classList.add("input-box");
    inputContainer.appendChild(albumImageInput);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit New Album";
    submitButton.classList.add("input-box-submit");
    inputContainer.appendChild(submitButton);
    allArtistsContainer.prepend(inputContainer);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X Delete Artist";
    deleteButton.classList.add("delete-box-submit");
    allArtistsContainer.append(deleteButton);
    
    deleteButton.addEventListener ("click", ()=>{
       deleteArtist(artist,artist.id).then((updatedArtistList)=>{
         displayAllArtists(updatedArtistList);
       } );
    })

    submitButton.addEventListener("click", () => {
      const album = {
        artist: artist.id,
        title: albumNameInput.value,
        description: albumDescriptionInput.value,
        recordLabel: albumRecordLabelInput.value,
        rating: albumRatingInput.value,
        imageSource: albumImageInput.value,
      };

      postNewAlbum(album, artist.id)
        .then((updatedArtist) => {
          displayOneArtist(allArtistsContainer, updatedArtist);
      });
    });
  }
}