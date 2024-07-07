'use client'
import colors from "../../../styles/colors"
import { useState } from "react"
export default function Favorite() {
    const [favCard,setFavCard] = useState([
        {
            id : 1,
            imgSrc : './images/T-shirt/nike1.webp',
            name : `nike 1`,
            price : '2800',
            status : 'in stock',
            check : false
        },
        {
            id : 2,
            imgSrc : './images/T-shirt/nike2.webp',
            name : `nike 2`,
            price : '2800',
            status : 'out of stock',
            check : false
        },
        {
            id : 3,
            imgSrc : './images/T-shirt/nike3.webp',
            name : `nike 3`,
            price : '2800',
            status : 'in stock',
            check : false
        },
        {
            id : 4,
            imgSrc : './images/T-shirt/nike4.webp',
            name : `nike 4`,
            price : '2800',
            status : 'out of stock',
            check : false
        },
    ])
    const [checkAll,setCheckAll] = useState(false)

    const TableRowStyle = {
        height : '100px',
        borderTop : `1px solid ${colors.three}`,
        textAlign : 'center'
    }
    function handleCheck(e){
        setCheckAll(!checkAll)
    }
    function checkItem(itemId){
        const updatedFavCard = favCard.map((item) =>
           item.id === itemId ? { ...item, check: !item.check } : item
        );
        setFavCard(updatedFavCard);
    }
   const handlecheckAll = () => {
        const updatedFavCard = favCard.map((item) => ({ ...item, check: !checkAll }));
        setFavCard(updatedFavCard);
        setCheckAll(!checkAll);
   }
  return (
    <section className='FavoriteContainer container mt-5'>
       <h1 className='text-capitalize fw-bold text-center'>my favorite products</h1>
       <p  style={{color : 'rgb(98,115,128)'}} className="text-center">There are <b>5</b> products in this wishlist.</p>
       <div>
        <table>
            <thead>
                <tr style={{height : '60px',backgroundColor : 'rgb(240,240,240)'}}>
                <th className="px-3">
                    <input type="checkbox" name="" id="" onChange={handlecheckAll} />
                </th>
                <th className="text-center">Product Name</th>
                <th className="text-center" >Price</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                <th className="text-center">Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                favCard.map((item)=>(
                    <tr key={item.id} style={TableRowStyle}>
                        <td className="px-3 d-flex align-items-center justify-content-center" style={{height:'inherit'}}>
                            <div className="d-flex align-items-center justify-content-between w-100 ">
                                <input type="checkbox" name="" id="" checked = {checkAll || item.check} onClick={()=> checkItem(item.id)}/>
                                <img src={item.imgSrc} alt="" width={50}/>
                            </div>
                        </td>
                        <td className="text-capitalize">
                            {item.name}
                        </td>
                        <td style={{color : 'rgb(98,115,128)'}}>
                            {item.price} DA
                        </td>
                        <td className="d-flex align-items-center justify-content-center ">
                            <p className="text-capitalize fw-bold rounded px-2" style={{marginBottom : '0px',backgroundColor : item.status === 'in stock' ? '#28a74682' : '#dc354680'  ,fontSize : '12px',border : item.status === 'in stock' ? '2px solid #28a745' : '2px solid #dc3545'}}>{item.status}</p>
                        </td>
                        <td>
                            <button className="btn fw-bold">Add to Cart</button>
                        </td>
                        <td>
                            <svg id="removeIcon"  xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 400 400" fill="none" >
                                <path d="M251.52 350H148.48C120.49 350 97.8 327.31 97.8 299.32V85.51H302.2V299.32C302.2 327.31 279.51 350 251.52 350Z" stroke="red" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M150.79 149.42V286.65" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M200 149.42V286.65"    stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M249.21 149.42V286.65" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M82.6599 85.51H317.34" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M82.6599 85.51H317.34" stroke="black" strokeWidth={12} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M162.25 85.51V73.25C162.25 60.41 172.66 50 185.5 50H214.5C227.34 50 237.75 60.41 237.75 73.25V85.51" stroke="black" strokeWidth={12} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
       </div>
    </section>
  )
}
