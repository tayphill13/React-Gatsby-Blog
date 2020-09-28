import React from "react"
import { Link } from "gatsby"


export default function NavBar() {
  return (
    <div style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}>

      {/* <span>You are not logged in</span> */}
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/blog">Blog</Link>
        {` `}
        <Link to="/signIn">Sign In</Link>
        {` `}
        <Link to="/about">About</Link>
        {` `}
        <Link to="/contactUs">Contact Us</Link>
        {` `}
      </nav>
    </div>
  )
}