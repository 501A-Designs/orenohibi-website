let recipeData = [
  {
    name: "Iced Coffee",
    thumbnailSrc: "img/icedcoffee.jpg",
    motto: "\u3053\u308C\u306F\u5272\u3068\u30DE\u30B8\u3067\u3046\u307E\u3044\u7B11",
    ingredients: [
      "\u30B3\u30FC\u30D2\u30FC\u8C46(30g)",
      "\u6C34450mL",
      "\u30DF\u30F3\u30C8",
      "\u30B0\u30E9\u30A4\u30F3\u30C0\u30FC",
      "\u30A2\u30A4\u30B9",
      "\u30C9\u30EA\u30C3\u30D1\u30FC",
      "\u30B5\u30FC\u30D0\u30FC",
      "\u30B0\u30E9\u30B9"
    ],
    steps: [
      "\u30B3\u30FC\u30D2\u30FC\u8C4630g\u3092\u4E2D\u7D30\u633D\u304D\u3067\u30B0\u30E9\u30A4\u30F3\u30C9\u3059\u308B\u3002",
      "\u6CB8\u9A30\u3057\u305F\u304A\u6E6F150mL\u3092\u51B7\u307E\u3057\u3066\u7D0490\u2103\u306E\u304A\u6E6F\u3067\u30C9\u30EA\u30C3\u30D7\u3059\u308B\u3002\u53D7\u3051\u308B\u30B5\u30FC\u30D0\u30FC\u306B\u306F\u4E88\u308110\u500B\u307B\u3069\u30A2\u30A4\u30B9\u3092\u6295\u5165\u3057\u3066\u304A\u304F\u3002",
      "\u3053\u306E\u664250mL\u3092\u84B8\u3089\u3057\u306B\u4F7F\u3046",
      "\u6B8B\u308A\u306E100mL\u306F\u5186\u3092\u63CF\u304F\u3088\u3046\u306B",
      "\u30C9\u30EA\u30C3\u30D7\u304C\u5B8C\u4E86\u3057\u305F\u3089\u6E80\u904D\u306A\u304F\u51B7\u3081\u308B\u3088\u3046\u306B\u30B5\u30FC\u30D0\u30FC\u3067\u6DF7\u305C\u308B\u3002",
      "\u304A\u597D\u307F\u3067\u30B7\u30ED\u30C3\u30D7\u3092\u6DF7\u305C\u308B\u3002",
      "\u30A2\u30A4\u30B9\u3092\u6295\u5165\u3057\u305F\u30B0\u30E9\u30B9\u306B\u6CE8\u3052\u3070\u5B8C\u6210",
      "\u304A\u597D\u307F\u3067\u30DF\u30F3\u30C8\u3092\u6295\u5165"
    ],
    caution: [
      "\u30C9\u30EA\u30C3\u30D7\u6240\u8981\u6642\u9593\u306F\u5168\u4F53\u30672\u5206\u4EE5\u5185\u3002\u76EE\u5B89:(\u84B8\u3089\u3057:30\u79D2\u3001\u4E00\u62CD:30\u79D2\u3001\u30D5\u30A1\u30FC\u30B9\u30C8\u30C9\u30EA\u30C3\u30D7:1\u5206)",
      "\u30DF\u30F3\u30C8\u306F\u98F2\u3080\u6642\u306E\u9999\u308A\u3092\u826F\u304F\u3059\u308B\u305F\u3081\u84B8\u3057\u6691\u3044\u590F\u306E\u6E05\u6DBC\u611F\u306B\u30D4\u30C3\u30BF\u30EA\u3060\u304C\u3001\u82E6\u624B\u306A\u4EBA\u3082\u3044\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u3002"
    ]
  },
  {
    name: "Lemonade v1",
    thumbnailSrc: "img/lemonade.jpg",
    motto: "\u6C34\u9053\u6C34\u53CA\u3073\u30C0\u30A4\u30BD\u30FC\u306E\u30B0\u30E9\u30B9\u4F7F\u7528\u3001\u30B1\u30C1\u306A\u306E\u304C\u3044\u3044\u306E\u3060",
    ingredients: [
      "\u30B0\u30E9\u30B9",
      "\u6C34",
      "\u30A2\u30A4\u30B9",
      "\u30EC\u30E2\u30F31\u5207\u308C",
      "\u30DD\u30C3\u30AB\u30EC\u30E2\u30F3",
      "\u7802\u7CD6(\u5C0F\u3055\u30582)",
      "\u30DF\u30F3\u30C8\u306E\u84491\u679A"
    ],
    steps: [
      "\u30EC\u30E2\u30CD\u30FC\u30C9\u306B\u5FC5\u8981\u306A\u30B0\u30E9\u30B9\u3092\u4E88\u3081\u51B7\u8535\u5EAB\u3067\u51B7\u3084\u3057\u3066\u304A\u304F\u3002",
      "\u30DE\u30B0\u30AB\u30C3\u30D7\u306B\u7802\u7CD6(\u5C0F\u3055\u30582)\u3092\u6295\u5165\u3057\u3001\u6CB8\u9A30\u3057\u305F\u71B1\u6E6F\u3092\u6CE8\u3050\u3002",
      "\u7802\u7CD6\u304C\u5341\u5206\u6EB6\u3051\u5207\u308B\u307E\u3067\u304B\u304D\u6DF7\u305C\u305F\u5F8C\u3001\u30DD\u30C3\u30AB\u30EC\u30E2\u30F3\u3092\u6570\u6EF4\u6295\u5165\u3059\u308B\u3002",
      "\u5473\u304C\u6574\u3063\u305F\u3089\u7C97\u71B1\u3092\u3068\u308B\u3002",
      "\u51B7\u3084\u3057\u3066\u304A\u3044\u305F\u30B0\u30E9\u30B9\u306B\u30A2\u30A4\u30B9\u3092\u6295\u5165\u3002\u7C97\u71B1\u304C\u7121\u304F\u306A\u3063\u305F\u30EC\u30E2\u30F3\u6C34\u3092\u6CE8\u3044\u3067\u5B8C\u6210\u3002",
      "\u304A\u597D\u307F\u3067\u30DF\u30F3\u30C8\u306E\u8449\u3092\u5165\u308C\u308B\u3068\u30A2\u30AF\u30BB\u30F3\u30C8\u306B\u306A\u308B\u3002"
    ],
    caution: [
      "\u30DF\u30F3\u30C8\u306F\u30A4\u30AD\u3063\u3066\u591A\u304F\u5165\u308C\u306A\u3044\u3053\u3068\u3002\u7802\u7CD6\u306E\u5206\u91CF\u306B\u3088\u3063\u3066\u306F\u7518\u3063\u305F\u308B\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u6642\u306B\u52A0\u3048\u3066\u30B9\u30C3\u30AD\u30EA\u3055\u305B\u308B\u7A0B\u5EA6\u3002",
      "\u7802\u7CD6\u304C\u6EB6\u3051\u5207\u308B\u305F\u3081\u306B\u71B1\u6E6F\u3092\u7528\u3044\u305F\u304C\u3001\u6642\u77ED\u306E\u305F\u3081\u306B\u30AC\u30E0\u30B7\u30ED\u30C3\u30D7\u3092\u7528\u610F\u3059\u308B\u306E\u3082\u53EF\u3002"
    ]
  },
  {
    name: "Cafe Latte",
    thumbnailSrc: "img/latte.jpg",
    motto: "\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30B3\u30FC\u30D2\u30FC\u4F7F\u7528\u3001\u304A\u624B\u8EFD\u304C\u3044\u3044\u306E\u3060\uFF01",
    ingredients: [
      "\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30B3\u30FC\u30D2\u30FC(15g)",
      "\u6CB8\u9A30\u3057\u305F\u304A\u6E6F(50mL)",
      "\u30DE\u30B0\u30AB\u30C3\u30D7",
      "\u30B0\u30E9\u30B9",
      "\u725B\u4E73(150mL)"
    ],
    steps: [
      "\u30AB\u30D5\u30A7\u30E9\u30C6\u306B\u5FC5\u8981\u306A\u30B0\u30E9\u30B9\u3092\u4E88\u3081\u51B7\u8535\u5EAB\u3067\u51B7\u3084\u3057\u3066\u304A\u304F\u3002",
      "\u304A\u597D\u307F\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30B3\u30FC\u30D2\u30FC\u309215g\u7528\u610F\u3002\u9069\u5F53\u306A\u30DE\u30B0\u30AB\u30C3\u30D7\u306B\u6295\u5165\u3059\u308B\u3002",
      "\u305D\u308C\u306B\u5BFE\u3057\u306650\uFF4DL\u306E\u71B1\u6E6F\u3092\u6CE8\u3050(\u3053\u306E\u3068\u304D\u3001\u6CB8\u9A30\u3057\u305F\u304A\u6E6F\u3067\u3082\u826F\u3044\u3002\u6EB6\u3051\u5207\u308B\u3088\u3046\u306B)",
      "\u7C89\u3063\u307D\u3055\u304C\u306A\u304F\u306A\u308B\u307E\u3067\u30B3\u30FC\u30D2\u30FC\u3092\u6EB6\u304B\u3059\u3002",
      "\u51B7\u8535\u5EAB\u3067\u51B7\u3084\u3057\u3066\u304A\u3044\u305F\u30B0\u30E9\u30B9\u306B\u725B\u4E73150mL\u3092\u6CE8\u304E\u3001\u304A\u597D\u307F\u3067\u30A2\u30A4\u30B9\u3082\u6295\u5165\u3059\u308B\u3002",
      "\u30B3\u30FC\u30D2\u30FC\u6DB2\u3092\u30B0\u30E9\u30B9\u306B\u6CE8\u3050\u3002(\u3053\u306E\u3068\u304D\u3001\u6DB2\u3092\u7D20\u65E9\u304F\u6295\u5165\u3059\u308B\u3053\u3068\u3067BAEL\u30AB\u30D5\u30A7\u30E9\u30C6\u306B\u306A\u308A\u307E\u3059\u7B11)"
    ],
    caution: [
      "\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30B3\u30FC\u30D2\u30FC\u304C\u6EB6\u3051\u5207\u308B\u307E\u3067\u5165\u5FF5\u306B\u304B\u304D\u6DF7\u305C\u308B\u3002",
      "\u30B3\u30FC\u30D2\u30FC\u306E\u7C92\u5B50\u304C\u6C88\u6BBF\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3002"
    ]
  },
  {
    name: "Lemonade v2",
    thumbnailSrc: "img/lemonade2.jpg",
    motto: "\u30EC\u30E2\u30CD\u30FC\u30C9\u3001\u7518\u9178\u3063\u3071\u3044\u3093\u304C\u307E\u305F\u3044\u3044",
    ingredients: [
      "\u30B0\u30E9\u30B9",
      "\u30B8\u30E3\u30FC",
      "\u6C34",
      "\u30A2\u30A4\u30B9",
      "\u30EC\u30E2\u30F31\u5207\u308C",
      "\u30DD\u30C3\u30AB\u30EC\u30E2\u30F3",
      "\u7802\u7CD6(\u5C0F\u3055\u30582)",
      "\u30DF\u30F3\u30C8\u306E\u84491\u679A"
    ],
    steps: [
      "\u30EC\u30E2\u30F3\u3092\u4E00\u500B\u7528\u610F\u3059\u308B\u3002",
      "\u8584\u30558mm\u7A0B\u5EA6\u306B\u8F2A\u5207\u308A\u3059\u308B\u3002",
      "\u540C\u6642\u4E26\u884C\u3067\u7802\u7CD630g\u3092\u30D5\u30E9\u30A4\u30D1\u30F3\u3067\u52A0\u71B1\u3001\u7126\u3052\u306A\u3044\u3088\u3046\u306B\u6C34\u3092\u9069\u5B9C\u8DB3\u3057\u306A\u304C\u3089\u716E\u8A70\u3081\u308B\u3002",
      "\u30B7\u30ED\u30C3\u30D7\u304C\u5B8C\u6210\u3057\u305F\u3089\u8F2A\u5207\u308A\u3055\u308C\u305F\u30EC\u30E2\u30F3\u3092\u6295\u5165\u3001\u7C97\u71B1\u304C\u53D6\u308C\u305F\u3089\u51B7\u8535\u5EAB\u306B\u3057\u307E\u3046\u3002",
      "\u4E00\u6669\u3088\u308A\u9577\u304F\u5BDD\u304B\u305B\u308B\u3002",
      "\u30EC\u30E2\u30CD\u30FC\u30C9\u3092\u4F5C\u308A\u305F\u304F\u306A\u3063\u305F\u3089\u53D6\u308A\u51FA\u3057\u3001\u30B0\u30E9\u30B9\u306B\u6295\u5165\u3002\u3053\u306E\u6642\u304A\u597D\u307F\u306E\u91CF\u306E\u30EC\u30E2\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u3002",
      "5\u500D\u7A0B\u5EA6\u306B\u5E0C\u91C8\u3059\u308B\u3088\u3046\u306B\u30C8\u30CB\u30C3\u30AF\u30A6\u30A9\u30FC\u30BF\u30FC(\u70AD\u9178\u6C34)\u3092\u6295\u5165\u3059\u308B\u3002",
      "\u30DF\u30F3\u30C8\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\u3057\u3066\u5B8C\u6210\u3002"
    ],
    caution: [
      "\u30EC\u30E2\u30F3\u30B7\u30ED\u30C3\u30D7\u3092\u4F5C\u308B\u6642\u3001\u30AB\u30E9\u30E1\u30EB\u72B6\u306B\u3059\u3089\u306A\u3089\u306A\u3044\u3088\u3046\u306B\u614E\u91CD\u306B\u52A0\u71B1\u3092\u3059\u308B\u3002\u307E\u305F\u3001\u6C34\u3092\u983B\u7E41\u306B\u6295\u5165\u3057\u3066\u52A0\u6E1B\u3092\u3059\u308B\u3002",
      "\u30EC\u30E2\u30F3\u306F\u3088\u308A\u7D30\u304B\u304F\u30AB\u30C3\u30C8\u3057\u3066\u30EC\u30E2\u30F3\u679C\u6C41\u3092\u5F15\u304D\u51FA\u3059\u306E\u3082\u3042\u308A\u3002"
    ]
  },
  {
    name: "Cold Brew Coffee",
    thumbnailSrc: "img/coldbrewcoffee.jpg",
    motto: "\u307E\u308D\u3084\u304B\u306A\u5473\u308F\u3044\u3001\u30B9\u30C3\u30AD\u30EA\u3068\u3057\u305F\u98F2\u307F\u53E3",
    ingredients: [
      "\u30B3\u30FC\u30D2\u30FC\u8C46(40g)",
      "\u6C34450mL",
      "\u30B8\u30E3\u30FC",
      "\u30B3\u30FC\u30D2\u30FC\u30D5\u30A3\u30EB\u30BF\u30FC",
      "\u30C9\u30EA\u30C3\u30D1\u30FC",
      "\u30B5\u30FC\u30D0\u30FC",
      "\u30A2\u30A4\u30B9",
      "\u30B0\u30E9\u30B9"
    ],
    steps: [
      "\u7119\u714E\u3055\u308C\u305F\u30B3\u30FC\u30D2\u30FC\u8C4640g\u3092\u4E2D\u7D30\u633D\u304D\u3067\u30B0\u30E9\u30A4\u30F3\u30C9\u3059\u308B\u3002",
      "\u7528\u610F\u3057\u305F\u30B8\u30E3\u30FC\u306B\u30B3\u30FC\u30D2\u30FC\u7C89\u3092\u6295\u5165\u3059\u308B\u3002",
      "\u6C34450mL\u3092\u6CE8\u3050\u3002",
      "\u51B7\u8535\u5EAB\u306B\u6700\u4F4E12\u6642\u9593\u4EE5\u4E0A\u304A\u304F\u3002",
      "\u98F2\u307F\u305F\u3044\u6642\u306B\u30C9\u30EA\u30C3\u30D1\u30FC\u306B\u30B3\u30FC\u30D2\u30FC\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u4E57\u305B\u3066\u6FFE\u904E\u3059\u308B\u3002",
      "\u30B0\u30E9\u30B9\u306B\u30A2\u30A4\u30B9\u3092\u4E88\u3081\u30BB\u30C3\u30C8\u3057\u3066\u304A\u304D\u3001\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u6CE8\u3050\u3002"
    ],
    caution: [
      "\u30B3\u30FC\u30D2\u30FC\u8C46\u306F\u6D45\u714E\u308A\u3088\u308A\u3082\u6DF1\u714E\u308A\u306E\u3082\u306E\u304C\u597D\u307E\u3057\u3044\u3002",
      "12\u6642\u9593\u4EE5\u4E0A\u304C\u57FA\u672C\u3060\u304C\u3001\u7F6E\u304D\u3059\u304E\u3082\u9178\u5316\u3001\u52A3\u5316\u306E\u539F\u56E0\u306B\u306A\u308B\u306E\u30672\u65E5\u4EE5\u5185\u306B\u306E\u307F\u304D\u308B\u3002"
    ]
  },
  {
    name: "Matcha",
    thumbnailSrc: "img/matcha.jpg",
    motto: "\u62B9\u8336\u3001\u4F98\u3073\u5BC2\u3073\u30D1\u30EF\u30FC\u3092\u611F\u3058\u307E\u3059",
    ingredients: [
      "\u62B9\u8336(10g)",
      "\u6CB8\u9A30\u3057\u305F\u304A\u6E6F(35mL)",
      "\u30DE\u30B0\u30AB\u30C3\u30D7",
      "\u30B0\u30E9\u30B9",
      "\u725B\u4E73(120mL)"
    ],
    steps: [
      "\u62B9\u8336\u30E9\u30C6\u306B\u5FC5\u8981\u306A\u30B0\u30E9\u30B9\u3092\u4E88\u3081\u51B7\u8535\u5EAB\u3067\u51B7\u3084\u3057\u3066\u304A\u304F\u3002",
      "\u304A\u597D\u307F\u306E\u62B9\u8336\u309210g\u7528\u610F\u3002\u9069\u5F53\u306A\u30DE\u30B0\u30AB\u30C3\u30D7\u306B\u6295\u5165\u3059\u308B\u3002",
      "\u305D\u308C\u306B\u5BFE\u3057\u306635\uFF4DL\u306E\u71B1\u6E6F\u3092\u6CE8\u3050(\u3053\u306E\u3068\u304D\u3001\u6CB8\u9A30\u3057\u305F\u304A\u6E6F\u3067\u3082\u826F\u3044\u3002\u6EB6\u3051\u5207\u308B\u3088\u3046\u306B)",
      "\u7C89\u3063\u307D\u3055\u304C\u306A\u304F\u306A\u308B\u307E\u3067\u62B9\u8336\u3092\u6EB6\u304B\u3059\u3002",
      "\u51B7\u8535\u5EAB\u3067\u51B7\u3084\u3057\u3066\u304A\u3044\u305F\u30B0\u30E9\u30B9\u306B\u62B9\u8336\u3092\u6295\u5165\u3059\u308B\u3002",
      "\u305D\u306E\u4E0A\u306B\u725B\u4E73120mL\u3092\u30B0\u30E9\u30B9\u306B\u6CE8\u3050\u3002"
    ],
    caution: [
      "\u62B9\u8336\u304C\u7389\u306B\u306A\u3089\u306A\u3044\u3088\u3046\u306B\u5165\u5FF5\u306B\u6DF7\u305C\u308B\u3002",
      "\u62B9\u8336\u3068\u725B\u4E73\u306E\u307F\u3060\u3068\u82E6\u304F\u611F\u3058\u308B\u3053\u3068\u304C\u3042\u308B\u306E\u3067\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30B7\u30ED\u30C3\u30D7\u3092\u8FFD\u52A0\u3059\u308B\u3002"
    ]
  }
];
var Button_svelte_svelte_type_style_lang = "";
export { recipeData as r };