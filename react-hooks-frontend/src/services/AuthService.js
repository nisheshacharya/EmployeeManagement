import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth/';

class AuthService {

    // Login request
    login(username, password) {
        return axios
            .post(API_URL + 'login', { username, password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    // Sign-up request
    signup(username, email, password) {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password
        });
    }

    // Logout by removing JWT from local storage
    logout() {
        localStorage.removeItem('user');
    }

    // Get the current logged-in user
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));  // Contains JWT token
    }
}

export default new AuthService();
