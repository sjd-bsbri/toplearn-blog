import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Avatar, 
  Divider, 
  Button, 
  Card, 
  CardContent, 
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useMediaQuery,
  useTheme
} from '@mui/material';

import { 
  Dashboard as DashboardIcon, 
  Person as PersonIcon,
  School as SchoolIcon,
  Bookmark as BookmarkIcon,
  ShoppingCart as CartIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

import './dashboard.css';

const UserDashboard = ({ profile }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const courses = [
    { id: 1, title: 'آموزش جامع React', progress: 75, lastActivity: '۲ روز پیش' },
    { id: 2, title: 'دوره Next.js', progress: 60, lastActivity: '۱ هفته پیش' },
    { id: 3, title: 'آموزش Node.js', progress: 10, lastActivity: 'امروز' }
  ];
  
  const notifications = [
    { id: 1, text: 'دوره جدید JavaScript منتشر شد', time: '۳۰ دقیقه پیش', read: false },
    { id: 2, text: 'پاسخ جدید به سوال شما در دوره React', time: '۲ ساعت پیش', read: true },
    { id: 3, text: 'تخفیف ویژه دوره‌های برنامه نویسی', time: 'دیروز', read: true }
  ];
  
  const favoriteTopics = [
    'React', 'JavaScript', 'Node.js', 'GraphQL', 'MongoDB'
  ];

  const handleLogout = () => {
    localStorage.removeItem('google_user');
    localStorage.removeItem('google_token_timestamp');
    
    window.dispatchEvent(new CustomEvent('userLogout'));
    
    window.dispatchEvent(new CustomEvent('backToMainSite'));
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <Grid container spacing={3} sx={{ direction: 'rtl' }}>
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  دوره‌های در حال یادگیری
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {courses.map(course => (
                  <Card key={course.id} sx={{ mb: 2, borderRadius: 2 }} className="dashboard-card">
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        {course.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Box sx={{ width: '100%', ml: 1, mr: 0 }}>
                          <Box className="dashboard-progress-bar">
                            <Box 
                              className="dashboard-progress-value"
                              sx={{ width: `${course.progress}%` }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                          {course.progress}%
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                      <Typography variant="caption" color="textSecondary">
                        آخرین فعالیت: {course.lastActivity}
                      </Typography>
                      <Button 
                        size="small" 
                        sx={{ 
                          bgcolor: '#00b3e9', 
                          color: 'white',
                          '&:hover': { bgcolor: '#0089b3' }
                        }}
                      >
                        ادامه دوره
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">
                    اعلان‌ها
                  </Typography>
                  <Badge badgeContent={notifications.filter(n => !n.read).length} color="error">
                    <NotificationsIcon className="no-flip" />
                  </Badge>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <List sx={{ p: 0 }}>
                  {notifications.map(notification => (
                    <ListItem 
                      key={notification.id} 
                      sx={{ 
                        px: 0, 
                        py: 1, 
                        borderRight: notification.read ? 'none' : '3px solid #00b3e9',
                        pr: notification.read ? 0 : 1,
                        pl: 0
                      }}
                    >
                      <ListItemText 
                        primary={notification.text}
                        secondary={notification.time}
                        primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: notification.read ? 'normal' : 'bold' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  موضوعات مورد علاقه
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {favoriteTopics.map((topic, index) => (
                    <Chip 
                      key={index} 
                      label={topic} 
                      sx={{ 
                        bgcolor: '#e6f7fc', 
                        color: '#00b3e9',
                        '&:hover': { bgcolor: '#d0f0fa' }
                      }} 
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      
      case 'profile':
        return (
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              اطلاعات پروفایل
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start', mb: 4 }}>
              <Avatar
                src={profile.picture}
                alt={profile.name}
                className="avatar-large"
                sx={{ width: 110, height: 110, mb: isMobile ? 2 : 0, ml: isMobile ? 0 : 0, mr: 0 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5" gutterBottom>
                  {profile.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {profile.email}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small"
                  startIcon={<SettingsIcon className="no-flip" />}
                  sx={{ mt: 1 }}
                >
                  ویرایش پروفایل
                </Button>
              </Box>
            </Box>
            
            <Grid container spacing={3} sx={{ direction: 'rtl' }}>
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2, bgcolor: '#f8fafc' }}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      آمار فعالیت
                    </Typography>
                    <List>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="تعداد دوره‌های در حال یادگیری" secondary="3 دوره" />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="میانگین ساعات مطالعه هفتگی" secondary="12 ساعت" />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="تعداد دوره‌های تکمیل شده" secondary="5 دوره" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2, bgcolor: '#f8fafc' }}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      اطلاعات حساب کاربری
                    </Typography>
                    <List>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="نوع حساب کاربری" secondary="کاربر ویژه" />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="تاریخ عضویت" secondary="1404/01/13" />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText primary="آخرین ورود" secondary="امروز، ساعت 14:30" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        );
      
      default:
        return (
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h6">
              در حال توسعه...
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              این بخش به زودی تکمیل میشود.
            </Typography>
          </Paper>
        );
    }
  };

  return (
    <Container maxWidth="lg" className="rtl" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', mb: 4, alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" fontWeight="bold" color="#1e2f38">
          پنل کاربری
        </Typography>
        <Button 
          color="error" 
          startIcon={<LogoutIcon className="no-flip" />} 
          onClick={handleLogout}
        >
          خروج
        </Button>
      </Box>
      
      <Grid container spacing={3} sx={{ direction: 'rtl' }}>
        <Grid item xs={12} md={3} className="dashboard-sidebar">
          <Paper elevation={2} sx={{ borderRadius: 2 }}>
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                src={profile.picture}
                alt={profile.name}
                className="avatar-large"
                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {profile.email}
              </Typography>
            </Box>
            
            <Divider />
            
            <List>
              <ListItem 
                button 
                selected={activeTab === 'dashboard'} 
                onClick={() => setActiveTab('dashboard')}
                sx={{ 
                  p: 2,
                  bgcolor: activeTab === 'dashboard' ? '#e6f7fc' : 'transparent',
                  '&:hover': { bgcolor: '#f0fafd' }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <DashboardIcon className="no-flip" color={activeTab === 'dashboard' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="داشبورد" />
              </ListItem>
              
              <ListItem 
                button 
                selected={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')}
                sx={{ 
                  p: 2,
                  bgcolor: activeTab === 'profile' ? '#e6f7fc' : 'transparent',
                  '&:hover': { bgcolor: '#f0fafd' }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <PersonIcon className="no-flip" color={activeTab === 'profile' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="پروفایل" />
              </ListItem>
              
              <ListItem 
                button 
                selected={activeTab === 'courses'} 
                onClick={() => setActiveTab('courses')}
                sx={{ 
                  p: 2,
                  bgcolor: activeTab === 'courses' ? '#e6f7fc' : 'transparent',
                  '&:hover': { bgcolor: '#f0fafd' }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <SchoolIcon className="no-flip" color={activeTab === 'courses' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="دوره‌های من" />
              </ListItem>
              
              <ListItem 
                button 
                selected={activeTab === 'bookmarks'} 
                onClick={() => setActiveTab('bookmarks')}
                sx={{ 
                  p: 2,
                  bgcolor: activeTab === 'bookmarks' ? '#e6f7fc' : 'transparent',
                  '&:hover': { bgcolor: '#f0fafd' }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <BookmarkIcon className="no-flip" color={activeTab === 'bookmarks' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="ذخیره‌شده‌ها" />
              </ListItem>
              
              <ListItem 
                button 
                selected={activeTab === 'cart'} 
                onClick={() => setActiveTab('cart')}
                sx={{ 
                  p: 2,
                  bgcolor: activeTab === 'cart' ? '#e6f7fc' : 'transparent',
                  '&:hover': { bgcolor: '#f0fafd' }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CartIcon className="no-flip" color={activeTab === 'cart' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="سبد خرید" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={9}>
          {renderTabContent()}
        </Grid>
      </Grid>
    </Container>
  );
};

const Chip = ({ label, sx }) => {
  return (
    <Box 
      component="span" 
      sx={{
        display: 'inline-block',
        px: 1.5,
        py: 0.5,
        borderRadius: 4,
        fontSize: '0.8rem',
        ...sx
      }}
    >
      {label}
    </Box>
  );
};

export default UserDashboard; 