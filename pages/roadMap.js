import { CommonLayout } from "../components/common-layout"
import { RoadMap_ } from '../components/roadMap/roadMap_'

export default function RoadMap() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <RoadMap_ />
    </CommonLayout>
  )
}