import React, { useState } from 'react';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Sidebar } from './layout/SideBar';
import Approuter from './routes/AppRouter';

const App = () => {
  const [isExpand, setExpand] = useState<boolean>(false);
  return (
    <>
      <Header isExpand={isExpand} setExpand={setExpand} />
      <Sidebar isExpand={isExpand} setExpand={setExpand} />
      <Approuter />
    </>
  );
};

export default App;
