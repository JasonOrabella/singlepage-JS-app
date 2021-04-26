package org.wcci.apimastery.Storage;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Entities.Album;
import org.wcci.apimastery.Entities.Artist;
import org.wcci.apimastery.Entities.Song;
import org.wcci.apimastery.Storage.AlbumStorage;
import org.wcci.apimastery.Storage.ArtistStorage;
import org.wcci.apimastery.Storage.SongStorage;

@Component
public class Populator implements CommandLineRunner {

    ArtistStorage artistStorage;
    AlbumStorage albumStorage;
    SongStorage songStorage;

    public Populator(ArtistStorage artistStorage, AlbumStorage albumStorage, SongStorage songStorage) {
        this.artistStorage = artistStorage;
        this.albumStorage = albumStorage;
        this.songStorage = songStorage;
    }

    @Override
    public void run(String...args) throws Exception {
        Artist artist1= new Artist("Asian Kung-Fu Generation", "Naruto Artist", "Kioon Record Label", "src/images/naruto-artist.jpg");
        Artist artist2= new Artist("Yoko Kanno", "Composer for the Cowboy Bebop Soundtrack", "Victor Entertainment", "src/images/cowboy-artist.jpg");
        Artist artist3= new Artist("Mika Nakashima", "Singer for Kiss Of Death, Darling in the Franxx OP", "Sony Music Entertainment", "src/images/darling-artist.jpg");
        Artist artist4= new Artist("Nightmare", "Band for the DeathNote OP", "Nippon Crown","src/images/deathnote-artist.jpg");
        artistStorage.save(artist1);
        artistStorage.save(artist2);
        artistStorage.save(artist3);
        artistStorage.save(artist4);

        Album narutoAlbum= new Album("Naruto Album", artist1, "Kioon",
                "Most anime soundtracks are collaboration tracks where every artist contributes a single song. Eventually," +
                " one or two of the songs really begin to resonate with fans of the show, and for Naruto the first song to pop " +
                "off was Haruka Kanata by Asian Kung-Fu Generation. A link is provided in the list above to show you some details" +
                " about Haruka Kanata and an imbedded video to listen to. ","10/5", "src/images/naruto-image.jpg");

        Album cowboyAlbum= new Album("Cowboy Bebop", artist2, "Victor Entertainment",
                "The Cowboy Bebop album titled 'Cowboy Bebop' is as iconic as its main character Spike Spiegal. The first song you" +
                " hear when you watch the show is titled 'Tank' and it's an instrumental that is remniscient of James Bonds " +
                "intoduction.",
                "10/5", "src/images/cowboy-image.jpg");
        Album darlingAlbum= new Album("Kiss of Death", artist3, "Sony Music Entertainment Japan",
                "Kiss of Death is the opening to the anime Darling in the Franxx. The song is about loving someone who is " +
                "potentially deadly to you. It plays off of one of the characters of the show, called Zero Two, whose kisses " +
                "are said to lead to the recipients death.", "10/5", "src/images/darling-image.jpg");
        Album deathnoteAlbum= new Album("The WORLD", artist4, "Nippon Crown","Deathnote is often referred to as a novel, rather" +
                " than a manga. Its extremely in depth world and story is paralleled by its most popular intro 'The WORLD.'" +
                "The lyrics to the song describe the story itself, a young man on a mission to change the world with a forbidden" +
                " power who will stop at nothing to recreate the world in his vision. ", "10/5", "src/images/deathnote-image.jpg");
        albumStorage.save(narutoAlbum);
        albumStorage.save(cowboyAlbum);
        albumStorage.save(darlingAlbum);
        albumStorage.save(deathnoteAlbum);

        Song narutoSong = new Song(artist1, narutoAlbum, "R★O★C★K★S", "https://www.youtube.com/embed/4t__wczfpRI", "1:44");
        Song narutoSong2= new Song(artist1, narutoAlbum, "Haruka Kanata", "https://www.youtube.com/embed/nJ6A6GC_ki4", "1:40");
        Song narutoSong3= new Song(artist1, narutoAlbum, "Turning Saddness Into Kindness", "https://www.youtube.com/embed/9TOWvpAhu4g", "4:06");
        Song narutoSong4= new Song(artist1, narutoAlbum, "GO!!!", "https://www.youtube.com/embed/kV5UZvsvjcM", "3:56");
        Song cowboySong= new Song(artist2, cowboyAlbum, "Tank!","https://www.youtube.com/embed/n2rVnRwW0h8", "3:31");
        Song cowboySong2= new Song(artist2, cowboyAlbum, "Rush", "https://www.youtube.com/embed/l8wWa3O9cUo", "3:34");
        Song cowboySong3= new Song(artist2, cowboyAlbum, "Spokey Dokey", "https://www.youtube.com/embed/MduJjbcLSqE", "3:34");
        Song cowboySong4= new Song(artist2, cowboyAlbum, "Bad Dog No Biscuits","https://www.youtube.com/embed/EuAzPR0ACVw", "3:34");
        Song darlingSong= new Song(artist3, darlingAlbum,"Kiss of Death", "https://www.youtube.com/embed/mzJqxT1UGho", "4:10");
        Song darlingSong2 = new Song(artist3, darlingAlbum, "Beautiful World", "https://www.youtube.com/embed/QTCgYNzM7k4","4:19");
        Song darlingSong3= new Song(artist3, darlingAlbum,"Manatsu no Setsuna", "https://www.youtube.com/embed/1wggz0-xOsw", "3:42");
        Song darlingSong4= new Song(artist3, darlingAlbum,"Torikago", "https://www.youtube.com/embed/VD_JhspDBIg", "3:39");
        Song deathnoteSong= new Song(artist4, deathnoteAlbum,"The WORLD", "https://www.youtube.com/embed/btD61Bq0XJo", "3:37");
        Song deathnoteSong2= new Song(artist4, deathnoteAlbum,"Incident(Jiken)", "https://www.youtube.com/embed/iYJbUSWRWeU", "3:11");
        Song deathnoteSong3= new Song(artist4, deathnoteAlbum,"Lights Theme", "https://www.youtube.com/embed/E3LeZNlI0Xg", "3:15");
        Song deathnoteSong4= new Song(artist4, deathnoteAlbum,"L's Theme A,B, & C", "https://www.youtube.com/embed/tfvX4Py15Es", "8:08");
        songStorage.save(narutoSong);
        songStorage.save(narutoSong2);
        songStorage.save(narutoSong3);
        songStorage.save(narutoSong4);
        songStorage.save(cowboySong);
        songStorage.save(cowboySong2);
        songStorage.save(cowboySong3);
        songStorage.save(cowboySong4);
        songStorage.save(darlingSong);
        songStorage.save(darlingSong2);
        songStorage.save(darlingSong3);
        songStorage.save(darlingSong4);
        songStorage.save(deathnoteSong);
        songStorage.save(deathnoteSong2);
        songStorage.save(deathnoteSong3);
        songStorage.save(deathnoteSong4);
    }

}
