import Animelist from "../components/Animelist";
import Header from "@/components/Animelist/Header"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title = "Paling Populer" linkTitle = "Lihat semua" linkHref = "/populer"/>
        <Animelist api={topAnime}/>
      </section>

    </>
  )
}

export default Home