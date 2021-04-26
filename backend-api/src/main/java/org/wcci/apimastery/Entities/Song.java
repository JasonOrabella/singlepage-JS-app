package org.wcci.apimastery.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private Long id;
    private String songTitle;
    private String songLink;
    private String songDuration;
    @JsonIgnore
    @ManyToOne
    private Album album;
    @JsonIgnore
    @ManyToOne
    private Artist artist;

    public Song(Artist artist, Album album, String songTitle, String songLink, String songDuration) {
        this.artist = artist;
        this.album = album;
        this.songTitle = songTitle;
        this.songLink = songLink;
        this.songDuration = songDuration;
    }

    protected Song(){}

    public Long getId() {
        return id;
    }

    public String getSongTitle() {
        return songTitle;
    }

    public String getSongLink() {
        return songLink;
    }

    public String getSongDuration() {
        return songDuration;
    }

    public Album getAlbum() {
        return album;
    }

    public Artist getArtist() {
        return artist;
    }

}
