import React, { useState, useEffect } from 'react';
import { getToken, removeUserSession, setUserSession } from './utils/Common';
import { Routes } from './global/routes';
import api from './global/api'
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    api.get(`/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <div className="App">
      <Routes />
    </div>
  );
}
 
export default App;