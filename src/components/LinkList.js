import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import Link from './Link'

class LinkList extends Component {
    render() {
        return (
            <div>
                {this.props.feed.links.map(({link}) =>
                    <Link key={link.id} link={link} />
                )}
            </div>
        )
    }
}

export default createFragmentContainer(LinkList, graphql`
    fragment LinkList_feed on Feed {
        links {
            ...Link_link
        }
    }`
)
