"use client"
import colors from '../styles/colors';
import { Close, Search } from '../svg';
import Link from 'next/link';
import {Badge,IconButton ,Drawer,Modal,Box,Typography,TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useState ,useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import MasterCard from './cards/masterCard';
import VisaCard from './cards/VisaCard';

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
  const [change,setChange] = useState(false)
  const [values,setValues] = useState({
    name : '',
    email : '',
    password : '',

  })
  const steps = ['Commande info', 'Payment', 'Confirmation'];
  const [open,setOpen] = useState(false)
  const [openModal,setOpenModal] = useState(false)
  const [openCart,setOpenCart] = useState(false)
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
  const updateCountItem = (id,operationType)=>{
    if(operationType === 'dec'){
      setShoppingCard((prevShoppingCard) =>
      prevShoppingCard.map((item) =>
        (item.id === id && item.count !== 0 )? { ...item, count: item.count - 1 } : item
      )
    );
    }else{
      setShoppingCard((prevShoppingCard) =>
      prevShoppingCard.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    }
  }
  const handleBack = () => {
    if(step === 0) setChangePage(false)
    else setStep(prevStep => prevStep - 1)
  }
  const handleNext = () => {
     setStep(prevStep => prevStep + 1)
     console.log(step)
  }
  useEffect(() => {
    window.addEventListener('keydown',openModalWithKeyboard);
    return () => {
      window.removeEventListener('keydown', openModalWithKeyboard);
    };
  }, []);
  return (
    <header style={{backgroundColor : colors.four,zIndex:'5'}} className='d-flex  align-items-center px-4 py-3 justify-content-between flex-row-reverse flex-sm-row'>
      <Link href={'/'} ><img src="./images/LOGO_OFFECIAL.png" width={50} /></Link>
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
            
             <Badge badgeContent={shoppingCard.length} color='secondary' className='d-none d-sm-block' >
              
              <svg onClick={()=>setOpenCart(true)} id='cartIcon' xmlns="http://www.w3.org/2000/svg" width={25}  viewBox="0 -2.55 20.095 20.095">
                <path id="Path_13" dataName="Path 13" d="M437.249,829.36a1.874,1.874,0,0,0,1.72,1.633H447.1c.9,0,1.24-.72,1.626-1.633l1.93-4.382H440l-.136-.964h12.2l-2.262,5.346c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.406Zm1.225,3.64a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,438.474,833Zm-.531,1.969h1V834h-1ZM446.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,446.474,833Zm-.531,1.969h1V834h-1Z" transform="translate(-431.973 -821)" fill="#444"/>
               </svg>     
         
              </Badge>

             <Badge badgeContent={1} color='secondary'  className='d-none d-sm-block'>
              <Link href={'./Favorite'}>
              
             <svg id='favIcon' xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 24 24" fill="none">
              <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#1C274C"/>
            </svg>             
              </Link>
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
      <Drawer 
        open = {openCart} 
        onClose={()=>setOpenCart(false)} 
        anchor='right'
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
        }}>
        <section className='panier mx-3 pt-3 h-100'>
          {
            !changePage && (
              <div className='title d-flex justify-content-between align-items-center'>
            <div>
              <h5 style={{marginBottom:'0px'}} className='fw-bold'>Shop Cart</h5>
              <small style={{fontSize : '14px'}} className='text-capitalize'>Delivry with <b>yalidin</b> </small>
            </div>
            <svg onClick={()=>setOpenCart(false)} xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="none">
              <rect width={24} height={24} fill="white"/>
              <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
            )
          }
          {
            !changePage && (
              <div className="alert alert-danger p-2 mt-3" role="alert" >
                You’ve got FREE delivery. Start <a href="#!" class="alert-link">checkout now!</a>
              </div>
            )
          }
         {changePage ? 
           (<><Stack sx={{ width: '100%' }} spacing={4} className='mt-3'>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon} >{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          <h5 style={{marginBottom : '0px',borderTop:`1px solid ${colors.three}`}} className='mt-3 pt-3 fw-bold text-capitalize'>
           { step === 0 ? 'Fill your information' : (
            step === 1 ? 'payment form' : 'Confirm your operation'
           )}
          </h5>
          <small className='text-danger'>{
             (step === 0 || step === 1) ? 'Check your information carefully' : 'You must confirm your operation to finish it'
          }
          </small>
          {
            step === 0 && (
              <>
              <form action="" className='info d-flex flex-wrap gap-3 justify-content-center '>
                <div className='d-flex flex-column gap-2 mt-3'>
                  <label htmlFor="">Firstname :</label>
                  <input type="text" name="" id="" className='rounded px-2'/>
                </div>
                <div className='d-flex flex-column gap-2 mt-3'>
                  <label htmlFor="">Lastname :</label>
                  <input type="text" name="" id="" className='rounded px-2'/>
                </div>
                <div className='d-flex flex-column gap-2'>
                  <label htmlFor="">Number :</label>
                  <input type="text" name="" id="" className='rounded px-2'/>
                </div>
                <div className='d-flex flex-column gap-2'>
                  <label htmlFor="">Colis Content :</label>
                  <input type="text" name='' id='' className='rounded px-2'/>
                </div>
                <div className='d-flex flex-column gap-2'>
                  <label htmlFor="">Wilaya :</label>
                  <input type="text" name="" id="" className='rounded px-2'/>
                </div>
                <div className='d-flex flex-column gap-2'>
                  <label htmlFor="">City :</label>
                  <input type="text" name="" id="" className='rounded px-2'/>
                </div>
              </form>
                  </>
            )
          }
          {
            step === 1 && (
              <>

                <div className='d-flex flex-column gap-3 align-items-center'>
                  <VisaCard/>
                  <form action="">
                      <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <div className='d-flex flex-column gap-2 mt-3'>
                          <label htmlFor="">Card Number :</label>
                          <input type="text" name="" id="" className='rounded px-2'/>
                        </div>
                        <div className='d-flex flex-column gap-2 mt-3'>
                          <label htmlFor="">Card Number :</label>
                          <select name="" id="">
                            <option value="">Choose the type of card</option>
                            <option value="">Edahabia card</option>
                            <option value="">Visa card</option>
                            <option value="">Master Card</option>
                          </select>
                        </div>
                        
                      </div>
                      <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <div className='d-flex flex-column gap-2'>
                          <label htmlFor="">Name :</label>
                          <input type="text" name="" id="" className='rounded px-2'/>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                          <label htmlFor="">Email :</label>
                          <input type="text" name="" id="" className='rounded px-2'/>
                        </div>

                      </div>
                      <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <div className='d-flex flex-column gap-2'>
                          <label htmlFor="">Thru Valid :</label>
                          <input type="text" name="" id="" className='rounded px-2'/>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                          <label htmlFor="">CVV :</label>
                          <input type="text" name='' id='' className='rounded px-2'/>
                        </div>
                      </div>
                  </form>
                </div>
              </>
            )
          }
           <div className='panierButton d-flex justify-content-between align-items-center w-100 px-5 mt-5'>
                    <button className='d-flex align-items-center justify-content-center gap-1 rounded px-3 py-1' onClick={handleBack}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" className='rounded'>
                      <rect width={24} height={24} fill={colors.three}/>
                      <path d="M14.5 17L9.5 12L14.5 7" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Back 
                    </button>
                    <button className='d-flex align-items-center justify-content-center gap-1 rounded  px-3 py-1' onClick={handleNext}>
                      {step === 2 ? 'Valider' : 'Next'}
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" className='rounded'>
                      <rect width="24" height="24" fill="#7C9473"/>
                      <path d="M9.5 7L14.5 12L9.5 17" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
          </>
          ) : (
            <ul style={{paddingLeft:'0px'}}>
              {
                shoppingCard.map((item)=>(
                  <li key={item.id} className='panierCart d-flex align-items-center py-2 px-2 gap-2'>
                    <img src={item.imgSrc} alt="" width={50} height={50}/>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                      <div className='cardDetail'>
                        <h6 className='text-capitalize fw-bold'>{item.name}</h6>
                        <small>{item.count}</small>
                        <div className='deletePart d-flex align-items-center justify-content-center gap-1'>
                          <svg id="removeIcon"  xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 400 400" fill="none" >
                                  <path d="M251.52 350H148.48C120.49 350 97.8 327.31 97.8 299.32V85.51H302.2V299.32C302.2 327.31 279.51 350 251.52 350Z" stroke="red" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M150.79 149.42V286.65" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M200 149.42V286.65"    stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M249.21 149.42V286.65" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M82.6599 85.51H317.34" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M82.6599 85.51H317.34" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M162.25 85.51V73.25C162.25 60.41 172.66 50 185.5 50H214.5C227.34 50 237.75 60.41 237.75 73.25V85.51" stroke="black" strokeWidth={12} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <small>Remove</small>
                        </div>
                      </div>
                      <div className='counterButton rounded d-flex align-items-center justify-content-center gap-1'>
                             <button className='dec' onClick={()=>updateCountItem(item.id,'dec')}>-</button>
                             <p style={{marginBottom : '0px'}} className='d-flex align-items-center justify-content-center'><span>{item.count}</span></p>
                             <button className='acr' onClick={()=>updateCountItem(item.id,'acr')}>+</button>
                      </div>
                      <p className='price' style={{marginBottom : '0px'}}><b>{item.price}</b></p>
                    </div>
                  </li>
                ))
              }
            </ul>
          )}
          {
            !changePage && (
            <div className='d-flex justify-content-between py-3' style={{borderTop : `1px solid ${colors.three}`}}>
              <button className='btn' style={{backgroundColor : 'black',color : 'white'}}>Update Cart</button>
              <button onClick={()=>setChangePage(true)} className='btn' style={{backgroundColor : colors.one,color : colors.three}}>Continue Shopping</button>
            </div>
            )
          }
        </section>
      </Drawer>
      
    </header>
  )
}
