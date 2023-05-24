var checkName = d3.select("#query");
checkName.on("change", handleSearch);


// Load the CSV file
// fetch('song_data.csv')
// .then(response => response.text())
// .then(csvData => {
//   // Parse the CSV data using Papa Parse
//   const parsedData = Papa.parse(csvData, { header: true }).data;

//   // Use the parsed data as needed
//   console.log(parsedData);
//   // You can access the CSV rows as an array of objects

//   // For example, to access the "title" column of the first row:
//   console.log(parsedData[0].title);

//   // You can also iterate over the parsed data
//   parsedData.forEach(row => {
//     // Access row data
//     console.log(row.title);
//     console.log(row.artist);
//     // ...
//   });
// })
// .catch(error => {
//   console.error('Error loading or parsing CSV file:', error);
// })

function handleSearch(event) {
  // Get the search query from the input field
  //  const query = searchInput.value.trim().toLowerCase();
  event.preventDefault();
  var song_name = checkName.property("value"); 
  d3.json(`/predict/${song_name}`).then(data=>{
    console.log(data);
    data.shift();
    const bodyRight = document.getElementById("body-right");
    let bodyRightInnerHtml = "<h2>Your music recs are: </h2>";
    data.forEach(element => {

    bodyRightInnerHtml += `<div class="box"> <img src="static/images/spotify.png" width="86" height="86" alt="Pic 1" class="left" />
    <p>Song Rec: <strong>${element[2]}</strong> <br>${element[3]} ${element[4]} <br><a href="http://www.spotify.com">Spotify</a>.</p>
    <div class="btns"> <a href="#"><span>Listen</span></a> <a href="#"><span>Add</span></a> </div>
   <div class="clear"></div>
   </div>`
    });
   bodyRight.innerHTML = bodyRightInnerHtml
    });
  }; 




// 
// handleSearch('trouble every day'); 

 

//   // Iterate over the parsed CSV data and compare the search query
//   for (let i = 0; i < csvData.length; i++) {
//     const rowData = csvData[i];

//     // Perform search on desired fields or columns in the CSV
//     // Here, assume the CSV has a "title" column
//     if (rowData.title.toLowerCase().includes(query)) {
//       // Create a new table row for each matching result
//       const newRow = resultsTable.insertRow();

//       // Create table cells for each column in the CSV
//       const titleCell = newRow.insertCell();
//       titleCell.textContent = rowData.title;

//       // Repeat the above steps for other columns in the CSV
//       // ...

//       // Add more cells as needed based on your CSV structure
//     }
//   }
// };

// // // Fetch the CSV file
// // fetch('song_data.csv')
// //   .then(response => response.text())
// //   .then(csvData => {
// //     // Convert CSV to JSON
// //     const jsonData = csvToJSON(csvData);
    
// //     // Extract only the "song_name" column from the JSON data
// //     const songNames = jsonData.map(row => row.song_name);
    
// //     // Display the song names
// //     displaySearchResults(songNames);
    
// //     // Handle search input changes
// //     const searchInput = document.getElementById('searchInput');

// //     searchInput.addEventListener('input', function () {
// //       const searchTerm = this.value.toLowerCase();
// //       const filteredData = songNames.filter(name =>
// //         name.toLowerCase().includes(searchTerm)
// //       );

// //       displaySearchResults(filteredData);
// //     });
// //   });


// // // Fetch the CSV file
// // fetch('song_data.csv')
// //   .then(response => response.text())
// //   .then(csvData => {
// //     // Convert CSV to JSON
// //     const jsonData = csvToJSON(csvData);
    
// //     // Sort the JSON data based on song popularity (assuming it is a numeric column)
// //     jsonData.sort((a, b) => b.song_popularity - a.song_popularity);
    
// //     // Display the top 10 songs
// //     displayTop10Results(jsonData);
    
// //     // Handle search input changes
// //     const searchInput = document.getElementById('searchInput');

// //     searchInput.addEventListener('input', function () {
// //       const searchTerm = this.value.toLowerCase();
// //       const filteredData = jsonData.filter(row =>
// //         Object.values(row).some(value =>
// //           value.toLowerCase().includes(searchTerm)
// //         )
// //       );

// //       displaySearchResults(filteredData);
// //     });
// //   });

// // // Fetch the CSV file
// // fetch('song_data.csv')
// //   .then(response => response.text())
// //   .then(csvData => {
// //     // Convert CSV to JSON
// //     const jsonData = csvToJSON(csvData);
    
// //     // Handle search input changes
// //     const searchInput = document.getElementById('searchInput');
// //     const resultsTable = document.getElementById('resultsTable');

// //     searchInput.addEventListener('input', function () {
// //       const searchTerm = this.value.toLowerCase();
// //       const filteredData = jsonData.filter(row =>
// //         Object.values(row).some(value =>
// //           value.toLowerCase().includes(searchTerm)
// //         )
// //       );

// //       displaySearchResults(filteredData);
// //     });
// //   });

// // // Convert CSV to JSON
// // function csvToJSON(csvData) {
// //   const lines = csvData.split('\n');
// //   const headers = lines[0].split(',');
// //   const jsonData = [];

// //   for (let i = 1; i < lines.length; i++) {
// //     const currentLine = lines[i].split(',');
// //     if (currentLine.length !== headers.length) continue;

// //     const row = {};
// //     for (let j = 0; j < headers.length; j++) {
// //       row[headers[j]] = currentLine[j];
// //     }

// //     jsonData.push(row);
// //   }

// //   return jsonData;
// // }

// // // Display search results in a table
// // function displaySearchResults(results) {
// //   const resultsTable = document.getElementById('resultsTable');

// //   // Clear previous search results
// //   resultsTable.innerHTML = '';

// //   // Create table headers
// //   const headerRow = document.createElement('tr');
// //   for (let key in results[0]) {
// //     const headerCell = document.createElement('th');
// //     headerCell.textContent = key;
// //     headerRow.appendChild(headerCell);
// //   }
// //   resultsTable.appendChild(headerRow);

// //   // Create table rows for search results
// //   results.forEach(result => {
// //     const row = document.createElement('tr');
// //     for (let key in result) {
// //       const cell = document.createElement('td');
// //       cell.textContent = result[key];
// //       row.appendChild(cell);
// //     }
// //     resultsTable.appendChild(row);
// //   });

