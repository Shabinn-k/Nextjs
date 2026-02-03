import React from 'react'
import Link from 'next/link'

function Review() {
  return (
    <div>
      <Link href="/reviews/1">review 1</Link><br/>
      <Link href="/reviews/2">review 2</Link>
    </div>
  )
}

export default Review