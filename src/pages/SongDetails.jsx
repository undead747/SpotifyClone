import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const {activeSong, playPause } = useSelector((state) => state.player);
    const { isFetching: isFetchingSongDetails ,  data: songData } = useGetSongDetailsQuery(songid);
    console.log(songData);  

    return (
        <div>HAHAHAHAHAHAHAHAHA</div>
    )
};

export default SongDetails;