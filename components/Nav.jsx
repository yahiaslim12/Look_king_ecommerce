"use client"
import colors from '../styles/colors';
import { Close, List, NoProduct, Search } from '../svg';
import Link from 'next/link';
import {Badge,IconButton ,Drawer,Modal,Box,Typography,TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useState ,useEffect, useContext} from 'react';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useRouter } from 'next/navigation';
import { pathContext } from './providers/GlobalProvider';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.one,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.one,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : colors.three,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : colors.three,
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: colors.one,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: colors.one,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

export default function Nav() {
  
  const router = useRouter()
  const {path,addPath,removePath,carts,favs} = useContext(pathContext)
  const [products,setProducts] = useState([])
  const {data:session,status} = useSession()
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

  const styleHeaderSearch = {
    height : "20%",
    background : 'rgb(255,255,255)',
    width : '100%',
    borderRadius : '10px'
  }
  const openModalWithKeyboard = (event) =>{
    if(event.ctrlKey && event.key === 'k'){
      setOpenModal(true)
    }
  }
  
  
  const handleChangePage = (page) => {
    if(page === 'Favorite'){
      addPath('favorite')
    }else if(page === 'cart'){
      addPath('cart')
    }
    router.push('/'+page)
  }
  const handleSearch = async()=>{
    try {
      const res = await fetch('http://localhost:8000/search/'+search,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        }
      })
      if(!res.ok){
        const error = await res.json()
        throw new Error(error.detail)
      }
      const data = await res.json()
      console.log(data);
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown',openModalWithKeyboard);
    return () => {
      window.removeEventListener('keydown', openModalWithKeyboard);
    };
  }, []);
  useEffect(()=>{
    if(search.length > 0){
      handleSearch()
    }else{
      setProducts([])
    }
  },[search])
  return (
    <header style={{backgroundColor : '#cdd0cb84',backdropFilter : 'blur(15px)',position : 'sticky',top : '0px'}} className='d-flex align-items-center px-4 py-3 justify-content-between'>
      <Link href={'/'} ><Image src={'/images/LOGO_OFFECIAL.png'} width={50} height={50} alt='LOGO'/></Link>
      <nav className='d-flex '>
         <div className='navbarLinksName nav gap-8 text-capitalize align-items-center d-none d-md-flex'>
           <Link className='mb-0' href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Home</h6></Link>
           <Link className='mb-0' href={'/Category'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Category</h6></Link>
           <svg className='d-none d-sm-block mb-1' onClick={()=>handleChangePage('cart')} id='cartIcon' xmlns="http://www.w3.org/2000/svg" width={25}  viewBox="0 -2.55 20.095 20.095">
                <path id="Path_13"  d="M437.249,829.36a1.874,1.874,0,0,0,1.72,1.633H447.1c.9,0,1.24-.72,1.626-1.633l1.93-4.382H440l-.136-.964h12.2l-2.262,5.346c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.406Zm1.225,3.64a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,438.474,833Zm-.531,1.969h1V834h-1ZM446.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,446.474,833Zm-.531,1.969h1V834h-1Z" transform="translate(-431.973 -821)" fill="#444"/>
           </svg>                
            <Link className='mb-0' href={'/Favorite'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Wishlist</h6></Link>
           <Link  className='mb-0' href={session ? "/profile" : "/login"} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>{session ? "Profile" : "Sign In"}</h6></Link>
         </div>

      </nav>
      <button onClick={()=>setOpenModal(true)} style={searchStyle} className='d-flex gap-1 px-2 py-1 border justify-content-between align-items-center text-base md:text-sm w-[70%] md:w-auto'><div className='flex items-center gap-3'><SearchIcon />Search... </div> <span style={spanInsideSearch} className='text-xs p-1'>ctrl+k</span></button>
      <button onClick={()=>setOpen(true)} className='md:hidden'><List color={'black'} width={20} height={20}/></button>
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
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/bouton-daccueil.png' width={20} alt=''/><span>home</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./cart'}><img src='./images/icons/panier.png' width={20} alt=''/> <span>Shopping Card</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./Favorite'}><img src='./images/icons/coeur.png' width={20} alt=''/><span>Favorite Products</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./profile'}><img src='./images/icons/la-personne.png' width={30} alt=''/><span>Profil</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href="./Category"><img src='./images/icons/categorie.png' width={20} alt=''/><span>Categorys</span></Link></li>
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
          <div className='search flex gap-2 items-center w-full rounded px-2 py-2 border'>
            <Search color={'black'} width={20} height={20} />
            <input type="text" name="search" id="" placeholder='search' className='border-none outline-none w-full' value={search} onChange={(e)=>setSearch(e.target.value)}/>
          </div>

            <button onClick={()=>setOpenModal(false)}><Close color={'black'} width={25} height={25}/></button>
          </div>
          <small style={{color : colors.one,width : '600px'}} className='text-align-center fw-bold' >{products.length}</small>
        </div>
        <div className='searchProductList mb-2' style={{height : '80%',overflowY : 'scroll'}}>
            {
              products.length === 0 ? (
                <div className='flex flex-col justify-center items-center gap-1 h-80'>
                   <NoProduct width={50} height={50} color={'black'}/>
                   <small className='text-gray-700 text-sm font-medium'>Empty list</small>
                </div>
              ) : (
                <ul className='px-2'>
                {
                  products.map((item,index)=>{
                    return(
                      <li className='searchList w-100  px-2 my-2 py-2 rounded d-flex justify-content-center align-items-center ' key={index}>
                        <Link href={'./product/'+item.id_product} className='d-flex align-items-center text-decoration-none text-dark gap-2 mx-2 w-100 '>
                        
                        <img src={'.'+item.img1} alt="" width={50} height={50} />
                        <div className='searchListDesc d-flex justify-content-between flex-wrap flew-sm-nowrap w-100 '>
                          <div className=''>
                            <h4 className='font-semibold'>{item.name}</h4>
                            <p className='text-gray_text'>{item.desc_small}</p>
                          </div>
                          <h6 style={{color : colors.one}} className='fw-bold text-capitalize'>{item.price}</h6>
                        </div>
                        </Link>
                      </li>
                    )
                  })
                }
            </ul>
              )
            }
        </div>
        </Box>
      </Modal>
      
      
    </header>
  )
}
