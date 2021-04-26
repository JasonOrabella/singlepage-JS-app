package org.wcci.apimastery.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String imageSource;
    private String title;
    private String recordLabel;
    @Column(length = 100000)
    @Lob
    private String description;
    private String rating;
    @JsonIgnore
    @ManyToOne
    private Artist artist;
    @OneToMany(mappedBy = "album", orphanRemoval = true)
    private Collection<Song> songs;

    protected Album() {
    }

    public Album(String title, Artist artist, String recordLabel,String description, String rating, String imageSource) {
        this.imageSource = imageSource;
        this.artist = artist;
        this.title = title;
        this.recordLabel = recordLabel;
        this.description = description;
        this.rating = rating;
    }

    public Long getId() {
      return id;
    }

    public String getDescription() {
        return description;
    }

    public String getRating() {
        return rating;
    }

    public String getImageSource() {
        return imageSource;
    }

    public String getTitle() {
        return title;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<Song> getSongs() {
        return songs;
    }

    public Artist getArtist() {
        return artist;
    }
}
