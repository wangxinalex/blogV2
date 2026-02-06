# 快速开始指南

## 🎉 恭喜！你的博客已经搭建完成

你的 Astro + Starlight 博客框架已经成功搭建，所有 11 篇 Jekyll 文章已经迁移完成！

## 📂 项目结构

```
blogV2/
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx          # 首页
│           └── blog/              # 博客文章目录
│               ├── 2020-02-26-flake-it-till-you-make-it.md
│               ├── 2020-02-28-sample-markdown.md
│               ├── 2022-07-18-effective-java-notes.md
│               └── ... (共 11 篇文章)
├── dist/                          # 构建输出目录（静态页面）
├── astro.config.mjs               # Astro 配置
├── package.json
├── CLOUDFLARE_DEPLOY.md           # Cloudflare 部署指南
└── README.md                      # 项目文档
```

## 🚀 本地开发

### 1. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看你的博客

### 2. 编写新文章

在 `src/content/docs/blog/` 目录下创建新的 `.md` 文件：

```markdown
---
title: "你的文章标题"
description: "文章简介"
date: 2024-02-06
categories: 技术分类
---

# 你的文章标题

文章内容从这里开始...
```

保存后，浏览器会自动刷新显示新文章！

### 3. 构建生产版本

```bash
npm run build
```

静态页面会生成在 `dist/` 目录下，包含：
- HTML 文件
- CSS/JS 资源
- 完整的搜索索引

### 4. 预览构建结果

```bash
npm run preview
```

## 🌐 部署到 Cloudflare Pages

### 方式一：通过 Git 自动部署（推荐）

1. **创建 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astro blog setup"
   ```

2. **推送到 GitHub**
   ```bash
   # 在 GitHub 上创建新仓库，然后：
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

3. **连接 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 Pages 页面
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择你的仓库

4. **配置构建设置**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18` 或更高

5. **部署完成！**
   - 每次推送代码到 main 分支会自动触发部署
   - 你会得到一个 `*.pages.dev` 域名

### 方式二：直接上传（不推荐）

使用 Wrangler CLI 直接部署 dist 目录（适合测试）：

```bash
npm install -g wrangler
npx wrangler pages deploy dist
```

## ✨ 功能特性

- ✅ **Markdown 写作**：纯 Markdown 格式，简单高效
- ✅ **静态页面生成**：类似 Hugo，生成纯静态 HTML
- ✅ **自动搜索**：内置 Pagefind 搜索功能
- ✅ **响应式设计**：移动端和桌面端完美适配
- ✅ **暗色模式**：自动支持亮/暗主题切换
- ✅ **代码高亮**：自动识别代码语言并高亮
- ✅ **目录导航**：自动生成文章目录
- ✅ **快速加载**：静态页面，极速访问

## 📝 写作技巧

### 支持的 Markdown 语法

```markdown
# 标题 1
## 标题 2
### 标题 3

**粗体** *斜体* ~~删除线~~

- 无序列表
1. 有序列表

[链接](https://example.com)

![图片](./image.png)

\`\`\`javascript
// 代码块
const hello = "world";
\`\`\`

> 引用文本

| 表头1 | 表头2 |
|-------|-------|
| 内容1 | 内容2 |
```

### Front Matter 字段

```yaml
---
title: "必填：文章标题"
description: "必填：文章描述（用于 SEO）"
date: 2024-02-06              # 可选：发布日期
categories: 技术/笔记          # 可选：分类
---
```

## 🔧 自定义配置

### 修改网站信息

编辑 `astro.config.mjs`：

```javascript
starlight({
  title: '你的博客名',  // 修改标题
  description: '博客描述',
  social: [
    { 
      icon: 'github', 
      label: 'GitHub', 
      href: 'https://github.com/your-username' 
    }
  ],
  // ... 其他配置
})
```

### 修改首页

编辑 `src/content/docs/index.mdx` 自定义首页内容

### 添加自定义样式

在 `astro.config.mjs` 中添加：

```javascript
customCss: [
  './src/styles/custom.css',
],
```

## 📚 更多资源

- [Astro 文档](https://docs.astro.build)
- [Starlight 文档](https://starlight.astro.build/)
- [Markdown 指南](https://www.markdownguide.org/)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

## 🎯 下一步

1. ✅ 本地运行 `npm run dev` 查看效果
2. ✅ 尝试修改首页内容
3. ✅ 写一篇新的测试文章
4. ✅ 推送到 GitHub
5. ✅ 部署到 Cloudflare Pages

祝你写作愉快！📝
