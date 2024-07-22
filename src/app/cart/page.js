import Card from "../../../components/cart/Card";
import Head from "../../../components/cart/Head";
import Payment from "../../../components/cart/Payment";
import Recommendation from "../../../components/cards/Recommendation";

export default function Index() {
  return (
    <section className="mt-5 FavoriteContainer">
        <Head/>
        <div className="mt-4 flex gap-8 flex-wrap flex-lg-nowrap">
            <div className="lg:w-8/12 flex-justify-center items-center w-full flex-col">
                <small className="font-semibold">1</small>
                <Card/>
            </div>
            <Payment/>
        </div>
        <div className='mt-3'>
            <h3 className='capitalize text-gray-900 text-2xl font-semibold pb-3'>similar products</h3>
            <div className='recommendation flex gap-5 overflow-x-auto'>
                <Recommendation src={'.././images/products/1.webp'}/>
                <Recommendation src={'.././images/products/2.webp'}/>
                <Recommendation src={'.././images/products/3.webp'}/>
                <Recommendation src={'.././images/products/4.webp'}/>
            </div>
        </div>
    </section>
  )
}
