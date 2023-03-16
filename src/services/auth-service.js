import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'user/authenticate', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     });
//   }
}

export default new AuthService();