# CopyHistory 文档网站

这个目录包含了 CopyHistory 的在线文档，可以部署到 GitHub Pages 或其他静态网站托管服务。

## 文件说明

- `index.html` - 主页
- `support.html` - 技术支持页面（用于 App Store Connect 的技术支持网址）
- `privacy.html` - 隐私政策页面

## 部署到 GitHub Pages

### 方法 1：使用 docs 文件夹（推荐）

1. 确保 `docs` 文件夹中有 `index.html`、`support.html` 和 `privacy.html`
2. 在 GitHub 仓库设置中：
   - Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"（或你的主分支）
   - Folder 选择 "/docs"
3. 保存后，GitHub Pages 会自动构建
4. 访问地址：`https://YOUR_USERNAME.github.io/CopyHistory/`（或你的仓库名）

### 方法 2：使用 gh-pages 分支

```bash
# 创建 gh-pages 分支
git checkout -b gh-pages

# 将 docs 目录的内容移动到根目录
# 然后提交并推送
git push origin gh-pages
```

## 部署后

部署成功后，你可以使用以下 URL：

- 主页：`https://YOUR_USERNAME.github.io/CopyHistory/`
- 技术支持：`https://YOUR_USERNAME.github.io/CopyHistory/support.html`
- 隐私政策：`https://YOUR_USERNAME.github.io/CopyHistory/privacy.html`

在 App Store Connect 中填写技术支持网址时，使用：
```
https://YOUR_USERNAME.github.io/CopyHistory/support.html
```

## 自定义

在部署前，记得修改 `support.html` 中的以下内容：

1. GitHub Issues 链接：将 `YOUR_USERNAME` 替换为你的 GitHub 用户名
2. 邮箱地址：如果有，将 `support@yourdomain.com` 替换为实际邮箱

## 其他托管选项

除了 GitHub Pages，你也可以将这些 HTML 文件部署到：
- Netlify
- Vercel
- 你自己的网站服务器









