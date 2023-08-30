import FirstCard from "./cards/FirstCard";


export default function FirstCollection() {
  return (
    <div className="mt-2">
      <h1 className="text-capitalize text-center">popular product</h1>
      <p className="text-center text-capitalize" style={{color: "rgb(162, 162, 162)"}}>this part is for the popular product </p>
      <div className="d-flex gap-2 mx-2 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start">
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
      </div>
    </div>
  )
}
