export function isLoggedIn() {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('auth');
    }
    return false;
  }
  
  export function login(username, password) {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }
  
  export function logout() {
    localStorage.removeItem('auth');
  }
  