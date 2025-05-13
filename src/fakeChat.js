// Fake chat system to replace Firebase functionality
const initialMessages = [
  {
    id: 1,
    sender: 'پشتیبان',
    text: 'سلام! به سیستم پشتیبانی تاپ لرن خوش آمدید. چطور می‌توانم کمکتان کنم؟',
    timestamp: new Date(Date.now() - 3600000),
    isCurrentUser: false
  },
  {
    id: 2,
    sender: 'کاربر',
    text: 'سلام، من سوالی درباره دوره‌های برنامه نویسی دارم.',
    timestamp: new Date(Date.now() - 2400000),
    isCurrentUser: true
  },
  {
    id: 3,
    sender: 'پشتیبان',
    text: 'بله، چه کمکی از دست من برمی‌آید؟',
    timestamp: new Date(Date.now() - 2000000),
    isCurrentUser: false
  }
];

// Fake authentication class
class FakeAuth {
  constructor() {
    this.currentUser = {
      uid: 'user123',
      displayName: 'کاربر',
      email: 'user@example.com',
      isAnonymous: false
    };
  }

  getUserData() {
    return this.currentUser;
  }

  signIn(email, password) {
    console.log('Fake sign in with:', email, password);
    return Promise.resolve(this.currentUser);
  }

  signOut() {
    console.log('Fake sign out');
    return Promise.resolve(true);
  }
}

// Create fake auth instance
const auth = new FakeAuth();

// Function to get fake context for authentication
const useAuth = () => {
  return {
    currentUser: auth.getUserData(),
    signIn: auth.signIn,
    signOut: auth.signOut
  };
};

export { initialMessages, auth, useAuth }; 