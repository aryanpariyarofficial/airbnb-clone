import Image from 'next/image';
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
    }  from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();
  const handleSelect = (ranges) =>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const resetSearchInput = () =>{
    setSearchInput("");
  }
  const search = () =>{
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      }
    })
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const link = "https://links.papareact.com/qd3";
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left - logo*/}
      <div 
      onClick={()=> router.push('/')}
      className='relative flex items-center h-10 cursor-pointer my-auto'>
      <Image src={link} layout="fill" objectFit='contain' objectPosition='left' alt='logo'/>
        
      </div>

      {/* middle - search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text" placeholder={ placeholder || 'Start search here'} className='pl-5 bg-transparent outline-none flex-grow text-sm text-grey-600 placeholder-grey-400' />
        <SearchIcon className='h-8 hidden md:inline-flex text-white bg-red-400  rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>
       
      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer
        '>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className='h-6 cursor-pointer' />
            <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
      <div className="flex flex-col mx-auto col-span-3">
        <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
      />
      <div className='flex items-center border-b mb-4 '>
        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
        <UsersIcon className='h-5' />
        <input 
        value={noOfGuest}
        onChange={(e) => setNoOfGuest(e.target.value)}
        type="number" 
        min={1}
        className='w-12 pl-2 text-lg outline-none text-red-400' />
      </div>
      <div className="flex">
        <button className='text-gray-500 flex-grow' onClick={resetSearchInput}>Cancel</button>
        <button 
        onClick={search}
        className='text-red-400 flex-grow'>Search</button>
        </div>
      </div>
      )}
    </header>
  )
}

export default Header;
