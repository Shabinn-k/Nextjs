import Link from 'next/link'
import React from 'react'

export default function page   ()   {
  return (
    <div>
      <Link href="reviews">review page</Link><br/>
      <Link href="fetch">Fetch page</Link><br/>
      <Link href="counter">Counter page</Link>
    </div>
  )
} 