import React from 'react';
import { freeBeatsData } from '../assets/beatsData/freeBeatsData'; // Update import path
import AlbumItem from '../components/AlbumItem/AlbumItem'; // Adjust this based on your actual structure
import SongItem from '../components/SongItem/SongItem'; // Import SongItem if you have it
import FilterSearch from '../components/FilterSearch/FilterSearch';
import { albumsData, songsData } from '../assets/assets'; // Import albums and songs data

const FreeBeats = () => {
    return (
        <>
            <FilterSearch />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Free Beats</h1>
                <p className='text-lg ml-2 mb-5'>Explore our collection of free beats available for your projects.</p>
            </div>
            
            {/* Featured Charts Section */}
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (
                        <AlbumItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            image={item.image} 
                            id={item.id} 
                        />
                    ))}
                </div>
            </div>

            {/* Today's Biggest Hits Section */}
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Today's Biggest Hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (
                        <SongItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            image={item.image} 
                            id={item.id} 
                        />
                    ))}
                </div>
            </div>

            {/* Podcasts Section */}
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Podcasts</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (
                        <SongItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            image={item.image} 
                            id={item.id} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FreeBeats;
