import { CommonLayout1 } from "../components/common-layout1"
import { Statistic_ } from '../components/statistic/statistic_'

export default function Statistic() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <Statistic_ />
    </CommonLayout1>
  )
}