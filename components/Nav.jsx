"use client"
import colors from '../styles/colors';
import { Close, Search } from '../svg';
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
  const [count,setCount] = useState({cart : 0,fav : 0})
  const [change,setChange] = useState(false)
  
  const [open,setOpen] = useState(false)
  const [openModal,setOpenModal] = useState(false)
  
  const [search,setSearch] = useState('')
  const [changePage,setChangePage] = useState(false)
  const [step,setStep] = useState(0)
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
  const [shoppingCard,setShoppingCard] = useState([
    {
      id : 1,
      imgSrc : './images/T-shirt/nike1.webp',
      name : `nike 1`,
      price : '2800',
      count : 0
  },
  {
      id : 2,
      imgSrc : './images/T-shirt/nike2.webp',
      name : `nike 2`,
      price : '2800',
      count : 0,
  },
  {
      id : 3,
      imgSrc : './images/T-shirt/nike3.webp',
      name : `nike 3`,
      price : '2800',
      count : 0,
  },
  {
      id : 4,
      imgSrc : './images/T-shirt/nike4.webp',
      name : `nike 4`,
      price : '2800',
      count : 0,
  },
  {
      id : 5,
      imgSrc : './images/T-shirt/nike4.webp',
      name : `nike 4`,
      price : '2800',
      count : 0,
  },
  {
      id : 6,
      imgSrc : './images/T-shirt/nike4.webp',
      name : `nike 4`,
      price : '2800',
      count : 0,
  },
  {
      id : 7,
      imgSrc : './images/T-shirt/nike4.webp',
      name : `nike 4`,
      price : '2800',
      count : 0,
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
  useEffect(() => {
    window.addEventListener('keydown',openModalWithKeyboard);
    return () => {
      window.removeEventListener('keydown', openModalWithKeyboard);
    };
  }, []);
  useEffect(()=>{
    setCount(prev => ({
      ...prev,
      cart : carts.length,
      fav : favs.length,
    }))
  },[carts,favs])
  return (
    <header style={{backgroundColor : '#cdd0cb84',backdropFilter : 'blur(15px)',position : 'sticky',top : '0px'}} className='d-flex align-items-center px-4 py-3 justify-content-between flex-row-reverse flex-sm-row'>
      <Link href={'/'} ><Image src={'/images/LOGO_OFFECIAL.png'} width={50} height={50}/></Link>
      <nav className='d-flex gap-5'>
         <div className='navbarLinksName nav gap-4 text-capitalize align-items-center d-none d-lg-flex'>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Home</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>shope</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>collection</h6></Link>
           <Link href={'/'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Blog</h6></Link>
           <Link href={'/Category'} style={{textDecoration:'none'}}><h6 style = {{color : "black",}}>Categories</h6></Link>
         </div>

         <div className='navbarLinkIcons nav d-flex gap-4 align-items-center flex-row-reverse flex-sm-row  p-1 flex-nowrap' >
           
            <button onClick={()=>setOpenModal(true)} style={searchStyle} className='d-flex gap-3 px-2 py-1 border justify-content-center align-items-center'><SearchIcon />Search... <span style={spanInsideSearch} className='fw-bold d-md-block d-none'>ctrl+k</span></button>
            
            <button className='btn btn-border d-block d-lg-none' onClick={()=>setOpen(true)}>
            <MenuIcon/>
            </button>
            
             <Badge badgeContent={count.cart} color='secondary' className='d-none d-sm-block' >
              
              <svg onClick={()=>handleChangePage('cart')} id='cartIcon' xmlns="http://www.w3.org/2000/svg" width={25}  viewBox="0 -2.55 20.095 20.095">
                <path id="Path_13" dataName="Path 13" d="M437.249,829.36a1.874,1.874,0,0,0,1.72,1.633H447.1c.9,0,1.24-.72,1.626-1.633l1.93-4.382H440l-.136-.964h12.2l-2.262,5.346c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.406Zm1.225,3.64a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,438.474,833Zm-.531,1.969h1V834h-1ZM446.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,446.474,833Zm-.531,1.969h1V834h-1Z" transform="translate(-431.973 -821)" fill="#444"/>
               </svg>     
         
              </Badge>

             <Badge badgeContent={count.fav} color='secondary'  className='d-none d-sm-block'>
              <div className='hover:cursor-pointer' onClick={()=>handleChangePage('Favorite')}>

                <svg id='favIcon' xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 24 24" fill="none">
                  <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#1C274C"/>
                </svg>             
              </div>
              
              </Badge>
             
              <Link className='per d-none d-sm-block' href={'/login'}>
                <svg id='accountIcon' xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 64 64" strokeWidth="3" stroke="#000000" fill="none"><circle cx="32" cy="18.14" r="11.14"/><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"/></svg>             
              </Link>
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
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/bouton-daccueil.png' width={20} alt=''/><span>home</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/panier.png' width={20} alt=''/> <span>Shopping Card</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/coeur.png' width={20} alt=''/><span>Favorit Products</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/la-personne.png' width={30} alt=''/><span>Profil</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href="./Category"><img src='./images/icons/categorie.png' width={20} alt=''/><span>Categorys</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/nouveau.png' width={25} alt=''/><span>New Collection</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/magasin.png' width={25} alt=''/><span>Create Your store</span></Link></li>
            <li className='d-flex gap-2 align-items-center text-capitalize px-2'><Link className='d-flex gap-2 align-items-center text-decoration-none' href={'./'}><img src='./images/icons/avertissement.png' width={25} alt=''/><span>Chat of Reclamation</span></Link></li>
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
            <input type="text" name="search" id="" placeholder='search' className='border-none outline-none w-full' />
          </div>

            <button onClick={()=>setOpenModal(false)}><Close color={'black'} width={25} height={25}/></button>
          </div>
          <small style={{color : colors.one,width : '600px'}} className='text-align-center fw-bold' >4</small>
        </div>
        <div className='searchProductList mb-2' style={{height : '80%',overflowY : 'scroll'}}>
            <ul className='px-2'>
                {
                  listSearch.map((item,index)=>{
                    return(
                      <li className='searchList w-100  px-2 my-2 py-2 rounded d-flex justify-content-center align-items-center ' key={index}>
                        <Link href={'./'} className='d-flex align-items-center text-decoration-none text-dark gap-2 mx-2 w-100 '>
                        
                        <img src={item.image} alt="" width={50} height={50} />
                        <div className='searchListDesc d-flex justify-content-between flex-wrap flew-sm-nowrap w-100 '>
                          <div className=''>
                            <h4 className='font-semibold'>{item.name}</h4>
                            <p className='text-gray_text'>{item.description}</p>
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
