(function () {
    const supported = ["en", "zh"];
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    const stored = localStorage.getItem("copyhistory-docs-lang");
    const browser = (navigator.language || navigator.userLanguage || "en").toLowerCase();

    function normalize(value) {
        if (!value) return "";
        const lang = value.toLowerCase();
        if (lang.startsWith("zh")) return "zh";
        if (lang.startsWith("en")) return "en";
        return "";
    }

    function setLang(value, persist) {
        const lang = supported.includes(value) ? value : "en";
        document.documentElement.dataset.lang = lang;
        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
        document.querySelectorAll("[data-lang-button]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.langButton === lang);
            button.setAttribute("aria-pressed", String(button.dataset.langButton === lang));
        });
        if (persist) {
            localStorage.setItem("copyhistory-docs-lang", lang);
        }
    }

    setLang(normalize(requested) || normalize(stored) || normalize(browser) || "en", false);

    window.addEventListener("DOMContentLoaded", () => {
        setLang(document.documentElement.dataset.lang, false);
        document.querySelectorAll("[data-lang-button]").forEach((button) => {
            button.addEventListener("click", () => setLang(button.dataset.langButton, true));
        });
    });
})();
