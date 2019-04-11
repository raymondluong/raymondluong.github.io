import React, { Fragment } from 'react'
import Sidebar from '../Sidebar'
import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Fragment>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default PageTemplateDetails
