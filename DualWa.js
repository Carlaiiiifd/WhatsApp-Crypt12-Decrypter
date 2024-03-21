// const account = localStorage.getItem("last-wid-md");
// if (!typeof account === "string") {
//   window.localStorage.clear();
// }

// 插入meta标签
function insertMetaTag() {
  // 插入meta viewport标签
  const metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content =
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
  document.getElementsByTagName("head")[0].appendChild(metaViewport);
  console.log("insert meta tag!");
}

// 插入style标签
function insertStyleTag() {
  const styleText = `
        html {
          background: transparent;
        }
        body {
          background: transparent;
        }
        html[dir] .landing-wrapper:before {
          background: transparent;
        }
        #app {
          background: transparent !important;
        }
        .app-wrapper-web {
          background: transparent !important;
        }
        /* 加载进度条界面 start */
        ._30oB1 {
          width: 92vw;
        }
        /* 加载进度条界面 end */
        /* 登录扫码界面 start */
        .nMnIl {
          overflow-y: hidden;
        }
        .landing-window {
          height: 100vh;
        }
        .landing-wrapper {
          min-width: auto;
          width: 100%;
          height: 100vh;
          padding-left: 0px !important;
          padding-right: 0px !important;
          background: transparent !important;
        }
        .landing-wrapper-before {
          display: none !important;
        }
        html[dir] .landing-window {
          background: transparent !important;
        }
        html[dir] .landing-header {
          display: none;
        }
        html[dir] .landing-main {
          width: 100%;
          height: 100%;
          padding: 8.4vw 6.4vw;
          padding-bottom: 0;
          box-sizing: border-box;
          background: #f2f2f6 !important;
          overflow-y: auto !important;
        }
        html[dir] .landing-main .landing-custom-banner+div:not(._1N3oL) {
          display: none;
        }
        /* 文字教程 */
        html[dir] ._2A31C {
          padding: 0 0 0 1em !important;
        }
        html ._1N3oL>div:first-child:not(._2WuPw) {
          display: none;
        }
        html[dir] .landing-main .landing-title {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 4.0vw;
          color: #000;
        }
        /* 文字教程内的每一个<li> */
        html[dir] .landing-main .QtrYx {
          font-size: 15px;
          color: #202020;
        }
        .i0jNr {
          color: #202020;
        }
        .QtrYx strong {
          font-weight: bold !important;
        }
        html[dir] ._3JRy8+._3JRy8 {
          margin-top: 2vw;
        }
        /* 扫码页帮助链接 */
        html[dir] ._3aF8K {
          margin-top: 16px;
          margin-bottom: 32px;
          color: #000;
        }
        /* 底部教程 */
        html[dir] ._2XHqw {
          display: none;
        }
        /* 手机号码登录 */
        html[dir] .vGm4z ._2rQUO {
          padding-top: 6vw !important;
        }
        /* 手机号码验证码 */
        .l0q610ad.l0q610ad {
          height: 25vw !important;
          width: 100% !important;
        }
        ._3RVSj ._2I5ox {
          min-width: 0 !important;
          width: 100%;
          padding-left: 0 !important;
        }
        .rvmgzurb {
          width: 8.5vw !important;
        }
        .rvmgzurb span.ctdnaqea {
          font-size: 1.175rem;
        }
        /* 数据库错误提示 */
        .f0SXz._3I-he {
          display: none;
        }
        .landing-main div[data-testid="qrcode"], .landing-main div[data-testid="qrcode"] canvas {
          max-width: none !important;
        }
        .landing-main div[data-testid="qrcode"] {
          padding: 12px;
          box-sizing: border-box;
          width: 257px;
          height: 257px;
          background-color: #fff;
          border-radius: 10px;
        }
        .landing-main div[data-testid="qrcode"] canvas {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 1px solid #DEDEDE;
        }
        ._2UwZ_ .b77wc {
          left: 50% !important;
          top: 50% !important;
          margin: 0 !important;
          transform: translate(-50%, -50%);
        }
        ._2UwZ_ .b77wc, ._2UwZ_ .b77wc svg {
          width: 50px;
          height: 50px;
        }
        ._2znac {
          transform: scaleY(1) scaleX(1) !important;
        }
        @media (min-width: 576px) and (max-width: 1024px) {
          html[dir] .landing-main .landing-title {
            margin-bottom: 2.4vw;
          }
          html[dir] .QtrYx+.QtrYx {
            margin-bottom: 2.4vw;
          }
        }
        /* 登录扫码界面 end */
      
        /* 通知栏隐藏 start */
        ._3P5VY {
          display: none !important;
        }
        div[data-testid="chat-butterbar"] {
          display: none !important;
        }
        span[data-testid="chat-butterbar"] {
          display: none !important;
        }
        /* 通知栏隐藏 end */
      
        html[dir] ._3j691 {
          pointer-events: none;
        }
        ._1AHcd {
          pointer-events: all;
        }
        ._8nE1Y {
          pointer-events: all;
        }
        @media screen and (max-width: 1024px) {
          /* 主容器，与.two或.three类同级，包含四个子容器 */
          ._1jJ70 {
            min-width: auto !important;
            display: block !important;
          }
          /* drawer-left 个人信息等从左侧弹出的部分 */
          ._3RGKj {
            flex: 1;
            min-width: 100vw;
          }
          /* 右侧对话界面 */
          .two ._2xAQV, .three ._2xAQV {
            position: fixed !important;
            right: -100% !important;
            top: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            transition: transform 0.1s ease-in-out !important;
            transform: translateZ(0) !important;
          }
          /* 归档列表 */
          /* ._1jJ70.two.is-message-open ._2QgSC {
            z-index: 101;
          } */
          ._2QgSC header {
            height: auto;
          }
          /* 右侧对话界面 */
          ._1jJ70.two.is-message-open ._2xAQV, ._1jJ70.three ._2xAQV {
            transform: translateZ(0) translateX(-100%) !important;
            z-index: 101;
          }
          #backBtn {
            font-size: 20px !important;
            margin-right: 10px !important;
            cursor: pointer !important;
            padding: 10px !important;
          }
          #backBtn .icon {
            width: 20px !important;
            height: 20px !important;
          }
          /* 顶部导航栏 */
          html[dir=ltr] header[data-testid="conversation-header"] {
            border-left: 0px !important;
            position: fixed !important;
            top: 0;
            left: 0;
            box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
            /* transition: top .12s cubic-bezier(1,.02,.29,.6); */
          }
          /* 聊天滚动页 */
          ._5kRIK[data-testid="conversation-panel-messages"] {
            height: calc(100% - 59px);
            top: 59px;
          }
          /* a[data-testid="chatlist-e2e-message-link"] { color: green; } */
          /* 气泡start */
          ._33LGR._1HzbD .n5hs2j7m {
            width: 90% !important;
          }
          /* 气泡end */
        
          /* 语音气泡 start */
          .xmUYL._1kgzQ{
            width: 81.6vw !important;
          }
          ._33LGR._1HzbD ._3EZ_R {
            width: 70.6vw !important;
          }
          ._1-lf9._36Yw- {
            width: 90%;
          }
          /* 语音气泡 start */
        
          /* 图片气泡 start */
          .f4q7vbcz {
            max-width: 74.6vw !important;
          }
          .gndfcl4n.l8fojup5.paxyh2gw.sfeitywo.cqsf3vkf.p357zi0d.ac2vgrno.laorhtua.gfz4du6o.r7fjleex.g0rxnol2[data-testid="image-thumb"] {
            width: 74.6vw !important;
            height: 74.6vw !important;
          }
          /* 图片气泡 end */
      
          /* 消息反应弹窗 start */
          html[dir] ._2sDI2._1nG7g {
            left: 10px !important;
          }
          /* 消息反应弹窗 end */
      
          /* 消息反应详情弹窗 start */
          html[dir] ._2sDI2._18P-H {
            left: 10px !important;
            max-width: 95vw !important;
          }
          /* 消息反应详情弹窗 end */
          ._2sDI2._1qj0V {
            width: 100% !important;
            right: 0 !important;
          }
          ._3YS_f._2A1R8 {
            overflow-x: scroll;
          }
      
          /* 联系人信息弹窗 start */
          .three ._1bLj8 {
            width: 100% !important;
            z-index: 200;
            top: 0;
          }
          ._1xFRo[data-testid="drawer-right"] {
            top: 0;
            z-index: 200;
            width: 100% !important;
            max-width: 100% !important;
          }
          /* 联系人信息弹窗 end */
      
          /* 登出弹窗 start */
          .cm280p3y.p357zi0d.f8m0rgwh.gndfcl4n.ac2vgrno.ln8gz9je.s4r5ooj2.lffynu9d.sdfuwbjb[role="dialog"] {
            min-width: 100vw;
          }
          .cm280p3y.p357zi0d.tvf2evcx.oq44ahr5:not(div[data-testid="chat-list-search-container"]) {
            width: 90%;
          }
          /* 登出弹窗 end */
    
          /* 权限弹窗 */
          div[data-testid="confirm-popup"], div[data-testid="mute-popup"], div[data-testid="highlight-e2e-message-modal"] {
            width: 100%;
            min-width: auto;
          }
          div[data-testid="highlight-e2e-message-modal"] button[data-testid="popup-controls-ok"] {
            display: none;
          }
    
          ._199zF[data-testid="cell-frame-container"] ._1AHcd ._13jwn div.g0rxnol2.g9p5wyxn.i0tg5vk9.aoogvgrq.o2zu3hjb {
          }
        
          /* 关闭提醒弹窗 start */
          ._3ev9- {
            min-width: auto !important;
          }
          ._3J6wB {
            width: 90% !important;
          }
          /* 关闭提醒弹窗 end */
      
          /* 查看动态弹窗 start */
          ._2HUCB {
            /* 左侧我的动态 */
            width: 100% !important;
          }
          ._3Bc7H._3GWRQ {
            /* 我的动态下方隐藏 */
            display: none !important;
          }
          ._2v5gS {
            /* 查看您的更新 */
            left: 0 !important;
            width: 100% !important;
            background-color: #0c1418;
            height: calc(100% - 26.7vw);
            top: 26.7vw;
          }
          .PfNbf {
            width: 0 !important;
          }
          /* 查看动态弹窗 end */
      
          /* 动态详情(放大)弹窗 start */
          ._3b17O {
            /* 加载进度条 */
            width: 100% !important;
          }
          .SU2X1 {
            /* 隐藏功能按键 */
            display: none !important;
          }
          .ib1vZ {
            /* 用户信息bar */
            left: 10.7vw !important;
            right: 10.7vw !important;
          }
          .XNDC5 {
            /* 关闭按钮 */
            display: none !important;
          }
          html[dir=ltr] .bmJTq {
            /* 返回按钮 */
            left: 10px !important;
            top: 13.86vw !important;
          }
          html[dir] ._3Hudz {
            background-color: #20262b !important;
          }
          /* 动态详情(放大)弹窗 end */
        
          /* 图片编辑弹窗 start */
          .HP5-u {
            min-width: 100vw !important;
          }
          html[dir] ._1nPzf {
            padding: 8px !important;
          }
          html[dir] ._2nStn {
            margin: 0 !important;
          }
          /* 输入框placeholder */
          html:not([dir='rtl']) .c3x5l3r8 {
            overflow: hidden; /* 防止子元素溢出，隐藏溢出的placeholder */
          }
          html[dir] ._2wtUo {
            display: none !important;
          }
          html[dir] ._3ii0l {
            display: none;
          }
          .dn3ua38v {
            margin-top: 0 !important;
            height: 100% !important;
          }
          .McTiQ {
            overflow-x: auto;
          }
          /* 图片编辑弹窗 end */
      
          /* emoji 弹窗 start */
          html[dir] ._3IU7z, html[dir] ._1166F {
            /* 最外层弹窗宽度适配 */
            width: 97vw !important;
            left: 50% !important;
            transform: scale(1) translateX(-50%) !important;
            margin-left: 0px !important;
          }
          html[dir=ltr] ._2Wd6U {
            /* 内层表情一列宽度 */
            margin-left: 8px !important;
            margin-right: 8px !important;
          }
          html[dir=ltr] ._10mnt._3KMMv {
            right: 0 !important;
          }
          ._3IU7z ._2hkxa {
            left: 13.3vw !important;
          }
          ._1166F ._2hkxa {
            left: 26.3vw !important;
          }
          html[dir] ._1WQBr {
            left: 0;
          }
          /* emoji 弹窗 end */
      
          /* 个人信息 start */
          ._3Id8- {
            /* header */
            height: auto !important;
          }
          .ldL67._2i3T7._1cpSb {
            flex: 1 !important;
          }
          .two ._2i3T7 {
            flex: 1 !important;
            max-width: none !important;
          }
          /* 个人信息 end */
      
          /* 设置页 start */
          .KPJpj ._2QzJd:nth-child(6) {
            /* 壁纸 */
            display: none;
          }
          .KPJpj ._2QzJd:nth-child(8) {
            /* 键盘 */
            display: none;
          }
          html[dir] ._2QzJd+._2QzJd ._36Lzk {
            /* 边框 */
            margin-right: 8vw !important;
            padding-right: 0 !important;
          }
          /* 设置页 end */
      
          /* 联系人列表头部 start */
          header[data-testid="chatlist-header"] {
            padding-right: 16px !important;
          }
          /* 联系人列表头部 end */
      
          /* 转发消息 start */
          html[dir=ltr] ._8nE1Y {
            margin-right: 15px;
            padding-right: 0px;
          }
          /* 转发消息 end */
      
          /* 聊天列表底部tips */
          .eg3lofc5 {
            margin-top: 0 !important;
          }
      
          /* 发送联系人弹窗 start */
          html:not([dir='rtl']) .s7u82e91.s7u82e91 {
            width: 95%;
          }
          /* 发送联系人弹窗 end */
        }
      
        /* 聊天背景 start */
        html[dir] ._3xTHG.one {
          background-color: #f9f9f9 !important;
        }
        html[dir] ._3xTHG.two {
          background-color: #ecfef6 !important;
        }
        html[dir] ._3xTHG.three {
          background-color: #eaf5fe !important;
        }
        html[dir] ._3xTHG.four {
          background-color: #fefce9 !important;
        }
        html[dir] ._3xTHG {
          background-position: center center;
          background-size: contain !important;
          opacity: 1 !important;
          background-color: #f9f9f9;
        }
        /* 聊天背景 end */
      `;
  let style = document.createElement("style");
  let head = document.head || document.getElementsByTagName("head")[0];
  style.type = "text/css";
  let textNode = document.createTextNode(styleText);
  style.appendChild(textNode);
  head.appendChild(style);
  console.log("insert style tag!");
}

