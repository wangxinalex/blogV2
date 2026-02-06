# 我的博客 - Astro + Starlight

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

基于 Astro + Starlight 搭建的轻量级技术博客，支持 Markdown 写作，自动生成静态页面。

## ✨ 特性

- 📝 纯 Markdown 写作体验
- 🚀 静态页面生成（类似 Hugo）
- ⚡️ 快速加载和响应式设计
- 🌐 支持部署到 Cloudflare Pages
- 📱 完美支持移动端和桌面端
- 🎨 优雅的 UI 设计

## 🚀 项目结构

```
.
├── public/              # 静态资源（图片、favicon等）
├── src/
│   ├── assets/         # 项目资源文件
│   ├── content/
│   │   └── docs/
│   │       ├── blog/   # 博客文章目录（Markdown 文件）
│   │       └── index.mdx # 首页
│   └── content.config.ts
├── astro.config.mjs    # Astro 配置文件
├── package.json
└── tsconfig.json
```

## 🧞 命令

所有命令都在项目根目录下运行：

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器（http://localhost:4321） |
| `npm run build` | 构建生产版本到 `./dist/` |
| `npm run preview` | 本地预览构建结果 |

## 📝 写作指南

1. 在 `src/content/docs/blog/` 目录下创建新的 `.md` 文件
2. 使用以下 front matter 格式：

```markdown
---
title: "文章标题"
description: "文章描述"
date: 2024-01-01
categories: 技术分类
---

# 文章标题

文章内容...
```

3. 保存文件后，开发服务器会自动刷新

## 🌐 部署到 Cloudflare Pages

详细部署说明请参考 [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)

### 快速开始

1. 将代码推送到 GitHub
2. 登录 Cloudflare Dashboard
3. 创建新的 Pages 项目并连接你的仓库
4. 使用以下构建配置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `18` 或更高

## 📚 了解更多

- [Starlight 文档](https://starlight.astro.build/)
- [Astro 文档](https://docs.astro.build)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
