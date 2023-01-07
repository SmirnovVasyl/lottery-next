import { CommonLayout2 } from "../components/common-layout2"
import { MintFinished_ } from '../components/mintFinished/mintFinished_'

export default function ClaimRewardPhysical() 
{
  return (
    <CommonLayout2 headerMenu={true}>
      <MintFinished_ />
    </CommonLayout2>
  )
}