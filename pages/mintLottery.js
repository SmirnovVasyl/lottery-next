import { CommonLayout } from "../components/common-layout"
import { MintLottery_ } from "../components/mintLottery/mintLottery_"

export default function MintLottery() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <MintLottery_ />
    </CommonLayout>
  )
}