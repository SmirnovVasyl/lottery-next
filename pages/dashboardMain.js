import { CommonLayout } from "../components/common-layout"
import { DashboardMain_ } from "../components/dashboardMain/dashboardMain_"

export default function DashboardMain() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <DashboardMain_ />
    </CommonLayout>
  )
}