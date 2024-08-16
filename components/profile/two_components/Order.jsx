'use client'
import { Rating } from '@mui/material'
import { Cart,Delete ,List ,Remove,Search} from '../../../svg'
import { useEffect ,useState} from 'react'
import { useSession } from 'next-auth/react'
import Title from '../../title/Title'
import ITEMS from './ITEMS'

export default function Order({handleOpenDrawer}) {
  const {data: session,status} = useSession()
  const [loading,setLoading] = useState(true)
  const [orders,setOrders] = useState([])
  const [items,setItems] = useState([])
  const [search,setSearch] = useState('')
  const handleSearch = (value) => {
    setSearch(value)
    const fp = orders.filter((order) => (
        order.status.toLowerCase().includes(value.toLowerCase())
    ))
    setItems(fp)
  }
  const GET = async () => {
     try {
        const res = await fetch('http://localhost:8000/commande/get/'+session.user.email,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        if(!res.ok){
            const error = await res.json()
            throw new Error(res.status+' '+error.detail)
        }
        const data = await res.json()
    
        setOrders(data.map(item=>{
            return {
                ...item,
                show : false
            }
        }))
        setItems(data.map(item=>{
            return {
                ...item,
                show : false
            }
        }))
        
     } catch (error) {
        
     }finally{
        setLoading(false)
     }
  }
  const DELETE = async (id)=> {
    try {
        const res = await fetch('http://localhost:8000/commande/delete/'+session.user.email+'/'+id,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        if(!res.ok){
            const error = await res.json()
            throw new Error(res.status+' '+error.detail)
        }
        const data = await res.json()
        GET()
    }
        catch{
            
        }
  }
  const handleShow = (id, type) => {
    setOrders(prevOrders => 
        prevOrders.map(item => {
            return {
                ...item,
                show: false
            }
        })
    );
    setOrders(prevOrders => 
        prevOrders.map(item => 
            item.id_cmd === id 
                ? { ...item, show: type === 'open' } 
                : item
        )
    );
    setItems(prevOrders => 
        prevOrders.map(item => {
            return {
                ...item,
                show: false
            }
        }))
    setItems(prevOrders => 
        prevOrders.map(item => 
            item.id_cmd === id 
                ? { ...item, show: type === 'open' } 
                : item
        ))
};

  useEffect(()=>{
    GET()
  },[session,status])
  useEffect(()=>{
    GET()
  },[])
  
  return (
    <section className='pt-5 pl:2  md:pl-16 md:w-8/12 lg:w-9/12 justify-center flex flex-col md:justify-start w-full'>
         <div className="flex items-center justify-between">
            <h1 className="text-gray-800 text-3xl">Your Orders</h1>
            <button className="btn d-block d-md-none" onClick={handleOpenDrawer}><List width={20} height={20} color={'gray'}/></button>
        </div>
        <div className='flex items-center w-full gap-2 mt-3'>
            <div className="Search w-full md:w-6/12 lg:w-4/12  flex gap-2 px-3 py-1.5 border rounded items-center hover:outline hover:outline-one hover:outline-1">
                <Search width={20} height={20} color="#484848" />
                <input type="text" name="" id="" placeholder="Search..." className="outline-none bg-transparent w-100" value={search} onChange={(e)=>handleSearch(e.target.value)}/>
            </div>
            <span className='text-gray-700 font-semibold text-sm'>{items.length}</span>
        </div>
        <div className="order_container mt-3 block">
            <div className='myOrder'>
                <div className='thead flex items-center bg-gray_table px-6 py-3 rounded-top'>
                    <div className='th'>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>id</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>ITEMS</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>price</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Date</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>localisation</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>status</p>
                    </div>
                    <div className='th flex  items-center text-uppercase'>
                        <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>delete</p>
                    </div>
                
                </div>
                <div className='tbody'>
                    {
                       
                       items.length >= 1 && items.map((item,i) => (
                        <div className='tr flex px-6 py-2' key={i}>
                        <div className='td flex items-center p-0'>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#{item.id_cmd}</p>
                        </div>
                       
                        <div className='td flex  items-center relative' onMouseEnter={()=>handleShow(item.id_cmd,'open')} onMouseLeave={()=>handleShow(item.id_cmd,'close')}>
                            {item.show && <ITEMS item = {item}/> }
                            <h6 className='mb-0 text-sm text-gray-700 font-medium'>{item.count}</h6>
                        </div>
                        
                        <div className='td flex  items-center text-uppercase'>
                            <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>{item.price} DA</p>
                        </div>
                        <div className='td flex flex-col justify-center text-capitalize'>
                                <p className='mb-0 text-sm text-gray-800'>{item.date}</p>
                                <p className='mb-0 text-sm text-gray-500'>16:19</p>
                        </div>
                        
                        <div className='td flex  items-center text-capitalize'>
                                <div>
                                    <h6 className='mb-0 text-sm text-gray-700 font-semibold capitalize'>{item.wilaya},{item.municipal}</h6>
                                    <p className='text-xs text-gray_text_table'>{item.typee}</p>
                                </div>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            <div className={`d-flex gap-1 ${item.status === 'pending' ? 'text-red-500' : item.status === 'confirmed' ? 'text-blue-500' : item.status === 'shipping' ? 'text-blue-500' : item.status === 'in livraison' ? 'text-green-500' : 'text-green-700'} items-center text-sm`}>
                                <div className={`w-2 h-2 rounded-full ${item.status === 'pending' ? 'bg-red-500' : item.status === 'confirmed' ? 'bg-blue-500' : item.status === 'shipping' ? 'bg-blue-500' : item.status === 'in livraison' ? 'bg-green-500' : 'bg-green-700'} `}></div>
                                <p className='mb-0' style={{fontWeight : '500 !important'}}>{item.status}</p>
                            </div>
                        </div>
                        <div className='td flex  items-center text-capitalize'>
                            {item.status === 'pending' && (
                                <Title text={'remove from orders'}>
                                    <button onClick={()=>DELETE(item.id_cmd)} className='btn flex justify-center items-center'><Remove width={20} height={20}/></button>
                                </Title>
                            )}
                        </div>
                        
                    </div>
                       ))
                    }
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}
