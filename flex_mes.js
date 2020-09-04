exports.mes = {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Header text"
        }
      ]
    },
    "hero": {
      "type": "image",
      "url": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Body text"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Footer text"
        }
      ]
    },
    "styles": {
      "comment": "See the example of a bubble style object"
    }
  }
exports.vid = {
    "type": "audio",
    "originalContentUrl": "https://example.com/original.m4a",
    "duration": 60000
}
exports.fuck1 = 
{
    "type": "bubble",
    "body": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "http://linecorp.com/"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "BROWN'S ADVENTURE\nIN MOVIE",
          "wrap": true,
          "weight": "bold",
          "gravity": "center",
          "size": "xl"
        },
        {
          "type": "box",
          "layout": "baseline",
          "margin": "md",
          "contents": [
            {
              "type": "icon",
              "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
            },
            {
              "type": "icon",
              "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
            },
            {
              "type": "icon",
              "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
            },
            {
              "type": "icon",
              "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
            },
            {
              "type": "icon",
              "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
            },
            {
              "type": "text",
              "text": "4.0",
              "size": "sm",
              "color": "#999999",
              "margin": "md",
              "flex": 0
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "lg",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Date",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "Monday 25, 9:00PM",
                  "wrap": true,
                  "size": "sm",
                  "color": "#666666",
                  "flex": 4
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Place",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "7 Floor, No.3",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 4
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "Seats",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "C Row, 18 Seat",
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 4
                }
              ]
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xxl",
          "contents": [
            {
              "type": "spacer"
            },
            {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
              "aspectMode": "cover",
              "size": "xl"
            },
            {
              "type": "text",
              "text": "You can enter the theater by using this code instead of a ticket",
              "color": "#aaaaaa",
              "wrap": true,
              "margin": "xxl",
              "size": "xs"
            }
          ]
        }
      ]
    }
  }

exports.fuck2 = 
    {
        "type": "template",
        "altText": "this is a image carousel template",
        "template": {
            "type": "image_carousel",
            "columns": [
                {
                  "imageUrl": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh",
                  "action": {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=111"
                  }
                },
                {
                  "imageUrl": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh",
                  "action": {
                    "type": "message",
                    "label": "Yes",
                    "text": "yes"
                  }
                },
                {
                  "imageUrl": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh",
                  "action": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh"
                  }
                }
            ]
        }
      }

// exports.mes = {

