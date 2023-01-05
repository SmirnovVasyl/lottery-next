import { CommonLayout } from "../components/common-layout"
import { HomeComponent } from "../components/homeComponent/homeComponent"

export default function Home()
{
  return (
    <CommonLayout animation={true}>
      <HomeComponent />
    </CommonLayout>
  )
}
