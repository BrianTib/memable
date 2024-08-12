import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allProfiles {
        users {
            _id
            name
            skills
        }
    }
`;

export const QUERY_CURRENT_ROUND = gql`
    query currentRound($id: ID!) {
        currentRound(id: $id) {
            _id
            prompt {
                _id
                text
            }
            players {
                _id
            }
            responses {
                _id
                player {
                    _id
                }
                totalScore
            }
            totalRoundScore
            createdAt
            updatedAt
        }
    }
`;

export const QUERY_SESSION = gql`
    query session($id: ID!) {
        session(id: $id) {
            _id
            isOnGoing
            currentRound {
                _id
                prompt {
                    _id
                    text
                }
                players {
                    _id
                }
                responses {
                    _id
                    player {
                        _id
                        username
                    }
                    totalScore
                }
                totalRoundScore
                createdAt
                updatedAt
            }
            rounds {
                _id
                prompt {
                    _id
                    text
                }
                players {
                    _id
                }
                responses {
                    _id
                    player {
                        _id
                        username
                    }
                    totalScore
                }
                totalRoundScore
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
