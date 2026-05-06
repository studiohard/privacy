(function () {
  const STORAGE_KEY = "quickpreview-site-language";
  const COPY = {
    en: {
      home: "Home",
      support: "Support",
      privacy: "Privacy",
      heroEyebrow: "Native Quick Look extensions for macOS",
      heroTitle: "Preview folders, Markdown, and archives without breaking flow.",
      heroLead: "QuickPreview makes the Space bar more useful: inspect structure, read Markdown, and check archive contents before opening another app.",
      supportCta: "Get support",
      privacyCta: "Read privacy policy",
      featureTitle: "Built for fast local inspection",
      featureLead: "The app focuses on the moments when Finder's default preview is too thin and opening a full editor is too much.",
      featureFolderTitle: "Folder previews",
      featureFolderBody: "Scan folder contents, file counts, and structure directly from Quick Look.",
      featureMarkdownTitle: "Markdown reading",
      featureMarkdownBody: "Open Markdown files in a richer, more comfortable reading layout.",
      featureArchiveTitle: "Archive inspection",
      featureArchiveBody: "Check supported archive contents before extracting them.",
      featureSettingsTitle: "Preview controls",
      featureSettingsBody: "Tune layout, row size, hidden-file visibility, and other display options.",
      featurePrivacyTitle: "Local by design",
      featurePrivacyBody: "Previewed content is processed on your Mac and is not uploaded by QuickPreview.",
      featureMacTitle: "macOS native",
      featureMacBody: "Designed around Quick Look, Finder, and the desktop workflow you already use.",
      linksTitle: "Quick links",
      linksLead: "Public pages for App Store review, help, and privacy details.",
      linkSupportTitle: "Support",
      linkSupportBody: "FAQ, troubleshooting details, and contact information.",
      linkPrivacyTitle: "Privacy Policy",
      linkPrivacyBody: "How QuickPreview handles files, settings, and local data.",
      updated: "Page updated: April 19, 2026",
      backHome: "Back to QuickPreview home",
      siteHome: "Back to site home",
      supportTitle: "QuickPreview Support",
      supportIntro: "If you run into a problem with QuickPreview or want to request an improvement, this page is the public support page for the app.",
      contactTitle: "Contact",
      contactLine: "Email: <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>",
      contactHint: "Please include your macOS version, QuickPreview version, what file type you previewed, and the steps needed to reproduce the issue.",
      faqTitle: "Frequently Asked Questions",
      faq1Q: "Q: What does QuickPreview do?",
      faq1A: "A: QuickPreview extends macOS Quick Look so you can inspect folder contents, Markdown files, and supported archives more efficiently.",
      faq2Q: "Q: Does QuickPreview upload my files?",
      faq2A: "A: No. QuickPreview reads selected content locally to generate previews and does not upload that content to external servers. See the <a href=\"privacy.html\">Privacy Policy</a> for details.",
      faq3Q: "Q: Which file types are currently supported?",
      faq3A: "A: QuickPreview currently focuses on folder previews, Markdown previews, and supported archive previews within macOS Quick Look.",
      faq4Q: "Q: Why does a preview sometimes look incomplete?",
      faq4A: "A: Some previews depend on what macOS allows the Quick Look extension to read for the selected item. Very large folders, unusual file structures, or unsupported formats may lead to limited results.",
      reportingTitle: "Reporting Issues",
      report1: "Describe the problem clearly.",
      report2: "Include the file or folder type involved.",
      report3: "List the steps to reproduce the issue.",
      report4: "Include your macOS version and QuickPreview version.",
      report5: "Attach a screenshot if it helps explain the problem.",
      privacyTitle: "QuickPreview Privacy Policy",
      privacyIntro: "QuickPreview is a macOS app with Quick Look extensions for previewing folders, Markdown files, and supported archives. This privacy policy explains how QuickPreview handles your information.",
      lastUpdated: "Last Updated: April 19, 2026",
      overviewTitle: "Overview",
      dataTitle: "Data Collection",
      noCollect: "QuickPreview does NOT collect, transmit, or share your personal data.",
      accessesTitle: "What QuickPreview Accesses",
      access1: "<strong>Files and folders you choose to preview</strong>: QuickPreview reads the selected item and related file metadata so it can render the preview.",
      access2: "<strong>Supported archive contents</strong>: For archive previews, the app may inspect archive entries in order to display the file list.",
      access3: "<strong>App preferences</strong>: Display mode, row size, hidden-file visibility, and other preview settings are stored locally on your Mac.",
      notDoTitle: "What QuickPreview Does Not Do",
      notDo1: "It does not upload your files, folders, Markdown content, or archive contents to any server.",
      notDo2: "It does not use analytics, advertising SDKs, or tracking technologies.",
      notDo3: "It does not require an account or sign-in.",
      permissionsTitle: "Permissions and Access",
      permissionsBody: "QuickPreview uses the macOS App Sandbox and requests read-only access to user-selected files and folders. It only reads the items needed to generate previews. It does not request full disk access.",
      storageTitle: "Local Storage",
      storageBody: "QuickPreview stores its settings locally using macOS preferences and an app group container shared with its preview extensions. These settings remain on your device.",
      storage1: "<strong>App group preferences</strong>: stored under the app group associated with QuickPreview and its extensions",
      storage2: "<strong>Local caches or debug logs</strong>: temporary caches or optional debug logs may be written locally to help the app run or diagnose issues during development or troubleshooting",
      networkTitle: "Network Use",
      networkBody: "QuickPreview is designed to work without sending your previewed content over the network. If you click external links from the app or support pages, those requests are handled by your browser or the relevant system app, not by QuickPreview itself.",
      retentionTitle: "Data Retention",
      retention1: "Your local preferences remain on your Mac until you change or remove them.",
      retention2: "Temporary caches or logs may be overwritten or removed by the app or the system over time.",
      retention3: "Uninstalling the app may not automatically remove every sandbox or container file. You can manually delete remaining app data from your Mac if needed.",
      childrenTitle: "Children's Privacy",
      childrenBody: "QuickPreview does not knowingly collect personal information from children.",
      changesTitle: "Changes to This Policy",
      changesBody: "We may update this privacy policy from time to time. Changes will be indicated by updating the Last Updated date at the top of this page.",
      privacyContactTitle: "Contact",
      privacyContactBody: "If you have questions about this privacy policy, please contact us at <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>.",
      controlTitle: "Your Control",
      controlBody: "Because QuickPreview processes data locally on your Mac:",
      control1: "You control which files and folders are previewed.",
      control2: "You can remove the app and its local data at any time.",
      control3: "Your content stays on your device unless you explicitly share it yourself."
    },
    zh: {
      home: "首页",
      support: "支持",
      privacy: "隐私",
      heroEyebrow: "面向 macOS 的原生快速查看扩展",
      heroTitle: "无需打断工作流，直接预览文件夹、Markdown 和压缩包。",
      heroLead: "QuickPreview 让空格键更有用：查看目录结构、阅读 Markdown、提前检查压缩包内容，不必马上打开其他应用。",
      supportCta: "获取支持",
      privacyCta: "查看隐私政策",
      featureTitle: "为本地快速查看而设计",
      featureLead: "当 Finder 默认预览信息太少、完整打开编辑器又太重时，QuickPreview 补上中间这一层。",
      featureFolderTitle: "文件夹预览",
      featureFolderBody: "直接在快速查看中浏览文件夹内容、文件数量和目录结构。",
      featureMarkdownTitle: "Markdown 阅读",
      featureMarkdownBody: "以更舒适的阅读版式预览 Markdown 文件。",
      featureArchiveTitle: "压缩包检查",
      featureArchiveBody: "在解压之前查看受支持压缩包中的文件列表。",
      featureSettingsTitle: "预览控制",
      featureSettingsBody: "调整布局、行高、隐藏文件显示和其他预览选项。",
      featurePrivacyTitle: "本地优先",
      featurePrivacyBody: "被预览的内容在你的 Mac 上处理，QuickPreview 不会上传这些内容。",
      featureMacTitle: "macOS 原生体验",
      featureMacBody: "围绕快速查看、Finder 和桌面工作流设计。",
      linksTitle: "快速链接",
      linksLead: "用于 App Store 审核、帮助和隐私说明的公开页面。",
      linkSupportTitle: "支持",
      linkSupportBody: "常见问题、排查信息和联系方式。",
      linkPrivacyTitle: "隐私政策",
      linkPrivacyBody: "QuickPreview 如何处理文件、设置和本地数据。",
      updated: "页面更新：2026 年 4 月 19 日",
      backHome: "返回 QuickPreview 首页",
      siteHome: "返回站点首页",
      supportTitle: "QuickPreview 支持",
      supportIntro: "如果你在使用 QuickPreview 时遇到问题，或希望提出改进建议，可以通过这个公开支持页面联系我们。",
      contactTitle: "联系",
      contactLine: "邮箱：<a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>",
      contactHint: "请附上你的 macOS 版本、QuickPreview 版本、正在预览的文件类型，以及复现问题所需的步骤。",
      faqTitle: "常见问题",
      faq1Q: "问：QuickPreview 是做什么的？",
      faq1A: "答：QuickPreview 扩展了 macOS 快速查看能力，让你更高效地查看文件夹内容、Markdown 文件和受支持的压缩包。",
      faq2Q: "问：QuickPreview 会上传我的文件吗？",
      faq2A: "答：不会。QuickPreview 只会在本地读取所选内容来生成预览，不会把这些内容上传到外部服务器。详情请查看<a href=\"privacy.html\">隐私政策</a>。",
      faq3Q: "问：目前支持哪些文件类型？",
      faq3A: "答：QuickPreview 当前专注于 macOS 快速查看中的文件夹预览、Markdown 预览和受支持压缩包预览。",
      faq4Q: "问：为什么有时预览内容不完整？",
      faq4A: "答：部分预览取决于 macOS 允许快速查看扩展读取的内容。非常大的文件夹、特殊文件结构或不受支持的格式，可能只能显示有限结果。",
      reportingTitle: "反馈问题",
      report1: "清楚描述你遇到的问题。",
      report2: "说明相关的文件或文件夹类型。",
      report3: "列出复现问题的步骤。",
      report4: "提供 macOS 版本和 QuickPreview 版本。",
      report5: "如果截图有助于说明问题，可以一并附上。",
      privacyTitle: "QuickPreview 隐私政策",
      privacyIntro: "QuickPreview 是一款带有快速查看扩展的 macOS 应用，用于预览文件夹、Markdown 文件和受支持的压缩包。本隐私政策说明 QuickPreview 如何处理你的信息。",
      lastUpdated: "最后更新：2026 年 4 月 19 日",
      overviewTitle: "概览",
      dataTitle: "数据收集",
      noCollect: "QuickPreview 不会收集、传输或分享你的个人数据。",
      accessesTitle: "QuickPreview 会访问什么",
      access1: "<strong>你选择预览的文件和文件夹</strong>：QuickPreview 会读取所选项目及相关文件元数据，以便生成预览。",
      access2: "<strong>受支持压缩包的内容</strong>：对于压缩包预览，应用可能会检查压缩包条目以显示文件列表。",
      access3: "<strong>应用偏好设置</strong>：显示模式、行高、隐藏文件可见性和其他预览设置会保存在你的 Mac 本地。",
      notDoTitle: "QuickPreview 不会做什么",
      notDo1: "不会把你的文件、文件夹、Markdown 内容或压缩包内容上传到任何服务器。",
      notDo2: "不会使用分析、广告 SDK 或跟踪技术。",
      notDo3: "不需要账号或登录。",
      permissionsTitle: "权限和访问",
      permissionsBody: "QuickPreview 使用 macOS App Sandbox，并请求对用户所选文件和文件夹的只读访问。它只读取生成预览所需的项目，不会请求完整磁盘访问权限。",
      storageTitle: "本地存储",
      storageBody: "QuickPreview 使用 macOS 偏好设置以及与预览扩展共享的 App Group 容器在本地保存设置。这些设置会保留在你的设备上。",
      storage1: "<strong>App Group 偏好设置</strong>：保存在 QuickPreview 及其扩展关联的 App Group 中",
      storage2: "<strong>本地缓存或调试日志</strong>：为帮助应用运行，或在开发和排查问题时辅助诊断，可能会在本地写入临时缓存或可选调试日志",
      networkTitle: "网络使用",
      networkBody: "QuickPreview 的设计目标是不通过网络发送你预览的内容。如果你从应用或支持页面点击外部链接，这些请求由浏览器或相应系统应用处理，而不是由 QuickPreview 自身处理。",
      retentionTitle: "数据保留",
      retention1: "你的本地偏好设置会保留在 Mac 上，直到你修改或删除它们。",
      retention2: "临时缓存或日志可能会由应用或系统随时间覆盖或删除。",
      retention3: "卸载应用不一定会自动删除所有沙盒或容器文件。如有需要，你可以手动删除 Mac 上残留的应用数据。",
      childrenTitle: "儿童隐私",
      childrenBody: "QuickPreview 不会有意收集儿童的个人信息。",
      changesTitle: "政策变更",
      changesBody: "我们可能会不时更新本隐私政策。更新会通过页面顶部的“最后更新”日期体现。",
      privacyContactTitle: "联系",
      privacyContactBody: "如果你对本隐私政策有疑问，请通过 <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a> 联系我们。",
      controlTitle: "你的控制权",
      controlBody: "由于 QuickPreview 在你的 Mac 本地处理数据：",
      control1: "你可以控制预览哪些文件和文件夹。",
      control2: "你可以随时移除应用及其本地数据。",
      control3: "除非你主动分享，否则你的内容会留在你的设备上。"
    }
  };

  function preferredLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang && /^zh/i.test(queryLang)) return "zh";
    if (queryLang && /^en/i.test(queryLang)) return "en";

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") return stored;

    const navLangs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    return navLangs.some((lang) => /^zh/i.test(lang)) ? "zh" : "en";
  }

  function applyLanguage(lang) {
    const copy = COPY[lang] || COPY.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (copy[key]) node.textContent = copy[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.getAttribute("data-i18n-html");
      if (copy[key]) node.innerHTML = copy[key];
    });
    document.querySelectorAll("[data-lang-src]").forEach((node) => {
      const src = node.getAttribute(lang === "zh" ? "data-src-zh" : "data-src-en");
      if (src) node.setAttribute("src", src);
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      const isActive = button.getAttribute("data-lang-button") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    window.localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initial = preferredLanguage();
    applyLanguage(initial);
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.getAttribute("data-lang-button")));
    });
  });
})();
