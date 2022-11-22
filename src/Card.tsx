
import { userData } from './interfaces'

export default function Card({info}: {info: userData}) {
  return (
    <div className="">
      <div>
        {info.content}
      </div>
      {`${info.time} ago`}
    </div>
  )
}