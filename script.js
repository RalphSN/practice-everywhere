// ==========================================
// 1. CONFIGURATION
// ==========================================

const SUB_CATEGORIES = {
  design: [
    { id: "all", name: "ALL" },
    { id: "tools", name: "TOOLS" },
    { id: "inspiration", name: "INSPIRATION" },
    { id: "assets", name: "ASSETS/ICONS" },
  ],
  dev: [
    { id: "all", name: "ALL" },
    { id: "frontend", name: "FRONTEND" },
    { id: "backend", name: "BACKEND" },
    { id: "tools", name: "TOOLS/DOCS" },
  ],
  ai: [
    { id: "all", name: "ALL" },
    { id: "chat", name: "LLM/CHAT" },
    { id: "visual", name: "VISUAL/AUDIO" },
    { id: "code", name: "CODING" },
  ],
  examples: [
    { id: "all", name: "ALL" },
    { id: "saas", name: "SAAS/PRODUCT" },
    { id: "portfolio", name: "PORTFOLIO" },
    { id: "awards", name: "AWARDS/CREATIVE" },
  ],
};

const PAGE_SIZE = 12;

// ==========================================
// 2. MOCK DATABASE (With CHINESE Descriptions)
// ==========================================
const MOCK_DATABASE = {
  status: "success",
  version: "2.1.0",
  data: [
    // --- DESIGN (UI/UX, Tools, Inspiration) ---
    {
      id: "d1",
      name: "Figma",
      category: "design",
      subcategory: "tools",
      desc: "業界標準的雲端協作介面設計工具。",
      icon: "fa-brands fa-figma",
      link: "https://www.figma.com",
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
    },
    {
      id: "d2",
      name: "Dribbble",
      category: "design",
      subcategory: "inspiration",
      desc: "全球設計師展示作品與尋找靈感的社群。",
      icon: "fa-brands fa-dribbble",
      link: "https://dribbble.com",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      id: "d3",
      name: "Behance",
      category: "design",
      subcategory: "inspiration",
      desc: "Adobe 旗下的創意作品展示與發現平台。",
      icon: "fa-brands fa-behance",
      link: "https://www.behance.net",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      id: "d4",
      name: "Spline",
      category: "design",
      subcategory: "tools",
      desc: "簡單易用的網頁 3D 設計與建模工具。",
      icon: "fa-solid fa-cube",
      link: "https://spline.design",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: "d5",
      name: "Mobbin",
      category: "design",
      subcategory: "inspiration",
      desc: "收錄全球頂尖 App 與網頁設計模式的圖庫。",
      icon: "fa-solid fa-mobile-screen",
      link: "https://mobbin.com",
      color: "text-gray-200",
      bgColor: "bg-gray-200/10",
    },
    {
      id: "d6",
      name: "Layers",
      category: "design",
      subcategory: "inspiration",
      desc: "精心策展的設計師個人作品集平台。",
      icon: "fa-solid fa-layer-group",
      link: "https://layers.to",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: "d7",
      name: "Godly",
      category: "design",
      subcategory: "inspiration",
      desc: "收集網路上最具美感與創意的網站範例。",
      icon: "fa-solid fa-star",
      link: "https://godly.website",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      id: "d8",
      name: "SiteInspire",
      category: "design",
      subcategory: "inspiration",
      desc: "專注於極簡與互動設計的網站靈感庫。",
      icon: "fa-solid fa-globe",
      link: "https://www.siteinspire.com",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "d9",
      name: "Coolors",
      category: "design",
      subcategory: "assets",
      desc: "超快速的配色方案生成器，支援鎖定顏色。",
      icon: "fa-solid fa-palette",
      link: "https://coolors.co",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "d10",
      name: "FontAwesome",
      category: "design",
      subcategory: "assets",
      desc: "網路上最流行的圖示與工具包標準。",
      icon: "fa-solid fa-font-awesome",
      link: "https://fontawesome.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "d11",
      name: "Google Fonts",
      category: "design",
      subcategory: "assets",
      desc: "Google 提供的免費開源字體庫。",
      icon: "fa-solid fa-font",
      link: "https://fonts.google.com",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      id: "d12",
      name: "Phosphor",
      category: "design",
      subcategory: "assets",
      desc: "靈活且風格統一的介面圖示家族。",
      icon: "fa-solid fa-icons",
      link: "https://phosphoricons.com",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      id: "d13",
      name: "Rive",
      category: "design",
      subcategory: "tools",
      desc: "製作跨平台互動式動畫的強大工具。",
      icon: "fa-solid fa-film",
      link: "https://rive.app",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      id: "d14",
      name: "LottieFiles",
      category: "design",
      subcategory: "assets",
      desc: "輕量級、可縮放的網頁與 App 動畫格式。",
      icon: "fa-solid fa-play-circle",
      link: "https://lottiefiles.com",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
    },
    {
      id: "d15",
      name: "Penpot",
      category: "design",
      subcategory: "tools",
      desc: "開源的設計與原型製作平台，Figma 的替代品。",
      icon: "fa-solid fa-pen-nib",
      link: "https://penpot.app",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "d16",
      name: "Refactoring UI",
      category: "design",
      subcategory: "inspiration",
      desc: "教導開發者如何設計出好看 UI 的經典資源。",
      icon: "fa-solid fa-book",
      link: "https://www.refactoringui.com",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
    },
    {
      id: "d17",
      name: "Dark Mode Design",
      category: "design",
      subcategory: "inspiration",
      desc: "專門展示優秀深色模式設計的網站。",
      icon: "fa-solid fa-moon",
      link: "https://www.darkmodedesign.com",
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
    },
    {
      id: "d18",
      name: "Bento Grids",
      category: "design",
      subcategory: "inspiration",
      desc: "便當盒式 (Bento) 佈局的設計靈感收集。",
      icon: "fa-solid fa-table-cells",
      link: "https://bentogrids.com",
      color: "text-purple-300",
      bgColor: "bg-purple-300/10",
    },
    {
      id: "d19",
      name: "Lucide",
      category: "design",
      subcategory: "assets",
      desc: "美觀且一致的開源圖示庫，Feather Icons 的繼承者。",
      icon: "fa-solid fa-feather",
      link: "https://lucide.dev",
      color: "text-orange-300",
      bgColor: "bg-orange-300/10",
    },
    {
      id: "d20",
      name: "Untitled UI",
      category: "design",
      subcategory: "assets",
      desc: "Figma 上最完整的 UI 設計系統套件。",
      icon: "fa-solid fa-u",
      link: "https://www.untitledui.com",
      color: "text-blue-300",
      bgColor: "bg-blue-300/10",
    },
    {
      id: "d21",
      name: "Relume",
      category: "design",
      subcategory: "tools",
      desc: "AI 驅動的網站架構生成與組件庫。",
      icon: "fa-solid fa-sitemap",
      link: "https://library.relume.io",
      color: "text-black",
      bgColor: "bg-white/20",
    },
    {
      id: "d22",
      name: "Muzli",
      category: "design",
      subcategory: "inspiration",
      desc: "設計師的靈感首頁，每日更新設計新聞。",
      icon: "fa-solid fa-newspaper",
      link: "https://muz.li",
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
    },
    {
      id: "d23",
      name: "Savee",
      category: "design",
      subcategory: "inspiration",
      desc: "極簡風格的視覺靈感收藏平台。",
      icon: "fa-solid fa-bookmark",
      link: "https://savee.it",
      color: "text-teal-300",
      bgColor: "bg-teal-300/10",
    },
    {
      id: "d24",
      name: "Land-book",
      category: "design",
      subcategory: "inspiration",
      desc: "精選的產品 Landing Page 設計畫廊。",
      icon: "fa-solid fa-laptop",
      link: "https://land-book.com",
      color: "text-green-300",
      bgColor: "bg-green-300/10",
    },
    {
      id: "d25",
      name: "Pageflows",
      category: "design",
      subcategory: "inspiration",
      desc: "錄製知名產品的使用者操作流程影片。",
      icon: "fa-solid fa-video",
      link: "https://pageflows.com",
      color: "text-blue-200",
      bgColor: "bg-blue-200/10",
    },
    {
      id: "d26",
      name: "Apple HIG",
      category: "design",
      subcategory: "tools",
      desc: "Apple 的人機介面設計指南。",
      icon: "fa-brands fa-apple",
      link: "https://developer.apple.com/design/",
      color: "text-gray-100",
      bgColor: "bg-gray-100/10",
    },
    {
      id: "d27",
      name: "Material Design",
      category: "design",
      subcategory: "tools",
      desc: "Google 的開源設計系統規範。",
      icon: "fa-brands fa-google",
      link: "https://m3.material.io",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "d28",
      name: "Laws of UX",
      category: "design",
      subcategory: "tools",
      desc: "設計師必讀的使用者體驗心理學法則。",
      icon: "fa-solid fa-scale-balanced",
      link: "https://lawsofux.com",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "d29",
      name: "Framer",
      category: "design",
      subcategory: "tools",
      desc: "像設計一樣簡單地發布網站的工具。",
      icon: "fa-solid fa-f",
      link: "https://www.framer.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "d30",
      name: "Webflow",
      category: "design",
      subcategory: "tools",
      desc: "專業的無程式碼網頁設計與開發工具。",
      icon: "fa-solid fa-w",
      link: "https://webflow.com",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },

    // --- DEV (Frontend, Backend, Tools) ---
    {
      id: "v1",
      name: "React",
      category: "dev",
      subcategory: "frontend",
      desc: "用於構建使用者介面的 JavaScript 函式庫。",
      icon: "fa-brands fa-react",
      link: "https://react.dev",
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
    },
    {
      id: "v2",
      name: "Vue.js",
      category: "dev",
      subcategory: "frontend",
      desc: "漸進式 JavaScript 框架，易學易用。",
      icon: "fa-brands fa-vuejs",
      link: "https://vuejs.org",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "v3",
      name: "Svelte",
      category: "dev",
      subcategory: "frontend",
      desc: "在編譯時將應用程式轉換為高效 JS 的框架。",
      icon: "fa-solid fa-code",
      link: "https://svelte.dev",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      id: "v4",
      name: "Next.js",
      category: "dev",
      subcategory: "frontend",
      desc: "基於 React 的全端框架，支援 SSR 與 SSG。",
      icon: "fa-solid fa-n",
      link: "https://nextjs.org",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "v5",
      name: "Tailwind CSS",
      category: "dev",
      subcategory: "frontend",
      desc: "以實用性為主 (Utility-first) 的 CSS 框架。",
      icon: "fa-solid fa-wind",
      link: "https://tailwindcss.com",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      id: "v6",
      name: "Node.js",
      category: "dev",
      subcategory: "backend",
      desc: "基於 Chrome V8 引擎的 JavaScript 執行環境。",
      icon: "fa-brands fa-node",
      link: "https://nodejs.org",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      id: "v7",
      name: "Supabase",
      category: "dev",
      subcategory: "backend",
      desc: "Firebase 的開源替代品，基於 PostgreSQL。",
      icon: "fa-solid fa-bolt",
      link: "https://supabase.com",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      id: "v8",
      name: "Vercel",
      category: "dev",
      subcategory: "tools",
      desc: "前端部署與託管的最佳平台，開發體驗極佳。",
      icon: "fa-solid fa-triangle-exclamation",
      link: "https://vercel.com",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "v9",
      name: "GitHub",
      category: "dev",
      subcategory: "tools",
      desc: "全球最大的程式碼託管與協作平台。",
      icon: "fa-brands fa-github",
      link: "https://github.com",
      color: "text-gray-100",
      bgColor: "bg-gray-100/10",
    },
    {
      id: "v10",
      name: "VS Code",
      category: "dev",
      subcategory: "tools",
      desc: "微軟開發的強大開源程式碼編輯器。",
      icon: "fa-solid fa-code",
      link: "https://code.visualstudio.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "v11",
      name: "TypeScript",
      category: "dev",
      subcategory: "frontend",
      desc: "JavaScript 的超集，增加了型別系統。",
      icon: "fa-solid fa-t",
      link: "https://www.typescriptlang.org",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      id: "v12",
      name: "Astro",
      category: "dev",
      subcategory: "frontend",
      desc: "為內容驅動網站打造的現代化 Web 框架。",
      icon: "fa-solid fa-rocket",
      link: "https://astro.build",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "v13",
      name: "Docker",
      category: "dev",
      subcategory: "backend",
      desc: "應用程式容器化平台，簡化部署流程。",
      icon: "fa-brands fa-docker",
      link: "https://www.docker.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "v14",
      name: "PostgreSQL",
      category: "dev",
      subcategory: "backend",
      desc: "強大且開源的關聯式資料庫系統。",
      icon: "fa-solid fa-database",
      link: "https://www.postgresql.org",
      color: "text-blue-300",
      bgColor: "bg-blue-300/10",
    },
    {
      id: "v15",
      name: "Redis",
      category: "dev",
      subcategory: "backend",
      desc: "高效能的記憶體資料結構儲存，常用於快取。",
      icon: "fa-solid fa-server",
      link: "https://redis.io",
      color: "text-red-600",
      bgColor: "bg-red-600/10",
    },
    {
      id: "v16",
      name: "MDN Web Docs",
      category: "dev",
      subcategory: "tools",
      desc: "Web 開發者的權威參考文件與指南。",
      icon: "fa-brands fa-firefox",
      link: "https://developer.mozilla.org",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "v17",
      name: "Stack Overflow",
      category: "dev",
      subcategory: "tools",
      desc: "程式設計師問答社群。",
      icon: "fa-brands fa-stack-overflow",
      link: "https://stackoverflow.com",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      id: "v18",
      name: "Bun",
      category: "dev",
      subcategory: "backend",
      desc: "快速的 JavaScript 全能工具包 (Runtime/PM/Bundler)。",
      icon: "fa-solid fa-burger",
      link: "https://bun.sh",
      color: "text-yellow-200",
      bgColor: "bg-yellow-200/10",
    },
    {
      id: "v19",
      name: "Hono",
      category: "dev",
      subcategory: "backend",
      desc: "適用於邊緣運算的極速 Web 框架。",
      icon: "fa-solid fa-fire",
      link: "https://hono.dev",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "v20",
      name: "Rust",
      category: "dev",
      subcategory: "backend",
      desc: "強調效能與記憶體安全的系統程式語言。",
      icon: "fa-solid fa-gear",
      link: "https://www.rust-lang.org",
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
    },
    {
      id: "v21",
      name: "Go",
      category: "dev",
      subcategory: "backend",
      desc: "Google 開發的語言，適合構建簡單可靠的軟體。",
      icon: "fa-brands fa-golang",
      link: "https://go.dev",
      color: "text-cyan-600",
      bgColor: "bg-cyan-600/10",
    },
    {
      id: "v22",
      name: "Laravel",
      category: "dev",
      subcategory: "backend",
      desc: "優雅的 PHP Web 應用程式框架。",
      icon: "fa-brands fa-laravel",
      link: "https://laravel.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: "v23",
      name: "Python",
      category: "dev",
      subcategory: "backend",
      desc: "應用廣泛、語法簡潔的程式語言。",
      icon: "fa-brands fa-python",
      link: "https://www.python.org",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: "v24",
      name: "Netlify",
      category: "dev",
      subcategory: "tools",
      desc: "現代化 Web 專案的構建與託管平台。",
      icon: "fa-solid fa-diamond",
      link: "https://www.netlify.com",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
    },
    {
      id: "v25",
      name: "Postman",
      category: "dev",
      subcategory: "tools",
      desc: "API 開發、測試與文件化的協作平台。",
      icon: "fa-solid fa-paper-plane",
      link: "https://www.postman.com",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "v26",
      name: "Framer Motion",
      category: "dev",
      subcategory: "frontend",
      desc: "強大的 React 動畫函式庫。",
      icon: "fa-solid fa-film",
      link: "https://www.framer.com/motion/",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "v27",
      name: "Shadcn/ui",
      category: "dev",
      subcategory: "frontend",
      desc: "設計精美的可複製貼上 React 組件集合。",
      icon: "fa-solid fa-layer-group",
      link: "https://ui.shadcn.com",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "v28",
      name: "Zod",
      category: "dev",
      subcategory: "tools",
      desc: "TypeScript 優先的 Schema 驗證庫。",
      icon: "fa-solid fa-check-double",
      link: "https://zod.dev",
      color: "text-blue-800",
      bgColor: "bg-blue-800/10",
    },
    {
      id: "v29",
      name: "TanStack",
      category: "dev",
      subcategory: "frontend",
      desc: "高品質的前端開發工具庫 (Query, Table 等)。",
      icon: "fa-solid fa-layer-group",
      link: "https://tanstack.com",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: "v30",
      name: "Prisma",
      category: "dev",
      subcategory: "backend",
      desc: "次世代的 Node.js 與 TypeScript ORM。",
      icon: "fa-solid fa-database",
      link: "https://www.prisma.io",
      color: "text-blue-900",
      bgColor: "bg-blue-900/10",
    },

    // --- AI (Chat, Visual, Code) ---
    {
      id: "a1",
      name: "ChatGPT",
      category: "ai",
      subcategory: "chat",
      desc: "OpenAI 開發的最強大對話式 AI 模型。",
      icon: "fa-solid fa-robot",
      link: "https://chat.openai.com",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      id: "a2",
      name: "Claude",
      category: "ai",
      subcategory: "chat",
      desc: "Anthropic 開發的 AI 助手，擅長長文與程式碼。",
      icon: "fa-solid fa-message",
      link: "https://claude.ai",
      color: "text-orange-300",
      bgColor: "bg-orange-300/10",
    },
    {
      id: "a3",
      name: "Gemini",
      category: "ai",
      subcategory: "chat",
      desc: "Google 最新的多模態 AI 模型。",
      icon: "fa-solid fa-brain",
      link: "https://gemini.google.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "a4",
      name: "Midjourney",
      category: "ai",
      subcategory: "visual",
      desc: "目前效果最驚人的 AI 圖像生成工具。",
      icon: "fa-solid fa-palette",
      link: "https://www.midjourney.com",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
    },
    {
      id: "a5",
      name: "GitHub Copilot",
      category: "ai",
      subcategory: "code",
      desc: "你的 AI 結對程式設計師，加速開發。",
      icon: "fa-brands fa-github-alt",
      link: "https://github.com/features/copilot",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "a6",
      name: "Perplexity",
      category: "ai",
      subcategory: "chat",
      desc: "AI 驅動的搜尋引擎，提供精準答案與來源。",
      icon: "fa-solid fa-magnifying-glass",
      link: "https://www.perplexity.ai",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
    },
    {
      id: "a7",
      name: "Runway",
      category: "ai",
      subcategory: "visual",
      desc: "先進的 AI 影片生成與編輯工具。",
      icon: "fa-solid fa-video",
      link: "https://runwayml.com",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      id: "a8",
      name: "ElevenLabs",
      category: "ai",
      subcategory: "visual",
      desc: "最逼真的 AI 語音生成與文字轉語音服務。",
      icon: "fa-solid fa-microphone",
      link: "https://elevenlabs.io",
      color: "text-gray-200",
      bgColor: "bg-gray-200/10",
    },
    {
      id: "a9",
      name: "Hugging Face",
      category: "ai",
      subcategory: "code",
      desc: "AI 界的 GitHub，開源模型與資料集中心。",
      icon: "fa-solid fa-face-smile",
      link: "https://huggingface.co",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: "a10",
      name: "V0.dev",
      category: "ai",
      subcategory: "code",
      desc: "由 Vercel 推出的 AI UI 生成工具。",
      icon: "fa-solid fa-code",
      link: "https://v0.dev",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "a11",
      name: "Cursor",
      category: "ai",
      subcategory: "code",
      desc: "整合 AI 的現代化程式碼編輯器。",
      icon: "fa-solid fa-terminal",
      link: "https://cursor.sh",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "a12",
      name: "Leonardo.ai",
      category: "ai",
      subcategory: "visual",
      desc: "高品質的 AI 遊戲資產與藝術生成平台。",
      icon: "fa-solid fa-image",
      link: "https://leonardo.ai",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "a13",
      name: "Sora",
      category: "ai",
      subcategory: "visual",
      desc: "OpenAI 的文字轉影片模型 (尚未完全開放)。",
      icon: "fa-solid fa-film",
      link: "https://openai.com/sora",
      color: "text-green-300",
      bgColor: "bg-green-300/10",
    },
    {
      id: "a14",
      name: "Suno",
      category: "ai",
      subcategory: "visual",
      desc: "用 AI 創作完整的歌曲與音樂。",
      icon: "fa-solid fa-music",
      link: "https://suno.com",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "a15",
      name: "Codeium",
      category: "ai",
      subcategory: "code",
      desc: "免費且強大的 AI 程式碼自動補全工具。",
      icon: "fa-solid fa-laptop-code",
      link: "https://codeium.com",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "a16",
      name: "Jasper",
      category: "ai",
      subcategory: "chat",
      desc: "專為行銷人員打造的 AI 文案助手。",
      icon: "fa-solid fa-pen-nib",
      link: "https://www.jasper.ai",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: "a17",
      name: "Copy.ai",
      category: "ai",
      subcategory: "chat",
      desc: "自動化內容生成與寫作工具。",
      icon: "fa-solid fa-copy",
      link: "https://www.copy.ai",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "a18",
      name: "Notion AI",
      category: "ai",
      subcategory: "chat",
      desc: "直接在 Notion 筆記中使用的 AI 寫作助手。",
      icon: "fa-solid fa-n",
      link: "https://www.notion.so/product/ai",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "a19",
      name: "Adobe Firefly",
      category: "ai",
      subcategory: "visual",
      desc: "Adobe 的創意生成式 AI 模型。",
      icon: "fa-solid fa-fire",
      link: "https://www.adobe.com/sensei/generative-ai/firefly.html",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: "a20",
      name: "Canva Magic",
      category: "ai",
      subcategory: "visual",
      desc: "Canva 內建的 AI 設計工具套件。",
      icon: "fa-solid fa-wand-magic-sparkles",
      link: "https://www.canva.com/magic",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      id: "a21",
      name: "Khroma",
      category: "ai",
      subcategory: "visual",
      desc: "AI 學習你喜好的配色方案生成器。",
      icon: "fa-solid fa-palette",
      link: "https://www.khroma.co",
      color: "text-orange-300",
      bgColor: "bg-orange-300/10",
    },
    {
      id: "a22",
      name: "Uizard",
      category: "ai",
      subcategory: "visual",
      desc: "用 AI 快速將草圖轉換為 UI 設計。",
      icon: "fa-solid fa-layer-group",
      link: "https://uizard.io",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "a23",
      name: "Replit",
      category: "ai",
      subcategory: "code",
      desc: "整合 AI 的線上協作程式開發環境。",
      icon: "fa-solid fa-terminal",
      link: "https://replit.com",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      id: "a24",
      name: "Tabnine",
      category: "ai",
      subcategory: "code",
      desc: "AI 程式碼補全助手，支援私有模型部署。",
      icon: "fa-solid fa-code-branch",
      link: "https://www.tabnine.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "a25",
      name: "Descript",
      category: "ai",
      subcategory: "visual",
      desc: "像編輯文件一樣編輯影片與音訊的 AI 工具。",
      icon: "fa-solid fa-video",
      link: "https://www.descript.com",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "a26",
      name: "Otter.ai",
      category: "ai",
      subcategory: "chat",
      desc: "AI 會議錄音轉文字與摘要助手。",
      icon: "fa-solid fa-microphone-lines",
      link: "https://otter.ai",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      id: "a27",
      name: "Gamma",
      category: "ai",
      subcategory: "visual",
      desc: "用 AI 生成美觀的簡報與網頁。",
      icon: "fa-solid fa-presentation-screen",
      link: "https://gamma.app",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: "a28",
      name: "Tome",
      category: "ai",
      subcategory: "visual",
      desc: "AI 驅動的敘事與簡報製作格式。",
      icon: "fa-solid fa-book-open",
      link: "https://tome.app",
      color: "text-pink-300",
      bgColor: "bg-pink-300/10",
    },
    {
      id: "a29",
      name: "Pika",
      category: "ai",
      subcategory: "visual",
      desc: "將創意轉化為影片的 AI 平台。",
      icon: "fa-solid fa-video",
      link: "https://pika.art",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: "a30",
      name: "Magnific",
      category: "ai",
      subcategory: "visual",
      desc: "AI 圖像放大與增強工具，細節驚人。",
      icon: "fa-solid fa-magnifying-glass-plus",
      link: "https://magnific.ai",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },

    // --- EXAMPLES (Websites, Portfolios, SaaS) ---
    {
      id: "e1",
      name: "Linear",
      category: "examples",
      subcategory: "saas",
      desc: "SaaS 產品設計與互動體驗的黃金標準。",
      icon: "fa-solid fa-layer-group",
      link: "https://linear.app",
      color: "text-purple-300",
      bgColor: "bg-purple-300/10",
    },
    {
      id: "e2",
      name: "Stripe",
      category: "examples",
      subcategory: "saas",
      desc: "支付基礎設施，開發者體驗與設計的標竿。",
      icon: "fa-brands fa-stripe",
      link: "https://stripe.com",
      color: "text-violet-400",
      bgColor: "bg-violet-400/10",
    },
    {
      id: "e3",
      name: "Raycast",
      category: "examples",
      subcategory: "saas",
      desc: "Mac 上的極速啟動器，設計與效能極佳。",
      icon: "fa-solid fa-bolt",
      link: "https://raycast.com",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      id: "e4",
      name: "Bruno Simon",
      category: "examples",
      subcategory: "portfolio",
      desc: "著名的 3D WebGL 互動式賽車遊戲作品集。",
      icon: "fa-solid fa-car",
      link: "https://bruno-simon.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: "e5",
      name: "Awwwards",
      category: "examples",
      subcategory: "awards",
      desc: "全球網頁設計獎項平台，尋找頂尖設計。",
      icon: "fa-solid fa-trophy",
      link: "https://www.awwwards.com",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "e6",
      name: "Framer Site",
      category: "examples",
      subcategory: "saas",
      desc: "Framer 的官方網站，展示了頂級的 Landing Page。",
      icon: "fa-solid fa-f",
      link: "https://www.framer.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "e7",
      name: "Cron",
      category: "examples",
      subcategory: "saas",
      desc: "次世代的日曆應用，設計簡潔流暢。",
      icon: "fa-solid fa-calendar",
      link: "https://cron.com",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      id: "e8",
      name: "Wise Design",
      category: "examples",
      subcategory: "saas",
      desc: "Wise 的設計系統文件，結構清晰完整。",
      icon: "fa-solid fa-money-bill-transfer",
      link: "https://wise.design",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "e9",
      name: "Spotify Design",
      category: "examples",
      subcategory: "saas",
      desc: "Spotify 設計團隊的部落格與資源。",
      icon: "fa-brands fa-spotify",
      link: "https://spotify.design",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "e10",
      name: "Airbnb Design",
      category: "examples",
      subcategory: "saas",
      desc: "Airbnb 的創意與設計文化分享。",
      icon: "fa-brands fa-airbnb",
      link: "https://airbnb.design",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
    },
    {
      id: "e11",
      name: "Apple",
      category: "examples",
      subcategory: "saas",
      desc: "產品 Landing Page 的極致展示範例。",
      icon: "fa-brands fa-apple",
      link: "https://www.apple.com",
      color: "text-gray-200",
      bgColor: "bg-gray-200/10",
    },
    {
      id: "e12",
      name: "Duolingo",
      category: "examples",
      subcategory: "saas",
      desc: "遊戲化學習 UI 與角色設計的典範。",
      icon: "fa-solid fa-language",
      link: "https://www.duolingo.com",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "e13",
      name: "Lusion",
      category: "examples",
      subcategory: "awards",
      desc: "充滿創意與技術力的數位工作室網站。",
      icon: "fa-solid fa-eye",
      link: "https://lusion.co",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: "e14",
      name: "Active Theory",
      category: "examples",
      subcategory: "awards",
      desc: "打造沈浸式網頁體驗的頂尖團隊。",
      icon: "fa-solid fa-cube",
      link: "https://activetheory.net",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "e15",
      name: "Locomotive",
      category: "examples",
      subcategory: "awards",
      desc: "以流暢捲動與獨特風格聞名的數位機構。",
      icon: "fa-solid fa-train",
      link: "https://locomotive.ca",
      color: "text-black",
      bgColor: "bg-white/20",
    },
    {
      id: "e16",
      name: "Jhey",
      category: "examples",
      subcategory: "portfolio",
      desc: "創意開發者 Jhey 的個人作品集，充滿趣味。",
      icon: "fa-solid fa-bear",
      link: "https://jhey.dev",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: "e17",
      name: "Lynn Fisher",
      category: "examples",
      subcategory: "portfolio",
      desc: "每年重新設計一次的 CSS 藝術家作品集。",
      icon: "fa-solid fa-brush",
      link: "https://lynnandtonic.com",
      color: "text-pink-300",
      bgColor: "bg-pink-300/10",
    },
    {
      id: "e18",
      name: "Josh Comeau",
      category: "examples",
      subcategory: "portfolio",
      desc: "高品質的互動式 React 教學部落格。",
      icon: "fa-solid fa-graduation-cap",
      link: "https://www.joshwcomeau.com",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
    },
    {
      id: "e19",
      name: "Rauno",
      category: "examples",
      subcategory: "portfolio",
      desc: "極簡且細節精緻的 UI 工程師作品集。",
      icon: "fa-solid fa-code",
      link: "https://rauno.me",
      color: "text-white",
      bgColor: "bg-white/10",
    },
    {
      id: "e20",
      name: "Delba",
      category: "examples",
      subcategory: "portfolio",
      desc: "Vercel 開發者體驗專家的個人網站。",
      icon: "fa-solid fa-star",
      link: "https://delba.dev",
      color: "text-yellow-200",
      bgColor: "bg-yellow-200/10",
    },
  ],
};

