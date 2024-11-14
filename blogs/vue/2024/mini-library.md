---
title: 基于微信小程序图书借阅管理系统
date: 2024/11/09
tags:
 - 微信小程序
 - Java
author: 毕设精选
---

::: tip
本系统非常适合作为微信小程序的毕业设计或课程设计参考。    
下图展示了成品项目的展示。  
为了保证项目的唯一性，每个小程序在功能保持一致的情况下，会对样式、主题色、整体布局等都会进行个性化的修改。

::: 

## 一、项目介绍
### 微信小程序图书借阅管理系统概述
本图书借阅管理系统分为用户端和管理员端。用户端基于微信小程序开发，管理员端则采用Java编程语言、MySQL数据库、SSM框架，并使用IDEA作为开发工具。系统主要分为用户和管理员两个角色。

### 用户功能
用户可以通过注册和登录小程序，查看系统功能，进行图书搜索和分类浏览，在线借阅图书，查看借阅记录，进行在线留言，归还图书，以及缴纳罚金等操作。

### 管理员功能
管理员负责对图书进行全面管理，包括图书分类管理、图书借阅管理、图书续借管理、图书归还管理、罚金管理、留言板管理，以及公告和轮播图的管理。

### 系统特点
本系统功能齐全，文档包括论文和答辩PPT，非常适合作为微信小程序的毕业设计和课程设计参考学习。

## 二、主网站展示

### 小程序端部分展示

<Swiper :height="1200" :width="800" :items="['https://img.liugezhou.online/bishe/mini-tushu/1.png','https://img.liugezhou.online/bishe/mini-tushu/2.png','https://img.liugezhou.online/bishe/mini-tushu/3.png','https://img.liugezhou.online/bishe/mini-tushu/4.png','https://img.liugezhou.online/bishe/mini-tushu/5.png']"/>

### 后台管理系统部分展示

<Swiper :items="['https://img.liugezhou.online/bishe/mini-tushu/6.png','https://img.liugezhou.online/bishe/mini-tushu/7.png','https://img.liugezhou.online/bishe/mini-tushu/8.png','https://img.liugezhou.online/bishe/mini-tushu/9.png','https://img.liugezhou.online/bishe/mini-tushu/10.png','https://img.liugezhou.online/bishe/mini-tushu/11.png']"/>

## 三、运行环境
:::warning
jdk版本：1.8 及以上     
ide工具：IDEA ，微信小程序开发工具     
数据库: mysql5.7 （必须5.7）     
编程语言: Java     
tomcat:   8.0 及以上     
java框架：SSM     
maven: 3.6.1     
前端：layui ，微信，vue     
详细技术：HTML+CSS+JS+vue+JAVA+SSM+MYSQL+JQUERY+MAVEN+微信开发工具       
:::

## 四、主要功能

系统分为用户和管理员两个角色

### 用户微信小程序端的主要功能

1.用户注册和登陆小程序

2.查看系统的公告信息

3.用户查看图书推荐信息，在线搜索图书

4.用户可以根据分类查看图书

5.用户查看图书详情，收藏图书，对图书在线留言

6.用户在线借阅图书，填写借阅信息，生成借阅记录

7.用户个人中心修改个人资料，修改密码

7.用户个人中心查看我的借阅记录，查看借阅的审核状态，在线归还和续借图书

8.用户个人中心查看图书续借信息和图书归还信息

9.用户个人中心查看缴纳罚金信息

10.用户个人中心查看我的收藏图书信息

11.用户留言板可以在线留言

12.退出登陆


### 管理员的主要功能

1.管理员输入账户登陆后台

2.个人中心：管理员修改密码和账户信息

3.用户管理：对注册的用户信息进行删除，查询，添加，修改

4.图书分类管理：对图书的分类进行添加，修改，删除，查询

5.图书信息管理：对借阅的图书信息进行添加，修改，删除，查询

6.图书借阅管理：对用户的借阅图书申请信息进行审核，修改，删除，查询，导出，统计报表

7.图书续借管理：对用户续借的图书信息进行查询，删除，审核，修改

8.图书归还管理：对用户的图书归还信息进行查询，删除，修改，罚金处理

9.缴纳罚金管理：对用户的缴纳罚金处理信息进行查询，删除，修改

10.通知公告：对系统的通知公告进行添加，修改，查询，删除

11.轮播图管理：对网站轮播图进行添加，修改，查询，删除

12.留言板管理：对用户的留言信息进行查询，修改，回复，删除

13.退出登陆

:::tip
1. 每个项目目录下的 Readme.md 文件中都详细记录了如何进行项目的安装和运行
2. 如果查看文档没有运行成功，可以联系帮助远程调试，保证每个项目都可以在电脑上运行成功
3. 此毕设项目源码下载，可添加[我的微信](https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp)，为你发送项目设计源码
:::