import React from 'react';
import { freeBeatsData } from '../assets/beatsData/freeBeatsData'; // Update import path
import AlbumItem from '../components/AlbumItem/AlbumItem'; // Adjust this based on your actual structure
import FilterSearch from '../components/FilterSearch/FilterSearch';

const FreeBeats = () => {
    return (
        <>
            <FilterSearch />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Free Beats</h1>
                <p className='text-lg ml-2 mb-5'>Explore our collection of free beats available for your projects.</p>
                <div className='flex overflow-auto'>
                    {freeBeatsData.map((item, index) => (
                        <AlbumItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            image={item.image} 
                            duration={item.duration} // Pass duration prop if needed
                            id={item.id} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FreeBeats;
