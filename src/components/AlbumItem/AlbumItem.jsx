import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
    return (
        <Link to={`/album/${id}`} className='min-w-[180px] hover:bg-[#ffffff26] p-2 px-3 rounded cursor-pointer'>
            <img className='rounded' src={image} alt={name} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-600 text-sm'>{desc}</p>
        </Link>
    );
}

export default AlbumItem;
