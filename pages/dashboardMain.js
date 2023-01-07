import { CommonLayout1 } from "../components/common-layout1"
import { DashboardMain_ } from "../components/dashboardMain/dashboardMain_"

export default function DashboardMain() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <DashboardMain_ />
    </CommonLayout1>
  )
}