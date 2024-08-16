import Link from "next/link"
import colors from "../styles/colors"
import Image from "next/image"
import { CopyrightOutlined } from "@mui/icons-material"
import { CopyRight } from "../svg"
export default function Footer() {
  return (
    <footer className="w-100 d-flex flex-column mt-3 px-3 " style={{backgroundColor: colors.three,borderTopLeftRadius : '50px',borderTopRightRadius : '50px'}}>
        <div className="LogoPart container pb-4 mt-5 d-flex gap-2 align-items-end w-100  " style={{borderBottom : "1px solid rgb(190,190,190)"}}>
            <Image src="/images/LOGO_OFFECIAL.png" alt="LOGO" width={50} height={50} title="Look King Store" />
            <h6 className="text-uppercase fw-bold" style={{fontFamily:'footer-font',fontSize:'25px',marginBottom: "-3px",fontFamily : "footer-font"}}>look king store</h6>
         </div>

        <div className="footerContent container" style={{borderBottom:"1px solid rgb(190,190,190)"}}>
            <small style={{color : '#5c6c75'}} className="mb-0 flex items-center gap-2 mt-3">
                <CopyRight width={15} height={15} color={"#5c6c75"}/> All rights reserverd by Yahia Slimani
            </small>
        </div>
    </footer>
  )
}
