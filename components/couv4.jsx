import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import colors from '../styles/colors';
import Link from 'next/link';
export default function Couv4() {
  return (
    <Link className="couv4 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>simple snapback</h5>
        <small>Shop Now</small>
       </div>
       <img src="./images/T-shirt/nike2.webp" alt="" />
    </Link>
  )
}
