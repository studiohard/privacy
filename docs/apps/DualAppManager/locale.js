(function () {
  const STORAGE_KEY = "dual-app-manager-site-language";
  const COPY = {
    en: {
      brandName: "Dual App Manager",
      support: "Support",
      privacy: "Privacy",
      supportTitle: "Dual App Manager Support",
      supportIntro: "Dual App Manager helps you organize local app workspaces, website shortcuts, and optional local app instance entries on macOS. This page provides support and privacy links for App Store review and user help.",
      contactTitle: "Contact",
      contactLine: "Email: <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>",
      contactHint: "Please include your macOS version, Dual App Manager version, the app or workspace involved, and the steps needed to reproduce the issue.",
      localTitle: "Local by design",
      localBody: "Workspace data, app metadata, website entries, and account notes are stored locally on your Mac and are not uploaded by Dual App Manager.",
      privacyCta: "Read privacy policy",
      faqTitle: "Frequently Asked Questions",
      faq1Q: "Q: What does Dual App Manager do?",
      faq1A: "A: Dual App Manager is a macOS workspace launcher for locally installed apps, website shortcuts, and account notes. It is designed for users who need separate work and personal contexts, including WeChat and WeCom workflows.",
      faq2Q: "Q: Does Dual App Manager upload my apps, accounts, or notes?",
      faq2A: "A: No. Dual App Manager stores workspace data locally and does not upload your app list, account notes, website shortcuts, or personal data. See the <a href=\"privacy.html\">Privacy Policy</a> for details.",
      faq3Q: "Q: Do I need to install the Helper?",
      faq3A: "A: No. The base app can manage local workspaces, add apps, open original apps, and launch websites without the optional Helper. The Helper is only for advanced local instance features.",
      faq4Q: "Q: Does Dual App Manager include or distribute WeChat, WeCom, or any third-party app?",
      faq4A: "A: No. Dual App Manager does not include, download, sell, or redistribute third-party apps. It only works with apps already installed on your Mac and selected by you.",
      faq5Q: "Q: Why can an advanced instance feature fail?",
      faq5A: "A: Compatibility can depend on macOS, the selected app version, app signing, system policies, and the optional Helper status. Dual App Manager should show local compatibility information when a feature is unavailable.",
      reportingTitle: "Reporting Issues",
      report1: "Describe the problem clearly.",
      report2: "Include your macOS version and Dual App Manager version.",
      report3: "Name the app involved, such as WeChat, WeCom, a browser, or another local app.",
      report4: "List the steps to reproduce the issue.",
      report5: "Include whether the optional Helper is installed if the issue relates to advanced instance features.",
      report6: "Attach a screenshot if it helps explain the problem.",
      supportFooter: "Dual App Manager Support",
      updated: "Page updated: May 17, 2026",
      privacyTitle: "Dual App Manager Privacy Policy",
      privacyIntro: "Dual App Manager is a macOS app for local app workspaces, website shortcuts, and optional local instance management. This policy explains what information the app handles and how it stays on your device.",
      lastUpdated: "Last Updated: May 17, 2026",
      overviewTitle: "Overview",
      overviewBody: "Dual App Manager helps you organize locally installed apps, workspace shortcuts, account notes, and website entries on your Mac. Its core data is processed locally. Dual App Manager does not require an account and does not operate a cloud service for your workspace data.",
      dataTitle: "Data Collection",
      noCollect: "Dual App Manager does not collect, transmit, sell, or share your personal data.",
      accessTitle: "What Dual App Manager Accesses",
      access1: "<strong>Apps you choose to add</strong>: Dual App Manager reads basic metadata from user-selected apps, such as app name, icon, version, bundle identifier, and file path.",
      access2: "<strong>Workspace entries</strong>: Workspace names, linked apps, website URLs, launch counts, favorites, recent usage, and account notes may be stored locally so the app can restore your setup.",
      access3: "<strong>Optional Helper status</strong>: If you install the optional local Helper, Dual App Manager may read its local installation and availability status to show compatibility and instance controls.",
      access4: "<strong>Compatibility information</strong>: macOS version, selected app version, bundle identifier, path, and related local status may be displayed to help you understand whether a feature can run.",
      notDoTitle: "What Dual App Manager Does Not Do",
      notDo1: "It does not upload your app list, workspace data, notes, website entries, or account information to any server.",
      notDo2: "It does not store account passwords, verification codes, chat records, contacts, or payment information.",
      notDo3: "It does not use analytics SDKs, advertising SDKs, third-party tracking, or behavioral profiling.",
      notDo4: "It does not download, distribute, modify, inject into, or crack third-party apps.",
      permissionsTitle: "Permissions and Access",
      permissionsBody1: "Dual App Manager is designed around user-initiated actions. It works with apps and files that you choose through macOS controls, and it launches original apps or websites only when you ask it to. The base app does not require root access, Full Disk Access, Accessibility permission, or screen recording permission.",
      permissionsBody2: "The optional Helper is used only for advanced local instance features. Installing or removing it is a user-controlled action, and the basic workspace launcher remains usable without it.",
      storageTitle: "Local Storage",
      storageBody: "Dual App Manager stores app library and workspace data locally on your Mac using the app's local container and macOS preferences. This may include:",
      storage1: "Workspace names and descriptions.",
      storage2: "User-added app metadata and file paths.",
      storage3: "Website names and URLs that you add to a workspace.",
      storage4: "Account labels or notes that you enter for your own reference.",
      storage5: "Favorites, recent usage, launch counts, and local compatibility status.",
      storage6: "Local logs or caches needed for troubleshooting and normal operation.",
      networkTitle: "Network Use",
      networkBody: "Dual App Manager does not send your workspace data over the network. When you open a website shortcut, the URL is opened by your browser or the relevant system component. Those web requests are governed by the destination website and browser you use, not by Dual App Manager.",
      retentionTitle: "Data Retention",
      retention1: "Local app and workspace data remains on your Mac until you edit or remove it.",
      retention2: "Temporary caches or logs may be overwritten or removed by the app or by macOS over time.",
      retention3: "Uninstalling the app may not automatically remove every local container file. You can manually remove remaining local data from your Mac if needed.",
      childrenTitle: "Children's Privacy",
      childrenBody: "Dual App Manager does not knowingly collect personal information from children.",
      changesTitle: "Changes to This Policy",
      changesBody: "We may update this privacy policy from time to time. Changes will be indicated by updating the Last Updated date at the top of this page.",
      privacyContactTitle: "Contact",
      privacyContactBody: "If you have questions about this privacy policy, contact us at <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>.",
      backSupport: "Back to Dual App Manager support"
    },
    zh: {
      brandName: "应用分身管家",
      support: "支持",
      privacy: "隐私",
      supportTitle: "应用分身管家支持",
      supportIntro: "应用分身管家用于在 macOS 上管理本地应用工作区、网站快捷入口和可选的本地应用实例入口。本页面提供 App Store 审核和用户帮助所需的支持与隐私链接。",
      contactTitle: "联系",
      contactLine: "邮箱：<a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a>",
      contactHint: "请附上你的 macOS 版本、应用分身管家版本、相关应用或工作区，以及复现问题所需的步骤。",
      localTitle: "本地优先",
      localBody: "工作区数据、应用元数据、网站入口和账号备注会保存在你的 Mac 本地，应用分身管家不会上传这些内容。",
      privacyCta: "查看隐私政策",
      faqTitle: "常见问题",
      faq1Q: "问：应用分身管家是做什么的？",
      faq1A: "答：应用分身管家是 macOS 上的本地工作区启动器，用于管理已安装应用、网站快捷入口和账号备注，适合需要区分工作与个人场景的用户，包括微信和企业微信工作流。",
      faq2Q: "问：应用分身管家会上传我的应用、账号或备注吗？",
      faq2A: "答：不会。应用分身管家会把工作区数据保存在本地，不会上传你的应用列表、账号备注、网站入口或个人数据。详情请查看<a href=\"privacy.html\">隐私政策</a>。",
      faq3Q: "问：我必须安装 Helper 吗？",
      faq3A: "答：不需要。基础应用可以在不安装可选 Helper 的情况下管理本地工作区、添加应用、打开原版应用和启动网站。Helper 仅用于高级本地实例能力。",
      faq4Q: "问：应用分身管家是否内置或分发微信、企业微信或其他第三方应用？",
      faq4A: "答：不会。应用分身管家不会内置、下载、销售或重新分发第三方应用。它只会处理你 Mac 上已安装并由你选择的应用。",
      faq5Q: "问：为什么高级实例功能可能失败？",
      faq5A: "答：兼容性可能取决于 macOS、所选应用版本、应用签名、系统策略和可选 Helper 状态。当功能不可用时，应用分身管家会尽量展示本地兼容性信息。",
      reportingTitle: "反馈问题",
      report1: "清楚描述你遇到的问题。",
      report2: "提供 macOS 版本和应用分身管家版本。",
      report3: "说明相关应用，例如微信、企业微信、浏览器或其他本地应用。",
      report4: "列出复现问题的步骤。",
      report5: "如果问题与高级实例功能有关，请说明是否安装了可选 Helper。",
      report6: "如果截图有助于说明问题，可以一并附上。",
      supportFooter: "应用分身管家支持",
      updated: "页面更新：2026 年 5 月 17 日",
      privacyTitle: "应用分身管家隐私政策",
      privacyIntro: "应用分身管家是一款 macOS 本地应用工作区、网站快捷入口和可选本地实例管理工具。本政策说明应用会处理哪些信息，以及这些信息如何保留在你的设备上。",
      lastUpdated: "最后更新：2026 年 5 月 17 日",
      overviewTitle: "概览",
      overviewBody: "应用分身管家帮助你在 Mac 上整理已安装应用、工作区快捷入口、账号备注和网站入口。核心数据在本地处理。应用分身管家不需要账号，也不为你的工作区数据提供云服务。",
      dataTitle: "数据收集",
      noCollect: "应用分身管家不会收集、传输、出售或分享你的个人数据。",
      accessTitle: "应用分身管家会访问什么",
      access1: "<strong>你选择添加的应用</strong>：应用分身管家会读取用户选择应用的基础元数据，例如应用名称、图标、版本、Bundle ID 和文件路径。",
      access2: "<strong>工作区条目</strong>：工作区名称、关联应用、网站 URL、启动次数、收藏、最近使用记录和账号备注可能会保存在本地，以便应用恢复你的设置。",
      access3: "<strong>可选 Helper 状态</strong>：如果你安装了可选本地 Helper，应用分身管家可能会读取其本地安装和可用状态，用于展示兼容性和实例控制。",
      access4: "<strong>兼容性信息</strong>：macOS 版本、所选应用版本、Bundle ID、路径和相关本地状态可能会显示在应用中，帮助你了解功能是否可用。",
      notDoTitle: "应用分身管家不会做什么",
      notDo1: "不会把你的应用列表、工作区数据、备注、网站入口或账号信息上传到任何服务器。",
      notDo2: "不会保存账号密码、验证码、聊天记录、联系人或支付信息。",
      notDo3: "不会使用分析 SDK、广告 SDK、第三方跟踪或行为画像。",
      notDo4: "不会下载、分发、修改、注入或破解第三方应用。",
      permissionsTitle: "权限和访问",
      permissionsBody1: "应用分身管家围绕用户主动操作设计。它只处理你通过 macOS 控件选择的应用和文件，并且只在你主动操作时启动原版应用或网站。基础应用不需要 root、完整磁盘访问、辅助功能权限或屏幕录制权限。",
      permissionsBody2: "可选 Helper 仅用于高级本地实例能力。安装或移除 Helper 由你控制；不安装 Helper 时，基础工作区启动器功能仍可使用。",
      storageTitle: "本地存储",
      storageBody: "应用分身管家会使用应用本地容器和 macOS 偏好设置在你的 Mac 上保存应用库和工作区数据，可能包括：",
      storage1: "工作区名称和说明。",
      storage2: "用户添加的应用元数据和文件路径。",
      storage3: "你添加到工作区的网站名称和 URL。",
      storage4: "你为自己参考而填写的账号标签或备注。",
      storage5: "收藏、最近使用、启动次数和本地兼容性状态。",
      storage6: "排查问题和正常运行所需的本地日志或缓存。",
      networkTitle: "网络使用",
      networkBody: "应用分身管家不会通过网络发送你的工作区数据。当你打开网站快捷入口时，该 URL 会由你的浏览器或相关系统组件打开。这些网页请求由目标网站和你使用的浏览器负责，而不是由应用分身管家负责。",
      retentionTitle: "数据保留",
      retention1: "本地应用和工作区数据会保留在你的 Mac 上，直到你编辑或删除它们。",
      retention2: "临时缓存或日志可能会由应用或 macOS 随时间覆盖或删除。",
      retention3: "卸载应用不一定会自动删除所有本地容器文件。如有需要，你可以手动删除 Mac 上残留的本地数据。",
      childrenTitle: "儿童隐私",
      childrenBody: "应用分身管家不会有意收集儿童的个人信息。",
      changesTitle: "政策变更",
      changesBody: "我们可能会不时更新本隐私政策。更新会通过页面顶部的“最后更新”日期体现。",
      privacyContactTitle: "联系",
      privacyContactBody: "如果你对本隐私政策有疑问，请通过 <a href=\"mailto:huag9998@gmail.com\">huag9998@gmail.com</a> 联系我们。",
      backSupport: "返回应用分身管家支持页面"
    }
  };

  const PAGE_META = {
    support: {
      en: {
        title: "Support - Dual App Manager",
        description: "Dual App Manager support, FAQ, troubleshooting, and contact information."
      },
      zh: {
        title: "支持 - 应用分身管家",
        description: "应用分身管家支持、常见问题、故障排查和联系方式。"
      }
    },
    privacy: {
      en: {
        title: "Privacy Policy - Dual App Manager",
        description: "Dual App Manager privacy policy and local data handling details."
      },
      zh: {
        title: "隐私政策 - 应用分身管家",
        description: "应用分身管家隐私政策和本地数据处理说明。"
      }
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
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      const isActive = button.getAttribute("data-lang-button") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const page = document.body.getAttribute("data-page");
    const meta = PAGE_META[page] && PAGE_META[page][lang];
    if (meta) {
      document.title = meta.title;
      const description = document.querySelector("meta[name=\"description\"]");
      if (description) description.setAttribute("content", meta.description);
    }

    window.localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(preferredLanguage());
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.getAttribute("data-lang-button")));
    });
  });
})();
