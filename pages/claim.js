import { CommonLayout1 } from "../components/common-layout1"
import { Claim_ } from '../components/claim/claim_'

export default function Dashboard() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <Claim_ />
    </CommonLayout1>
  )
}