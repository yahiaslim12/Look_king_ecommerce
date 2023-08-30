import FirstCollection from "../../components/FirstCollection";
import Nav from "../../components/Nav";
import FirstCard from "../../components/cards/FirstCard";
import Collection from "../../components/collection";
export default function Home() {
  return (
    <main>
      <Nav/>
      <Collection/>
      <FirstCollection/>
    </main>
  )
}
