// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { ipcRenderer } from 'electron';
import firebase from '../firebase';
import routes from '../constants/routes';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Logo = styled.div`
  height: 64px;
`;
type Props = {};
export default class Home extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    // ipcRenderer.on('result', (evt, result) => {
    //   console.log(evt, result);
    // });
    this.callApi('result', 'POST').then(res => {
      console.log(res);
      this.callApi('result', 'GET').then(ress => console.log(ress));
    });
  }

  callApi = (channel, type) =>
    new Promise(resolve => {
      ipcRenderer.once(channel, (evt, result) => {
        resolve(result);
      });
      ipcRenderer.send(channel, type);
    });

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Logo/>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

