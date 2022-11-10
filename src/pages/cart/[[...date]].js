import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  return (
    <>
      <h1 className="title">CartDateSlug { JSON.stringify(date) }</h1>
      <Link href="/cart/2022/11/11">2022년 11월 11일로</Link>
      <br />
      <button onClick={() => router.push("/cart/2022/11/10")}>2022년 11월 10일로</button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}