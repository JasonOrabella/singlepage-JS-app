
export { fetchArtists, postNewAlbum, postNewArtist, fetchAlbums, deleteArtist, deleteAlbum };

const fetchArtists = async () => {
  return fetch("http://localhost:8080/api/artists/").then((response) =>
    response.json()
  );
};

const fetchAlbums = async () => {
  return fetch("http://localhost:8080/api/albums/").then((response) =>
    response.json()
  );
};

const postNewArtist = async (artist) => {
  console.log(artist);
  return fetch("http://localhost:8080/api/artists/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  }).then((response) => response.json());
};

const postNewAlbum = async (album, artistId) => {
  console.log(album);
  return fetch(`http://localhost:8080/api/artist/${artistId}/addAlbum/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(album),
  }).then((response) => response.json());
};

const deleteArtist = async (artist, artistId) => {
  console.log(artist);
  return fetch(`http://localhost:8080/api/artists/${artistId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  }).then((response) => response.json());
};


const deleteAlbum = async (album, albumId) => {
  return fetch(`http://localhost:8080/api/album/${albumId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(album),
  }).then((response) => response.json());
};
