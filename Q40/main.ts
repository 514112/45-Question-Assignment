/*function make_album(artist_name: string,album_title:string,tracks?: number){
    let album {artist: string , title: string, tracks?: number} ={
        artist: artist_name,
        title: album_title,
        tracks?: tracks?
    }
}*/


function make_album(artist_name: string, album_title: string , tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }
    if(tracks !== undefined){
        album.tracks =tracks
    }
    return album;
}

let album1 = make_album("Atif Aslam","Raaz");
let album2 = make_album("Asim Azhar","album title1");
let album3 = make_album("Rahat Fateh","album title 2")
console.log(album1);
console.log(album2);
console.log(album3);




