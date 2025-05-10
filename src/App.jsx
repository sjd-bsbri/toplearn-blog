import React, { useState, useEffect, lazy, Suspense } from "react";
import Main from "./components/MainSite";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  
  const UserDashboard = lazy(() => import('./components/UserDashboard'));
  
  useEffect(() => {
    const handleToggleDemo = () => {
      setShowDemo(prevState => !prevState);
      setShowDashboard(false);
    };

    const handleShowDashboard = (event) => {
      setShowDashboard(true);
      setShowDemo(false);
      if (event.detail && event.detail.profile) {
        setUserProfile(event.detail.profile);
      }
    };

    const handleBackToMain = () => {
      setShowDashboard(false);
      setShowDemo(false);
      setUserProfile(null); 
    };

    window.addEventListener('toggleAuthDemo', handleToggleDemo);
    window.addEventListener('showUserDashboard', handleShowDashboard);
    window.addEventListener('backToMainSite', handleBackToMain);

    return () => {
      window.removeEventListener('toggleAuthDemo', handleToggleDemo);
      window.removeEventListener('showUserDashboard', handleShowDashboard);
      window.removeEventListener('backToMainSite', handleBackToMain);
    };
  }, []);

  useEffect(() => {
    if (showDashboard) {
      window.dispatchEvent(new CustomEvent('hideGoogleAuth', { detail: { hidden: true } }));
    } else {
      window.dispatchEvent(new CustomEvent('hideGoogleAuth', { detail: { hidden: false } }));
    }
  }, [showDashboard]);

  const renderContent = () => {
    if (showDashboard && userProfile) {
      return (
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>در حال بارگذاری...</div>}>
          <UserDashboard profile={userProfile} />
        </Suspense>
      );
    }  else {
      return <Main />;
    }
  };

  return (
    <MainLayout>
      {renderContent()}
    </MainLayout>
  );
};

export default App;
