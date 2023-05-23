import pickle
import pandas as pd

def model_prediction(songsearch):
    song_features=pd.read_csv("song_features.csv")
    # print(song_features.columns)
    # song_features.set_index("song_name", inplace=True)
    # print(song_features.head())
    temp = song_features.copy()
    # temp.reset_index(inplace=True)
    # songsearch = 'Sex on Fire'
    songsearch = songsearch.lower()
    song_index = temp.index[temp['song_name'] ==songsearch]
    print(len(song_index))
    if len(song_index)>0:
        song_index = song_index.tolist()[0]
    else:
        return None
    print(song_index)
    # print(song_features.iloc[song_index,1:].values.reshape(1,-1))

    #print(song_features.index[song_index])

    loaded_model = pickle.load(open('knnpickle_file', 'rb'))
    
    distances,indices = loaded_model.kneighbors(X = song_features.iloc[song_index,1:].values.reshape(1,-1), n_neighbors=6)
    print("indices", indices)
    rec_list = []
    for i in range(0, len(distances.flatten())):
        ret = ""
        if i == 0:
            # ret = song_features.index[song_index]
            #ret = "Recommendation for ",song_features.index[song_index],"are: "
            ret = "Recommendation for ",song_features.iloc[song_index,0],"are: "
            rec_list.append(ret)
        else:
            # ret = song_features.index[indices.flatten()[i]]
           # ret = i,": ",song_features.index[indices.flatten()[i]], "| distance= ",distances.flatten()[i]
            ret = i,": ",song_features.iloc[indices.flatten()[i],0], "| distance= ",distances.flatten()[i]
            rec_list.append(ret)


    print((ret))
    return rec_list #returns a list of tuples (not strings)