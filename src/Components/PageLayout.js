import React from 'react';
import SideDrawer from './SideDrawer';
import Header from './Header';
import Footer from './Footer';
import MainRoutes from './MainRoutes'; // Ensure this is imported

const PageLayout = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-main" style={{ display: 'flex' }}>
        <SideDrawer />
        <main style={{ flexGrow: 1, padding: '16px' }}>
          <MainRoutes />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
