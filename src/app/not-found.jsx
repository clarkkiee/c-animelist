"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from 'next/link'

const Page = () => {
    return (
        <div className="flex justify-center items-center mx-auto min-h-screen max-w-l">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={44} className="text-color-accent "/>
                <h3 className="text-color-accent font-bold text-4xl">NOT FOUND</h3>
                <Link href={'/'} className="text-color-primary hover:text-color-accent underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page