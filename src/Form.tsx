import React from 'react';
import axois from 'axios';
import styles from './styles.module.scss';

type State = {
  list: rsshubItem[],
}

type Props = {
  count?: number,
}

type rsshubItem = {
  title: string,
  link: string,
}

export default class Form extends React.Component<Props, State> {
  state: State = {
    list: [],
  }

  componentDidMount() {
    axois.get('/rsshub').then(res => {
      console.log(res)
      const { data } = res;
      this.setState({ list: data })
    });
    
  }
  
  render() {
    return (
      <div className={styles.list}>
        <span className="span">123</span>
      </div>
    )
  }
}