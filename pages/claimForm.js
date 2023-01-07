import { CommonLayout } from "../components/common-layout"
import { ClaimForm_ } from '../components/claimForm/claimForm_'

export default function ClaimForm() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <ClaimForm_ />
    </CommonLayout>
  )
}