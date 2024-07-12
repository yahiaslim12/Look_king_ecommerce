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
    const [list,setList] = useState([
        {id: 1,name:"men"},
        {id : 2, name :"women"},
        {id:  3,name : "clothes"},
        {id : 4,name : "baskets"},
        {id : 5,name : "electronic"},
        {id : 6,name : "sport and loisir"},
        {id : 7,name : "Shortes"},
        {id : 8,name : "T-shirts"},

    ])
    const [title,setTitle] = useState('Category Page')
    const [value, setValue] = useState([3000, 4500]);
    const [openDrawer,setOpenDrawer] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {textEnter,textLeave} = useContext(pathContext)
  return (
    <section className="categoryPage d-flex w-100 mt-3">
        <section className="categoryList d-none d-lg-block">
           <div className="one ps-3 mt-2">
           <h1>Category</h1>
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
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
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
