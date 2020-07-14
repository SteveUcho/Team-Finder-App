import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime'
import { GC_AUTH_TOKEN } from './constants'
  
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
            'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
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