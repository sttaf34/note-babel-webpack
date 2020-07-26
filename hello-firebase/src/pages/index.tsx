import React from "react"
import { NextPage } from "next"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <>
      <h1>Hello, Firebase!</h1>
      <Link href="/about">
        <a>about</a>
      </Link>
    </>
  )
}

export default Page
