
import Settings from "./two_components/Settings";
import Order from "./two_components/Order";

export default function TWO({list,handleOpen}) {
  return (
    list.settings ? <Settings handleOpenDrawer={handleOpen}/> : list.commands ? <Order handleOpenDrawer={handleOpen}/> : ''
  )
}
