package org.wcci.apimastery.Storage;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.Entities.Album;
import org.wcci.apimastery.Entities.Artist;
import org.wcci.apimastery.Repositories.ArtistRepository;

import java.util.Collection;

@Service
public class ArtistStorage {

    private ArtistRepository artistRepo;

    public ArtistStorage(ArtistRepository artistRepo) {
        this.artistRepo = artistRepo;
    }

    public Artist save(Artist artist) {
        return artistRepo.save(artist);
    }

    public void delete(long id) {
        artistRepo.deleteById(id);
    }

    public Collection<Artist> retrieveAllArtists() {
        return (Collection<Artist>) artistRepo.findAll();
    }

    public Artist retrieveArtistById(long id) {
        return artistRepo.findById(id).get();
    }
    
}
