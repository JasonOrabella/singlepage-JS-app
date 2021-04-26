package org.wcci.apimastery.Storage;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.Entities.Song;
import org.wcci.apimastery.Repositories.SongRepository;

import java.util.Collection;

@Service
public class SongStorage {

    private SongRepository songRepo;
    public SongStorage(SongRepository songRepo) {
        this.songRepo = songRepo;
    }

    public Song retrieveSongById(long id) {
        return songRepo.findById(id).get();
    }

    public Collection<Song> retrieveAllSongs() {
        return (Collection<Song>)songRepo.findAll();
    }

    public Song save(Song song) {
        return songRepo.save(song);
    }

    public void delete(long id) {
        songRepo.deleteById(id);
    }
}
