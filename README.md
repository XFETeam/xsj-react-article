# xsj-react-article

> 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

对从后台获取的富文本文章数据进行解析，还原DOM结构，并对部分自带样式进行过滤以适配移动端

```json
{
  "code": 1,
  "msg": "OK",
  "data": [
    {
      "id": "11",
      "catid": "4978",
      "title": "《剑网3》怒海争锋明日公测 不得不看的福利集锦",
      "thumb": "http://www.imengta.com/uploadfile/2019/0705/20190705032625680.jpg",
      "keywords": "",
      "description": "群雄夺擂，逆转狂澜！《剑网3》全新资料片怒海争锋即将于6月20日正式公测！全新地图鲲鹏岛满载9段剧情动画；12位全新NPC登上江湖舞台；海岛",
      "url": "http://www.imengta.com/show-4978-11-1.html",
      "listorder": "0",
      "inputtime": "1562311556",
      "updatetime": "1562311585",
      "content": "<div class=\"detail_con\" style=\"margin: 0px; padding: 0.05208rem 0px 0.18229rem; overflow: hidden; width: 656.25px; line-height: 0.13542rem; color: rgb(85, 85, 85); font-size: 10.2088px; 鹤梦套江湖套限时免图谱，附赠80-20外装折扣券明日开启；积分兑换代金券；充消五档奖励回馈，奇趣坐骑高跷搞怪来袭，3倍积分7天限时回馈；回归账号领点卡等七大福利回馈广大侠士。剑网3》全新资料片&ldquo;怒海争锋&rdquo;将于明日正式公测，诚邀侠士前往，共同书写东海新篇章！</p>\r\n<p style=\"text-indent: 2em;\">《剑网3》官方网站 jx3.xoyo.com</p>\r\n<div>&nbsp;</div>\r\n</div>\r\n<p>&nbsp;</p>\r\n..."
    }
  ]
}
```



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

| Name    | Description      | Defalt    | Type   |
| ------- | ---------------- | --------- | ------ |
| content | 获取的文章代码段 | 'test content' | string |
| style   | 自定义文本样式   | {fontSize: '16px'} | object |
| className | 定义一级类名 | xsj-article | string |
| rules | 字符串Dom [匹配规则](https://github.com/mikenikles/html-to-react) | RULES👇 | array |

默认的规则集：

```jsx
const RULES =[{
      shouldProcessNode: function (node) {
        return node.attribs && node.attribs['class'] === 'detail_con'
      },
      processNode: function (node, children, index) {
        return React.createElement('div', {className: 'xsj-article-content', key: index}, children)
      }
    }]
```

## Update

### 0.0.2

* 提供自定义类名接口
* 开放自定义匹配规则接口
* 优化部分逻辑，提高可拓展性

## License

MIT © [browniu](https://github.com/browniu)
