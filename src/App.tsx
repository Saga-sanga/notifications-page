import { useState } from 'react'
import { userData } from './interfaces'
import Card from './Card'

const data: userData[] = [
  {
    name: 'Mark Webber',
    avatar: './src/assets/images/avatar-mark-webber.webp',
    content: 'reacted to your recent post',
    post: 'My first tournament today!',
    time: '1m',
    read: false
  },
  {
    name: 'Angela Gray',
    avatar: './src/assets/images/avatar-angela-gray.webp',
    content: 'followed you',
    time: '5m',
    read: false
  },
  {
    name: 'Jcob Thompson',
    avatar: './src/assets/images/avatar-jacob-thompson.webp',
    content: 'has joined your group Chess Club',
    time: '1 day',
    read: false
  },
  {
    name: 'Rizky Hasanuddin',
    avatar: './src/assets/images/avatar-rizky-hasanuddin.webp',
    content: 'sent you a private message',
    time: '5 days',
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true
  },
  {
    name: 'Kimberly Smith',
    avatar: './src/assets/images/avatar-kimberly-smith.webp',
    content: 'commented on your picture',
    picture: './src/assets/images/image-chess.webp',
    time: '1 week',
    read: true
  },
  {
    name: 'Nathan Peterson',
    avatar: './src/assets/images/avatar-nathan-peterson.webp',
    content: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    time: '2 weeks',
    read: true
  },
  {
    name: 'Anna Kim',
    avatar: './src/assets/images/avatar-anna-kim.webp',
    content: 'left the group Chess Club',
    time: '2 weeks',
    read: true
  }
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen grid place-content-center">
      <main className='min-h-[97vh] px-3 py-4 bg-white'>
        <div className='flex flex-row justify-between items-end'>
          <div className='flex gap-2'>
            <span className='text-very-dark-blue font-extrabold'>Notifications</span> 
            <span className='bg-blue text-white text-sm px-2.5 self-baseline rounded'>3</span>
          </div> 

          <div className='text-xs text-dark-grayish-blue'>Mark all as read</div>         
        </div>
        <section>
          {
            data.map((info: userData, index: number) => 
              <Card key={index} info={info}/>
            )
          }       
        </section>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  )
}

export default App
