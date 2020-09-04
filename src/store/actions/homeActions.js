import { FETCH_DATA } from './types';


const fetchData = () => dispatch => {
    console.log("HERE")
    dispatch(
        {
            type: FETCH_DATA,
            payload: "DATA"
        }
    )
    // var endpoint = //"http://localhost:5000/spotifyPlaylists"
    // "https://desolate-island-36268.herokuapp.com/spotifyPlaylists";

    // fetch(endpoint)
    // .then(res => res.json())
    // .then(res => {
    //     dispatch( {
    //         type: FETCH_PLAYLISTS,
    //         payload: res.body.items
    //     })
    // })
    // .catch(error => {
    //     console.log(error)
    // })
}

export default fetchData;