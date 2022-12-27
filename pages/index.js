import { CommonLayout } from "../components/common-layout"
import { HomeComponent } from "../components/homeComponent/homeComponent"

export default function Home()
{
  return (
    <CommonLayout fixedHeader={true}>
      <HomeComponent />
    </CommonLayout>
  )
}
