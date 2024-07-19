
import Settings from "./two_components/Settings";
import Order from "./two_components/Order";
import { CircularProgress } from "@mui/material";

export default function TWO({list,handleOpen}) {
  return (
    list.settings ? <Settings handleOpenDrawer={handleOpen}/> : list.commands ? <Order handleOpenDrawer={handleOpen}/> : <div style={{height : '600px'}} className="flex gap-2 justify-center items-center w-full">
        <h1>Loading...</h1>
        <CircularProgress className="bg-green-500 text-green-500" style={{width : '20px' ,height : '20px'}}/>
    </div>
  )
}
