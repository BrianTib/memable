import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($username: String!, $password: String!) {
        signUp(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_SESSION = gql`
    mutation createSession {
        createSession {
            _id
        }
    }
`;

export const SUBMIT_ROUND_RESPONSE = gql`
    mutation submitRoundResponse($sessionId: String!, $title: String!, $url: String!) {
        submitRoundResponse(sessionId: $sessionId, title: $title, url: $url) {
            success
        }
    }
`;
