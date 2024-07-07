import React from 'react'
import Collection from '../../../components/collection'
import FirstCollection from '../../../components/FirstCollection'
import SecondCollection from '../../../components/SecondCollection'
import LastCollection from '../../../components/LastCollection'
import ThirdCollection from '../../../components/ThirdCollection'
import VisaCard from '../../../components/cards/VisaCard'
import MasterCard from '../../../components/cards/masterCard'
export default function AcceuilPage() {
  return (
    <main>
      <Collection/>
      <FirstCollection/>
      <SecondCollection/>
      <LastCollection/>
      <ThirdCollection/>
    </main>
  )
}