// ==========================================
// 3. API SERVICE LAYER
// ==========================================
const ApiService = {
  async fetchResources(
    page = 1,
    pageSize = PAGE_SIZE,
    filter = "all",
    subFilter = "all",
    searchQuery = "",
  ) {
    // 移除 setTimeout，直接執行邏輯

    // 1. Filter Logic
    let filtered = MOCK_DATABASE.data.filter((item) => {
      const matchesMain = filter === "all" || item.category === filter;
      const matchesSub = subFilter === "all" || item.subcategory === subFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesMain && matchesSub && matchesSearch;
    });

    // 2. Pagination Logic
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = filtered.slice(start, end);
    const hasMore = end < filtered.length;

    return {
      data: paginatedData,
      hasMore: hasMore,
      total: filtered.length,
    };
  },
};

// ==========================================
// 4. APP LOGIC
// ==========================================

// State Management
const appState = {
  resources: [],
  currentFilter: "all",
  currentSubFilter: "all",
  searchQuery: "",
  currentPage: 1,
  isLoading: false,
  hasMore: true,
};

// DOM Elements
const DOM = {
  grid: document.getElementById("resourceGrid"),
  searchInput: document.getElementById("searchInput"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  subFilterContainer: document.getElementById("subFilterContainer"),
  noResults: document.getElementById("noResults"),
  initialLoading: document.getElementById("initialLoading"),
  scrollSentinel: document.getElementById("scrollSentinel"),
  scrollLoader: document.getElementById("scrollLoader"),
  endOfList: document.getElementById("endOfList"),
};

// --- Core Functions ---

async function initApp() {
  renderSubFilters("all");
  await loadResources(true); // Initial load (reset)
  initIntersectionObserver();
  initCanvas();
  animate();
}

async function loadResources(isReset = false) {
  if (appState.isLoading) return;
  if (!isReset && !appState.hasMore) return;

  appState.isLoading = true;

  // UI State
  if (isReset) {
    appState.currentPage = 1;
    appState.resources = [];
    DOM.grid.innerHTML = "";
    DOM.initialLoading.classList.remove("hidden");
    DOM.noResults.classList.add("hidden");
    DOM.endOfList.classList.add("hidden");
  } else {
    DOM.scrollLoader.classList.remove("hidden");
  }

  try {
    const response = await ApiService.fetchResources(
      appState.currentPage,
      PAGE_SIZE,
      appState.currentFilter,
      appState.currentSubFilter,
      appState.searchQuery,
    );

    // Update State
    appState.resources = [...appState.resources, ...response.data];
    appState.hasMore = response.hasMore;
    appState.currentPage++;

    // Update UI
    DOM.initialLoading.classList.add("hidden");
    DOM.scrollLoader.classList.add("hidden");

    if (response.data.length > 0) {
      renderGridItems(response.data);
    }

    if (appState.resources.length === 0) {
      DOM.noResults.classList.remove("hidden");
    }

    if (!appState.hasMore && appState.resources.length > 0) {
      DOM.endOfList.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Load Error", error);
  } finally {
    appState.isLoading = false;
  }
}

function renderGridItems(items) {
  items.forEach((item, index) => {
    // Wrapper for Layout Stability (Placeholder)
    const wrapper = document.createElement("div");
    wrapper.className = `card-wrapper relative h-28 w-full group/placeholder animate-card-enter`;
    wrapper.style.animationDelay = `${index * 50}ms`;

    // The Pop-out Card
    const card = document.createElement("a");
    card.href = item.link;
    card.target = "_blank";

    card.className = `glass-card p-5 rounded flex flex-col gap-2 cursor-pointer`;

    card.innerHTML = `
              <div class="flex items-start justify-between w-full">
                   <div class="flex items-center gap-3 w-full min-w-0">
                      <div class="w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center ${item.color} shrink-0">
                          <i class="${item.icon} text-lg"></i>
                      </div>
                      <div class="min-w-0 flex-grow">
                          <h3 class="text-white font-mono text-sm font-bold truncate">${item.name}</h3>
                          <div class="flex gap-1 mt-1">
                              <span class="text-[8px] uppercase font-mono text-gray-500 border border-gray-700 px-1 rounded">${item.category.slice(0, 3)}</span>
                              ${item.subcategory ? `<span class="text-[8px] uppercase font-mono text-neon-cyan/50 border border-neon-cyan/20 px-1 rounded">${item.subcategory}</span>` : ""}
                          </div>
                      </div>
                   </div>
                   <i class="fa-solid fa-arrow-up-right-from-square text-gray-600 text-xs opacity-0 group-hover/placeholder:opacity-100 transition-opacity"></i>
              </div>
              
              <p class="text-gray-500 text-xs font-mono mt-1 leading-relaxed line-clamp-2 group-hover/placeholder:line-clamp-none group-hover/placeholder:text-gray-300 transition-colors">
                  ${item.desc}
              </p>
          `;

    wrapper.appendChild(card);
    DOM.grid.appendChild(wrapper);
  });
}

function renderSubFilters(category) {
  const container = DOM.subFilterContainer;
  container.innerHTML = "";

  if (category === "all" || !SUB_CATEGORIES[category]) {
    container.classList.add("opacity-0", "translate-y-2");
    container.style.pointerEvents = "none";
    return;
  }

  container.classList.remove("opacity-0", "translate-y-2");
  container.style.pointerEvents = "auto";

  SUB_CATEGORIES[category].forEach((sub) => {
    const btn = document.createElement("button");
    btn.className = `sub-filter-btn font-mono tracking-wider ${appState.currentSubFilter === sub.id ? "active" : ""}`;
    btn.textContent = sub.name;
    btn.onclick = () => {
      appState.currentSubFilter = sub.id;
      renderSubFilters(category);
      loadResources(true); // Reset and load
    };
    container.appendChild(btn);
  });
}

// --- Intersection Observer for Infinite Scroll ---
function initIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: "100px", // Trigger before hitting bottom
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !appState.isLoading && appState.hasMore) {
        loadResources(false); // Load next page
      }
    });
  }, options);

  observer.observe(DOM.scrollSentinel);
}