//     "type": "carousel",
//     "contents": [
//       {
//         "type": "bubble",
//         "body": {
//           "type": "box",
//           "layout": "vertical",
//           "contents": [
//             {
//               "type": "image",
//               "url": "https://vignette.wikia.nocookie.net/worldpedias/images/0/0f/Patrick_Star.PNG/revision/latest/scale-to-width-down/340?cb=20140620143247&path-prefix=zh",
//               "size": "full",
//               "aspectMode": "cover",
//               "aspectRatio": "2:3",
//               "gravity": "top"
//             },
//             {
//               "type": "box",
//               "layout": "vertical",
//               "contents": [
//                 {
//                   "type": "box",
//                   "layout": "vertical",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "Patrick Star",
//                       "size": "xl",
//                       "color": "#ffffff",
//                       "weight": "bold"
//                     }
//                   ]
//                 },
//                 {
//                   "type": "box",
//                   "layout": "baseline",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "¥35,800",
//                       "color": "#ebebeb",
//                       "size": "sm",
//                       "flex": 0
//                     },
//                     {
//                       "type": "text",
//                       "text": "¥75,000",
//                       "color": "#ffffffcc",
//                       "decoration": "line-through",
//                       "gravity": "bottom",
//                       "flex": 0,
//                       "size": "sm"
//                     }
//                   ],
//                   "spacing": "lg"
//                 },
//                 {
//                   "type": "box",
//                   "layout": "vertical",
//                   "contents": [
//                     {
//                       "type": "filler"
//                     },
//                     {
//                       "type": "box",
//                       "layout": "baseline",
//                       "contents": [
//                         {
//                           "type": "filler"
//                         },
//                         {
//                           "type": "icon",
//                           "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
//                         },
//                         {
//                           "type": "text",
//                           "text": "Add to cart",
//                           "color": "#ffffff",
//                           "flex": 0,
//                           "offsetTop": "-2px"
//                         },
//                         {
//                           "type": "filler"
//                         }
//                       ],
//                       "spacing": "sm"
//                     },
//                     {
//                       "type": "filler"
//                     }
//                   ],
//                   "borderWidth": "1px",
//                   "cornerRadius": "4px",
//                   "spacing": "sm",
//                   "borderColor": "#ffffff",
//                   "margin": "xxl",
//                   "height": "40px"
//                 }
//               ],
//               "position": "absolute",
//               "offsetBottom": "0px",
//               "offsetStart": "0px",
//               "offsetEnd": "0px",
//               "backgroundColor": "#03303Acc",
//               "paddingAll": "20px",
//               "paddingTop": "18px"
//             },
//             {
//               "type": "box",
//               "layout": "vertical",
//               "contents": [
//                 {
//                   "type": "text",
//                   "text": "SALE",
//                   "color": "#ffffff",
//                   "align": "center",
//                   "size": "xs",
//                   "offsetTop": "3px"
//                 }
//               ],
//               "position": "absolute",
//               "cornerRadius": "20px",
//               "offsetTop": "18px",
//               "backgroundColor": "#ff334b",
//               "offsetStart": "18px",
//               "height": "25px",
//               "width": "53px"
//             }
//           ],
//           "paddingAll": "0px"
//         }
//       },
//       {
//         "type": "bubble",
//         "body": {
//           "type": "box",
//           "layout": "vertical",
//           "contents": [
//             {
//               "type": "image",
//               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg",
//               "size": "full",
//               "aspectMode": "cover",
//               "aspectRatio": "2:3",
//               "gravity": "top"
//             },
//             {
//               "type": "box",
//               "layout": "vertical",
//               "contents": [
//                 {
//                   "type": "box",
//                   "layout": "vertical",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "Cony's T-shirts",
//                       "size": "xl",
//                       "color": "#ffffff",
//                       "weight": "bold"
//                     }
//                   ]
//                 },
//                 {
//                   "type": "box",
//                   "layout": "baseline",
//                   "contents": [
//                     {
//                       "type": "text",
//                       "text": "¥35,800",
//                       "color": "#ebebeb",
//                       "size": "sm",
//                       "flex": 0
//                     },
//                     {
//                       "type": "text",
//                       "text": "¥75,000",
//                       "color": "#ffffffcc",
//                       "decoration": "line-through",
//                       "gravity": "bottom",
//                       "flex": 0,
//                       "size": "sm"
//                     }
//                   ],
//                   "spacing": "lg"
//                 },
//                 {
//                   "type": "box",
//                   "layout": "vertical",
//                   "contents": [
//                     {
//                       "type": "filler"
//                     },
//                     {
//                       "type": "box",
//                       "layout": "baseline",
//                       "contents": [
//                         {
//                           "type": "filler"
//                         },
//                         {
//                           "type": "icon",
//                           "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
//                         },
//                         {
//                           "type": "text",
//                           "text": "Add to cart",
//                           "color": "#ffffff",
//                           "flex": 0,
//                           "offsetTop": "-2px"
//                         },
//                         {
//                           "type": "filler"
//                         }
//                       ],
//                       "spacing": "sm"
//                     },
//                     {
//                       "type": "filler"
//                     }
//                   ],
//                   "borderWidth": "1px",
//                   "cornerRadius": "4px",
//                   "spacing": "sm",
//                   "borderColor": "#ffffff",
//                   "margin": "xxl",
//                   "height": "40px"
//                 }
//               ],
//               "position": "absolute",
//               "offsetBottom": "0px",
//               "offsetStart": "0px",
//               "offsetEnd": "0px",
//               "backgroundColor": "#9C8E7Ecc",
//               "paddingAll": "20px",
//               "paddingTop": "18px"
//             },
//             {
//               "type": "box",
//               "layout": "vertical",
//               "contents": [
//                 {
//                   "type": "text",
//                   "text": "SALE",
//                   "color": "#ffffff",
//                   "align": "center",
//                   "size": "xs",
//                   "offsetTop": "3px"
//                 }
//               ],
//               "position": "absolute",
//               "cornerRadius": "20px",
//               "offsetTop": "18px",
//               "backgroundColor": "#ff334b",
//               "offsetStart": "18px",
//               "height": "25px",
//               "width": "53px"
//             }
//           ],
//           "paddingAll": "0px"
//         }
//       }
//     ]
//   }