import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

export const router = {
  '/1': {
    component: Loadable({
      loader: () => import('./views/SubscribeForm/index'),
      loading: () => {
        return <Spin size="large" className="global-spin" />;
      },
    })
  },
  '/': {
    component: Loadable({
      loader: () => import('./views/Home/index'),
      loading: () => {
        return <Spin size="large" className="global-spin" />;
      },
    })
  },
}