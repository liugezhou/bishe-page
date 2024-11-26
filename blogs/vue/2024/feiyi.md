---
title: 非遗文化传承官网和管理端搭建
date: 2024/11/26
tags:
  - Vue
  - Node
author: 阿旭
---

::: tip
非遗文化传承，主要是仿照 **中国非物质文化遗产网** [https://www.ihchina.cn/](https://www.ihchina.cn/) 进行的项目开发。

该毕设作品主要分为三个项目：非遗文化传承官网、非遗文化后管配置、非遗文化后端接口。

::: 

## 项目介绍

> 主要功能包括 **首页展示**、**中国非遗文化展览**、**世界非遗展览**、**非遗论坛**、**周边**、**部分传承人介绍**、**注册登录**、**文创售卖**等模块.

本设计主要完成的内容有：  
(1)中国非物质文化遗产的展示。  
(2)世界非物质文化遗产的展示。  
(3)供非遗爱好者交流的非遗论坛制作。  
(4)非遗文创周边的售卖  
(5)非遗文化传承人的介绍。  
(6)关于非遗保护的法律法规等相关政策的展示  
(7)申请非遗的步骤指南介绍等功能。

## 主网站展示

<Swiper :items="['https://img.liugezhou.online/bishe/feiyi/web-index.jpg','https://img.liugezhou.online/bishe/feiyi/web-zgfy.jpg','https://img.liugezhou.online/bishe/feiyi/web-sjfy.jpg','https://img.liugezhou.online/bishe/feiyi/web-fylt.jpg','https://img.liugezhou.online/bishe/feiyi/web-flfg.jpg','https://img.liugezhou.online/bishe/feiyi/web-sbzn.jpg','https://img.liugezhou.online/bishe/feiyi/web-ccr.jpg','https://img.liugezhou.online/bishe/feiyi/web-zhoubian.jpg','https://img.liugezhou.online/bishe/feiyi/web-ddgl.jpg','https://img.liugezhou.online/bishe/feiyi/web-dzgl.jpg']"/>

## 后管配置

<Swiper :items="['https://img.liugezhou.online/bishe/feiyi/admin-login.jpg','https://img.liugezhou.online/bishe/feiyi/admin-index.jpg','https://img.liugezhou.online/bishe/feiyi/admin-zgfy.jpg','https://img.liugezhou.online/bishe/feiyi/admin-sjfy.jpg','https://img.liugezhou.online/bishe/feiyi/admin-ltgl.jpg','https://img.liugezhou.online/bishe/feiyi/admin-flfg.jpg','https://img.liugezhou.online/bishe/feiyi/admin-zbgl.jpg','https://img.liugezhou.online/bishe/feiyi/admin-ddgl.jpg','https://img.liugezhou.online/bishe/feiyi/admin-ccrgl.jpg','https://img.liugezhou.online/bishe/feiyi/admin-qtgl.jpg','https://img.liugezhou.online/bishe/feiyi/admin-rygl.jpg']"/>

## 运行环境
:::warning
node版本： 18.19.1    
IDE工具：   Vscode   
数据库：     Mysql   
编程语言：  Node    
后端框架： Express    
前端框架： Vue     
详细技术： HTML+CSS+JS+Node+Mysql+Express+Vue     
:::

## 主要功能

![非遗文化传承流程图](https://img.liugezhou.online/bishe/feiyi/1.jpg)

根据以上项目流程图，本项目设计的主要功能从 非遗官网和后管配置 两部分说明

### 非遗官网功能简介
- **首页**：展示首页轮播图及非遗传承文化的重要性，同时提供登录入口。
- **中国非遗**：展示中国非遗项目列表，包括非遗名称、编号、图片、发源地、简要介绍及其历史意义。
- **世界非遗**：展示世界非遗项目列表，涵盖名称、编号、图片、列入年份、申报方式、申报国家及简要介绍。
- **非遗论坛**：提供非遗相关论坛的展示，包括论坛图片、名称、时间、内容摘要及评论交流功能，支持查看完整原文。
- **法律法规**：涵盖国内法律法规、联合国教科文组织文件及重要论述，并提供详细的文档和跳转链接。
- **申报指南**：讲解非遗文化的申报流程，提供中国和世界非遗的辅助申请功能，可在线提交申请。
- **传承人**：展示重要传承人的信息，包括照片、姓名、简介及联系方式。
- **周边商城**：展示非遗相关商品，支持将商品加入购物车、结算、批量购买及购物车清理等操作。
- **订单管理**：管理用户已支付的订单信息。
- **地址管理**：管理购买周边商品时的收货地址，模拟发货地设置。

### 非遗后台管理系统
- **登录页**：通过用户名和密码登录后台系统。
- **概览**：展示用户总数、中国和世界非遗项目数量、论坛和周边商品总数、访问量及更新日志，支持用户列表查看。
- **首页管理**：管理官网首页的轮播图设置。
- **中国非遗**：支持对中国非遗内容进行增删改查操作。
- **世界非遗**：支持对世界非遗内容进行增删改查操作。
- **论坛管理**：管理论坛相关内容的增删改查。
- **法律法规**：维护不同政策范围的法律法规信息。
- **周边管理**：维护官网周边商品的信息。
- **订单管理**：管理用户订单信息，处理订单维护。
- **传承人管理**：维护传承人相关内容的增删改查。
- **其它管理**：修改首页传承文化说明、“关于我们”及版权声明等信息。
- **人员管理**：维护系统登录用户的信息。

:::tip
1. 每个项目目录下的 Readme.md 文件中都详细记录了如何进行项目的安装和运行
2. 如果查看文档没有运行成功，可以联系帮助远程调试，保证每个项目都可以在电脑上运行成功
3. 此毕设项目源码下载，可添加[我的微信](https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp)，为你发送项目设计源码
:::


