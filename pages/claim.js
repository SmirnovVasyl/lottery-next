import { CommonLayout } from "../components/common-layout"
import { Claim_ } from '../components/claim/claim_'

export default function Dashboard() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <Claim_ />
    </CommonLayout>
  )
}