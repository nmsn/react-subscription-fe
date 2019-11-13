import React from 'react';
import axois from 'axios';
import { Checkbox, Row, Col } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import styles from './index.module.scss';

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
      const { data } = res;
      this.setState({ list: data })
    });
  }
  
  onChange(checkedValue: CheckboxValueType[]) {
    console.log('checked = ', checkedValue);
  }
  
  render() {
    
    const checkboxContent = [
      {
        title: '标题1',
        content: [
          {
            title: 'A',
            value: 'A',
          },
        ],
      },
      {
        title: '标题2',
        content: [
          {
            title: 'B',
            value: 'B',
          },
        ],
      },
      {
        title: '标题3',
        content: [
          {
            title: 'C',
            value: 'C',
          },
        ],
      },
    ];

    return (
      <Checkbox.Group className={styles.form} style={{ width: '100%' }} onChange={this.onChange}>
        <Row>
          {checkboxContent.map(({ title, content }) => (
            <Col span={8} style={{ minWidth: 100 }}>
              <div>{title}</div>
              {content.map(({ title, value }) => (
                <Row>
                  <Checkbox value={value}>{title}</Checkbox>
                </Row>
              ))}
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    )
  }
}