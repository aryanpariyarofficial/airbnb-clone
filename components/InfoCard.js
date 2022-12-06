import Image from 'next/image'
import { HeartIcon }  from '@heroicons/react/outline';
import { StarIcon }  from '@heroicons/react/solid';
function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg pr-4'>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-8">
        <Image src={img}  layout='fill' objectFit='cover' alt='info card' className='rounded-2xl' />
      </div>
      <div className='flex flex-col flex-grow pl-5'> 
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer hover:text-red-400 active:scale-95' />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className="border-b pt-2 w-10"></div>
        <p className="text-sm pt-2 text-gray-600">{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>
          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard;
