>基於jquery的自動生成表格的插件，可以合并單元格，兼容commonjs，amd,cmd规范，可以在node环境中使用

#### 配置參數
```javascript

new mtable({
        tableId:'',//生成表格的ID
        tableClass:'',//class名
        tableParent:'',//生成的表格插入的div,如果不設置則為body
        theade:'',//表頭
        addDom:''//生成表格的觸發按鈕，可以不設置
},data)

```
  
  #### 示例
  ```javascript
 var data = [
        { 'a': '小明', 'b': '100' },
        { 'a': '小明', 'b': '250' },
        { 'a': '小明', 'b': '260' },
        { 'a': '小明', 'b': '270' },
        { 'a': '小花', 'b': '90' },
        { 'a': '小花', 'b': '190' }
    ]
    var c = new mtable({
        tableid: 'm',
        adddom: ".add",
        tableclass: 'table table-bordered',
        tableparent: '.tcon',
        theade: '<td>姓名</td><td>价格</td>',
        mergeCells: true //是否自动合并单元格，默认不合并
    }, data)

    //node
    var mtable=require('mtable.js')
    var m=new mtable({

    },data)
```