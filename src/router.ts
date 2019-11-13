import Loadable from 'react-loadable';

export const router = {
  '/1': {
    component: Loadable({
      loader: () => import('./views/SubscribeForm/index'),
      loading: () => {
        return null;
      },
    })
  },
  '/': {
    component: Loadable({
      loader: () => import('./views/Home/index'),
      loading: () => {
        return null;
      },
    })
  },
}