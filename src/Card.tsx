
import { userData } from './interfaces'

export default function Card({info}: {info: userData}) {
  return (
    <div className={!info.read ? 'bg-very-light-grayish-blue rounded flex flex-row gap-3 p-4 items-start text-sm ' : 'rounded flex flex-row gap-3 p-4 items-start text-sm'}>
      <div className='shrink-0'>
        <img width="38" src={info.avatar} alt={`${info.name}'s avatar`} />
      </div>

      <div className='w-full'>
        <div className='flex gap-4 justify-between'>
          <div>
            <span className='text-very-dark-blue font-extrabold'>{info.name}</span>
            <span className='text-dark-grayish-blue'>{' '+info.content}</span> 
            {info.post ? <span className='text-very-dark-blue font-extrabold opacity-70'>{' '+info.post}</span> : ''}
            {info.group ? <span className='text-blue font-extrabold'>{' '+info.group}</span> : ''}
            {!info.read ? <span className='bg-red w-2 h-2 ml-1.5 mb-[1px] inline-block rounded'></span> : ''}
          </div>
          {info.picture ? <img width="38" src={info.picture} alt="picture chess"/> : ''}
        </div>
        <span className='text-grayish-blue'>{`${info.time} ago`}</span>
        {
          info.message ? 
          <div className='text-dark-grayish-blue rounded border-solid border-2 border-light-grayish-blue-2 p-3 mt-2'>{info.message}</div> 
          : ''
        }
      </div>
    </div>
  )
}