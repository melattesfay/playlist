/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sun-flower","Let Me","Treat You Better","Sicko Mode","Ocean Eyes"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images =["https://db2316p26jqyw.cloudfront.net/wp-content/uploads/2018/10/sunflower.jpg?x99374",
"https://themusicalhype.com/wp-content/uploads/2018/04/zayn-let-me-rca-832x700.jpg",
"https://twibbon.blob.core.windows.net/twibbon/2016/208/2c195456-6860-4a82-8aac-6118eb84169c.png",
"https://images-na.ssl-images-amazon.com/images/I/51fSP6MNz3L._SS500.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Owl-city-ocean-eyes-2009.jpg/220px-Owl-city-ocean-eyes-2009.jpg"
];

var artists =["post malone ft swae lee","Zayn","Shawn Mendes","Travis Scott ft Drake","Bille Ellish"];

var song_lengths= ["2:42","4:10","4:17","5:23","3:21"];

var links= ["https://www.youtube.com/watch?v=ApXoWvfEYVU","https://www.youtube.com/watch?v=J-dv_DcDD_A","https://www.youtube.com/watch?v=lY2yjAdbvdQ",
"https://www.youtube.com/watch?v=6ONRf7h3Mdk","https://www.youtube.com/watch?v=viimfQi_pUw"];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

songs.forEach(function(element){
    $("#songs").append("<p>" + element + "</p>");
});
links.forEach(function(element){
    var mywidth = 200
    $("#links").append("<iframe width='203' height='123' src='" + element + "'></iframe>");
   
});
    
artists.forEach(function(element){
    $("#artists").append("<p>" + element + "</p>");
});
    
images.forEach(function(element){
    $("#images").append("<img src=" + element + ">");
})

song_lengths.forEach(function(element){
    $("#lengths").append("<p>" + element + "</p>");
});



function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lenghths").empty();
    $("#links").empty();
    


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    


}

$("#add").click(function() {
    var song = $("#song").val();
   
   console.log(song);
    
    songs.push(song)
    $("#songs").text("");

 
 songs.forEach(function(songItem){
    $("#songs").append("<p>" + songItem + "</p>");
    });
    
     
     var image = $("#image").val();
   
   console.log(image);
    
    images.push(image)
    $("#images").text("");

 
 images.forEach(function(imageItem){
    $("#images").append("<img src=" + imageItem + ">");
    });



var artist = $("#artist").val();
   
   console.log(artist);
    
    artists.push(artist)
    $("#artists").text("");

 
 artists.forEach(function(artistItem){
    $("#artists").append("<p>" + artistItem + "</p>");
    });
    
    
    var link = $("#link").val();
   
   console.log(link);
    
    links.push(link)
    $("#links").text("");

 
 links.forEach(function(linksItem){
    $("#links").append("<a href=" + linksItem + "> youtube </a>");
    });
    
});



