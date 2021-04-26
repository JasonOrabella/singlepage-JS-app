package org.wcci.apimastery.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.Entities.Artist;

public interface ArtistRepository extends CrudRepository<Artist, Long> {
}
