import { clearElementChildren } from "../domHelper.js"
export{ displayOneSong }

const displayOneSong = (artistContainer, song, album) =>{
    clearElementChildren(artistContainer);
    artistContainer.classList.add("song-container");
    artistContainer.classList.add("all-artists-container");

    const div  = document.createElement("div");
    div.classList.add("song-details");

    const ul = document.createElement("ul");
    ul.innerHTML = 
        `<li>${song.songTitle}</li>
        <li>${song.songDuration}</li>
        <li>${album.title}</li>`

    div.append(ul);
    artistContainer.append(div);

    const div2 = document.createElement("div");
    div.classList.add("embedded-video");

    const video = document.createElement("iframe");
    video.src = song.songLink;
    video.width = "560";
    video.height = "315";
    video.allowFullscreen = true;
    div2.append(video);
    artistContainer.append(div2);
}