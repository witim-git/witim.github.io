# Witim.github.io - Geek Style Portfolio

> A minimalist, dark-themed, terminal-style personal website.

## 🖥️ Overview | 简介

这是一个极客风格（Geek Style）的个人主页，采用深色模式（Dark Mode）、模拟终端界面、Glitch 故障风特效以及打字机动画。
项目基于原生 HTML/CSS/JS 构建，无繁重框架依赖，轻量且高效。

## ✨ Features | 特性

- **Terminal Aesthetic**: 模拟终端窗口的头部设计。
- **Glitch Effect**: 纯 CSS 实现的文字故障特效。
- **Typing Animation**: JavaScript 实现的打字机输入效果。
- **Dark Mode**: 沉浸式深色背景，配合霓虹绿/赛博朋克粉点缀。
- **Responsive**: 响应式设计，完美适配移动端与桌面端。

## 📂 Structure | 目录结构

```bash
.
├── index.html      # 页面主体结构
├── style.css       # 核心样式 (Terminal theme, Animations)
├── script.js       # 交互脚本 (Typing effect)
├── _config.yml     # Jekyll 配置 (禁用默认主题)
└── README.md       # 说明文档
```

## 🛠️ Customization | 自定义指南

### 1. 修改个人信息
- **名字**: 编辑 `index.html` 中的 `<h1 class="glitch" data-text="Witim">Witim</h1>`。
- **打字机文字**: 编辑 `script.js` 中的 `const text = "..."` 变量。
- **关于/项目**: 直接修改 `index.html` 中的 `<section>` 内容。

### 2. 调整样式
- **配色**: 在 `style.css` 的 `:root` 变量中修改 `--bg-color`, `--accent` 等颜色。
- **字体**: 默认使用 Google Fonts (Fira Code & Inter)，可在 `index.html` `<head>` 中更换。

## 🚀 Deployment | 部署

本项目直接托管于 GitHub Pages。
修改代码并 Push 到仓库后，GitHub 会自动更新页面。

---
*© 2024 Witim. Built with <3/&gt;*