import Link from 'next/link'
import React from 'react'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { HiOutlineHashtag } from 'react-icons/hi'

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
function LeftSideBar() {
  return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4' >
          {
            NAVIGATION_ITEMS.map((item) => (
              <Link className='hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6' href={`/${item.title.toLocaleLowerCase()}`} key={item.title}>
                <div>
                  <item.icon />
                </div>
                <div>
                  {item.title !== 'Twitter' && <div>{item.title}</div>}
                </div>
              </Link>
            ))
          }
          <button className='rounded-full m-4 bg-primary px-6 py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
            Tweet
          </button>
          </div>
          <div>
          <button className='rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between'>
            <div className='flex items-center space-x-2'>
            <div className='rounded-full bg-slate-400 w-10 h-10'></div>
            <div className='text-left text-sm'>
              <div className='text-semibold' >Club Of Coders</div>
              <div className=''>@clubofcoders</div>
            </div>
            </div>
            
            <div>
              <BsThreeDots />
            </div>
          </button>
          </div>
        </section>
  )
}

export default LeftSideBar