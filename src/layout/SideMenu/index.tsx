import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

// import style from './style.less';

interface props {
  // your props here
  collapsed?: any;
}
interface states {
  // attributes needed in your component here
}

interface e {
  key: string;
}

// @withRouter
class SiderMenu extends Component<props & RouteComponentProps, states> {
  
  handleMenuClick = (e: e) => {
    const { history } = this.props;

    if (e.key === '/project') {
      history.push(e.key);
    }
  }

  render() {
    const { collapsed, location } = this.props;

    return (
      <Menu
        defaultSelectedKeys={['/sub']}
        selectedKeys={[location.pathname]}
        // defaultOpenKeys={['exchangemgr']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={this.handleMenuClick}
      >
        <Menu.Item key="/sub">
          <Link to="/sub">
            <Icon type="pie-chart" />
            <span>订阅</span>
          </Link>
        </Menu.Item>
        <SubMenu key="exception" title={<span><Icon type="table" /><span>异常页</span></span>}>
          <Menu.Item key="exception/403">
            <Link to="/exception/403">403</Link>
          </Menu.Item>
          <Menu.Item key="/exception/404">
            <Link to="/exception/404">404</Link>
          </Menu.Item>
          <Menu.Item key="/exception/500">
            <Link to="/exception/500">500</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(SiderMenu);