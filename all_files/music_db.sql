CREATE TABLE songs (
	song_name varchar, 
	song_popularity INT, 
	song_duration_ms INT, 
	acousticness FLOAT, 
	danceability FLOAT,
	energy FLOAT, 
	instrumentalness FLOAT, 
	key INT, 
	liveness FLOAT, 
	loudness FLOAT, 
	audio_mode INT, 
	speechiness FLOAT, 
	tempo FLOAT, 
	time_signature INT, 
	audio_valence FLOAT

);

SELECT * FROM songs; 

CREATE TABLE artists (
	song_name VARCHAR, 
	artist_name VARCHAR, 
	album_names VARCHAR, 
	playlist VARCHAR


);

SELECT * FROM artists; 
