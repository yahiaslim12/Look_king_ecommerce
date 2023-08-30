import Link from 'next/link';
export default function Couv3() {
  return (
    <Link className="couv3 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>Best T-shirts</h5>
        <small>Shop Now</small>
       </div>
       <img src="./images/T-shirt/nike1.webp" alt="" />
    </Link>
  )
}
