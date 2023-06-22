import pickle
import pandas as pd

def model_prediction(songsearch):

    song_features=pd.read_csv("song_features.csv")
    song_genre = pd.read_csv("song_genre.csv")

    temp_features = song_features.copy()
    temp_genre = song_genre.copy()

    songsearch = songsearch.lower()

    song_index = temp_features.index[temp_features['song_name'] == songsearch] #returns the index value of the song name in the dataframe 
    


    #this just checks if there are any songs with the songsearch value as the title

    if len(song_index)>0:
        song_index = song_index.tolist()[0] #gets the first song (in case there are multiple of the same name/artist still)
    else:
        return None
    
    loaded_model = pickle.load(open('knnpickle_file', 'rb')) #what does this mean exactly? 
    
    distances,indices = loaded_model.kneighbors(X = song_features.iloc[song_index, 1:].values.reshape(1,-1), n_neighbors=6)

    rec_list = []

    for i in range(0, len(distances.flatten())):
        ret = ""
        if i == 0:
            ret = "Recommendation for", temp_features.iloc[song_index, 0].title(), "by", temp_genre.iloc[song_index, 1].title(), "are: "
            rec_list.append(ret)
        else:
            ret = i,": ",temp_genre.iloc[indices.flatten()[i], 0].title(), "by", temp_genre.iloc[indices.flatten()[i], 1].title(), "|  distance= ",distances.flatten()[i]
            rec_list.append(ret)



    print((ret))
    return rec_list #returns a list of tuples (not strings)

