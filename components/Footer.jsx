import Link from "next/link"
import colors from "../styles/colors"
export default function Footer() {
  return (
    <footer className="w-100 d-flex flex-column mt-3 px-3 " style={{backgroundColor: colors.three,borderTopLeftRadius : '50px',borderTopRightRadius : '50px'}}>
        <div className="LogoPart container pb-4 mt-5 d-flex gap-2 align-items-end w-100  " style={{borderBottom : "1px solid rgb(190,190,190)"}}>
            <img src="./images/LOGO_OFFECIAL.png" alt="" width={50} title="Look King Store" />
            <h6 className="text-uppercase fw-bold" style={{fontFamily:'footer-font',fontSize:'25px',marginBottom: "-3px",fontFamily : "footer-font"}}>look king store</h6>
         </div>

        <div className="footerContent container pb-4 w-100 h-100 d-flex gap-2 flex-wrap flex-md-nowrap justify-content-center justify-content-md-start" style={{borderBottom:"1px solid rgb(190,190,190)"}}>
            
            <div className="otherPart justify-content-center">
        
                <div className="companyPart mt-4">
                    <h2 className="text-capitalize" style={{color:colors.one}}>company</h2>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="helpPart mt-4">
                    <h2 className="text-capitalize" style={{color:colors.one}}>helpful links</h2>
                    <ul>
                        <li>service client</li>
                        <li>support</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="servicePart mt-4">
                    <h2 className="text-capitalize" style={{color:colors.one}}>our services</h2>
                    <ul>
                        <li>Recommendation products</li>
                        <li>Best seeling</li>
                        <li>Promotion products</li>
                    </ul>
                </div>
                <div className="contactPart mt-4">
                    <h2 className="text-capitalize" style={{color:colors.one}}>contact us</h2>
                    <ul>
                        <li className="d-flex gap-2 align-items-center">
                            <img src="./images/icons/appel.png" alt=""  width={20}/>
                            <p style={{marginBottom:"0px"}}>+213 557 00 73 22</p>
                        </li>
                        <li className="d-flex gap-2 align-items-center ">
                            <img src="./images/icons/gm.png" alt="" width={20}/>
                            <p style={{marginBottom:"0px",textTransform:"lowercase"}}>yahia.slimani@univ-constantine2.dz</p>
                        </li>
                    </ul>
                    <div className="d-flex gap-3">
                        <Link href={"."}>
                            <img src="./images/icons/facebook.png" alt="" width={30}/>
                        </Link>
                        <Link href={"."}>
                        
                            <img src="./images/icons/gmail.png" alt="" width={30}/>
                        </Link>
                        <Link href={"."}>
                            <img src="./images/icons/insta.png" alt="" width={30}/>
                        </Link>
                        <Link href={"."}>
                            <img src="./images/icons/tw.png" alt="" width={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-md-between flex-wrap justify-content-center">
        <div className="d-flex flex-column align-items-center mt-3">
            <p style={{color : 'rgb(120,120,120)',fontSize:'14px'}}>© 2023 Look King Store, Inc. All Rights Reserved</p>
            <p className="text-capitalize d-flex align-items-center gap-1" style={{color : 'rgb(120,120,120)',fontSize:'12px'}}><img src="./images/icons/localisation.png" width={15} alt=""/>Chelghoum Laid mila ,Algeria</p>
        </div>
        <div className="paymentCards d-flex align-items-center gap-2">
            <h6 className = "fw-bold" style={{marginBottom : "0px",fontSize:"14px"}}>Payment Partners</h6>
            <img src="./images/icons/master card.png" alt="" width={50}/>
            <img src="./images/icons/pay-pal.png" alt="" width={30}/>
            <img src="./images/icons/cib.png" alt="" width={50}/>
            <img src="./images/icons/visa.png" alt="" width={50}/>
        </div>
        </div>
    </footer>
  )
}
