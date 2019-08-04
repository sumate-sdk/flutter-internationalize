import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'antd/dist/antd.less';
import './index.css'

export default function main() {
    ReactDOM.render(<App />, document.getElementById('app'));
}