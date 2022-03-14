import React from 'react'
import Songs_list from './Songs_list'
import './Components_CSS/Navigation_content.css'

function Navigation_content() {
  return (
    <div className='container_navigate'>
    <div className='heading_navigate'>This Week: Most Trending</div>
    <Songs_list/>
    <Songs_list/>
    </div>
  )
}

export default Navigation_content