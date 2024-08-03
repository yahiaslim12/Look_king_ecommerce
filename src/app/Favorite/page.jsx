'use client'
import SearchFilter from "../../../components/favorite/Search&Filter"
import Table from "../../../components/favorite/Table"
import Paths from "../../../components/Paths"
import { pathContext } from "../../../components/providers/GlobalProvider"
import colors from "../../../styles/colors"
import { useContext, useEffect ,useState} from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { bouncy } from "ldrs"
bouncy.register()
export default function Favorite() {
  const { textEnter, textLeave, path, addPath, removePath } = useContext(pathContext)
  const {favs,handleFavs} = useContext(pathContext)
  const {data :session , status} = useSession()
  const router = useRouter()
  const [search,setSearch] = useState('')
  const [items,setItems] = useState([])
  const handleSearch = (value) => {
    setSearch(value)
    const fp = favs.filter((product)=>product.name.toLowerCase().includes(value.toLowerCase()))
    console.log(fp);
    setItems(fp)
  }
  const handleItems = (data) => {
    setItems(data)
  }
  const GET = async ()=>{
    try {
      const res = await fetch("http://localhost:8000/products/getFavs/"+session?.user.email,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
      })
      if(res.ok){
        const data = await res.json()
        if(data.length !== 0){
          handleFavs(data)
          setItems(data)
        } 

      }else{
        throw new Error(`${res.status} - ${res.statusText}`)
      }
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect(()=>{
        if (status === 'loading') return
        if (!session) router.push('/login')
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
  if(status === 'loading'){
    return <div className="flex justify-center items-center gap-2" style={{height : '600px'}}>
        <h1 className="mb-0">Loading<l-bouncy size="20" speed="1.75" color="black" ></l-bouncy></h1>
    </div>
  }
  if(!session){
    return <div className="flex justify-center items-center gap-2" style={{height : '600px'}}>
        <h1 className="mb-0">Loading<l-bouncy size="20" speed="1.75" color="black" ></l-bouncy></h1>
    </div>
  }
  return (
    <section className='FavoriteContainer mt-5'>
      <div className="flex justify-start">
        <h1 className='text-capitalize sm:text-4xl text-2xl font-bold' onMouseEnter={textEnter} onMouseLeave={textLeave}>
          my favorite products
        </h1>
      </div>
      <Paths />
      <SearchFilter search={search} handleSearch={handleSearch} count={items.length}/>
      <div className="table_container">
        <Table items = {items} handleItems = {handleItems}/>
      </div>
    </section>
  )
}
