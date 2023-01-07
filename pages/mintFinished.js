import { CommonLayout1 } from "../components/common-layout1"
import { MintFinished_ } from '../components/mintFinished/mintFinished_'

export default function ClaimRewardPhysical() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <MintFinished_ />
    </CommonLayout1>
  )
}