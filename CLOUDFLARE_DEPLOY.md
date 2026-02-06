# Cloudflare Pages 构建配置说明

## 部署到 Cloudflare Pages

### 1. 连接 Git 仓库
1. 登录 Cloudflare Dashboard
2. 进入 Pages 页面
3. 点击 "Create a project"
4. 连接你的 Git 仓库（GitHub/GitLab）

### 2. 配置构建设置
在 Cloudflare Pages 创建项目时使用以下配置：

- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (默认)
- **Node version**: `18` 或更高

### 3. 环境变量（如果需要）
无需额外配置环境变量

### 4. 部署
- 推送代码到主分支会自动触发部署
- 每次推送都会创建预览部署

## 本地测试
```bash
# 开发模式（带热重载）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 自定义域名
部署成功后，可以在 Cloudflare Pages 的项目设置中添加自定义域名。
