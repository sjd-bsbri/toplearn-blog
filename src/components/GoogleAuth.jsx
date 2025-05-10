import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Box, Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('google_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        
        const tokenTimestamp = localStorage.getItem('google_token_timestamp');
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000; 
        
        if (tokenTimestamp && currentTime - parseInt(tokenTimestamp) > oneHour) {
          console.log('Token might be expired, clearing storage');
          localStorage.removeItem('google_user');
          localStorage.removeItem('google_token_timestamp');
        } else {
          setUser(userData);
        }
      } catch (e) {
        localStorage.removeItem('google_user');
      }
    }
  }, []);

  useEffect(() => {
    const handleHideGoogleAuth = (event) => {
      console.log('Hide Google Auth event received', event.detail);
      if (event.detail && typeof event.detail.hidden === 'boolean') {
        setIsHidden(event.detail.hidden);
      }
    };

    window.addEventListener('hideGoogleAuth', handleHideGoogleAuth);

    return () => {
      window.removeEventListener('hideGoogleAuth', handleHideGoogleAuth);
    };
  }, []);

  useEffect(() => {
    const handleUserLogout = () => {
      console.log('User logout event received');
      logOut();
    };

    window.addEventListener('userLogout', handleUserLogout);

    return () => {
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  useEffect(() => {
    if (profile) {
      navigateToDashboard();
    }
  }, [profile]);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
      
      const data = await response.json();
      console.log('User Profile:', data);
      setProfile(data);
    } catch (err) {
      console.error('Error fetching user info:', err);
      setError('خطا در دریافت اطلاعات کاربر');
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      setUser(tokenResponse);
      localStorage.setItem('google_user', JSON.stringify(tokenResponse));
      localStorage.setItem('google_token_timestamp', new Date().getTime().toString());
      setError('');
    },
    onError: (errorResponse) => {
      console.error('Login Failed:', errorResponse);
      setError('خطا در ورود با گوگل');
    }
  });

  const logOut = () => {
    setUser(null);
    setProfile(null);
    localStorage.removeItem('google_user');
    localStorage.removeItem('google_token_timestamp');
    setIsDashboardVisible(false);
    window.dispatchEvent(new CustomEvent('backToMainSite'));
  };

  const navigateToDashboard = () => {
    if (!localStorage.getItem('google_token_timestamp')) {
      localStorage.setItem('google_token_timestamp', new Date().getTime().toString());
    }
    
    setIsDashboardVisible(true);
    window.dispatchEvent(new CustomEvent('showUserDashboard', {
      detail: { profile }
    }));
  };

  if (isHidden || isDashboardVisible) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}
      {!user ? (
        <Button 
          variant="contained" 
          startIcon={<GoogleIcon />}
          onClick={() => login()}
          sx={{ 
            bgcolor: '#4285F4', 
            color: 'white',
            '&:hover': {
              bgcolor: '#357ae8',
            }
          }}
        >
          ورود با گوگل
        </Button>
      ) : null}
    </Box>
  );
};

export default GoogleAuth; 