import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation signupMutation($name: String!, $email: String!, $password: String!) {
        signup(email: $email, password: $password, name: $name) {
            user {
            id
            }
        }

        login(email: $email, password: $password) {
            token
            user {
                id
            }
        }
    }
`

export default (name, email, password, callback) => {
    const variables = {
        // // 1 
        // createUserInput: {
        //     name,
        //     authProvider: {
        //         email: {
        //             email,
        //             password
        //         }
        //     },
        //     clientMutationId: ""
        // },
        // // 2
        // signinUserInput: {
        //     email: {
        //         email,
        //         password
        //     },
        //     clientMutationId: ""
        // },
        name: name,
        email: email,
        password: password
    }

    // 3
    commitMutation(
        environment,
        {
            mutation,
            variables,
            // 4
            onCompleted: (response) => {
                const id = response.signup.user.id
                const token = response.login.token
                callback(id, token)
            },
            onError: err => console.error(err),
        },
    )
}
