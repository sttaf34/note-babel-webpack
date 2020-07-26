import React from "react"
import { NextPage } from "next"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <>
      <h1>About</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export default Page
