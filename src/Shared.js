import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import FormDropdown from './form/FormDropdown'
import FormSearch from './form/FormSearch'

export default function Shared() {
  const { Header, Content, Footer, Sider } = Layout

  return (
    <Layout>
      <Header className='header'>
        <FormSearch />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout>
          <Sider className='site-layout-background' width={200}>
            <FormDropdown />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
