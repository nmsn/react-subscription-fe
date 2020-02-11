import React, { Component } from 'react';
import { /* Link, */ withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { Layout, Icon, Menu, Dropdown, Avatar } from 'antd';
import SiderMenu from '../SideMenu';

import styles from './index.module.scss';

interface props {
  // your props here
  collapsed?: any;
}
interface states {
  // attributes needed in your component here
}

const { Header, Sider, Content } = Layout;

interface e {
  key: string;
}

// @withRouter
// @cssModules(styles, {
//   allowMultiple: true
// })
class App extends Component<props & RouteComponentProps, states> {
  state = {
    collapsed: false
  };
  
  componentDidMount() {
    axios.get('user/current');
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  


  handleMenuClick = (e: e) => {
    if (e.key === 'logout') {
      // loginUtil.logout();
      // this.props.history.push('/login');
      // console.log(e.key);
      this.props.history.push('/login');
    }
  }

  render() {
    const { collapsed } = this.state;

    // const userInfo = loginUtil.getUserInfo() || {};

    const menu = (
      <Menu className="user-menu" selectedKeys={[]} onClick={this.handleMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          width={256}
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
            <h1>{collapsed ? '' : 'Ant Design Pro'}</h1>
          </div>
          <SiderMenu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles['icon-menu-trigger']}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.right}>
              {/* <Tooltip title="使用文档">
                <a
                  target="_blank"
                  href="https://pro.ant.design/docs/getting-started"
                  rel="noopener noreferrer"
                  className={styles.action}
                  title="使用文档"
                >
                  <Icon type="question-circle-o" />
                </a>
              </Tooltip> */}
              <Dropdown overlay={menu}>
                <span className={styles.account}>
                  <Avatar
                    size="small"
                    // className={styles.avatar}
                    // styleName="avatar"
                    // src={userInfo.avatar}
                    src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                    alt="avatar"
                  />
                  <span className={styles.avatar}>{/* userInfo.name */}</span>
                </span>
              </Dropdown>
            </div>
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);