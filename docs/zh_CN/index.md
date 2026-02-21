---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 针对旧版内核的高级内核级 Root 解决方案

hero:
  name: "KernelSU Legacy"
  text: "旧版安卓内核的内核级 Root 方案"
  tagline: 专注于 3.18 - 5.4 的非 GKI 内核
  image:
    src: /logo.png
    alt: "KernelSU Legacy"
  actions:
    - theme: brand
      text: 安装
      link: /zh_CN/pages/installation
    - theme: alt
      text: Github
      link: https://github.com/KernelSU-Legacy/KernelSU-Legacy

features:
  - title: 旧版内核支持
    details: 针对 3.18 - 5.4 的非 GKI 内核进行了优化，具有更强的兼容性
  - title: 集成 SuSFS 支持
    details: 集成 SuSFS 1.x 支持，可有效从各种检测中隐藏内核修改
  - title: 动态模块挂载
    details: 支持 Magic Mount 和 OverlayFS 两种模块挂载模式，可根据喜好通过设置轻松切换
  - title: 全新设计的管理器
    details: 管理器应用现在拥有一个全新设计的界面并带来了多个功能改进
  - title: 模块备份与恢复
    details: 支持备份及恢复安装过的所有模块，再也不用担心模块不翼而飞了！
  - title: 自动更新
    details: 管理器应用会自动检查最新版本的更新
  - title: 隐藏 Hosts
    details: 通过应用程序配置文件卸载隐藏对 hosts 文件的修改，让你无障碍使用广告拦截器
  - title: 批量安装
    details: 一次批量安装多个模块，选择你需要的所有模块，管理器会自动依次安装
  - title: 自定义镜像大小
    details: 可自定义 OverlayFS 稀疏镜像大小以满足你的需求，默认大小为 6GB
  - title: 超级用户列表备份与恢复
    details: 备份和恢复所有授予超级用户权限的 APP 列表及其 APP Profile 配置
  - title: 针对非 GKI 优化
    details: 剥离了 GKI 的额外开销，为旧版内核环境提供最佳性能
