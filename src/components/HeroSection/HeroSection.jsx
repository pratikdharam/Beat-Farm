import React from 'react'
import { albumsData, songsData } from '../../assets/assets'
import AlbumItem from '../AlbumItem/AlbumItem'
import SongItem from '../SongItem/SongItem'
import FilterSearch from '../FilterSearch/FilterSearch'


const DisplayHome = () => {

    return (
        <>
         <FilterSearch/>
            <div className='mb-4' >
                <h1 className='my-5 font-bold text-2xl ml-2'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl ml-2'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl ml-2'>Podacasts</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome