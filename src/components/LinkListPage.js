import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Enviroment'
import LinkList from './LinkList'

const LinkListPageQuery = graphql`
    query LinkListPageQuery {
        feed(last: 100, orderBy: { createdAt: desc }) {
            # links {
            #     ...LinkList_links
            # }
            ...LinkList_feed
        }
    }
`

class LinkListPage extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={LinkListPageQuery}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return <LinkList feed={props.feed} />
                    }
                    return <div>Loading</div>
                }}
            />
        )
    }
}
  
export default LinkListPage