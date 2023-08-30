"use client"
import SegmentIcon from '@mui/icons-material/Segment';
import Image from 'next/image';
import colors from '../styles/colors';
import Link from 'next/link';
import {Badge,IconButton ,Drawer,Modal,Box,Typography,TextField} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InventoryIcon from '@mui/icons-material/Inventory';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useState ,useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import { SportsRugbySharp } from '@mui/icons-material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
export default function Nav() {
  const [open,setOpen] = useState(false)
  const [openModal,setOpenModal] = useState(false)
  const [search,setSearch] = useState('')
  const [listSearch,setListSearch] = useState([
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
    {
      name : 'T-shirt Polaris',
      image: '/images/T-shirt/Polaris1.jpg',
      description : 'T-shirt Polaris oversize unisexe the best quality',
      price : '2800 da'
    },
  ])
  const searchStyle = {
    backgroundColor : colors.one,
    color : 'white',
    borderRadius : 8,
  }
  const spanInsideSearch = {
    backgroundColor : "rgba(255,255,255,0.3)",
    backdropFilter : "blur(10px)",
    border : "1px solid white",
    borderRadius : 8,
    
  }
  const useStyles = makeStyles((theme) => ({
    textField: {
      '& .MuiFilledInput-root': {
        '&:before': {
          borderBottom: 'none', // Remove the default bottom border
        },
        '&:hover:before': {
          borderBottom: 'none', // Remove the bottom border on hover
        },
        '&.Mui-focused:before': {
          borderBottom: 'none', // Remove the bottom border when focused
        },
      },
      '& .MuiFilledInput-underline:before': {
        borderBottom: 'none', // Remove the underline when focused
      },
    },
  }));
  const styleHeaderSearch = {
    height : "20%",
    background : 'rgb(255,255,255)',
    width : '100%',
    borderRadius : '10px'
  }
  const classes = useStyles();
  const openModalWithKeyboard = (event) =>{
    if(event.ctrlKey && event.key === 'k'){
      setOpenModal(true)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown',openModalWithKeyboard);
    return () => {
      window.removeEventListener('keydown', openModalWithKeyboard);
    };
  }, []);
  return (
    <header style={{backgroundColor : colors.four,position:"sticky",top : '0px'}} className='d-flex  align-items-center px-4 py-3 justify-content-between flex-row-reverse flex-sm-row'>
      <Link href={'/'} ><img src="./images/LOGO_OFFECIAL.png" width={50} /></Link>
      <nav className='d-flex gap-5'>
         <div className='navbarLinksName nav gap-4 text-capitalize align-items-center d-none d-lg-flex'>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Home</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>shope</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>collection</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Blog</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Categories</h6></Link>
         </div>

         <div className='navbarLinkIcons nav d-flex gap-4 align-items-center flex-row-reverse flex-sm-row  p-1 flex-nowrap' >
           
            <button onClick={()=>setOpenModal(true)} style={searchStyle} className='d-flex gap-3 px-2 py-1 border justify-content-center align-items-center'><SearchIcon />Search... <span style={spanInsideSearch} className='fw-bold d-md-block d-none'>ctrl+k</span></button>
            
            <button className='btn btn-border d-block d-lg-none' onClick={()=>setOpen(true)}>
            <MenuIcon/>
            </button>
            
             <Badge badgeContent={5} color='secondary' className='d-none d-sm-block' >
               <Link href={'/'} style={{color:"black",textDecoration:"none"}} title='Shopping Cart' ><ShoppingCartOutlinedIcon/></Link>
             </Badge>
             <Badge badgeContent={1} color='secondary'  className='d-none d-sm-block'>
              <Link  href={'/'} style={{color:"black",textDecoration:"none"}} title='Favorite Products'><FavoriteBorderIcon/></Link>
             </Badge>
             <Badge badgeContent = {2} color='secondary'  className='d-none d-sm-block'>
              <Link  href={'/'} style={{color:"black",textDecoration:"none"}} title='Profil' ><PermIdentityOutlinedIcon/></Link>
             </Badge>
         </div>
      </nav>
      <Drawer
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
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
        <div className='navdrawerHeader d-flex align-items-center justify-content-center py-2 border mx-2 my-2'>
          <h4 style={{marginBottom : '0px',color: colors.one}} >My List</h4>
          <IconButton style={{position : "absolute" ,right : "5px" }} onClick={()=> setOpen(false)}>
            <ClearOutlinedIcon/>
          </IconButton>
        </div>
          <ul className='navbarListDrawer px-3'>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><HomeOutlinedIcon/><span>home</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><ShoppingCartOutlinedIcon/><span>Shopping Card</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><FavoriteBorderIcon/><span>Favorit Products</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><PermIdentityOutlinedIcon/><span>Profil</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><CategoryOutlinedIcon/><span>Categorys</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><FiberNewIcon/><span>New Collection</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><InventoryIcon/><span>Create Your store</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><AnnouncementOutlinedIcon/><span>Chat of Reclamation</span></Link></li>
          </ul>
     </Drawer>
        <Modal
          open={openModal}
          onClose={()=>setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
      <Box className = "navModalSearch" >
        <div className='px-3 py-3' style={styleHeaderSearch}>
          <div className='d-flex gap-3 justify-content-between align-items-center border-bottom pb-4'>
            <SearchIcon style={{color : colors.one,fontSize : '28px' }} />
            <TextField
              variant="filled"
              label="Search"
              style={{width : "100%"}}
              className={classes.textField}
              InputProps={{
              style: {
                borderRadius: '8px',
              },
              endAdornment : 
                (
                  <IconButton className='d-flex justify-content-center align-items-center bg-light border' onClick={()=>setSearch('')}><BackspaceOutlinedIcon/></IconButton>
                )
              
          }}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
        />
      
            <button className='btn border text-danger bg-light ' onClick={()=>setOpenModal(false)}>close</button>
          </div>
          <small style={{color : colors.one,width : '600px'}} className='text-align-center fw-bold' >4</small>
        </div>
        <div className='searchProductList mb-2' style={{height : '80%',overflowY : 'scroll'}}>
            <ul className='px-2'>
                {
                  listSearch.map((item,index)=>{
                    return(
                      <li className='searchList w-100  px-2 my-2 py-2 rounded d-flex justify-content-center align-items-center ' >
                        <Link href={'./'} className='d-flex align-items-center text-decoration-none text-dark gap-2 mx-2 w-100 '>
                        
                        <img src={item.image} alt="" width={50} height={50} />
                        <div className='searchListDesc d-flex justify-content-between flex-wrap flew-sm-nowrap w-100 '>
                          <div className=''>
                            <h4>{item.name}</h4>
                            <p >{item.description}</p>
                          </div>
                          <h6 style={{color : colors.one}} className='fw-bold text-capitalize'>{item.price}</h6>
                        </div>
                        </Link>
                      </li>
                    )
                  })
                }
            </ul>
        </div>
        </Box>
        </Modal>
    </header>
  )
}
