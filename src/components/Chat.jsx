import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Avatar, 
  IconButton,
  List,
  ListItem,
  Tooltip,
  Alert
} from '@mui/material';
import { Send, Close, InsertEmoticon, AttachFile, MoreVert } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Import from AuthContext instead of fakeChat
import { useAuth } from '../contexts/AuthContext';
// Keep the initial messages
import { initialMessages } from '../fakeChat';

const ChatContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  borderRadius: '0',
  overflow: 'hidden',
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#00b3e9',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const MessageList = styled(List)(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: '10px',
  },
}));

const MessageInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: '#fff',
  borderTop: '1px solid #eaeaea',
}));

const ChatMessage = ({ message, isCurrentUser }) => {
  const { sender, text, timestamp } = message;
  
  const MessageItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isCurrentUser ? 'flex-end' : 'flex-start',
    padding: theme.spacing(0.5, 1),
    marginBottom: theme.spacing(1),
  }));
  
  const MessageBubble = styled(Paper)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(1.5, 2),
    backgroundColor: isCurrentUser ? '#00b3e9' : '#ffffff',
    color: isCurrentUser ? '#fff' : '#000',
    borderRadius: isCurrentUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
    maxWidth: '70%',
    boxShadow: isCurrentUser 
      ? '0 1px 1px rgba(0,179,233,0.3)'
      : '0 1px 3px rgba(0,0,0,0.1)',
  }));
  
  const SenderInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  }));
  
  const MessageTime = styled(Typography)(({ theme }) => ({
    fontSize: '0.7rem',
    color: isCurrentUser ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)',
    marginTop: theme.spacing(0.5),
    alignSelf: 'flex-end',
  }));
  
  const formatTime = (date) => {
    return date instanceof Date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '00:00';
  };
  
  return (
    <MessageItem>
      {!isCurrentUser && (
        <SenderInfo>
          <Avatar 
            sx={{ 
              width: 28, 
              height: 28, 
              marginLeft: 1, 
              bgcolor: isCurrentUser ? '#1976d2' : '#f57c00',
              fontSize: '0.875rem'
            }}
          >
            {sender.charAt(0)}
          </Avatar>
          <Typography variant="body2" color="textSecondary" fontWeight="medium">
            {sender}
          </Typography>
        </SenderInfo>
      )}
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isCurrentUser ? 'flex-end' : 'flex-start' }}>
        <MessageBubble elevation={1}>
          <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
            {text}
          </Typography>
          <MessageTime>{formatTime(timestamp)}</MessageTime>
        </MessageBubble>
      </Box>
    </MessageItem>
  );
};

const Chat = ({ onClose }) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  
  const getUserName = () => {
    if (!currentUser) return 'کاربر مهمان';
    if (currentUser.isAnonymous) return 'کاربر مهمان';
    return currentUser.displayName || currentUser.email || 'کاربر';
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: Date.now(),
      sender: getUserName(),
      text: newMessage,
      timestamp: new Date(),
      isCurrentUser: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate a response after 1-3 seconds
    setTimeout(() => {
      const responseMessage = {
        id: Date.now() + 1,
        sender: 'پشتیبان',
        text: getRandomResponse(),
        timestamp: new Date(),
        isCurrentUser: false
      };
      setMessages(prev => [...prev, responseMessage]);
    }, Math.random() * 2000 + 5);
  };
  
  const getRandomResponse = () => {
    const responses = [
      'بله، چطور می‌توانم کمکتان کنم؟',
      'متوجه شدم. آیا سوال دیگری دارید؟',
      'لطفاً بیشتر توضیح دهید تا بتوانم بهتر راهنمایی کنم.',
      'حتماً، همکاران ما در اسرع وقت با شما تماس خواهند گرفت.',
      'پیشنهاد می‌کنم به بخش آموزش‌های مرتبط در سایت مراجعه کنید.',
      'ممنون از تماس شما، خوشحالم که توانستم کمک کنم.'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#fff', color: '#00b3e9', marginLeft: 1.5 }}>پ</Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              گفتگو با پشتیبانی تاپ لرن
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              آنلاین - معمولاً در کمتر از 5 دقیقه پاسخ می‌دهیم
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="گزینه‌های بیشتر">
            <IconButton color="inherit" sx={{ marginLeft: 1 }}>
              <MoreVert />
            </IconButton>
          </Tooltip>
          <IconButton onClick={onClose} color="inherit">
            <Close />
          </IconButton>
        </Box>
      </ChatHeader>
      
      <MessageList>
        {error ? (
          <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>
        ) : messages.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography color="textSecondary">هنوز پیامی ارسال نشده است. اولین پیام را ارسال کنید!</Typography>
          </Box>
        ) : (
          messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              isCurrentUser={message.isCurrentUser} 
            />
          ))
        )}
        
        <div ref={messagesEndRef} />
      </MessageList>
      
      <MessageInputContainer>
        <Tooltip title="پیوست فایل">
          <IconButton color="primary" sx={{ opacity: 0.7 }}>
            <AttachFile />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="ایموجی">
          <IconButton color="primary" sx={{ opacity: 0.7 }}>
            <InsertEmoticon />
          </IconButton>
        </Tooltip>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="پیام خود را بنویسید..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
          multiline
          maxRows={3}
          sx={{ 
            mx: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.2)',
              },
            }
          }}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          endIcon={<Send />} 
          disabled={newMessage.trim() === ''}
          onClick={handleSendMessage}
          sx={{ 
            borderRadius: '20px',
            minWidth: '40px',
            height: '40px'
          }}
        >
          ارسال
        </Button>
      </MessageInputContainer>
    </ChatContainer>
  );
};

export default Chat; 