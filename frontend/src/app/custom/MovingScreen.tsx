import React from "react";
import {Button, Checkbox, DatePicker, Divider} from "antd";

export const MovingScreen = () => <div>MovingScreen
  <Divider>
    <Checkbox name={"Active"}/>
    <Button name={"Red"} htmlType="reset"/>
    <Button name={"Blue"} htmlType="submit"/>
    <Button name={"Green"} htmlType="button"/>
    <DatePicker name={"Created Date"}
                allowClear={true}
                bordered={true}/>
  </Divider>
</div>;
