
let i18nConfig = {
  preload: ['zh-CN', 'en-US','zh-TW'],
  lng: 'zh-TW',
  debug: true,
  resources: {
    "zh-TW": {
      "translation": {
        "login": {
          "companyName": "公司名稱",
          "account": "帳號"
        },
        "menu": {
          "home": "首頁"
        },
        "hhh":'dfdfdfd'
      }
    }
  },
  fallbackLng: 'zh-TW',
  ns: ['login', 'menu','hhh'],
  defaultNS: 'login',
  debug: true
}

export default i18nConfig;