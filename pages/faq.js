import { CommonLayout1 } from "../components/common-layout1"
import { FAQ_ } from '../components/faq/faq.component'

export default function FAQ() 
{
  return (
    <CommonLayout1 fixedHeader={false}>
      <FAQ_ />
    </CommonLayout1>
  )
}