import Image from 'next/image';
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
    }  from '@heroicons/react/solid';
function Header() {
    const link = "https://links.papareact.com/qd3";
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left - logo*/}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image src={link} layout="fill" objectFit='contain' objectPosition='left'/>
      </div>

      {/* middle - search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type="text" placeholder='Start search here' className='pl-5 bg-transparent outline-none flex-grow text-sm text-grey-600 placeholder-grey-400' />
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
    </header>
  )
}

export default Header;
