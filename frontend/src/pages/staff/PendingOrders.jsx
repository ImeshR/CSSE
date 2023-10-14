import React from 'react'
import Layout from './layout'
import PendingOrderTable from '../../components/staff/PendingOrderTable'

const PendingOrders = () => {
  return (
    <Layout>
      <div className="top-0 px-8 right-0 bottom-0 flex grow flex-col border gap-5">
        <PendingOrderTable />
      </div>
    </Layout>
  )
}

export default PendingOrders
