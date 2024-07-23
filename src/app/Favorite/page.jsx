'use client'
import SearchFilter from "../../../components/favorite/Search&Filter"
import Table from "../../../components/favorite/Table"
import Paths from "../../../components/Paths"
import { pathContext } from "../../../components/providers/GlobalProvider"
import colors from "../../../styles/colors"
import { useContext, useEffect ,useState} from "react"
import { useSession } from "next-auth/react"
export default function Favorite() {
  const { textEnter, textLeave, path, addPath, removePath } = useContext(pathContext)
  const [favs,setFavs] = useState([])
  const {data :session , status} = useSession()
  const handleFav = (data)=>{
    setFavs(data)
  }
  const GET = async ()=>{
    try {
      const res = await fetch("http://localhost:8000/products/getFavs/"+session?.user.email,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
      })
      if(res.ok){
        const data = await res.json()
        setFavs(data)
      }else{
        throw new Error(`${res.status} - ${res.statusText}`)
      }
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect(()=>{
        if (status === 'loading') return
        if (!session) router.push('/')
        if(session){
          GET()
        }
  },[session,status])
  useEffect(() => {
    console.log('Favorite component mounted')
    if (!path.includes('favorite')) {
      addPath('favorite')
      console.log('Added favorite to path')
    } else {
      console.log('Favorite already in path')
    }
    return () => {
      console.log('Favorite component unmounted')
    }
  }, [])

  return (
    <section className='FavoriteContainer mt-5'>
      <div className="flex justify-start">
        <h1 className='text-capitalize sm:text-4xl text-2xl font-bold' onMouseEnter={textEnter} onMouseLeave={textLeave}>
          my favorite products
        </h1>
      </div>
      <Paths />
      <SearchFilter />
      <div className="table_container">
        <Table favs={favs} handleFav={handleFav}/>
      </div>
    </section>
  )
}
