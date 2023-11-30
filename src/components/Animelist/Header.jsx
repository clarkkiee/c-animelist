import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="text-2xl p-4 flex justify-between items-center">
            <h1 className="font-bold text-color-primary">{title}</h1>
            {
                linkTitle && linkHref ?
                <Link href={linkHref} className="md:text-xl text-sm underline hover:text-indigo-500 transition-all text-color-primary hover:text-color-accent">{linkTitle}</Link>
                :
                null
            }
      </div>
    )
}

export default Header