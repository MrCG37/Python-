// 选择题题库
var local_database = [{
  "name": "下列哪个语句能正确打印出以下效果？",
  "name2":"1314",
  "daan": "C",  
  "shoucang":false,
  "content": [">>>print(13+14)", ">>>print(‘13+14’)", ">>>print(‘13’+”14”)", ">>>print(“13”+14)"]
},
{
  "name": "下列哪个语句能正确打印出以下效果？",
  "name2":"我爱Python",
  "daan": "D",
  "shoucang":false,
  "content": [">>>print 我爱Python", ">>>print(我爱Python)", ">>>print(‘我爱Python”)", ">>>print(“我爱Python”)"]
},
{
  "name": "下列哪个语句不能实现以下输出效果？",
  "name2":"Hello,\nWorld!",
  "daan": "B",
  "shoucang":false,
  "content": ["print(‘Hellod,\n World!’)", "print(‘Hello，’) print(‘World!’,end=’’)", "(‘Hello，’) (“World!”)", "print(‘’‘Hello， World!’’’)"]
// A选项中的\n不显示，暂未找到解决办法
},
{
  "name": "小明在编码区输入以下语句后报错，请问他报错的可能原因是？",
  "name2":">>>print\n（‘99999999999999999999999999999999999999’）",
  "daan": "C",
  "shoucang":false,
  "content": ["打印数字不需要带有引号", "打印数字不需要带有括号", "括号或引号未在英文输入法下输入", "该数据太大，出现了数据溢出"]

},
{
  "name": "下列代码的运行结果是?",
  "name2":">>>print 2< 1",
  "daan": "D",
  "shoucang":false,
  "content": ["1", "2", "2<1", "False"]
},
{
  "name": "判断下列语句报错的原因",
  "name2":"if 1>2: \n print(2)",
  "daan": "B",
  "shoucang":false,
  "content": ["If语句后不需要加冒号", "缩进格式错误", "在数学上，应为1<2", "Print函数里要加引号"]
},
{
  "name": "运行以下代码，运行结果为？",
  "name2":"score=85\nif score<60:\nprint('你没有及格。')\nelif 60<=score<80: \nprint('你的成绩良好！')",
  "daan": "A",
  "shoucang":false,
  "content": ["（终端未显示任何内容）", "报错", "你没有及格。", "你的成绩良好！"]
},
{
  "name": "出现IndentationError: expected an indented block报错的原因是",
  "daan": "D",
  "shoucang":false,
  "content": ["未切换英文输入法", "条件未给出", "变量定义出错", "缩进格式错误"]
},
{
  "name": "下面几个关于if条件的表述中，哪个选项的说法是错误的?",
  "daan": "B",
  "shoucang":false,
  "content": ["如果满足if条件，计算机就会准确执行if条件内部的命令。", "如果想用代码实现“打印”的操作，应该用if条件判断语句。", "if a>=6:下面跟的内部命令需要向右缩进。", "if条件的含义是如果....就"]
},
{
  "name": "下面程序的执行顺序是",
  "name2":"historyscore=26\nif historyscore>=60:\nprint('你已经及格')\nif historyscore>=80:\nprint('你很优秀')\nelse:\nprint( '你只是一般般')\nelse:\nprint( '不及格' )\nif historyscore<30:\nprint('学渣')\nelse:\nprint( '还能抢救一下' )\nprint( '程序结束' )",
  "daan": "C",
  "shoucang":false,
  "content": ["赋值模块: historyscore=26 -> Print()代码块: print(程序结束)", "赋值模块: historyscore=26 -> 判断是否大于等于60 -> 执行if下的代码块-> Print()代码块: print(程序结束)", "赋值模块: historyscore=26 -> 判断是否大于等于60 -> 执行else下的代码块-> Print()代码块: print(“程序结束”)", "赋值模块: historyscore=26 -> 判断是否大于等于60 -> 执行if下的代码块->执行else'下的代码块 -> Print()代码块: print('程序结束)"]
},
{
  "name": "关于Python循环结构，以下选项中描述错误的是",
  "daan": "C",
  "shoucang":false,
  "content": ["循环中的范围字段可以是字符串和range()函数等", "若有两层循环，在内层循环使用break只能跳出一层循环，外层循环可继续", "若有两层循环，在内层循环使用continue语句可以直接使外层循环进入下一轮", "Python中循环使用range()函数不包括右边界"]
},
{
  "name": "以下代码表示的含义是：",
  name2:"x=0\nfor i in range(1,10):\nx=x+i\nprint(x)",
  "daan": "C",
  "shoucang":false,
  "content": ["1+10的和", "1+9的和", "1~9所有整数和", "1~10所有整数和"]
},
{
  "name": "下列循环结构用法错误的是：",
  "daan": "B",
  "shoucang":false,
  "content": ["for_count in range(20):", "for i in range(10,0,2):", " for i in range(0,10):", "while s<50:"]
},
{
  "name": "以下程序的输出结果是：",
  name2:"x= 10\nwhile x>0:\nx =x- 1\nif not x%2==0:\ncontinue\nelse:\nprint(x,end = ‘’)",
  "daan": "C",
  "shoucang":false,
  "content": ["96421", "866420", "86420", "86419"]
},
{
  "name": "请补全代码：求5名学生各自3科成绩的平均成绩 ",
 name2:"for in    ①   \nprint(“第”, i, “位同学”)\na = 0\nfor j in    ②\na = a + int(input(“请输入第” + str(j) + “科考试成绩”))\nprint(“该学生的平均成绩为”, a/3)",
  "daan": "A",
  "shoucang":false,
  "content": ["range(1,6)   range(1,4)", "range(0,6)   range(1,4):", "range(1,6)   range(0,4):", "range(0,6)   range(0,4)"]
},
{
  "name": "运行以下代码，输出结果应为？",
  name2:"list1=[“a”,1,”b”,2]\ndel list[1:3]\nprint(list1)",
  "daan": "D",
  "shoucang":false,
  "content": ["[1,”b”]", "[1,2]", "[“b”,2]", "[“a”,2]"]
},
{
  "name": "已知列表x=list(range(9))，那么执行语句del x[:2]后，x的值为：",
  "daan": "D",
  "shoucang":false,
  "content": ["[1,3,5,7,9]", "[1,3,5,7]", "[0,1,3,5,7]", "[2,3,4,5,6,7,8]"]
},
{
  "name": "运行下列程序，结果为：",
  name2:"	list1=[‘520’,’13’,’14]\nprint(len(list1))",
  "daan": "A",
  "shoucang":false,
  "content": ["3", "5", "6", "7"]
},
// {
//   "name": "下列数据中不属于列表的是",
//   "daan": "A",
//   "shoucang":false,
//   "content": ["{23,45,56,78}", "[23,45,5.6,7.8]", "[23,45,"Info",'a']", "["A", "B",”C","D"]"]
// },这道题的CD选项en要报错，没得整，不晓得是哪里跟小程序本身语法冲突了

//{
//  "name": "list1= ["HAIDIAN", "XINXI", 1997, 2018]，则list1[0: -1]的值为？",
//  "daan": "B",
//  "shoucang":false,
//  "content": ["[ ]", "[ ]", "["HAIDIAN","XINXI",1997,2018]", "[2018]"]
//},不说了好吧，跟上题一样，方括号里面带字母就会冲突
]
module.exports = {
  postList: local_database
}