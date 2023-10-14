import React from 'react'
import Layout from './layout'
import ApprovedOrderTable from '../../components/site-manager/ApprovedOrderTable'

const AcceptedOrders = () => {
  return (
    <Layout>
      <div className="top-0 px-8  pt-4 right-0 bottom-0 flex grow flex-col border gap-5">
        <ApprovedOrderTable />
      </div>
    </Layout>
  )
}

export default AcceptedOrders
