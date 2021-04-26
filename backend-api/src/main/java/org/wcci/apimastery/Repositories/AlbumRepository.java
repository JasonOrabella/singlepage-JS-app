package org.wcci.apimastery.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.Entities.Album;

public interface AlbumRepository extends CrudRepository<Album, Long> {
}
