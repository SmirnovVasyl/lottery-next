import { CommonLayout1 } from "../components/common-layout1"
import { Lottery_ } from '../components/lottery/lottery_'

export default function RoadMap() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <Lottery_ />
    </CommonLayout1>
  )
}