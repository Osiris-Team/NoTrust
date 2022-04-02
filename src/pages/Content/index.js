import { isTrusted } from './modules/UrlChecker';

if (!isTrusted(window.location.href)) window.location.href = chrome.runtime.getBackgroundPage().URLStorage;
