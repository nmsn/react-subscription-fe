import React from 'react';
import { Input, Icon, Card, Button, message } from 'antd';
import { /* Link, */ withRouter, RouteComponentProps } from 'react-router-dom';

import styles from './index.module.scss';

import { login } from '../../api/user'; 

type State = {
  username: string,
  password: string,
}

type Props = {
  count?: number,
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
  }
  
  handleSubmit = () => {
    const { username, password } = this.state;
    login({ username, password }).then(res => {
      const { message: message2 } = res.data;
      
      if (message2 === '登录成功') {
        // 保存token
        const { authorization } = res.headers;
        localStorage.setItem('token', authorization);
        message.success(message2);
        this.props.history.push('/sub');
      } else {
        message.error(message2);
      }
    });
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