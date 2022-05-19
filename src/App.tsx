import React from 'react';
import 'antd/dist/antd.css';
import Button from 'antd/es/button';
import DatePicker from 'antd/es/date-picker';
import Input from 'antd/es/input';
import './app.less';

export default function App() {
  return (
    <div>
      <h1>Ant Design</h1>
      <Button type="primary">Button</Button>
      <Input />
      <DatePicker />
    </div>
  );
}
