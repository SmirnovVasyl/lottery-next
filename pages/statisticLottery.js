import { CommonLayout1 } from "../components/common-layout1"
import { StatisticLottery_ } from '../components/statisticLottery/statisticLottery_'

export default function Statistic() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <StatisticLottery_ />
    </CommonLayout1>
  )
}