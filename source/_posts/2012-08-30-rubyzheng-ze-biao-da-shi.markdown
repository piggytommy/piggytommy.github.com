---
layout: post
title: "ruby正则表达式"
date: 2012-08-30 13:24
comments: true
categories:  [ruby]
---

ruby正则表达式的使用一直是用的少，忘的快。把必要把常用的用法记录一下， 增强记忆力。

###ruby正则表达式的建立
-  使用"//"建立
{% codeblock lang:ruby%}
/ruby/
{% endcodeblock %}

-  使用类方法建立

{% codeblock lang:ruby%}
Regexp.new(str)
{% endcodeblock %}

-  使用"%r" 建立
{% codeblock lang:ruby%}
%r(ruby)
%r<ruby>
%r|ruby|
{% endcodeblock %}

### 正则表达式的匹配
- 使用"=~" 进行匹配
{% codeblock lang:ruby%}
/ruby/ =~ "i love ruby"
{% endcodeblock %}
匹配成功时返回匹配成功的起始位置， 不成功时返回nil

- 以一般文字进行匹配
{% codeblock lang:ruby%}
/ruby/ =~ "ruby is cool."
{% endcodeblock %}
以上代码只是单纯的匹配字符串里面是否包含相同的文字

- 匹配行尾和行首
{% codeblock lang:ruby%}
/^java$/ =~ "java"                     #匹配成功
/^java$/ =~ "java is easy to learn. "  #匹配失败
{% endcodeblock %}
"^"和"$"是具有特殊意义的字符， 即转义字符(meta-character)

- 指定需要匹配成功的文字范围
{% codeblock lang:ruby%}
[AB]             -----A 或者 B
[a-z]            -----a到z
[a-zA-z_]        -----所有英文字母与_(可用来匹配变量名) 
[^AB]            -----匹配A，B以外的内容
[^A-Za-z]        -----匹配英文字母以外内容
{% endcodeblock %}

- 匹配任意字符
{% codeblock lang:ruby%}
/ru.y/=~"ruby"                 #匹配成功
{% endcodeblock %}

- 使用反斜杠的表达式
{% codeblock lang:ruby%}
\s       -----匹配空白（会与空白字符， 定位字符，换行字符， 换页字符匹配成功）
\d       -----与0~9之间的数字匹配成功
\w       -----与英文和数字匹配成功
\A       -----与字符串前端匹配成功(注意与行首和行尾的区别)
\Z       -----与字符串末端进行匹配
{% endcodeblock %}


- 反复出现
{% codeblock lang:ruby%}
*        ------出现0次以上
+        ------出现1次以上
?        ------出现0次或者1次
*?       ------出现0次以上，但取最短的匹配结果
+?       ------出现1次以上，但取最短的匹配结果
{% endcodeblock %}


- 正则表达式的选项
{% codeblock lang:ruby%}
i        ------忽略英文大小写
s        ------Shift_JIS编码
e        ------EUC-JP编码
u        ------UTF-8编码
n        ------不考虑文字编码
x        ------忽略正则表达式内部的空白，并忽略“#”后面的内容。
m        ------多行匹配， 让"."能与换行符号进行匹配
{% endcodeblock %}
