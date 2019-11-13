import React from 'react';
import 'antd/dist/antd.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