// 节流函数
function throttle(fn, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  };
}

// 防抖函数
function debounce(fn, delay) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, delay);
  };
}

// 格式化时间
function getFormatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${
    second < 10 ? "0" + second : second
  }`;
}

// logger
class Logger {
  constructor(module = "Global") {
    this.module = module;
  }

  debug(str) {
    let date = getFormatDate(new Date());
    console.log(`[DEBUG] ${date} [${this.module}] ${str}`);
  }

  warn(str) {
    let date = getFormatDate(new Date());
    console.log(`[WARN] ${date} [${this.module}] ${str}`);
  }

  error(str) {
    let date = getFormatDate(new Date());
    console.error(`[ERROR] ${date} [${this.module}] ${str}`);
  }
}
// webkit回调
class WebkitCallback {
  constructor() {
    this.logger = new Logger("Callback");
  }
  /**
   * 回调Api
   * @params { Object<string, null | function> } postMessage
   */
  webkitMessageHandler(postMessage) {
    if (postMessage) {
      if (window.webkit) {
        window.webkit.messageHandlers.nativeBridge.postMessage(
          JSON.stringify(postMessage)
        );
      }
    }
  }
  // 登录后，loading时回调到iOS
  loginCallback(account, auto = false) {
    try {
      this.webkitMessageHandler({
        listener: "login",
        account: account || null,
        auto: auto,
        callback: null,
      });
      this.logger.debug(
        `login callback has been called.\naccount:\r${account}\nauto:\r${auto}`
      );
    } catch (err) {
      this.logger.error(`login callback error ${err.message || err}`);
    }
  }
  // 登录进入到聊天列表时回调到iOS
  enterChatListCallback(account, isScanQRLogin = false) {
    try {
      this.webkitMessageHandler({
        listener: "enterChatList",
        auto: !isScanQRLogin,
        callback: null,
      });
      this.logger.debug(
        `enterChatList callback has been called.\naccount:\r${account}\nauto:\r${!isScanQRLogin}`
      );
    } catch (err) {
      this.logger.error(`enterChatList callback error ${err.message || err}`);
    }
  }
  // 登出回调到iOS
  logoutCallback() {
    try {
      this.webkitMessageHandler({
        listener: "logout",
        callback: null,
      });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
      this.logger.debug(`logout callback has been called`);
    } catch (err) {
      this.logger.error(`logout callback error ${err.message || err}`);
    }
  }
  // 从聊天页面返回回调iOS
  exitChatCallback(chatId) {
    try {
      this.webkitMessageHandler({
        listener: "exitChat",
        chatId: chatId || null,
        callback: null,
      });
      this.logger.debug(
        `exitChat callback has been called.\nchatId:\r${chatId}`
      );
    } catch (err) {
      this.logger.error(`exitChat callback error ${err.message || err}`);
    }
  }
  // 进入聊天页面回调iOS
  enterChatCallback(chatId) {
    try {
      this.webkitMessageHandler({
        listener: "enterChat",
        chatId: chatId || null,
        callback: null,
      });
      this.logger.debug(
        `enterChat callback has been called.\nchatId:\r${chatId}`
      );
    } catch (err) {
      this.logger.error(`enterChat callback error ${err.message || err}`);
    }
  }
  // 点击发送聊天信息按钮回调iOS
  sendMessageCallback(chatId) {
    try {
      this.webkitMessageHandler({
        listener: "sendMessage",
        chatId: chatId || null,
        callback: null,
      });
      this.logger.debug(
        `sendMessage callback has been called.\nchatId:\r${chatId}`
      );
    } catch (err) {
      this.logger.error(`sendMessage callback error ${err.message || err}`);
    }
  }
  // 输入限制回调事件
  chatLimitedCallback() {
    try {
      this.webkitMessageHandler({
        listener: "chatLimited",
        callback: null,
      });
      this.logger.debug(`chatLimited callback`);
    } catch (err) {
      this.logger.error(`sendMessage callback error ${err.message || err}`);
    }
  }
}
// 全局数据
const globalData = {
  // state
  currentChatId: "",
  isScanQRLogin: false,
  account: null,
  isMessageOpen: false,
  isChatLimited: false, // 是否限制发送聊天
};

/**
 * 获取锁定消息状态
 * @return {boolean} flag
 */
function getIsChatLimited() {
  return globalData.isChatLimited;
}
/**
 * 更改锁定消息状态
 * @param {boolean} flag
 */
function setIsChatLimited(flag = false) {
  console.log('[setIsChatLimited] has been call');
  globalData.isChatLimited = flag;
  addInputListener();
}

const webkitCallback = new WebkitCallback();
// 启动id=app的监听，重构所有监听的代码
function mainMutation() {
  const app = document.querySelector("#app");

  const account = localStorage.getItem("last-wid-md");
  if (typeof account === "string" && account.trim().length > 0) {
    // 账户已经登录，接下来一定会进入登录后的loading页和聊天列表页
    const auto = true;
    const cleanAccount = account.replace(/^"|"$/g, "").split(":")[0];
    globalData.account = cleanAccount;
    // 自动登录，loading时
    webkitCallback.loginCallback(account, auto);
  }

  function clickSendMessageBtn(event) {
    const lockSendMessage = getIsChatLimited();
    if (lockSendMessage) {
      event.stopPropagation(); // 阻止冒泡事件
      event.preventDefault(); // 阻止默认行为
      webkitCallback.chatLimitedCallback();
    } else {
      webkitCallback.sendMessageCallback(globalData.currentChatId);
    }
  }
  function bindSendMessageEvent(dom) {
    if (dom) {
      dom.removeEventListener("click", clickSendMessageBtn);
      dom.addEventListener("click", clickSendMessageBtn);
    }
    return;
  }

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach((mutation) => {
      // console.log(mutation.target);
      if (mutation.target == app) {
        // 变动元素为#app的子元素
        if (mutation.addedNodes.length > 0) {
          const landingWrapper = document.querySelector(".landing-wrapper");
          if (landingWrapper) {
            // 扫码界面
            globalData.isScanQRLogin = true;
          } else {
            // 登录界面
            const checkLoginPage = document.querySelector("._1jJ70");
            if (checkLoginPage) {
              // 自动登录，进入列表页
              webkitCallback.enterChatListCallback(
                account,
                globalData.isScanQRLogin
              );
              // 聊天列表
              const chatList = document.querySelector(
                'div[data-testid="chat-list"]'
              );
              //   console.log("chatList", chatList);
              if (chatList) {
                doneAfterContactListComplete();
              }
            }
          }
          // 通过扫码登录
          const waWebLoadingScreen = document.querySelector(
            'div[data-testid="wa-web-loading-screen"]'
          );
          if (waWebLoadingScreen && globalData.isScanQRLogin) {
            webkitCallback.loginCallback(account, false);
          }
        }
      }
      if (
        // 文字发送按钮
        mutation.target == document.querySelector("div._2xy_p._3XKXx")
      ) {
        const button = document.querySelector(
          'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq'
        );
        if (button) {
          bindSendMessageEvent(button);
        }
      } else if (
        // 语音发送
        mutation.target ==
        document.querySelector(
          "footer ._2_uJo .lhggkp7q.qq0sjtgm.tkdu00h0 .lhggkp7q.qq0sjtgm.tkdu00h0"
        )
      ) {
        const button = document.querySelector(
          'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq'
        );
        if (button) {
          bindSendMessageEvent(button);
        }
      } else if (
        // 图片发送
        mutation.target ==
        document.querySelector(
          `div._2QgSC div[data-testid="drawer-middle"] span.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0`
        )
      ) {
        const button = document.querySelector("div._3wFFT");
        if (button) {
          bindSendMessageEvent(button);
        }
      }
      if (mutation.target == document.querySelector("._2A1R8._3YS_f")) {
        // 新建群聊
        doneAfterContactListComplete();
      }
      if (mutation.target == document.getElementById("pane-side")) {
        doneAfterContactListComplete();
      }
      // console.log(mutation.target);
      if (
        mutation.target ==
        document.querySelector(
          'div[data-testid="drawer-left"] span.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0'
        )
      ) {
        // 已归档对话列表
        // console.log("已归档");
      }
      if (
        //
        mutation.target ==
        document.querySelector(".app-wrapper-web>span:nth-of-type(2)")
      ) {
        if (mutation.addedNodes.length > 0) {
          const logoutBtn = document.querySelector(
            'button[data-testid="popup-controls-ok"]'
          );
          if (logoutBtn) {
            if (document.querySelector("._1jJ70.two.is-message-open")) {
              logoutBtn.onclick = function () {
                document.querySelector(
                  "._1jJ70.two.is-message-open"
                ).className = "_1jJ70 two";
                doneAfterContactListComplete();
              };
            } else {
              logoutBtn.onclick = function () {
                webkitCallback.logoutCallback();
              };
            }
          }
          return;
        }
      }
      if (
        mutation.target ==
        document.querySelector(".app-wrapper-web>span:nth-of-type(4)")
      ) {
        if (mutation.addedNodes.length > 0) {
          const isPrivate = document.querySelector(
            'div[data-testid="contact-menu-dropdown"]'
          );
          if (isPrivate) {
            // 注册关闭对话点击事件
            let miCloseChat = document.querySelector(
              'li[data-testid="mi-close-chat"]'
            );
            if (miCloseChat) {
              miCloseChat.onclick = function () {
                document.querySelector(
                  "._1jJ70.two.is-message-open"
                ).className = "_1jJ70 two";
                doneAfterContactListComplete();
              };
            }
          }
          return;
        }
      }
      if (
        mutation.target ==
        document.querySelector('div[data-testid="drawer-right"]>span')
      ) {
        if (mutation.removedNodes.length > 0) {
          const contactPanel = document.querySelector("._1jJ70");
          if (contactPanel) {
            contactPanel.className = "_1jJ70 two is-message-open";
          }
        }
      }
      if (
        mutation.target ==
        document.querySelector(
          "span.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0"
        )
      ) {
        if (mutation.addedNodes.length > 0) {
          // 新对话展开
          // 获取联系人列表
          if (
            document.querySelector(
              'div[data-testid="new-group-drawer-participants"]'
            )
          ) {
          } else {
            setTimeout(() => {
              doneAfterContactListComplete(true);
            }, 100);
          }
        }
      }
    });
  });

  observer.observe(app, { childList: true, subtree: true });
}
// 清除localStorage数据
function clearLocalStorage() {
  window.localStorage.clear();
}
// 清除联系人的hover样式
function clearHoverClassName() {
  const hoverTrigger = document.querySelectorAll("._199zF");
  hoverTrigger.forEach((evt) => {
    evt.className = "_199zF";
  });

  const gridCells = document.querySelectorAll(
    '._199zF .Dvjym[role="gridcell"] span:nth-child(3)'
  );
  gridCells.forEach((evt) => {
    evt.style = "display: none;";
  });
}

// 监听发送按钮
function clickSendMessageBtn(event) {
  const lockSendMessage = getIsChatLimited();
  if (lockSendMessage) {
    // 阻止冒泡事件
    event.stopPropagation();
    webkitCallback.chatLimitedCallback();
  } else {
    webkitCallback.sendMessageCallback(globalData.currentChatId);
  }
}
function bindSendMessageEvent(dom) {
  if (dom) {
    dom.removeEventListener("click", clickSendMessageBtn);
    dom.addEventListener("click", clickSendMessageBtn);
  }
  return;
}
function addSendBtnListener() {
  const button = document.querySelector(
    'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq'
  );
  if (button) {
    bindSendMessageEvent(button);
  }
}

// 监听input框的回车事件
function inputListenerFunc(event) {
  const lockSendMessage = getIsChatLimited();
  if (lockSendMessage) {
    event.stopPropagation();
    event.preventDefault();
    webkitCallback.chatLimitedCallback();
  } else {
    if (event.key === "Enter" && this.innerText != "") {
      webkitCallback.sendMessageCallback(globalData.currentChatId);
    }
  }
}
function bindInputListener(dom) {
  if (dom) {
    dom.removeEventListener("keydown", inputListenerFunc);
    dom.addEventListener("keydown", inputListenerFunc);
  }
  return;
}
function addInputListener() {
  const inputDom = document.querySelector(
    `footer .lexical-rich-text-input>.to2l77zo.gfz4du6o.ag5g9lrv.bze30y65.kao4egtt`
  );
  if (inputDom) {
    bindInputListener(inputDom);
  }
}

// 聊天页初始化
function initContactPanel() {
  // 新增返回按钮
  function addBackBtn() {
    // 已存在返回按钮则不增加元素和事件监听
    const oldBackBtn = document.getElementById("backBtn");
    if (oldBackBtn) return;
    // 添加返回按钮
    const avatar = document.querySelector(
      '#main header.AmmtE ._2pr2H'
    );
    if (avatar) {
      const avatarParent = avatar.parentNode;
      if (avatarParent) {
        const newNode = document.createElement("div");
        newNode.innerHTML =
          '<svg t="1658371755384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="32" height="32"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" p-id="2325" fill="#58656e"></path></svg>';
        newNode.id = "backBtn";
        newNode.addEventListener(
          "click",
          function () {
            globalData.isMessageOpen = false;
            const contactPanel = document.querySelector(".two._1jJ70");
            if (contactPanel) {
              contactPanel.className = "two _1jJ70";
            }
            const drawerLeft = document.querySelector(
              '._2QgSC ._2Ts6i._3RGKj._318SY'
            );
            drawerLeft.style = "display: block"; // 归档列表消失
            // 返回 移除hover类
            clearHoverClassName();
            // 返回 通知回调
            webkitCallback.exitChatCallback(globalData.currentChatId);
            // 返回删除保存的当前联系人chatId
            globalData.currentChatId = "";
          },
          false
        );
        avatarParent.insertBefore(newNode, avatar);
      }
    }
  }
  // 对话界面头部搜索按钮添加事件监听
  function addSearchBtnListener() {
    const searchIcon = document.querySelector('span[data-testid="search-alt"]');
    if (searchIcon) {
      const searchBtn = searchIcon.parentNode;
      if (searchBtn) {
        searchBtn.addEventListener(
          "click",
          function () {
            const contactPanel = document.querySelector("._1jJ70");
            if (contactPanel) {
              // contactPanel.className = isMessageOpen ? '_1jJ70 three is-message-open' : '_1jJ70 two';
              contactPanel.className = "_1Xk03 three is-message-open";
            }
          },
          false
        );
      }
    }
  }

  setTimeout(() => {
    // 添加返回按钮
    addBackBtn();
    // 搜索按钮添加新的监听事件
    addSearchBtnListener();
    // 监听页面UI
    // mutationUI();
    addInputListener();

    addSendBtnListener();
  }, 100);
}
/**
 * 聊天列表页联系人加载完毕回调
 * @param {boolean} isGuiDang 是否从已归档列表触发
 */
function doneAfterContactListComplete(isGuiDang = false) {
  let contactItems = document.querySelectorAll(".rx9719la");
  // 去掉所有hover
  clearHoverClassName();
  // 为所有联系人添加监听点击事件
  for (let item of contactItems) {
    item.onclick = function (event) {
      const chatId = event.currentTarget
        ? event.currentTarget.querySelector(
            ".gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr"
          )
        : null;
      globalData.currentChatId = chatId ? chatId.innerText : "";
      webkitCallback.enterChatCallback(globalData.currentChatId);

      const downSpanBtn = document.querySelector('span[data-testid="down"]');
      if (downSpanBtn == event.target) {
        return;
      }
      const contactPanel = document.querySelector("._1jJ70");
      if (contactPanel) {
        globalData.isMessageOpen = !globalData.isMessageOpen;
        contactPanel.className = globalData.isMessageOpen
          ? "_1jJ70 two is-message-open"
          : "_1jJ70 two";
        const drawerLeft = document.querySelector(
          '._2QgSC ._2Ts6i._3RGKj._318SY'
        );
        setTimeout(() => {
          drawerLeft.style = "display: none"; // 归档列表消失
        }, 100);
        initContactPanel();
      }
    };
  }
}

window.onload = function () {
  insertMetaTag();
  insertStyleTag();

  let localLangCode = localStorage.getItem("WALangPref");
  if (!localLangCode) {
    localLangCode = window.navigator.language;
  }
  localLangCode = localLangCode.replace(/(^")|("$)/g, "");

  // 开启监听
  mainMutation();

  // 监听window的scroll事件，主要是为了监听软键盘弹出时，webview的可视区域的变化
  function listenWindowScroll() {
    let fixedChatHeader = document.querySelector(
      '[data-testid="conversation-header"]'
    );
    if (fixedChatHeader) {
      fixedChatHeader.style.top = `${window.pageYOffset}px`;
    }
  }
  window.onscroll = throttle(listenWindowScroll, 100); // 延迟50以保证广告弹出时能够正常反应
};
