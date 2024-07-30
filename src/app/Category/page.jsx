"use client"
import { useContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/global.css'
import colors from "../../../styles/colors";
import {Box,Drawer,Pagination,Rating,Slider} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FirstCard from "../../../components/cards/FirstCard";
import SecondCard from "../../../components/cards/SecondCard";
import ThirdCard from "../../../components/cards/ThirdCard";
import '../../..//styles/cards.css'
import CategoryCard from "../../../components/cards/CategoryCard";
import { Close } from "../../../svg";
import Page from "../../../components/category/CustomPagination";
import { pathContext } from "../../../components/providers/GlobalProvider";

export default function Category() {
    const [products,setProducts] = useState([])
    const [name,setName] = useState('')
    const [list,setList] = useState([
        {id: 1,name :"shoes"},
        {id: 2,name :"clothes"},
        {id: 3,name :"electronics"},
        {id: 4,name :"women"},
    ])
    const [title,setTitle] = useState('Category Page')
    const [value, setValue] = useState([1000, 20000]);
    const [openDrawer,setOpenDrawer] = useState(false)
    const [radios,setRadios] = useState({
        one : false,
        two : false,
        three : false,
        four :false,
        five : false,
        six : false,
    })
    const [checkboxs,setCheckboxs] = useState({
        one : false,
        two : false,
        three : false,
        four : false,
        five : false,
    })
    const [sizes,setSizes] = useState({
        one : null,
        two : null,
        three : null,
        four : null,
        five : null,
        six : null
    })
    const [ratings,setRatings] = useState({
        one : null,
        two : null,
        three : null,
        four : null,
        five : null
    })
  const handleSizes = (type) => {
    if(type === 'one'){
        console.log(type);
        setSizes({
            one : 'xs',
            two : null,
            three : null,
            four : null,
            five : null,
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one : true,
            two :  false,
            three: false,
            four : false,
            five : false,
            six :  false
        }))
    }else if(type === 'two'){
        console.log(type);
        setSizes({
            one : null,
            two : 's',
            three : null,
            four : null,
            five : null,
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one : false,
            two :  true,
            three: false,
            four : false,
            five : false,
            six :  false
        }))
    }else if(type === 'three'){
        console.log(type);
        setSizes({
            one : null,
            two : null,
            three : 'm',
            four : null,
            five : null,
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one : false,
            two :  false,
            three: true,
            four : false,
            five : false,
            six :  false
        }))
    }else if(type === 'four'){
        console.log(type);
        setSizes({
            one : null,
            two : null,
            three : null,
            four : 'l',
            five : null,
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one :  false,
            two :  false,
            three: false,
            four : true,
            five : false,
            six :  false
        }))
    }else if(type === 'five'){
        console.log(type);
        setSizes({
            one : null,
            two : null,
            three : null,
            four : null,
            five : 'xl',
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one :  false,
            two :  false,
            three: false,
            four : false,
            five : true,
            six :  false
        }))
    }else if(type === 'six'){
        console.log(type);
        setSizes({
            one : null,
            two : null,
            three : null,
            four : null,
            five : null,
            six : 'xxl'
        })
        setRadios(prev =>({
            ...prev,
            one :  false,
            two :  false,
            three: false,
            four : false,
            five : false,
            six :  true,
        }))
    }else{
        setSizes({
            one : null,
            two : null,
            three: null,
            four :null,
            five :null,
            six : null
        })
        setRadios(prev =>({
            ...prev,
            one :  false,
            two :  false,
            three: false,
            four : false,
            five : false,
            six :  false
        }))
    }
  }
  const handleRatings = (type) => {
    if(type === 'one'){
        console.log(type);
        setRatings({
            one : 1,
            two : null,
            three : null,
            four : null,
            five : null
        })
        setCheckboxs({
            one :  true,
            two :  false,
            three: false,
            four : false,
            five : false,
        })
    }else if(type === 'two'){
        console.log(type);
        setRatings({
            one : null,
            two : 2,
            three : null,
            four : null,
            five : null
        })
        setCheckboxs({
            one :  false,
            two :  true,
            three: false,
            four : false,
            five : false,
        })
    }else if(type === 'three'){
        console.log(type);
        setRatings({
            one : null,
            two : null,
            three : 3,
            four : null,
            five : null
        })
        setCheckboxs({
            one :  false,
            two :  false,
            three: true,
            four : false,
            five : false,
        })
    }else if(type === 'four'){
        console.log(type);
        setRatings({
            one : null,
            two : null,
            three : null,
            four : 4,
            five : null
        })
        setCheckboxs({
            one :  false,
            two :  false,
            three: false,
            four : true,
            five : false,
        })
    }else if(type === 'five'){
        console.log(type);
        setRatings({
            one : null,
            two : null,
            three : null,
            four : null,
            five : 5
        })
        setCheckboxs({
            one :  false,
            two :  false,
            three: false,
            four : false,
            five : true,
        })
    }else {
        setRatings({
            one : null,
            two : null,
            three: null,
            four :null,
            five :null,})
            setCheckboxs({
                one :  false,
                two :  false,
                three: false,
                four : false,
                five : false,
            })
    }
   
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleCategory(title)
  };
  const handleCategory = async(category) => {
    setTitle(category)

    try {
        const res = await fetch('http://localhost:8000/category/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {   category,
                    size : sizes.one ? sizes.one : sizes.two ? sizes.two : sizes.three ? sizes.three : sizes.four ? sizes.four : sizes.five ? sizes.five : sizes.six ? sizes.six : null,
                    rating : ratings.one ? ratings.one : ratings.two ? ratings.two : ratings.three ? ratings.three : ratings.four ? ratings.four : ratings.five ? ratings.five : null,
                    name : name,
                    price1 : value[0],
                    price2 : value[1],
                }),
        })
        if(!res.ok){
            const error = await res.json()
            console.log(error);
            throw new Error(error.detail)
        }
        const data = await res.json()
        setProducts(data)

    } catch (error) {
        console.log(error);
    } 
  }
  const {textEnter,textLeave} = useContext(pathContext)
  return (
    <section className="categoryPage d-flex w-100 mt-3">
        <section className="categoryList d-none d-lg-block">
           <div className="one ps-3 mt-2">
           <h1>Category</h1>
            <ul className="pb-3">
                {
                list.map((item)=>(
                   <li onClick={()=>handleCategory(item.name)} className="py-2 px-2 rounded mt-1 text-capitalize d-flex align-items-center justify-content-between" key={item.id}><span>{item.name}</span><ArrowForwardIosIcon style={{fontSize : "14px"}}/></li>
                ))
                }
            </ul>
           </div>
           <div className="two mt-2 ps-3 w-100">
            <h1>Price Filter</h1>
           <Box sx={{ width: 200 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    style={{color:colors.one}}
                    min = {100}
                    max={20000}
                />
            </Box>
           <p>{value[0]}DA - {value[1]}DA</p>
           </div>
           <div className="three mt-2 ps-3 pb-3">
              <h1>Search</h1>
              <div className="d-flex gap-2 ">
                <input className="search rounded px-2" type="search" placeholder="Search for products" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button className="btn border d-flex gap-1 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search
                </button>
               
              </div>
           </div>
           <div className="four mt-2 ps-3 pb-3">
              <h1>Choose Size</h1>
              <form action="">
                <div className="d-flex align-items-center gap-1 ps-3 mb-2">
                    <div className="radio d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.one ? handleSizes('one') : handleSizes('')}>
                        <label htmlFor="">XS :</label>
                        <input type="radio" name="" id="" checked = {radios.one}/>
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.two ? handleSizes('two') : handleSizes('')}>
                        <label htmlFor="">S :</label>
                        <input type="radio" name="" id="" checked = {radios.two}/>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-1 ps-3 mb-2">
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.three ? handleSizes('three') : handleSizes('')}>
                        <label htmlFor="">M :</label>
                        <input type="radio" name="" id=""  checked = {radios.three}/>
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.four ? handleSizes('four') : handleSizes('')}>
                        <label htmlFor="">L :</label>
                        <input type="radio" name="" id="" checked = {radios.four} />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-1 ps-3">
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.five ? handleSizes('five') : handleSizes('')}>
                        <label htmlFor="">XL :</label>
                        <input type="radio" name="" id="" checked = {radios.five}/>
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2" onClick={()=>!radios.six ? handleSizes('six') : handleSizes('')}>
                        <label htmlFor="">XXL :</label>
                        <input type="radio" name="" id="" checked = {radios.six} />
                    </div>
                </div>
                
              </form>
           </div>
           <div className="five mt-2 ps-3">
               <h1>Rating</h1>
               <div className="rating d-flex py-2 px-2 gap-3 rounded mb-2" onClick={()=> !checkboxs.five ? handleRatings('five') : handleRatings('')}>
                   <input type="checkbox" name="" id="" checked = {checkboxs.five}/>
                   <Rating value={5} readOnly />
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded" onClick={()=>!checkboxs.four ? handleRatings('four') : handleRatings('')}>
                   <input type="checkbox" name="" id="" checked = {checkboxs.four}/>
                   <Rating value={4} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded" onClick={()=>!checkboxs.three ? handleRatings('three') : handleRatings('')}>
                   <input type="checkbox" name="" id="" checked = {checkboxs.three}/>
                   <Rating value={3} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded" onClick={()=>!checkboxs.two ? handleRatings('two') : handleRatings('')}>
                   <input type="checkbox" name="" id="" checked = {checkboxs.two}/>
                   <Rating value={2} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 rounded mb-2" onClick={()=>!checkboxs.one ? handleRatings('one') : handleRatings('')}>
                   <input type="checkbox" name="" id="" checked = {checkboxs.one}/>
                   <Rating value={1} readOnly/>
               </div>
           </div>
           
        </section>
        <section className="categoryContent w-100 ms-0 ms-md-3">
                <div className="titleContainer z-2 d-flex justify-content-center align-items-center mx-2">
                    <h1 className="text-capitalize fw-bold text-lg" onMouseEnter={textEnter} onMouseLeave={textLeave}>{title}</h1>
                </div>
                <div className="selectionElement mt-3 pe-2 d-flex gap-2 align-items-start align-items-lg-center justify-content-between">
                    <span className="productCount text-capitalize ps-2 text-xs md:text-base"><b>24</b></span>
                    <div className="d-flex flex-column gap-2 align-items-end">
                        <button className="btn border d-flex align-items-center d-lg-none px-3" onClick={()=>setOpenDrawer(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter me-2">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                </svg>
                                <b>Filter</b>
                            </button>
                            <div className="d-flex gap-2">
                                <select name="" id="" className="rounded px-1">
                                    <option value="50">Show : 50</option>
                                    <option value="40">Show : 40</option>
                                    <option value="30">Show : 30</option>
                                    <option value="20">Show : 20</option>
                                    <option value="10">Show : 10</option>
                                </select>
                                <select name="" id="" className="rounded px-1">
                                    <option value="">Sort by: Featured</option>
                                    <option value="">Price : Low to high</option>
                                    <option value="">Price : high to Low</option>
                                    <option value="">Release Date</option>
                                    <option value="">Avg. Rating</option>
                                </select>
                            </div>
                        </div>
                    
                </div>

            <div className="d-flex flex-column gap-3 align-items-center">

            <div className="d-flex flex-wrap align-items-center justify-between  px-2 gap-x-6 xl:gap-x-2 gap-y-6 mt-3">
                {
                    products.map((item)=>(
                        <CategoryCard 
                        id = {item.id_product}
                        name = {item.name}
                        category = {item.category}
                        img = {item.img1}
                        price = {item.price}/>
                    ))
                }
            </div>
            <div className="bg-white w-full flex justify-center items-center px-2 py-2" style={{position : 'sticky',bottom : '0px'}}>
                <Page count={10} page={1}/>
            </div>
            </div>
        </section>
        <Drawer
            anchor='left'
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            PaperProps={{
                style: {
                width: '', // Default width
                },
            }}
            sx={{
                '@media (max-width: 600px)': {
                '& .MuiDrawer-paper': {
                    width: '100%', // Adjust width for small screens
                },
                },
            }}
    >
        <section className="categoryList">
           <div className="one ps-3 mt-2">
           <h1 className="flex justify-between items-center mb-0">Category <button onClick={()=>setOpenDrawer(false)} className="btn"><Close width={25} height={25} color={'black'}/></button></h1>
            <ul>
                {
                list.map((item)=>(
                   <li onClick={()=>setTitle(item.name)} className="py-2 px-2 rounded mt-1 text-capitalize d-flex align-items-center justify-content-between" key={item.id}><span>{item.name}</span><ArrowForwardIosIcon style={{fontSize : "14px"}}/></li>
                ))
                }
            </ul>
           </div>
           <div className="two mt-2 ps-3 w-100">
            <h1>Price Filter</h1>
           <Box sx={{ width: 200 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    style={{color:colors.one}}
                    min = {1000}
                    max={6000}
                />
            </Box>
           <p>{value[0]}DA - {value[1]}DA</p>
           </div>
           <div className="three mt-2 ps-3 pb-3">
              <h1>Search</h1>
              <div className="d-flex gap-2 ">
                <input className="search rounded px-2" type="search" placeholder="Search for products"/>
                <button className="btn border d-flex gap-1 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search
                </button>
               
              </div>
           </div>
           <div className="four mt-2 ps-3 pb-3">
              <h1>Choose Size</h1>
              <form action="">
                <div className="d-flex align-items-center gap-1 ps-3 mb-2">
                    <div className="radio d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">XS :</label>
                        <input type="radio" name="" id="" />
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">S :</label>
                        <input type="radio" name="" id="" />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-1 ps-3 mb-2">
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">M :</label>
                        <input type="radio" name="" id="" />
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">L :</label>
                        <input type="radio" name="" id="" />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-1 ps-3">
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">XL :</label>
                        <input type="radio" name="" id="" />
                    </div>
                    <div className="radio  d-flex align-items-center justify-content-between rounded py-2 px-2">
                        <label htmlFor="">XXL :</label>
                        <input type="radio" name="" id="" />
                    </div>
                </div>
                
              </form>
           </div>
           <div className="five mt-2 ps-3">
               <h1>Rating</h1>
               <div className="rating d-flex py-2 px-2 gap-3 rounded mb-2">
                   <input type="checkbox" name="" id="" />
                   <Rating value={5} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded">
                   <input type="checkbox" name="" id="" />
                   <Rating value={4} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded">
                   <input type="checkbox" name="" id="" />
                   <Rating value={3} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 mb-2 rounded">
                   <input type="checkbox" name="" id="" />
                   <Rating value={2} readOnly/>
               </div>
               <div className="rating d-flex py-2 px-2 gap-3 rounded mb-2">
                   <input type="checkbox" name="" id="" />
                   <Rating value={1} readOnly/>
               </div>
           </div>
           
        </section>
          </Drawer>
    </section>
  )
}
