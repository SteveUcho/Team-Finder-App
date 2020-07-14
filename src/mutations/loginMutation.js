import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation loginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
            }
        }
    }
`

export default (email, password, callback) => {
    const variables = {
        // input: {
        //     email: {
        //         email,
        //         password
        //     },
        //     clientMutationId: ""
        // },
        email: email,
        password: password
    }
  
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                const id = response.signinUser.user.id
                const token = response.signinUser.token
                callback(id, token)
            },
            onError: err => console.error(err),
        },
    )
}
  