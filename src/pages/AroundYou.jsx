import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';

const CountryTracks = () => {
    const [country, setCountry]= useState();
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useSelector(state => state.player);
    const {data, isFetching, error} = useGetSongsByCountryQuery(country);


    useEffect(() => {
        axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_XMOLPNwCuxL3gOtU7sBibO8G4tBhr&ipAddress=8.8.8.8")
        .then((res) => {
            setCountry(res?.data?.location?.country);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    if(isFetching) return <Loader title="Loading songs around you" />

    if(error && country) return <Error title="Something went wrong" />

    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You</h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {
                data?.map((song, index) => (
                    <SongCard
                        key={index}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={index}
                    />
                )
            )}
        </div>
    </div>
    )
}

export default CountryTracks;
