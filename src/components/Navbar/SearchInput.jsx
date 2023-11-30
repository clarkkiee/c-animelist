"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const SearchInput = () => {

    const searchInput = useRef() 
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchInput.current.value
        if(!keyword){
            return 
        } else {
            router.push(`/search/${keyword}`) 
        }
        
    }

    return (
        <div className="relative">
            <form>
                < input 
                    className="w-full p-2 rounded" 
                    placeholder="Cari anime..." ref={searchInput} 
                    onKeyDown = {e => e.key === 'Enter' ? handleSearch : ''}
                />
                <button className="absolute top-2 end-2" onClick={handleSearch} >
                        <MagnifyingGlass size={24} />
                </button>
            </form>
        </div>
    )
}

export default SearchInput