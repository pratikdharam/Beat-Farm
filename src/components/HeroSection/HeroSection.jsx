import React, { useState } from 'react';
import { albumsData, songsData } from '../../assets/assets';
import AlbumItem from '../AlbumItem/AlbumItem';
import SongItem from '../SongItem/SongItem';
import FilterSearch from '../FilterSearch/FilterSearch';

const DisplayHome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter albums based on search term
    const filteredAlbums = albumsData.filter(album =>
        album.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter songs based on search term
    const filteredSongs = songsData.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <FilterSearch setSearchTerm={setSearchTerm} />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl ml-2'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {filteredAlbums.length > 0 ? (
                        filteredAlbums.map((item, index) => (
                            <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
                        ))
                    ) : (
                        <p>No albums found.</p>
                    )}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl ml-2'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {filteredSongs.length > 0 ? (
                        filteredSongs.map((item, index) => (
                            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                        ))
                    ) : (
                        <p>No songs found.</p>
                    )}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl ml-2'>Podcasts</h1>
                <div className='flex overflow-auto'>
                    {filteredSongs.length > 0 ? (
                        filteredSongs.map((item, index) => (
                            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                        ))
                    ) : (
                        <p>No podcasts found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
