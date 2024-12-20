---
title: 基于微信小程序校园二手交易系统
date: 2024/11/14
tags:
 - 微信小程序
 - Java
author: Cary
---


::: tip
本系统非常适合作为微信小程序的毕业设计或课程设计参考。    
下面展示了成品项目的介绍和成品展示。  
为了保证项目的唯一性，每个小程序在功能保持一致的情况下，会对样式、主题色、整体布局等都会进行个性化的修改。

::: 

## 一、项目介绍
本毕业设计项目是一个基于微信小程序的二手交易系统，后端采用Java语言开发，并使用MySQL数据库进行数据存储。   

开发框架方面，我们选择了Spring Boot和Vue.js，开发工具则使用了IDEA。   

系统设计了用户、商家和管理员三种角色，每个角色都有其特定的功能。    

用户可以注册登录系统，浏览公告、商家信息，与商家私聊，查看和购买商品，发布交流信息，对商品进行评价，以及查看订单。   

商家则可以发布商品，回复用户咨询，并管理订单。    

管理员负责对系统中的用户、商家信息、商品信息、商品评价、商品订单、论坛信息和公告信息进行全面管理。

## 二、主网站展示

### 小程序端部分展示

<Swiper :height="1200" :width="800" :items="['https://img.liugezhou.online/bishe/xiaoyuan/1.png','https://img.liugezhou.online/bishe/xiaoyuan/2.png','https://img.liugezhou.online/bishe/xiaoyuan/3.png','https://img.liugezhou.online/bishe/xiaoyuan/4.png','https://img.liugezhou.online/bishe/xiaoyuan/5.png','https://img.liugezhou.online/bishe/xiaoyuan/6.png','https://img.liugezhou.online/bishe/xiaoyuan/7.png']"/>

### 后台管理系统部分展示
<Swiper :items="['https://img.liugezhou.online/bishe/xiaoyuan/8.png','https://img.liugezhou.online/bishe/xiaoyuan/9.png','https://img.liugezhou.online/bishe/xiaoyuan/10.png','https://img.liugezhou.online/bishe/xiaoyuan/11.png']"/>

## 三、运行环境
:::warning
jdk版本：1.8 及以上   
ide工具：IDEA ，微信小程序开发工具      
数据库: mysql5.7      
编程语言: Java      
tomcat:   8.0 及以上      
java框架：springboot    
maven: 3.6.1    
前端：微信，vue   
详细技术：HTML+CSS+JS+vue+JAVA+ssm+MYSQL+JQUERY+MAVEN+微信开发工具    
:::

## 四、主要功能
基于微信小程序校园二手交易系统

系统主要分为**用户**和**管理员**两个角色

### 用户微信端的主要功能有

1. 用户可以注册登录系统

2. 用户查看小程序的系统公告信息列表，公告详情

3. 用户查看系统的商家信息，私聊商家

4. 用户查看二收商品列表，商品详情，搜藏商品，加入购物车

5. 用户查看购物车，购买商品，在线支付，生成订单

6. 用户查看帖子，发布帖子，回复帖子，在线交流

7. 用户个人中心修改个人信息，修改密码

8. 用户个人中心在线充值

9. 用户个人中心查看，修改收货地址信息

10. 用户查看我购买的商品订单信息，对商品进行评价

11. 用户查看我的收藏，退出登录


### 商家端的只要功能有

1. 商家注册登录系统

2. 商家个人中心修改个人信息，修改密码

3. 商家查看用户的在线咨询，回复咨询

4. 商家对商品信息进行发布，修改，删除，查询，下架

5. 商家对用户的商品评价信息进行查看，回复

6. 商家对用户购买的商品订单信息进行查询，删除，发货

7. 商家查看用户的交流论坛，可以发布帖子

8. 商家查看系统的公告信息

9. 退出登录


### 管理员的主要功能有

1. 管理员登录系统

2. 个人中心：管理员查看个人信息，修改个人信息，修改密码

3. 系统用户：管理员对系统管理员信息进行添加，修改，删除，查询

4. 商家管理：管理员对商家信息进行添加，修改，删除，查询，重置密码

3. 用户管理：管理员对用户信息进行添加，修改，删除，查询

4. 商品管理：管理员对商品信息进行添加，修改，删除，查询，下架

5. 商品评价管理：管理员对用户的商品评价信息进行删除，查询

6. 商品订单管理：管理员对用户购买的商品订单信息进行查询，删除

7. 论坛管理：管理员对用户的交流信息进行添加，修改，删除，查询

8. 公告管理：管理员对小程序的公告信息进行添加，修改，删除，查询

9. 轮播图管理：管理员对小程序的轮播图信息进行添加，修改，删除，查询

10. 退出登录

:::tip
1. 每个项目目录下的 Readme.md 文件中都详细记录了如何进行项目的安装和运行
2. 如果查看文档没有运行成功，可以联系帮助远程调试，保证每个项目都可以在电脑上运行成功
3. 此毕设项目源码下载，可添加[我的微信](https://img.liugezhou.online/common/wx_ztz.jpg)，为你发送项目设计源码 
4. 本项目的内容主要包括有  项目论文+项目源码+数据库+安装环境
:::