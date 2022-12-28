import { CommonLayout } from "../components/common-layout"
import { Lottery_ } from '../components/lottery/lottery_'

export default function RoadMap() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <Lottery_ />
    </CommonLayout>
  )
}