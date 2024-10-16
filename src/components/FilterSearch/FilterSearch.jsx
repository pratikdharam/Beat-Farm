import React from 'react';
import './FilterSearch.css'; // Import the custom CSS for scrollbar hiding

const FilterSearch = () => {

    return (
        <>
            <div className='flex justify-between items-center flex-wrap'>
                {/* Scrollable Filter Bar */}
                <div className='filter-bar flex items-center gap-4 mt-4 ml-4 overflow-x-auto whitespace-nowrap'>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>All</p>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>Genre</p>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>Mood</p>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>Instrument</p>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>Key</p>
                    <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold min-w-max'>BPM</p>
                </div>

                {/* Search Bar */}
                <div className='w-full md:w-96 mx-auto mt-4 md:mt-0 mr-1 md:mr-8 ml-1 '>
                    <div className="relative flex items-center border border-x-cream w-full h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="flex items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-2"
                            type="text"
                            id="search"
                            placeholder="Quick guide to search" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSearch;
