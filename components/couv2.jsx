import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import colors from '../styles/colors';
import Link from 'next/link';
export default function Couv2() {
  return (
    <Link className="couv2 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>Nike solo swoosh</h5>
        <small>Shop Now</small>
       </div>
       <img src="./images/T-shirt/nike4.webp" alt="" />
    </Link>
  )
}
