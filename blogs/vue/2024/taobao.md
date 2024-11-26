---
title: 淘宝商品数据爬虫系统
date: 2024/11/25
tags:
 - Vue
 - Node
author: BCE
---

::: tip
淘宝商品数据爬虫系统，主要是通过爬取淘宝商品网站数据，通过Tensorflow的神经网络数据分析和线性回归分析方式，对商品进行销量预测。

该毕设作品主要包含两个项目：淘宝商品数据爬虫展示平台，后端爬取数据、销量预测。

::: 

## 项目介绍

> 淘宝数据爬虫系统，通过个人淘宝账号，根据输入商品的关键字，传入爬取页数，即可**自动化爬取淘宝网站**商品的图片、价格、已售数量、店铺名称、商品描述等。    
将爬取的淘宝商品数据入库，后台管理页面可以根据输入的不同类别关键字进行分类查看展示，并可以根据爬到的数据使用神经网络和线性回归的方式对商品进行**销量预测**    
并提供了图标可视化的方式对当前商品的价格与销量散点图、价格分布直方图、店铺销量图表、发货地销量等的数据展示。

## 主网站展示

<Swiper :items="['https://img.liugezhou.online/bishe/taobao/web-spxx.jpg','https://img.liugezhou.online/bishe/taobao/web-spxx2.jpg','https://img.liugezhou.online/bishe/taobao/web-xlyc1.jpg','https://img.liugezhou.online/bishe/taobao/web-tjtb.jpg','https://img.liugezhou.online/bishe/taobao/web-tjtb2.jpg','https://img.liugezhou.online/bishe/taobao/web-qttb1.jpg','https://img.liugezhou.online/bishe/taobao/web-qttb2.jpg']"/>


## 运行环境
:::warning
node版本： 18.19.1    
IDE工具：   Vscode   
数据库：    Mysql   
编程语言：  Node    
后端框架： Express    
前端框架： Vue     
详细技术： HTML+CSS+JS+Node+Mysql+Express+Vue
其它：  个人淘宝账号     
:::

## 主要功能



:::tip
1. 每个项目目录下的 Readme.md 文件中都详细记录了如何进行项目的安装和运行
2. 如果查看文档没有运行成功，可以联系帮助远程调试，保证每个项目都可以在电脑上运行成功
3. 此毕设项目源码下载，可添加[客服微信](https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp)，为你发送项目设计源码
:::
