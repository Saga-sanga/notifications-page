import { useState } from 'react'
import Card from './Card'

const data = [
  {
    avatar: './src/assets/images/avatar-mark-webber.webp',
    content: 'Mark Webber reacted to your recent post My first tournament today!',
    time: '1m'
  },
  {
    avatar: './src/assets/images/avatar-angela-gray.webp',
    content: 'Angela Gray followed you',
    time: '5m'
  },
  {
    avatar: './src/assets/images/avatar-jacob-thompson.webp',
    content: 'Jacob Thompson has joined your group Chess Club',
    time: '1 day'
  },
  {
    avatar: './src/assets/images/avatar-rizky-hasanuddin.webp',
    content: 'Rizky Hasanuddin sent you a private message',
    time: '5 days',
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
  },
  {
    avatar: './src/assets/images/avatar-kimberly-smith.webp',
    content: 'Kimberly Smith commented on your picture',
    time: '1 week'
  },
  {
    avatar: './src/assets/images/avatar-nathan-peterson.webp',
    content: 'Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate',
    time: '2 weeks'
  },
  {
    avatar: './src/assets/images/avatar-anna-kim.webp',
    content: 'Anna Kim left the group Chess Club',
    time: '2 weeks'
  }
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <main className='min-h-[97vh]'>
        <div className='flex flex-row'>
          <div>Notifications 3</div> 

          <div>Mark all as read</div>         
        </div>
        <section>
          <Card/>
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
