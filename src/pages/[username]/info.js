import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function UsernameInfo() {
  return (
    <>
      <h1 className="title">UsernameInfo</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}