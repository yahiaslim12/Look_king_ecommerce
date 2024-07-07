
export default function MasterCard() {
  return (
    <div className="mcParent">
    <div className="mc">
    <div className="masterCard p-2 rounded">
        <div className="d-flex justify-content-between">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" version="1" enableBackground="new 0 0 48 48">
                    <path fill="#FF9800" d="M5,35V13c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H9C6.8,39,5,37.2,5,35z"/>
                    <g fill="#FFD54F">
                        <path d="M43,21v-2H31c-1.1,0-2-0.9-2-2s0.9-2,2-2h1v-2h-1c-2.2,0-4,1.8-4,4s1.8,4,4,4h3v6h-3c-2.8,0-5,2.2-5,5 s2.2,5,5,5h2v-2h-2c-1.7,0-3-1.3-3-3s1.3-3,3-3h12v-2h-7v-6H43z"/>
                        <path d="M17,27h-3v-6h3c2.2,0,4-1.8,4-4s-1.8-4-4-4h-3v2h3c1.1,0,2,0.9,2,2s-0.9,2-2,2H5v2h7v6H5v2h12 c1.7,0,3,1.3,3,3s-1.3,3-3,3h-2v2h2c2.8,0,5-2.2,5-5S19.8,27,17,27z"/>
                    </g>
            </svg>
            <img src="./images/mc.png" alt="" width={50} height={50}/>
        </div>
        <div className="d-flex gap-2 ps-1 mt-1">
            <p style={{marginBottom : '0px'}}>* * * *</p>
            <p style={{marginBottom : '0px'}}>* * * *</p>
            <p style={{marginBottom : '0px'}}>* * * *</p>
            <p style={{marginBottom : '0px'}}>7223</p>
        </div>
        <div className='d-flex justify-content-between mt-3'>
        <div className='d-flex flex-column gap-2'>
            <h6 style={{fontSize: '14px' ,marginBottom : '0px'}} className='text-uppercase'>Card holder</h6>
            <h6 style={{fontSize : '12px',marginBottom : '0px'}} className='text-uppercase'>yahia slimani</h6>
        </div>
        <div>
            <small className='text-uppercase'>expires</small><br />
            <small>MM/YY</small>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
