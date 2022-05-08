# hospital-wxapp

> 原项目地址为：https://gitee.com/yyyangyx/appointment-wxapp

因为原来的开发前端的同学不在维护项目，所以由我基于原来的项目代码，修复bug。

## 介绍：
该项目是基于uniapp+WeUI+colorUI开发设计的一个多平台网上挂号系统；该系统主要通过使用uniapp进行微信小程序、
支付宝小程序以及H5页面的兼容性开发，实现一套代码多个平台使用，当然部分内容依然得分开的处理；该系统主要是
进行一家总医院及多家分院的进行挂号处理，可以通过从医院、从科室、从时间、搜医院四个方向出发进行预约挂号；
同时可以使用一个账号绑定多个人的身份证号进行获取独特的就诊卡ID，从而可以进行一个账号的帮助多个人挂号，可
方便家中有长辈不懂得通过互联网进行预约挂号；

**相关项目**

| 项目           | 仓库                                       | 备注                                         |
| -------------- | ------------------------------------------ | -------------------------------------------- |
| hospital       | https://github.com/YuJian95/hospital       | 后端代码                                     |
| Hospital-wxapp | https://github.com/YuJian95/hospital-wxapp | （前端）微信小程序、支付宝小程序、H5应用代码 |
| Hospital-web   | https://github.com/YuJian95/hospital-web   | （前端）PC管理系统代码     

## 软件架构
该项目是使用uniapp进行多个平台的兼容性开发；同时样式使用scss进行编写，前端UI库使用的是
WeUI+colorUI进行设计的；同时api接口、表单检验处理等也是经过模块化封装调用；

## 安装教程
1. 首先在当前页面使用克隆将前端代码克隆到编译器中，并使用run install进行安装依赖；
3. 到https://github.com/YuJian95/hospital克隆后端代码并在依赖安装完毕后运行；
4. 接着可以通过微信小程序、支付宝小程序、H5页面等进入访问；（目前在处理微信小程序的接口处理）
5. 目前可以通过微信小程序进行注册登录；

## 使用说明
1. 首先通过手机号注册一个属于自己的账号，并且登录进去；（目前只有这个可以执行、其他的陆续在对接当中）
2. 登录进去后应先进行基本信息的录入进而通过身份证号获得专属于自己的就诊卡ID号，同时可以添加多张
   就诊卡、即是可以绑定家人的身份证号帮助家人获取就诊卡号；因此避免了有长辈不会通过互联网进行预约挂号
   同时又不用注册多个账号，避免忘记账号密码等；
3. 用户可以对密码、个人信息、所绑定的就诊卡的信息进行修改；
4. 用户可以通过选择医院、专科、日期或者某个医生进行预约挂号，不同的目的可以通过不同的方式进行快捷的挂号；
5. 用户可以对自己曾经挂号的挂号记录进行查询，若有就诊过也可以查看就诊记录，同时若有失信情况还有失信记录
   可查看；
6. 用户在就诊当天、根据自己是上午就诊还是下午就诊，可查看当前的排队列表，根据前面还有多少个人排队，进行
   大概的评估，但就诊的时间不完全确定、需确保提前在就诊前等候，否则重新叫号会记为失信一次；
