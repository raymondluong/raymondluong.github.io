import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const {
      title, date, description, tags,
    } = this.props.data.node.frontmatter
    const { slug, tagSlugs } = this.props.data.node.fields

    return (
      <div className="post">
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM D, YYYY')}
          </time>
          <span className="post__meta-divider" />
          {tagSlugs &&
            tagSlugs.map((tagSlug, i) => (
              <span className="post__meta-link" key={tagSlug[i]}>
                <Link to={tagSlug[i]} className="post__meta-category-link">
                  {tags[i]}
                </Link>
                <span className="post__meta-divider" />
              </span>
            ))}
        </div>

        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>
          Read more
        </Link>
      </div>
    )
  }
}

export default Post
