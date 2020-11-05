// 选择题题库
var local_database = [{
  "name": "以下选项中符合Python语言变量命名规则的是",
  // "name2":"1314",
  "daan": "D",  
  "shoucang":false,
  "content": ["1abc", "return", "xyz#abc", "student_name"]
},  
{"name": "以下选项不属于 Python 整数类型的是",
// "name2":"1314",
"daan": "D",  
"shoucang":false,
"content": ["二进制", "十进制", "八进制", "十二进制"]
}, 
{"name": "关于Python语言的浮点数类型，以下选项中描述错误的是",
// "name2":"1314",
"daan": "C",  
"shoucang":false,
"content": ["浮点数类型表示带有小数的类型", "Python语言要求所有浮点数必须带有小数部分", "小数部分不可以为0", "浮点数类型与数学中实数的概念一致"]
},
{"name": "关于Python语言数值操作符，以下选项中描述错误的是",
// "name2":"1314",
"daan": "B",  
"shoucang":false,
"content": ["x//y表示x与y之整数商，即不大于x与y之商的最大整数", "x**y表示x的y次幂，其中，y必须是整数", "x%y表示x与y之商的余数，也称为模运算", "x/y表示x与y之商"]
},
{"name": "分别给a,b,c,d四个变量赋值，具体如下：",
"name2":"a=100\nb=3.14\nc=”xyz”\nd=”uvw”",
"daan": "B",  
"shoucang":false,
"content": ["100+3.14 “xyz”+”uvw”", "103.14 xyzuvw", "103.14 “xyzuvw”", "100+3.14 xyzuvw "]
},


]
module.exports = {
  postList: local_database
}