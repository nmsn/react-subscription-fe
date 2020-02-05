import React from 'react';
// import axois from 'axios';
import { Input, Icon, Card, Button } from 'antd';
import { /* Link, */ withRouter, RouteComponentProps } from 'react-router-dom';

import styles from './index.module.scss';

type State = {
  username: string,
  password: string,
}

type Props = {
  count?: number,
}

type rsshubItem = {
  title: string,
  link: string,
}

class Login extends React.Component<Props & RouteComponentProps, State> {
  state: State = {
    username: '',
    password: '',
  }
  

  componentDidMount() {
    // axois.get('/rsshub').then(res => {
    //   const { data } = res;
    //   this.setState({ list: data })
    // });
    console.log()
  }
  
  handleSubmit = () => {
    
    this.props.history.push('/content');
  }
  
  handleInputUsername = (e: { target: { value: any; }; }) => {
    this.setState({
      username: e.target.value,
    })
  }
  
  handleInputPassword = (e: { target: { value: any; }; }) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    const { username, password } = this.state;
    const canSubmit = username && password;
    
    return (
      <div className={styles.loginLayout}>
        <Card className={styles.loginCard}>
          <div className={styles.title}>登录</div>
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={this.handleInputUsername}
          />
          <Input.Password
            placeholder="Enter your password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={this.handleInputPassword}
            style={{ marginTop: 8 }}
          />
          <Button type="primary" block style={{ marginTop: 32 }} disabled={!canSubmit} onClick={this.handleSubmit}>登录</Button>
        </Card>
      </div>
    )
  }
}

export default withRouter(Login);