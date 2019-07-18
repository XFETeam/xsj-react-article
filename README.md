# xsj-react-article

> 

[![NPM](https://img.shields.io/npm/v/xsj-react-article.svg)](https://www.npmjs.com/package/xsj-react-article) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save xsj-react-article
```

## Usage

```jsx
import React, { Component } from 'react'

import Article from 'xsj-react-article'

class Example extends Component {
  render () {
    return (
      <Article content={this.state.content} style={{fontSize: '16px', lineHeight: '24px'}} />
    )
  }
}
```
## Props

| Name    | Description      | Defalt    | Example                     | Type   |
| ------- | ---------------- | --------- | --------------------------- | ------ |
| content | 获取的文章代码段 | undefault | 'article' | string |
| style   | 自定义文本样式   | {}        | {fontSize: '16px'}          | object |



## License

MIT © [browniu](https://github.com/browniu)
