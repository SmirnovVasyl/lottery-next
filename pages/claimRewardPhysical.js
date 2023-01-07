import { CommonLayout } from "../components/common-layout"
import { ClaimRewardPhysical_ } from '../components/claimRewardPhysical/claimRewardPhysical_'

export default function ClaimRewardPhysical() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <ClaimRewardPhysical_ />
    </CommonLayout>
  )
}