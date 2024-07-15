import Card from "../../../components/cart/Card";
import Head from "../../../components/cart/Head";
import Payment from "../../../components/cart/Payment";


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
    </section>
  )
}
