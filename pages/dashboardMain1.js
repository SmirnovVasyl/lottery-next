import { CommonLayout1 } from "../components/common-layout1"
import { DashboardMain1_ } from "../components/dashboardMain1/dashboardMain1_"

export default function DashboardMain() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <DashboardMain1_ />
    </CommonLayout1>
  )
}