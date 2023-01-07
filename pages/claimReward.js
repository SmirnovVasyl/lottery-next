import { CommonLayout1 } from "../components/common-layout1"
import { ClaimReward_ } from '../components/claimReward/claimReward_'

export default function Dashboard() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <ClaimReward_ />
    </CommonLayout1>
  )
}