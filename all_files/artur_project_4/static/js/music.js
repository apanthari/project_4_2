var checkName = d3.select("#query");
checkName.on("change", handleSearch);


function handleSearch(event) {

  event.preventDefault();
  var song_name = checkName.property("value"); 
  d3.json(`/predict/${song_name}`).then(data=>{
    //console.log(data.length);
    let bodyRightInnerHtml = "<h2>Your music recs are: </h2>";

    if (data.length == 1) {
      bodyRightInnerHtml += `<div class="box"> <p> <strong>${data}</strong> </p>
        </div>`;
    }
    
    //inputted_song = data[0];
    let bodyLeftInnerHtml = `<div id="topic-pic"> <img src="static/images/pic_1.jpg" width="259" height="199" alt="Pic 1" /> </div>
    <p><strong>${data[0][1]} by ${data[0][3]}</strong>`;

    // let song_name = data[0][1];
    // let artist_name = data[0][3]; 
    // const song_split = song_name.split(" ");
    // const artist_split = artist_name.split(" ");
    // const combined = song_split.concat(artist_split);

    // console.log(combined);
    // initialLink = "https://open.spotify.com/search/";
    // //search = ""; 
    // combined.forEach(element => {

    //   search += `${element}%20`; 
      
  
    // }); 

    // string = search.substr(23,search.length-3);
    //console.log(string);

    // finalLink = initialLink + string; 
    // console.log(finalLink);

    //console.log(`https://open.spotify.com/search/${data[0][1]}`); 
    
    //let%20it%20be%20beatles`)
    


    data.shift();


    const bodyRight = document.getElementById("body-right");
    const bodyLeft = document.getElementById("body-left"); 
    // let bodyRightInnerHtml = "<h2>Your music recs are: </h2>";
    
 
    data.forEach(element => {

        bodyRightInnerHtml += `<div class="box"> <img src="static/images/spotify.png" width="86" height="86" alt="Pic 1" class="left" />
        <p> <strong>${element[2]}</strong> <br><strong>${element[3]} ${element[4]}</strong> </p>
        <div class="btns"> <a href="http://www.spotify.com"><span>Listen</span></a> <a href="#"><span>Add</span></a> </div>
        <div class="clear"></div>
        </div>`;      


    
    });
   bodyRight.innerHTML = bodyRightInnerHtml
   bodyLeft.innerHTML = bodyLeftInnerHtml


    });

  }; 





  // bodyRightInnerHtml += `<div class="box"> <img src="static/images/spotify.png" width="86" height="86" alt="Pic 1" class="left" />
  // <p> <strong>${element[2]}</strong> <br><strong>${element[3]} ${element[4]}</strong> <br><a href="http://www.spotify.com">Spotify</a>.</p>
  // <div class="btns"> <a href="#"><span>Listen</span></a> <a href="#"><span>Add</span></a> </div>
  // <div class="clear"></div>
  // </div>`;


  

  //https://open.spotify.com/search/let%20it%20be%20beatles