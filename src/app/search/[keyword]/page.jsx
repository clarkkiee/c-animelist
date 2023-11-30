import Link from "next/link";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({params}) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const topAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`Hasil pencarian untuk "${decodedKeyword}" `}/>
                <Animelist api={topAnime}/>
            </section>
        </>
    )
}

export default Page