// --- Event Listeners ---

DOM.filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.filterBtns.forEach((b) => {
      b.classList.remove("active", "text-neon-cyan");
      b.classList.add("text-gray-500");
    });
    btn.classList.add("active");
    btn.classList.remove("text-gray-500");

    const newCategory = btn.getAttribute("data-category");

    if (newCategory !== appState.currentFilter) {
      appState.currentSubFilter = "all";
    }

    appState.currentFilter = newCategory;
    renderSubFilters(newCategory);
    loadResources(true); // Reset and load
  });
});

function resetFilters() {
  appState.currentFilter = "all";
  appState.currentSubFilter = "all";
  appState.searchQuery = "";
  DOM.searchInput.value = "";

  DOM.filterBtns.forEach((b) => {
    if (b.dataset.category === "all") {
      b.classList.add("active");
      b.classList.remove("text-gray-500");
    } else {
      b.classList.remove("active", "text-neon-cyan");
      b.classList.add("text-gray-500");
    }
  });

  renderSubFilters("all");
  loadResources(true);
}

let debounceTimer;
DOM.searchInput.addEventListener("input", (e) => {
  appState.searchQuery = e.target.value;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    loadResources(true); // Reset and search
  }, 300);
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    DOM.searchInput.focus();
  }
});

// --- Visual Effects (Canvas) ---

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width,
  height,
  particles = [];

function initCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  particles = [];
  const count = Math.floor((width * height) / 18000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 0.5;

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.opacity += p.pulseSpeed;

    if (p.opacity > 0.6 || p.opacity < 0.1) p.pulseSpeed *= -1;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180, 180, 180, ${p.opacity})`;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
      if (dist < 80) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 100, 100, ${0.05 - dist / 2000})`;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", initCanvas);

// --- Start App ---
initApp();
