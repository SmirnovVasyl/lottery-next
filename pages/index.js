import { CommonLayout1 } from "../components/common-layout1"
import { HomeComponent } from "../components/homeComponent/homeComponent"

export default function Home()
{
  return (
    <CommonLayout1 animation={true}>
      <HomeComponent />
    </CommonLayout1>
  )
}
