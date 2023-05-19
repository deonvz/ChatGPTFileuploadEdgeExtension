browser.runtime.onInstalled.addListener(() => {
  browser.webNavigation.onDOMContentLoaded.addListener((details) => {
    const { tabId } = details;
    browser.tabs.executeScript(tabId, { file: 'content.js' });
  }, { url: [{ hostSuffix: 'chat.openai.com' }] });
});
