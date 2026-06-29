# Tris New Memory Room

纯静态 HTML/CSS/JS 项目，可以直接上传到 GitHub Pages。

## 文件

- `index.html`：入口图、四卡片主界面、全屏照片查看器
- `styles.css`：神秘高级暗色界面、卡片、全屏照片样式
- `app.js`：入口点击、卡片音频切换、照片幻灯片、退出逻辑
- `assets/entry/4.jpg`：入口图片，由参考目录 `进入窗口图片/4.png` 压缩生成
- `assets/collections/`：四个卡片对应的图片和音频素材

## 行为

- 打开页面时不播放音乐，只显示入口图。
- 鼠标点击或 iPad 触摸入口图后进入主界面。
- 主界面有四个卡片：`Baby Now That I Found You`、`Girls`、`Love Me Like That`、`Almost Lover`。
- 点击卡片后自动播放该卡片文件夹里的音频，并全屏幻灯片播放该卡片的图片。
- 左上角“退出”只退出全屏照片，音频继续播放。
- 只有点击新的卡片，才会切换到新的音频。

## 本地预览

```bash
python -m http.server 8790
```

打开：

```text
http://127.0.0.1:8790/
```
