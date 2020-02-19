import React from "react";
// import axois from "axios";
import { Checkbox, /*Row,  Col,  */Card, Button } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";


import { juejin } from "./config";

import { get, update } from '../../api/subscribe';

interface State {
  checkValue: {
    category?: [];
    trending?: [];
    trendingType?: [];
    pins?: [];
  };
};

type Props = {
  // count?: number;
};


export default class Form extends React.Component<Props, State> {
  state: State = {
    checkValue: {},
  };

  componentDidMount() {
    get().then(res => {
      this.setState({ checkValue: res.data.data.juejin });
    });
  }
  
  submit = () => {
    const { checkValue } = this.state;
    update(checkValue);
  }

  onChange = (checkedValue: CheckboxValueType[], key: string) => {
    this.setState({
      checkValue: {
        ...this.state.checkValue,
        [key]: checkedValue,
      },
    });
  }


  render() {
    
    const { category: categoryTemp, trending: trendingTemp, trendingType: trendingTypeTemp,pins: pinsTemp } = juejin;
    
    const { category, trending, trendingType, pins } = this.state.checkValue;
    
    const extra = (
      <Checkbox.Group value={trendingType} onChange={(e) => this.onChange(e, `${trendingTypeTemp.key}Type`)}>
        {trendingTypeTemp.children.map(({ key, name }) => (
          <Checkbox key={key} value={key}>
            {name}
          </Checkbox>
        ))}
      </Checkbox.Group>
    );

    return (
      <>
        <Card title="掘金" style={{ margin: 20 }}>
          <Card title={categoryTemp.name} style={{ marginBottom: 16 }}>
            <Checkbox.Group value={category} onChange={(e) => this.onChange(e, categoryTemp.key)}>
              {categoryTemp.children.map(({ key, name }) => (
                <Checkbox key={key} value={key}>
                  {name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Card>
          
          <Card title={trendingTemp.name} style={{ marginBottom: 16 }} extra={extra}>
            <Checkbox.Group value={trending} onChange={(e) => this.onChange(e,  trendingTemp.key)}>
              {trendingTemp.children.map(({ key, name }) => (
                <Checkbox key={key} value={key}>
                  {name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Card>
          
          <Card title={pinsTemp.name} style={{ marginBottom: 16 }}>
            <Checkbox.Group value={pins} onChange={(e) => this.onChange(e,  pinsTemp.key)}>
              {pinsTemp.children.map(({ key, name }) => (
                <Checkbox key={key} value={key}>
                  {name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Card>
          
          
          <Button block type="primary" onClick={this.submit}>提交</Button>
        </Card>
      </>
    );
  }
}
