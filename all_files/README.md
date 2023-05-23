## Overview

Music is a large part of our culture and affects (and reflects) current cultural movements. Music has become an increasingly integral shared part of our global cultural experience. Spotify, one of the largest music platforms, has over 500 million users across the globe. Spotify is known for their strong ability to provide quality music suggestions based on users’ listening patterns. This is critical for customer satisfaction and retention as well as brand reputation for expansion. In this study we focused on developing music recommendations based on audio features through the use of machine learning.

## Data Processing and Modeling

The datasets were obtained through Kaggle. One csv file contained a list of 19,000 songs with information about audio features such as acousticness, danceability, duration time, energy, tempo, as well as a popularity score out of 100. Another csv included artist name, album title, and associated playlists for all songs recored in the first file. The two files were merged using Pandas. All duplicate song titles were dropped as well as the song durations and time signature columns as they were determined to be irrelevant. For ease of searching all string variables were converted to lower case.

After cleaning, understanding the dataset consisted of analysis of the popularity variable, as this is the basis for the song entry on the dataset. 
![Density Vs  Song Popularity](https://github.com/apanthari/project_4/assets/119544491/03989a74-403b-42aa-8024-c22fd416a640)

Then the correlation between feature variables were found using distribution maps and correlation matrices. 
![Correlation Heat Map](https://github.com/apanthari/project_4/assets/119544491/51a23c6b-2b98-4b6f-9abf-2e51d2fd2994)

Normalizing the data using the MinMaxScaler was chosen to fit the feature variables within bounded intervals reflecting the bulk of the data and avoiding the focus on outliers.

### K-Means and PCA

The K-means model revealed that the optimal number of clusters is 3.

![k](https://github.com/apanthari/project_4/assets/119544491/05988a1c-91d4-4ddf-b03e-dfa02364cae0)

After initializing the standardized data with clusters = 3, PCA was used to fit and transform the model with n_components = 2 resulting in the following scatterplot.

![download](https://github.com/apanthari/project_4/assets/119544491/58bee173-9aad-416b-ade2-f3cf9cbe08e9)

### K-Nearest Neighbors

The k-nearest neighbors deemed the most telling algorithm during analysis. The normalized data frame was indexed by song name multiplied by the Compressed Sparse Row (CSR) matrix. The CRS matrix is commonly utilized for recommender systems due its efficient ability for row-vector assessment, because each row in this data set is a song and each column represents a feature about that song, CRS matrices can help break down the dense normalized matrix. Nearest Neighbors model fitting was then applied with brute-force algorithm for fast computation and cosine similarity metrics to calculate the minimum distances to determine similar songs. 

![on_fire](https://github.com/apanthari/project_4/assets/119544491/e1d00d65-f8d8-403b-8b70-8b15ada162d1)
