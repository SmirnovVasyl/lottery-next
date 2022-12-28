import { CommonLayout } from "../components/common-layout"
import { Statistic_ } from '../components/statistic/statistic_'

export default function Statistic() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <Statistic_ />
    </CommonLayout>
  )
}