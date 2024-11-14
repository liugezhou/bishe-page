---
title: 基于微信小程序校园快递代取系统
date: 2024/10/07
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

### 校园快递代取系统概述
本校园快递代取系统分为用户端、配送员端和管理员端。用户端和配送员端基于微信小程序开发，管理员端则基于后台网页端。系统采用Java编程语言、MySQL数据库，使用IDEA开发工具和SSM框架进行开发。系统主要分为用户、管理员和配送员三个角色。

### 用户功能
用户可以通过注册和登录小程序，发布取件信息，进行在线评价和投诉，参与论坛发帖和回复，以及联系客服。

### 配送员功能
配送员可以查看用户的快递代取信息，在线接单，并查看相关的投诉和评价。

### 管理员功能
管理员负责对用户和配送员信息进行管理，对配送和接单信息进行管理，处理评价和投诉，管理论坛公告，以及轮播图和客服信息的管理。

### 系统特点
本系统功能齐全，文档包括论文和答辩PPT，非常适合作为微信小程序的毕业设计和课程设计参考学习。

## 二、主网站展示

### 小程序端部分展示
<Swiper :height="1200" :width="800" :items="['https://img.liugezhou.online/bishe/mini-kuaidi/1.png','https://img.liugezhou.online/bishe/mini-kuaidi/2.png','https://img.liugezhou.online/bishe/mini-kuaidi/3.png','https://img.liugezhou.online/bishe/mini-kuaidi/4.png','https://img.liugezhou.online/bishe/mini-kuaidi/5.png','https://img.liugezhou.online/bishe/mini-kuaidi/6.png']"/>

### 后台管理系统部分展示
<Swiper :items="['https://img.liugezhou.online/bishe/mini-kuaidi/7.png','https://img.liugezhou.online/bishe/mini-kuaidi/8.png','https://img.liugezhou.online/bishe/mini-kuaidi/9.png','https://img.liugezhou.online/bishe/mini-kuaidi/10.png','https://img.liugezhou.online/bishe/mini-kuaidi/11.png']"/>

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

系统分为用户和管理员，配送员三个角色


### 用户微信小程序端的主要功能有：

1.用户注册和登陆微信小程序

2.用户查看首页的快递代取记录信息

3.用户可以在线发布快递代取信息，可以对发布记录进行修改和删除，搜索

4.用户可以在线发贴，查看帖子，回复帖子

5.用户查看自己的快递接单信息，对接单员进行在线评价评分，在线投诉

6.用户个人中心修改个人资料，修改密码，修改头像

7.用户个人中心在线联系客服信息，和客服在线交流

8.用户对发帖记录信息进行管理

9.退出登陆


### 配送员微信小程序端的主要功能有：

1.配送员注册登陆微信小程序系统

2.配送员查看用户发布的配送订单信息，在线接单

3.配送员查看评价和投诉信息

4.退出登陆


### 管理员的主要功能有：

1.管理员输入账户登陆后台

2.个人中心：管理员修改密码和账户信息

3.用户管理：对注册的用户信息进行删除，查询，添加，修改

4.配送员管理：对配送员信息进行添加，修改，删除，查询

5.快递代取管理：查看用户发布的快递代取信息

6.物流公司信息：对物流公司信息进行查询，修改，删除，添加

7.接受订单管理：对配送员接受用户的订单信息进行查询，修改，删除

8.评分管理：用户对配送员的评分进行查询

9.投诉管理：对用户的投诉进行查询

10.分数管理：对用户的评分进行查询，修改，删除，添加

11.通知公告：对系统的通知公告进行添加，修改，查询，删除

12.轮播图管理：对网站轮播图进行添加，修改，查询，删除

13.在线客服：对用户发送的客服信息进行查看，回复

14.退出系统

:::tip
1. 每个项目目录下的 Readme.md 文件中都详细记录了如何进行项目的安装和运行
2. 如果查看文档没有运行成功，可以联系帮助远程调试，保证每个项目都可以在电脑上运行成功
3. 此毕设项目源码下载，可添加[我的微信](https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp)，为你发送项目设计源码
:::