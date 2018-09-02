import React,{ Component } from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import service from './service'
import {observer} from 'mobx-react'
import axios from 'axios'

axios.get('/api/loading')
    .then(() => {
        service.on();
        console.log('success');
    })
    .catch(() => {
        service.off();
        console.log('err')
    });


@observer
class Loading extends Component {
    render() {
        return (
            <div>
                <Spin spinning={service.loading}>

                </Spin>
            </div>
        );
    }
}

export default Loading;