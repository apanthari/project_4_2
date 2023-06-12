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
    let bodyLeftInnerHtml = `<p>Music Reccomendations <br>${data[0]}</p>`; 

    


    


    data.shift();


    const bodyRight = document.getElementById("body-right");
    const bodyLeft = document.getElementById("body-left"); 
    // let bodyRightInnerHtml = "<h2>Your music recs are: </h2>";
    
 
    data.forEach(element => {

        bodyRightInnerHtml += `<div class="box"> <img src="static/images/spotify.png" width="86" height="86" alt="Pic 1" class="left" />
        <p> <strong>${element[2]}</strong> <br><strong>${element[3]} ${element[4]}</strong> <br><a href="http://www.spotify.com">Spotify</a>.</p>
        <div class="btns"> <a href="#"><span>Listen</span></a> <a href="#"><span>Add</span></a> </div>
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