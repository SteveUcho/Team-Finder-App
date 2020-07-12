import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Link from './Link'

class LinkList extends Component {
    render() {
        return (
            <div>
                {this.props.feed.links.map((link) =>
                    <Link link={link} />
                )}
            </div>
        )
    }
}

export default createFragmentContainer(LinkList, {
    feed: graphql`
        fragment LinkList_feed on Feed {
            links {
                ...Link_link
            }
            # ...Link_link
        }`
    }
)
