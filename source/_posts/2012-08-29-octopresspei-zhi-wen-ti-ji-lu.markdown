---
layout: post
title: "octopress配置问题记录"
date: 2012-08-29 13:55
comments: true
categories: [octopress]
---

这两天一直在倒腾Octopress博客，期间遇到了很多问题， 在此记录下来，希望对后来者有一定的作用。

> ### related_posts配置问题

**问题描述**: 为octopress新手， 我搜索了一些老手的配置加入到了_config.xml中， 在运行rake generate时报错。
{% codeblock %}
Running the classifier... this could take a while.
../Users/piggytommy/.rvm/rubies/ruby-1.9.3-p194/lib/ruby/1.9.1/matrix.rb:930:in `block in inverse_from': Not Regular Matrix (ExceptionForMatrix::ErrNotRegular)
  from /Users/piggytommy/.rvm/rubies/ruby-1.9.3-p194/lib/ruby/1.9.1/matrix.rb:920:in `upto'
  from /Users/piggytommy/.rvm/rubies/ruby-1.9.3-p194/lib/ruby/1.9.1/matrix.rb:920:in `inverse_from'
  from /Users/piggytommy/.rvm/rubies/ruby-1.9.3-p194/lib/ruby/1.9.1/matrix.rb:912:in `inverse'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/classifier-1.3.3/lib/classifier/extensions/vector.rb:96:in `SV_decomp'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/classifier-1.3.3/lib/classifier/lsi.rb:282:in `build_reduced_matrix'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/classifier-1.3.3/lib/classifier/lsi.rb:136:in `build_index'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/classifier-1.3.3/lib/classifier/lsi.rb:65:in `add_item'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/post.rb:165:in `block in related_posts'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/post.rb:165:in `each'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/post.rb:165:in `related_posts'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/post.rb:185:in `render'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/site.rb:193:in `block in render'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/site.rb:192:in `each'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/site.rb:192:in `render'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/lib/jekyll/site.rb:40:in `process'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/gems/jekyll-0.11.2/bin/jekyll:250:in `<top (required)>'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/bin/jekyll:23:in `load'
  from /Users/piggytommy/.rvm/gems/ruby-1.9.3-p194/bin/jekyll:23:in `<main>'
{% endcodeblock %}
**解决方法:** 粗略的从错误观察到是related_posts的问题， 进入_config.xml, 删除如下选项即可。

{% codeblock %}
lsi: ture
{% endcodeblock %}



> ### 部署延迟问题

**问题描述**: 运行rake deploy之后刷新页面无法现实最新改动， 清除缓存，换浏览器，换电脑还是无法看到最新改动.

**原因描述**: github pages部署后存在一定的延迟， 该延迟不可控。

**解决方法**: 很鸡肋， **出去抽根烟，等!**.

> ### 分类列表中文无法显示问题

**问题描述**:  加入category_list_tag插件，用与右侧显示“分类列表”, 部署之后页面显示如下错误. 

{% codeblock %}
Liquid error: incompatible encoding regexp match (ASCII-8BIT regexp with UTF-8 string)
{% endcodeblock %}

**原因描述**:  category_list_tag插件文件 category_list_tag.rb编码问题

**解决方法**: 在category_list_tag中添加编码注释 

{% codeblock %}
# encoding: utf-8 
{% endcodeblock %}
