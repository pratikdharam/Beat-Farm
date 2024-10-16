import React from 'react';
import { premiumBeatsData } from '../assets/beatsData/premiumBeatsData'; // Update import path
import AlbumItem from '../components/AlbumItem/AlbumItem'; // Adjust this based on your actual structure
import FilterSearch from '../components/FilterSearch/FilterSearch';

const PremiumBeats = () => {
    return (
        <>
            <FilterSearch />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-3xl ml-2'>Premium Beats</h1>
                <p className='text-lg ml-2 mb-5'>Access our exclusive collection of premium beats for commercial use.</p>
                <div className='flex overflow-auto'>
                    {premiumBeatsData.map((item, index) => (
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

export default PremiumBeats;
