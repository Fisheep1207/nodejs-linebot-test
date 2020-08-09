// let linebot = require('linebot');

// // 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
// let bot = linebot({
//   channelId: process.env.LINE_CHANNEL_ID,
//   channelSecret: process.env.LINE_CHANNEL_SECRET,
//   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
// });

// // 當有人傳送訊息給 Bot 時
// bot.on('message', function (event) {
//   // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
//   event.reply(`你說了 ${event.message.text}`);
// });

// // Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
// bot.listen('/', process.env.PORT || 5000, function () {
//   console.log('全國首家LINE線上機器人上線啦！！');
// });
'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});