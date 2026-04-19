---
layout: home

hero:
  name: "NOZF.com"
  text: "数据固化，即成铁证。"
  tagline: "NOZF(non-obliterable zip format) ， 基于密码学的防抹除压缩文件格式，专为本地 AI 与真正的数据主权而设计。"
  image:
    src: '/logo.png' 
    alt: NOZF Logo
  actions:
    - theme: brand
      text: 立即下载 V1.0 (追加模式)
      link: /download
    - theme: alt
      text: 协议白皮书
      link: /whitepaper

features:
  - icon: 🛡️
    title: WORM 协议 & 数据完整性
    details: 一次写入，永不抹除。利用哈希级联确保每一字节都具备物理级的防伪证明。
  - icon: 🧠
    title: 本地 AI & 数据主权
    details: 离线优先，无需信任云端。完美适配本地大模型（LLM）的训练数据存证。
  - icon: 🔒
    title: 算力压制 & Argon2id
    details: 采用 Argon2id 密码学函数，极大拉高黑客逆向破解的成本阈值。
  - icon: 🌌
    title: 平行宇宙回溯
    details: 像 Git 一样支持版本分支，但每个区块都经过固化，历史轨迹不可动摇。

---

<div class="custom-footer">
  <p>© 2026 <a href="https://orknow.com">或知科技 (orknow.com)</a> | 只有真相，没有涂改。</p>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  --vp-home-hero-image-filter: drop-shadow(0 0 20px rgba(217, 119, 6, 0.3));
}

.vp-doc h1 {
  font-weight: 800;
}

.custom-footer {
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.custom-footer a {
  color: #f59e0b;
  text-decoration: none;
}
</style>