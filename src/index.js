import React, {Component} from 'react'
import PropTypes from 'prop-types'

const HtmlToReact = require('html-to-react')
const HtmlToReactParser = require('html-to-react').Parser
const isValidNode = function () {
  return true
}
export default class ExampleComponent extends Component {

  static propTypes = {
    content: PropTypes.string,
    style: PropTypes.object
  }
  static defaultProps = {
    content: '',
    style: {}
  }

  render() {

    const {content, style} = this.props

    // init content
    const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
    const processingInstructions = [
      // clear
      {
        shouldProcessNode: function (node) {
          return node.attribs && node.attribs['class'] === 'detail_con'
        },
        processNode: function (node, children, index) {
          return React.createElement('div', {className: 'article-content', key: index}, children)
        }
      },
      // default
      {
        shouldProcessNode: function () {
          return true
        },
        processNode: processNodeDefinitions.processDefaultNode
      }
    ]
    const htmlToReactParser = new HtmlToReactParser()
    const ReactComponent = htmlToReactParser.parseWithInstructions(content, isValidNode,
      processingInstructions)

    return (
      <div className='article' style={style}>
        {ReactComponent}
      </div>
    )
  }

}
