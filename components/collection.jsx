import Couv1 from "./couvs/couv1"
import Couv2 from "./couvs/couv2"
import Couv3 from "./couvs/couv3"
import Couv4 from "./couvs/couv4"

export default function Collection() {
  return (
   <section className="collection w-100">
      <div className="coll1 d-flex gap-2 mt-2">
        <Couv1/>
        <Couv3/>
      </div>
      <div className="coll2 d-flex gap-2 mt-2">
         <Couv4/>
         <Couv2/>
      </div>
   </section>
  )
}
