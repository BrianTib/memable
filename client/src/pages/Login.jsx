import { SIGN_UP, LOGIN } from '../../util/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Loading from '../components/Loading';
import styles from './Login.module.css';

import Auth from '../../util/auth';

function SubmitButton({ children }) {
    return (
        <button
            type="submit"
            className="bg-[#55883A] px-8 py-3 rounded-lg text-white font-bold border border-transparent">
            {children}
        </button>
    );
}

function ToggleButton({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-white text-[#55883A] px-8 py-3 rounded-lg font-bold border-2 border-[#55883A]">
            {children}
        </button>
    );
}

export default function Login() {
    const [isLoginAction, setIsLoginAction] = useState(true);
    const [formErrorMessage, setFormErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // This is the graphql mutation hook
    const [signUp, signUpMutation] = useMutation(SIGN_UP);
    const [login, loginMutation] = useMutation(LOGIN);

    const clearForm = () => {
        setFormErrorMessage('');
        setFormData({ username: '', password: '' });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setFormErrorMessage('');

        // Check that the username is alphanumeric
        if (!/^[a-zA-Z0-9_]*$/.test(formData.username)) {
            setFormErrorMessage('Username must be alphanumeric');
            return;
        }

        try {
            if (isLoginAction) {
                // Login
                const { data } = await login({
                    variables: {
                        username: formData.username.trim().toLowerCase(),
                        password: formData.password,
                    },
                });

                console.log('login data', data);
                Auth.login(data.login.token);
                return;
            }

            // Sign up
            if (formData.password.length < 6) {
                setFormErrorMessage('Password must be at least 6 characters long');
                return;
            }

            const { data } = await signUp({
                variables: {
                    username: formData.username.trim().toLowerCase(),
                    password: formData.password,
                },
            });

            Auth.login(data.signUp.token);
        } catch (e) {
            if (e.message) {
                setFormErrorMessage(e.message);
            }
        }
    };

    if (signUpMutation.loading || loginMutation.loading) {
        return <Loading />;
    }

    return (
        <div className="relative bg-gray-200 min-h-screen flex items-center justify-center px-4 py-8">
            <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full max-w-md mt-8 mb-8 md:my-0">
                <div id={styles.pepeHiding} className="cursor-pointer mx-auto w-32 md:w-40">
                    <img
                        src="/images/pepe-smiling.webp"
                        alt="Pepe the Frog"
                        className="w-full h-auto"
                    />
                </div>
                <div className="relative z-10 bg-white p-6 md:p-8 rounded-lg flex flex-col items-center shadow-2xl mt-4">
                    <h2 className="text-[#55883A] text-4xl md:text-5xl font-bold text-center">
                        Welcome
                    </h2>

                    <span className="text-gray-500 text-sm md:text-base">
                        Sign in or create an account
                    </span>

                    <h3 className="text-[#55883A] text-xl md:text-2xl font-bold w-full my-4">
                        {isLoginAction ? 'Login' : 'Sign Up'}
                    </h3>

                    {formErrorMessage && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 w-full mb-4 text-sm">
                            {formErrorMessage}
                        </div>
                    )}

                    <label htmlFor="username" className="flex flex-col gap-2 w-full mb-6">
                        <span className="text-sm font-medium">Username</span>
                        <input
                            className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-[#55883A] focus:ring-0 focus:text-[#55883A]"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            minLength={4}
                            maxLength={16}
                            value={formData.username}
                            onChange={event =>
                                setFormData(prev => ({ ...prev, username: event.target.value }))
                            }
                            required
                        />
                        <small className="text-[#55883A] text-xs">
                            Your username should be lowercase and alphanumeric. It must also be at
                            least 4 characters long
                        </small>
                    </label>

                    <label htmlFor="password" className="flex flex-col gap-2 w-full mb-6">
                        <span className="text-sm font-medium">Password</span>
                        <input
                            className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-[#55883A] focus:ring-0 focus:text-[#55883A]"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="on"
                            minLength={6}
                            maxLength={128}
                            value={formData.password}
                            onChange={event =>
                                setFormData(prev => ({ ...prev, password: event.target.value }))
                            }
                            required
                        />
                        <small className="text-[#55883A] text-xs">
                            Your password should be at least 6 characters long
                        </small>
                    </label>

                    <div className="flex flex-col w-full gap-4 mt-2">
                        {isLoginAction ? (
                            <>
                                <SubmitButton>Login</SubmitButton>
                                <ToggleButton
                                    onClick={() => {
                                        clearForm();
                                        setIsLoginAction(false);
                                    }}>
                                    Sign up
                                </ToggleButton>
                            </>
                        ) : (
                            <>
                                <ToggleButton
                                    onClick={() => {
                                        clearForm();
                                        setIsLoginAction(true);
                                    }}>
                                    Login
                                </ToggleButton>
                                <SubmitButton>Sign up</SubmitButton>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>

    
    );
}
