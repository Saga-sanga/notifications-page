
import { userData } from './interfaces'

export default function Card({info}: {info: userData}) {
  return (
    <div className={!info.read ? 'bg-very-light-grayish-blue rounded flex flex-row gap-3 p-4 items-start text-sm ' : 'rounded flex flex-row gap-3 p-4 items-start text-sm'}>
      <div className='shrink-0'>
        <img width="38" src={info.avatar} alt={`${info.name}'s avatar`} />
      </div>

      <div className='w-full'>
        <div className='flex gap-4 justify-between'>
          <div className='flex flex-col'>
            <div>
              <span className='text-very-dark-blue font-extrabold cursor-pointer hover:text-blue'>{info.name}</span>
              <span className='text-dark-grayish-blue'>{' '+info.content}</span> 
              {info.post ? <span className='text-very-dark-blue font-extrabold opacity-70 cursor-pointer hover:text-blue hover:opacity-100'>{' '+info.post}</span> : ''}
              {info.group ? <span className='text-blue font-extrabold cursor-pointer'>{' '+info.group}</span> : ''}
              {!info.read ? <span className='bg-red w-2 h-2 ml-1.5 mb-[1px] inline-block rounded'></span> : ''}
            </div>
            <span className='text-grayish-blue'>{`${info.time} ago`}</span> 
          </div>
          <div className='self-baseline border-2 border-transparent rounded-md hover:border-light-grayish-blue-1 cursor-pointer'>
            {info.picture ? <img  width="38" src={info.picture} alt="picture chess"/> : ''}
          </div>
        </div>
        
        {
          info.message ? 
          <div className='text-dark-grayish-blue rounded border-solid border-2 border-light-grayish-blue-2 p-3 mt-2 cursor-pointer hover:bg-light-grayish-blue-1 hover:border-light-grayish-blue-1'>{info.message}</div> 
          : ''
        }
      </div>
    </div>
  )
}