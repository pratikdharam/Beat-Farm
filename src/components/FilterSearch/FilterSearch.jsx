import React from 'react'
// import { useNavigate } from 'react-router-dom';


const FilterSearch = () => {

    // const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4 mt-4 ml-4'>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>All</p>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>Genre</p>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>Mood</p>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>Instrument</p>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>Key</p>
                <p className='bg-[#E8D6C0] text-[#4A3728] px-4 py-1 rounded-2xl font-bold'>BPM</p>
            </div>

            <div class='w-96 mx-auto mr-8 '>
                <div class="relative flex items-center border border-x-cream w-full h-14 rounded-lg focus-within:shadow-lg mt-3 bg-white overflow-hidden">
                    <div class="flex items-center h-full w-12 text-gray-300 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        class="peer h-full w-full  outline-none text-sm text-gray-700 pr-2 pl-2"
                        type="text"
                        id="search"
                        placeholder="Search Song..." />
                </div>
            </div>
            </div>
        </>
    )
}

export default FilterSearch