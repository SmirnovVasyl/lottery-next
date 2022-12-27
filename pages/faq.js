import { CommonLayout } from "../components/common-layout"
import { FAQ_ } from '../components/faq/faq.component'

export default function FAQ() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <FAQ_ />
    </CommonLayout>
  )
}