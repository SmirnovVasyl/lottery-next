import { CommonLayout1 } from "../components/common-layout1"
import { ClaimForm_ } from '../components/claimForm/claimForm_'

export default function ClaimForm() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <ClaimForm_ />
    </CommonLayout1>
  )
}