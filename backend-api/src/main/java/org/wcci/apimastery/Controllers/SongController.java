package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.Entities.Song;
import org.wcci.apimastery.Storage.SongStorage;

import java.util.Collection;
@CrossOrigin
@RestController
public class SongController {

    SongStorage songStorage;

    public SongController(SongStorage songStorage) {
        this.songStorage = songStorage;

        }

    @GetMapping("/api/song/{id}/")
    public Song retrieveSongById(@PathVariable long id){
        return songStorage.retrieveSongById(id);
    }

    @GetMapping("/api/songs/")
    public Collection<Song> retrieveAllSongs(){
        return songStorage.retrieveAllSongs();
    }
}
