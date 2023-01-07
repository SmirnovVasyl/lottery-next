import { CommonLayout1 } from "../components/common-layout1"
import { ClaimRewardPhysical_ } from '../components/claimRewardPhysical/claimRewardPhysical_'

export default function ClaimRewardPhysical() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <ClaimRewardPhysical_ />
    </CommonLayout1>
  )
}