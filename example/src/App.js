import React, {Component} from 'react'

import Article from 'xsj-react-article'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>
        <Article content={this.state.content} style={{
          fontSize: '16px',
          lineHeight: '24px',
          padding: '15px'
        }} />
      </div>
    )
  }

  componentDidMount() {
    fetch('static/data.json')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({content: json.data[0].content})
      })
  }
}
