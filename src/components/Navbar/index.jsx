import Link from "next/link"
import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="w-full flex md:flex-row flex-col justify-between gap-2 p-4 md:items-center">
                <Link className="text-2xl font-bold" href={'/'}>Animelist</Link>
                <SearchInput/>
            </div>
        </header>
    )
}

export default Navbar