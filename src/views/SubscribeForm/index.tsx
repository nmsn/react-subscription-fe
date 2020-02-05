import React from "react";
// import axois from "axios";
import { Checkbox, Row, /* Col,  */Card, Button } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";


import { juejin } from "./config";

type State = {
  checkValue: object;
};

type Props = {
  // count?: number;
};


export default class Form extends React.Component<Props, State> {
  state: State = {
    checkValue: {},
  };

  // componentDidMount() {
  //   axois.get("/rsshub").then(res => {
  //     const { data } = res;
  //     this.setState({ list: data });
  //   });
  // }

  onChange(checkedValue: CheckboxValueType[], key: string) {
    console.log("checked = ", checkedValue, key);
    this.setState({
      checkValue: {
        ...this.state.checkValue,
        [key]: checkedValue,
      },
    });
  }


  render() {
    return (
      <>
        <Card title="掘金" style={{ margin: 20 }}>
            {juejin.map(({ key: key1, name, children, type }) => (
              <Row key={key1} style={{ margin: "8px 0" }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                  {name}
                </div>
                <Checkbox.Group onChange={(e) => this.onChange(e, key1)}>
                  {children.map(({ key: key2, name }) => (
                    <Checkbox key={key2} value={key2}>
                      {name}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
                <div>
                  {type && (
                    <>
                      <div style={{ fontWeight: 700, margin: "2px 0" }}>
                        类型
                      </div>
                        <Checkbox.Group onChange={(e) => this.onChange(e, 'type')}>
                        {type.map(({ key: key3, name }) => (
                          <Checkbox key={key3} value={key3}>
                            {name}
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </>
                  )}
                </div>
              </Row>
            ))}
          <Button block type="primary">提交</Button>
        </Card>
      </>
    );
  }
}
