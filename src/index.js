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
    style: PropTypes.object,
    rules: PropTypes.array,
    className: PropTypes.string
  }

  static defaultProps = {
    content: 'test content',
    style: {fontSize: '16px'},
    className: 'xsj-article',
    rules: [{
      shouldProcessNode: function (node) {
        return node.attribs && node.attribs['class'] === 'detail_con'
      },
      processNode: function (node, children, index) {
        return React.createElement('div', {className: 'xsj-article-content', key: index}, children)
      }
    }]
  }

  render() {

    const {content, rules, ...restProps} = this.props

    // init content
    const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
    const processingInstructions = rules.concat([
      // default
      {
        shouldProcessNode: function () {
          return true
        },
        processNode: processNodeDefinitions.processDefaultNode
      }
    ])
    const htmlToReactParser = new HtmlToReactParser()
    const ReactComponent = htmlToReactParser.parseWithInstructions(content, isValidNode,
      processingInstructions)

    return (
      <div {...restProps}>
        {ReactComponent}
      </div>
    )
  }

}
