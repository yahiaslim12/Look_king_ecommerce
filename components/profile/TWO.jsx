
import Settings from "./two_components/Settings";
import Order from "./two_components/Order";
import { CircularProgress } from "@mui/material";
import { bouncy ,hourglass} from "ldrs";
import colors from "../../styles/colors";
hourglass.register()
export default function TWO({list,handleOpen}) {
  return (
    list.settings ? <Settings handleOpenDrawer={handleOpen}/> : list.commands ? <Order handleOpenDrawer={handleOpen}/> : <div className="flex justify-center items-center gap-2 w-full" style={{height : '600px'}}>
    <l-hourglass size={30} color={colors.one} bg-opacity={0.1} speed={1.75}></l-hourglass>
</div>
  )
}
