import { CommonLayout } from "../components/common-layout"
import { ConnectWallet_ } from "../components/connectWallet/connect.wallet"

export default function ConnectWallet() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <ConnectWallet_ />
    </CommonLayout>
  )
}