let linebot = require('linebot');

// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

let members = {}

// 當有人傳送訊息給 Bot 時
bot.on('message', async function (event) {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  console.log(members)
  let mes = event.message.text;
  let id = event.source.userId;
  if (mes == "ghost"){
    console.log("fuck??");
    event.reply(members[id]).then(function (data) {
      console.log("success");
    }).catch(function (error) {
      console.log("failed");
    })
    return;
  }
  else{
    if(id in members){
      if(members[id].length <= 5){
        members[id].push(mes);
      }
      else{
        members[id].shift();
        members[id].push(mes);
      }
    }
    else{
      members[id] = [mes]
    }
  }
});

// Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('全國首家LINE線上機器人上線啦！！');
});