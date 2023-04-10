import React from 'react'
import '../scss/SideBar.css'
import StoreList from './StoreList'
import SearchBar from './SearchBar'

function SideBar() {
    return(
        <div className='SideBar'>
            <SearchBar />
            <StoreList />
        </div>
    )
}

export default SideBar