import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button, Icon, Modal, Input } from 'antd';
import './App.css';
import logo from './logo.svg';
import * as firebase from 'firebase';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function doLogin(token)
{
  return firebase.database().ref('/online_usr/' + token).once('value').then(function(snapshot) {
    var player = (snapshot.val() && snapshot.val().player) || 'N/A';
    var ip = (snapshot.val() && snapshot.val().ip) || 'N/A';
  });
}

class App extends Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  render() {
    return (
      <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            style={{ height: '100vh'}}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="login" />
                <span className="nav-text" onClick={this.showModal}>Login</span>
                <Modal
                  title="Loging in..."
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Input placeholder="Token" type="password" />
                  <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Login
                  </Button>
                </Modal>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>nav 5</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              RiffyTech ©2018 Created by Phumrapee Limpianchop
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

export default App;