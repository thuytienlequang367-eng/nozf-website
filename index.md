---
layout: home

hero:
  name: "NOZF.com"
  text: "数据固化，即成铁证。"
  tagline: "NOZF(Non-Obliterable Zip Format)，基于密码学的防抹除压缩档案格式。本地算力压制与云端 ECDSA 验签双轨并行，专为本地 AI 训练，防AI伪造，与真正的绝对数据主权而设计。"
  image:
    src: './logo.png' 
    alt: NOZF Logo
  actions:
    - theme: brand
      text: 立即下载 V1.0 (云端确权版)
      link: https://github.com/thuytienlequang367-eng/nozf-website/releases/download/v1.0.0/nozf-editor_0.1.0_x64-setup.exe
    - theme: alt
      text: 协议白皮书
      link: /whitepaper

features:
  - icon: 🛡️
    title: WORM 协议 & 混合确权
    details: 一次写入，永不抹除。创新的“本地 Argon2id + 云端 ECDSA”双轨验签，确保每一字节都具备物理级防伪证明。
  - icon: 🟢
    title: 云端绿盾 & 绝对时间锚
    details: 核心档案上链验证，由 Cloudflare 提供绝对无损时间戳与非对称私钥签名，彻底粉碎时间穿越与重写攻击。
  - icon: 🔒
    title: 算力压制 & 断网容灾
    details: 极端断网环境下自动降级为“本地固化”。采用高内存开销的 Argon2id 函数，极大拉高黑客逆向暴力破解的成本阈值。
  - icon: ⚡
    title: 极速降维吞吐
    details: 纯底层 Rust 物理拆解装甲，无视前端 DOM 渲染瓶颈，瞬间完成 60 万字超大 DOCX 文件的降维导入。

---

<div class="custom-footer">
  <p>© 2026 <a href="https://orknow.com">或知科技 (orknow.com)</a> | 只有真相，没有涂改。</p>
</div>

<style>
/* 下方的 Style 保持你原来的不变 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  --vp-home-hero-image-filter: drop-shadow(0 0 20px rgba(217, 119, 6, 0.3));
}
.vp-doc h1 { font-weight: 800; }
.custom-footer { text-align: center; padding: 40px 0; border-top: 1px solid var(--vp-c-divider); color: var(--vp-c-text-2); font-size: 0.9rem; }
.custom-footer a { color: #f59e0b; text-decoration: none; }
</style>
