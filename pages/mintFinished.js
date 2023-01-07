import { CommonLayout } from "../components/common-layout"
import { MintFinished_ } from '../components/mintFinished/mintFinished_'

export default function ClaimRewardPhysical() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <MintFinished_ />
    </CommonLayout>
  )
}