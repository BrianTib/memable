import decode from 'jwt-decode';

class AuthService {
    static TOKEN_KEY = 'id_token';

    getProfile() {
        const token = this.getToken();
        return token ? decode(token) : null;
    }

    isLoggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            return decoded.exp < Date.now() / 1000;
        } catch (error) {
            return true;
        }
    }

    getToken() {
        return localStorage.getItem(AuthService.TOKEN_KEY);
    }

    login(idToken) {
        localStorage.setItem(AuthService.TOKEN_KEY, idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem(AuthService.TOKEN_KEY);
        window.location.assign('/login');
    }
}

export default new AuthService();
