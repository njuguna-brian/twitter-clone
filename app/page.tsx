import Link from 'next/link'
import React from 'react'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { HiOutlineHashtag } from 'react-icons/hi'
import LeftSideBar from './components/LeftSideBar'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notification',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmark',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }

]

function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left side bar */}
        <LeftSideBar />
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  )
}

export default Home