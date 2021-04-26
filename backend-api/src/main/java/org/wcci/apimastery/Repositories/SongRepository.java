package org.wcci.apimastery.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.Entities.Song;

public interface SongRepository extends CrudRepository<Song, Long> {
}
