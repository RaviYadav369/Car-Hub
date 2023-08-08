'use client'
import React,{useState} from 'react'
import SearchMenufacture from './SearchMenufacture'

const SearchBar = () => {

    const [menufacturer, setmenufacturer] = useState('')

    const handleSearch=()=>{

    }
  return (
    <form className='searchbar' onSubmit={handleSearch()}>
        <div className='searchbar__item'>
            <SearchMenufacture menufacturer={menufacturer} setmenufacturer={setmenufacturer} />
        </div>
        <div className='searchbar__item'>
            <SearchMenufacture menufacturer={menufacturer} setmenufacturer={setmenufacturer} />
        </div>

    </form>
  )
}

export default SearchBar