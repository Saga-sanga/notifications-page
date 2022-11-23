
import { userData } from './interfaces'

export default function Card({info}: {info: userData}) {
  return (
    <div className="rounded flex flex-row gap-3 p-4 items-start">
      <div>
        <img width="32" src={info.avatar} alt={`${info.name}'s avatar`} />
      </div>

      <div>
        <div>
          <span className='text-very-dark-blue font-extrabold'>{info.name}</span>
          <span className='text-dark-grayish-blue'>{' '+info.content}</span> 
          {
            info.post ? <span className='text-very-dark-blue font-extrabold opacity-70'>{' '+info.post}</span> : ''
          }
        </div>
        <span className='text-grayish-blue'>{`${info.time} ago`}</span>
        
      </div>
    </div>
  )
}