package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Storage.AlbumStorage;
import org.wcci.apimastery.Entities.Album;

import java.util.Collection;
@CrossOrigin
@RestController
public class AlbumController {

    AlbumStorage albumStorage;

    public AlbumController(AlbumStorage albumStorage){
        this.albumStorage = albumStorage;
    }

    @GetMapping("/api/albums/")
    public Collection<Album> retrieveAllAlbums(){
        return albumStorage.retrieveAllAlbums();
    }

    @GetMapping("/api/album/{id}/")
    public Album retrieveAlbumById(@PathVariable long id){
        return albumStorage.retrieveAlbumById(id);
    }

    @DeleteMapping("/api/album/{id}/")
    public Collection<Album> deleteAlbum(@PathVariable long id){
        albumStorage.delete(id);
        return albumStorage.retrieveAllAlbums();
    }
    @PostMapping("/api/album/add/")
    public Collection<Album> createAlbum(@RequestBody Album album){
        albumStorage.save(album);
        return albumStorage.retrieveAllAlbums();
    }
}
