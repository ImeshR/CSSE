import React from 'react'
import { Table } from 'antd'

const { Column } = Table

const EmployeeTable = () => {
  return (
    <div>
      <Table>
        <Column
          title="#"
          dataIndex="index"
          key="index"
        />
        <Column title="Manger Name" dataIndex="managername" key="managername" />
        <Column title="Contact" dataIndex="contact" key="contact" />
        <Column
          title="Site Address"
          dataIndex="siteaddress"
          key="siteaddress"
        />
        <Column title="Site Name" dataIndex="sitename" key="sitename" />
        <Column
          title="Created Date"
          dataIndex="createdDate"
          key="createdDate"
        />
        <Column
          title="Deadline"
          dataIndex="deadline"
          key="deadline"
        />
        <Column title="Suppliers" key="suppliers" dataIndex="suppliers" />
      </Table>
    </div>
  )
}

export default EmployeeTable
