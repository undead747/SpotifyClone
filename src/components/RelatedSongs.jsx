import {SongBar} from '../components';

const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => {

  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-white text-3xl'>Related Songs: </h1>

      <div className='mt-6 w-full flex flex-col'>
        {
          data?.map((song, index) => <SongBar 
            key={`${song.key} - {artistId}`}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, index)}
            i={index}
            artistId={artistId}
            song={song}
            />)
        }
      </div>
    </div>
  )
}
export default RelatedSongs;
