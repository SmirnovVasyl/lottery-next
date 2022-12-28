import { CommonLayout } from "../components/common-layout"
import { Dashboard_ } from '../components/dashboard/dashboard_'

export default function Dashboard() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <Dashboard_ />
    </CommonLayout>
  )
}