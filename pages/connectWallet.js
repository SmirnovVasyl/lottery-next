import { CommonLayout1 } from "../components/common-layout1"
import { ConnectWallet_ } from "../components/connectWallet/connect.wallet"

export default function ConnectWallet() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <ConnectWallet_ />
    </CommonLayout1>
  )
}