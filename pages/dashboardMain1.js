import { CommonLayout } from "../components/common-layout"
import { DashboardMain1_ } from "../components/dashboardMain1/dashboardMain1_"

export default function DashboardMain() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <DashboardMain1_ />
    </CommonLayout>
  )
}