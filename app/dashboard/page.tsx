import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='flex justify-between p-6 items-center'>
      Dashboard
      <UserButton />
    </div>
  )
}
