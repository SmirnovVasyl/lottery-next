import { CommonLayout } from "../components/common-layout"
import { ClaimReward_ } from '../components/claimReward/claimReward_'

export default function Dashboard() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <ClaimReward_ />
    </CommonLayout>
  )
}