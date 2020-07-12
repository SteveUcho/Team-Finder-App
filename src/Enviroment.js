import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime'
  
  // 2
  const store = new Store(new RecordSource())
  
  // 3
  const network = Network.create(function (operation, variables) {
    // 4
    return fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5NDI0MjIyMX0.dTrZdLRSFKxhenn9PtQfUwbenj3KBM63B0gYfA1_bnw"
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
})
  
  // 5
  const environment = new Environment({
    network,
    store,
  })
  
  // 6
  export default environment