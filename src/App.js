import { useEffect } from 'react';
import './App.css';
import Auth from './pages/auth-page/auth';
import SignUpPage from './pages/sign-up-page/sign-up';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Profile from './pages/profile-page/profile';
import ProfileManage from './pages/profile-manage-page/profile-manage';
import UpdateProfileInfoModal from './pages/profile-manage-page/components/update-profile-modal/update-profile-modal';
import Home from './pages/home-page/home';
function App() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        // Hiển thị thông tin người dùng đã đăng nhập trên giao diện
        const email = user.email;
        const displayName = user.displayName;
        // ...
      } else {
        console.log("User firebase is logged out");
        // Hiển thị giao diện đăng nhập
        // ...
      }
    });
  }, []);
  return (
    <Home />
  );
}

export default App;
