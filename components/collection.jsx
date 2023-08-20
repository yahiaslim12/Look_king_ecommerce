import { Grid,Container,Paper } from "@mui/material"
export default function Collection() {
  return (
    <section className="collection w-100 d-flex bg-danger">
        <img className="collection1" src="./images/T-shirt/collection.jpg" alt="" style={{width : '1fr',height:'89vh'}} />
        <div className="w-100 d-flex flex-wrap">
            <img className="collection3" src="./images/T-shirt/collection5.jpg" alt=""style={{width : '1fr',height:'50vh'}}/>
            <img className="collection3" src="./images/T-shirt/collection6.jpg" alt=""style={{width : '1fr',height:'50vh'}}/>
            <img src="./images/T-shirt/collection2.jpg" alt="" />
        </div>
        
    </section>
  )
}
