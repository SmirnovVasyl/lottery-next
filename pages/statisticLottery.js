import { CommonLayout } from "../components/common-layout"
import { StatisticLottery_ } from '../components/statisticLottery/statisticLottery_'

export default function Statistic() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <StatisticLottery_ />
    </CommonLayout>
  )
}