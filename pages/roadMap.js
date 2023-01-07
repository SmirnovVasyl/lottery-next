import { CommonLayout1 } from "../components/common-layout1"
import { RoadMap_ } from '../components/roadMap/roadMap_'

export default function RoadMap() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <RoadMap_ />
    </CommonLayout1>
  )
}