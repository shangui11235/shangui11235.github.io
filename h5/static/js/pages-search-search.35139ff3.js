(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"185d":function(e,t,i){var d=i("24fb");t=d(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* =========== 基础 =========== */.content[data-v-d414cc1e]{color:#333;font:normal 14px/1.8 Arial,Microsoft YaHei,WenQuanYi Micro Hei,Verdana,Tahoma,sans-serif;background-color:#fff}.zhuige-nav-search[data-v-d414cc1e]{display:flex;align-items:center;background:hsla(0,0%,68.6%,.1);height:%?60?%;padding:0 %?20?%;min-width:%?160?%;border-radius:%?30?%;border:%?1?% solid hsla(0,0%,68.6%,.2)}.zhuige-nav-search uni-text[data-v-d414cc1e]{font-size:%?24?%;font-weight:400;color:#999}.zhuige-main-top[data-v-d414cc1e]{padding:%?200?% %?30?% %?30?%;border-bottom:%?16?% solid #eee}\r\n/* -------- 轮播 -------- */.zhuige-swiper[data-v-d414cc1e]{margin-bottom:%?30?%}.zhuige-swiper uni-swiper[data-v-d414cc1e], .zhuige-swiper uni-swiper-item[data-v-d414cc1e], .zhuige-swiper uni-image[data-v-d414cc1e]{height:%?400?%;width:100%;overflow:hidden;border-radius:%?12?%}\r\n/* -------- 自定义图标 -------- */.zhuige-icon-menu[data-v-d414cc1e]{display:flex;flex-wrap:nowrap;align-items:center}.zhuige-icon-menu uni-view[data-v-d414cc1e]{width:20%;text-align:center}.zhuige-icon-menu uni-view uni-image[data-v-d414cc1e]{height:%?96?%;width:%?96?%;margin:0 auto}.zhuige-icon-menu uni-view uni-text[data-v-d414cc1e]{display:block;font-size:%?24?%;font-weight:300}\r\n/* -------- 滑动推荐 -------- */.zhuige-recom[data-v-d414cc1e]{padding:%?30?% 0;border-bottom:%?16?% solid #eee}.zhuige-title[data-v-d414cc1e]{padding:0 %?30?%;display:flex;justify-content:space-between;align-items:center}.zhuige-title uni-view[data-v-d414cc1e]{font-size:%?32?%;font-weight:600}.zhuige-title uni-text[data-v-d414cc1e]{font-size:%?24?%;font-weight:300}.zhuige-scroll[data-v-d414cc1e]{padding-top:%?20?%}.zhuige-scroll uni-scroll-view[data-v-d414cc1e]{white-space:nowrap;overflow-x:scroll}.zhuige-scroll-block[data-v-d414cc1e]{position:relative;height:%?240?%;width:%?320?%;margin-right:%?16?%;display:inline-block}.zhuige-scroll-block[data-v-d414cc1e]:first-of-type{margin-left:%?30?%}.zhuige-scroll-block[data-v-d414cc1e]:last-of-type{margin-right:%?30?%}.zhuige-scroll-block uni-image[data-v-d414cc1e]{height:%?240?%;width:%?320?%;border-radius:%?12?%}.zhuige-scroll-block uni-view[data-v-d414cc1e]{display:block;width:%?300?%;color:#fff;bottom:%?0?%;position:absolute;z-index:12;font-size:%?24?%;height:%?70?%;line-height:%?70?%;padding:0 %?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0 0 %?6?% %?6?%;background:linear-gradient(180deg,transparent,rgba(0,0,0,.8))}\r\n/* -------- 商品列表 -------- */.zhuige-goods-group[data-v-d414cc1e]{background:#fbfbfb}.zhuige-goods-nav[data-v-d414cc1e]{display:flex;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #eee}.zhuige-goods-scroll[data-v-d414cc1e]{width:90%;white-space:nowrap}.zhuige-goods-scroll uni-view[data-v-d414cc1e]{height:%?90?%;display:inline-flex;justify-content:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;line-height:%?90?%;padding:0 %?20?%;text-align:center}.zhuige-goods-scroll uni-view.active[data-v-d414cc1e]{font-weight:600;font-size:%?32?%}.zhuige-goods-scroll uni-view.active[data-v-d414cc1e]::after{position:absolute;content:"";width:%?30?%;height:%?6?%;margin-top:%?60?%;background:#333}.zhuige-goods-more[data-v-d414cc1e]{width:10%}.zhuige-goods-list[data-v-d414cc1e]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:%?30?%}.zhuige-goods[data-v-d414cc1e]{width:49%;background:#fff;border-radius:%?12?%;margin-bottom:%?20?%}.zhuige-goods uni-image[data-v-d414cc1e]{height:%?360?%;width:100%;border-radius:%?12?% %?12?% 0 0}.zhuige-goods-text[data-v-d414cc1e]{padding:%?12?% %?20?%}.zhuige-goods-title[data-v-d414cc1e]{max-height:3.4rem;overflow:hidden}.zhuige-goods-title uni-text[data-v-d414cc1e]{font-size:%?28?%;font-weight:600;line-height:1.8rem}.zhuige-goods-title uni-text.mark[data-v-d414cc1e]{line-height:1rem;padding:%?6?% %?10?%;font-size:%?18?%;font-weight:300;color:#fff;background:#f40;border-radius:%?4?%;margin-right:%?8?%;vertical-align:text-bottom}.zhuige-goods-price[data-v-d414cc1e]{padding-top:%?10?%;display:flex;align-items:baseline}.zhuige-goods-price uni-view.promotion[data-v-d414cc1e]{padding-right:%?12?%}.promotion uni-text[data-v-d414cc1e]{color:#f42;font-size:%?36?%;font-weight:600}.promotion uni-text[data-v-d414cc1e]:first-of-type{font-size:%?24?%;font-weight:200}.zhuige-goods-price uni-view.original uni-text[data-v-d414cc1e]{font-size:%?26?%;text-decoration:line-through;font-weight:300;color:#666}\r\n/* -------- 提示 -------- */.zhuige-end-tips[data-v-d414cc1e]{height:%?160?%;line-height:%?160?%;text-align:center;font-size:%?24?%;font-weight:200;color:#999}\r\n/* -------- 搜索 -------- */.zhuige-wide-search[data-v-d414cc1e]{padding:%?60?% 0;display:flex;align-items:center;justify-content:space-between}.zhuige-wide-search .bar[data-v-d414cc1e]{width:82%;padding:0 %?20?%;background:#f5f5f5;border:%?1?% solid #eee;border-radius:%?40?%;height:%?70?%;display:flex;align-items:center}.zhuige-wide-search .bar uni-input[data-v-d414cc1e]{width:90%;margin-left:%?20?%}.zhuige-wide-search uni-text[data-v-d414cc1e]{font-size:%?26?%;font-weight:300}.zhuige-search-list .zhuige-title[data-v-d414cc1e]{padding:%?30?% 0 0}.zhuige-search-tags[data-v-d414cc1e]{padding:%?30?% 0;display:flex;flex-wrap:wrap;align-items:center}.zhuige-search-tags uni-text[data-v-d414cc1e]{height:1.8rem;line-height:1.8rem;font-size:%?24?%;font-weight:200;color:#666;border-radius:%?6?%;padding:0 %?28?%;border:%?1?% solid #ddd;margin:0 %?20?% %?20?% 0}.zhuige-search-tags uni-text.del[data-v-d414cc1e]{border-color:#fff;color:#f40}.zhuige-none-tips[data-v-d414cc1e]{text-align:center;padding:%?100?%}.zhuige-none-tips uni-image[data-v-d414cc1e]{height:%?200?%;width:%?200?%;margin-bottom:%?30?%}.zhuige-none-tips uni-view[data-v-d414cc1e]{font-size:%?24?%;font-weight:300;color:#999}\r\n/* -------- 商品详情 -------- */.zhuige-detail-img uni-swiper[data-v-d414cc1e], .zhuige-detail-img uni-swiper-item[data-v-d414cc1e], .zhuige-detail-img uni-image[data-v-d414cc1e]{height:%?750?%;width:100%;overflow:hidden}.zhuige-detail-title[data-v-d414cc1e]{padding:%?30?%}.zhuige-detail-title .goods-name[data-v-d414cc1e]{padding-bottom:%?20?%;font-size:%?32?%;font-weight:600;line-height:1.8rem}.zhuige-detail-title .goods-intro[data-v-d414cc1e]{padding-bottom:%?20?%;display:flex;align-items:center;border-bottom:%?1?% solid #ddd}.zhuige-detail-title .goods-intro uni-text[data-v-d414cc1e]{font-size:%?24?%;font-weight:300;color:#666}.zhuige-detail-title .goods-intro uni-text.mark[data-v-d414cc1e]{font-size:%?20?%;padding:%?2?% %?20?%;border-radius:%?6?%;color:#fff;background:#f40;margin-right:%?20?%}.zhuige-detail-title .goods-option[data-v-d414cc1e], .zhuige-category-goods .goods-option[data-v-d414cc1e]{padding-top:%?20?%;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center}.zhuige-detail-title .goods-option .price uni-text[data-v-d414cc1e]:nth-child(1), .zhuige-category-goods .goods-option .price uni-text[data-v-d414cc1e]:nth-child(1){font-size:%?18?%;margin-right:%?6?%;color:#f40}.zhuige-detail-title .goods-option .price uni-text[data-v-d414cc1e]:nth-child(2), .zhuige-category-goods .goods-option .price uni-text[data-v-d414cc1e]:nth-child(2){font-size:%?36?%;font-weight:600;color:#f40}.zhuige-detail-title .goods-option .price uni-text[data-v-d414cc1e]:nth-child(3), .zhuige-category-goods .goods-option .price uni-text[data-v-d414cc1e]:nth-child(3){margin-left:%?20?%;font-size:%?28?%;font-weight:300;color:#666;text-decoration:line-through}.zhuige-detail-title .goods-option .numbers uni-text[data-v-d414cc1e]:nth-child(1){font-size:%?28?%;color:#666;font-weight:200;padding-right:%?30?%;border-right:%?1?% solid #666}.zhuige-detail-title .goods-option .numbers uni-text[data-v-d414cc1e]:nth-child(2){font-size:%?28?%;font-weight:200;color:#666;padding-left:%?30?%}.zhuige-category-goods .goods-add[data-v-d414cc1e]{line-height:1rem}.zhuige-goods-detail[data-v-d414cc1e]{padding:%?30?% %?30?% %?140?%;border-top:%?16?% solid #eee}.zhuige-goods-detail .goods-title[data-v-d414cc1e]{font-size:%?36?%;font-weight:600;padding-bottom:%?20?%}.zhuige-goods-detail .goods-detail-view[data-v-d414cc1e]{word-break:break-word}.zhuige-goods-detail .goods-detail-view uni-image[data-v-d414cc1e]{max-width:100%}.zhuige-goods-bar[data-v-d414cc1e]{position:fixed;display:flex;align-items:center;width:86%;margin:0 7%;bottom:%?40?%}.zhuige-goods-cart-btn[data-v-d414cc1e]{position:relative}.zhuige-goods-cart-btn uni-view[data-v-d414cc1e]{font-size:%?20?%;color:#fff;position:absolute;right:-8px;top:0;background:#f40;height:%?36?%;text-align:center;width:%?36?%;line-height:%?36?%;border-radius:50%}.zhuige-goods-cart-btn[data-v-d414cc1e]{width:%?90?%;margin-right:%?20?%;height:%?90?%;line-height:%?90?%;border-radius:50%;text-align:center;background:#fff}.zhuige-goods-btn[data-v-d414cc1e]{display:flex}.zhuige-goods-btn uni-view[data-v-d414cc1e]{color:#fff;height:%?90?%;line-height:%?90?%}.zhuige-goods-btn uni-view[data-v-d414cc1e]:nth-child(1){background:#000;font-size:%?32?%;padding:0 %?60?%;border-radius:%?60?% 0 0 %?60?%}.zhuige-goods-btn uni-view[data-v-d414cc1e]:nth-child(2){background:#f40;font-size:%?32?%;padding:0 %?60?%;border-radius:0 %?60?% %?60?% 0}\r\n/* -------- 商品分类 -------- */.zhuige-category[data-v-d414cc1e]{position:fixed;height:100%;display:flex;width:100%;flex-wrap:nowrap}.zhuige-category-nav[data-v-d414cc1e]{width:30%;height:100%;background:#f7f7f7;overflow-y:scroll}.zhuige-category-nav uni-view[data-v-d414cc1e]{height:4rem;line-height:4rem;padding-left:%?40?%;font-size:%?28?%;font-weight:300;position:relative}.zhuige-category-nav uni-view.active[data-v-d414cc1e]{background:#fff;font-weight:600}.zhuige-category-nav uni-view.active[data-v-d414cc1e]::after{content:"";position:absolute;border-color:inherit;width:4px;height:21px;top:20px;left:7px;background:#f40}.zhuige-category-list[data-v-d414cc1e]{width:70%;height:100%;background:#fff;overflow-y:scroll}.zhuige-category-title[data-v-d414cc1e]{font-size:%?28?%;font-weight:600;padding:%?40?% %?30?% 0}.zhuige-category-group[data-v-d414cc1e]{padding:%?30?%}.zhuige-category-block[data-v-d414cc1e]{display:flex;border-bottom:%?1?% solid #ddd;align-items:center;overflow:hidden;padding:%?20?% 0}.zhuige-category-block uni-image[data-v-d414cc1e]{-webkit-box-flex:0;-webkit-flex:0 0 %?128?%;-ms-flex:0 0 %?128?%;flex:0 0 %?128?%;height:%?128?%;width:%?128?%;border-radius:%?4?%;margin-right:%?20?%}.zhuige-category-goods[data-v-d414cc1e]{width:68%}.zhuige-category-goods .goods-name[data-v-d414cc1e]{height:1rem;line-height:1rem;font-weight:600;word-break:keep-all;text-overflow:ellipsis;overflow:hidden}\r\n/* -------- 购物车 -------- */.zhuige-cart-opt[data-v-d414cc1e]{display:flex;align-items:center;justify-content:space-between;padding:%?40?% %?30?%;border-bottom:%?16?% solid #eee}.zhuige-cart-opt .num[data-v-d414cc1e]{font-size:%?28?%;font-weight:300;color:#555}.zhuige-cart-opt .num uni-text[data-v-d414cc1e]{color:#f40;font-weight:600;padding-left:%?10?%}.zhuige-cart-opt uni-view[data-v-d414cc1e]:nth-child(2){color:#fff;font-size:%?22?%;font-weight:200;background:#f40;padding:%?5?% %?20?%;border-radius:%?4?%}.zhuige-cart-list[data-v-d414cc1e]{padding:%?0?% %?30?%}.zhuige-cart-list-block[data-v-d414cc1e]{display:flex;align-items:center;padding:%?30?% 0;border-bottom:%?1?% solid #ddd}.zhuige-cart-list-block[data-v-d414cc1e]:last-of-type{border:none}.list-opt[data-v-d414cc1e]{display:flex;align-items:center;-webkit-box-flex:0;-webkit-flex:0 0 %?200?%;-ms-flex:0 0 %?200?%;flex:0 0 %?200?%;height:%?128?%;width:%?200?%;border-radius:%?4?%;margin-right:%?20?%}.list-opt uni-image[data-v-d414cc1e]{height:%?128?%;width:%?128?%;margin-left:%?10?%;border-radius:%?6?%}.list-info[data-v-d414cc1e]{flex:1;overflow:hidden}.list-title[data-v-d414cc1e]{font-size:%?28?%;font-weight:600;height:1rem;line-height:1rem;word-break:keep-all;text-overflow:ellipsis;overflow:hidden}.list-setup[data-v-d414cc1e]{padding-top:%?10?%;display:flex;align-items:center;justify-content:space-between}.list-setup .list-setup-num[data-v-d414cc1e]{color:#f40}.list-setup .list-setup-num uni-text[data-v-d414cc1e]:nth-child(1){font-size:%?22?%}.list-setup .list-setup-num uni-text[data-v-d414cc1e]:nth-child(2){font-size:%?36?%;font-weight:600;margin-left:%?8?%}.list-setup .list-setup-opt[data-v-d414cc1e]{display:flex;align-items:center;justify-content:space-between;height:%?50?%;line-height:%?50?%;border-radius:%?6?%;border:1px solid #ddd}.list-setup .list-setup-opt uni-text[data-v-d414cc1e]{width:%?50?%;text-align:center}.list-setup .list-setup-opt uni-input[data-v-d414cc1e]{width:%?60?%;text-align:center;height:%?50?%;border-left:1px solid #ddd;border-right:1px solid #ddd}.zhuige-cart-count[data-v-d414cc1e]{position:fixed;bottom:0;display:flex;align-items:center;justify-content:space-between;padding:%?20?% 4% %?40?%;width:92%;background:#fafafa}.cart-check[data-v-d414cc1e]{display:flex;align-items:center}.count-num[data-v-d414cc1e]{font-size:%?26?%;margin-left:%?8?%}.cart-confirm[data-v-d414cc1e]{display:flex;align-items:center}.cart-total[data-v-d414cc1e]{color:#f40}.cart-total uni-text[data-v-d414cc1e]:nth-child(1){font-size:%?22?%}.cart-total uni-text[data-v-d414cc1e]:nth-child(2){font-size:%?36?%;font-weight:600;margin:0 %?20?% 0 %?8?%}.cart-btn[data-v-d414cc1e]{height:%?68?%;line-height:%?68?%;padding:0 %?40?%;border-radius:%?68?%;background:#f40;color:#fff;font-size:%?26?%;font-weight:200}.cart-confirm .del[data-v-d414cc1e]{background:#000}\r\n/* -------- 订单确认 -------- */.zhuige-address-set[data-v-d414cc1e]{display:flex;align-items:center;padding:%?30?% 0}.address-icon[data-v-d414cc1e]{width:10%;text-align:right}.address-info[data-v-d414cc1e]{width:77%;margin-left:3%}.address-info uni-view[data-v-d414cc1e]:nth-child(1){padding-bottom:%?6?%}.address-info uni-view:nth-child(1) uni-text[data-v-d414cc1e]{font-size:%?28?%;font-weight:400;line-height:1.4rem;margin-right:%?20?%}.address-info uni-view[data-v-d414cc1e]:nth-child(2){font-size:%?28?%;font-weight:200;line-height:1.4rem;color:#666}.address-more[data-v-d414cc1e]{width:10%;text-align:center}.address-set-tips[data-v-d414cc1e]{font-size:%?28?%;font-weight:200;line-height:1.4rem;padding-left:%?30?%}.zhuige-confirm-list[data-v-d414cc1e]{border-bottom:%?16?% solid #eee;border-top:%?16?% solid #eee}.zhuige-order-list[data-v-d414cc1e]{padding:0}.zhuige-order-list .list-opt uni-image[data-v-d414cc1e], .zhuige-confirm-list .list-opt uni-image[data-v-d414cc1e]{margin:0}.zhuige-confirm-list .list-opt[data-v-d414cc1e], .zhuige-order-block .list-opt[data-v-d414cc1e], .zhuige-order-list .list-opt[data-v-d414cc1e]{flex:0 0 %?140?%;height:%?128?%;width:%?140?%}.zhuige-confirm-list .goods-confirm[data-v-d414cc1e], .zhuige-order-list .goods-confirm[data-v-d414cc1e]{display:flex}.zhuige-confirm-list .list-setup uni-view[data-v-d414cc1e]:nth-child(2), .zhuige-order-list .list-setup uni-view[data-v-d414cc1e]:nth-child(2){padding:%?8?% 0 0 %?20?%;color:#999}.zhuige-order-remark[data-v-d414cc1e], .zhuige-order-pay-type[data-v-d414cc1e]{padding:%?30?% %?30?% 0}.zhuige-order-pay-type[data-v-d414cc1e]{min-height:%?320?%}.zhuige-order-remark .zhuige-title[data-v-d414cc1e], .zhuige-order-pay-type .zhuige-title[data-v-d414cc1e]{font-size:%?30?%;font-weight:500;padding:0 0 %?20?%}.zhuige-order-remark uni-textarea[data-v-d414cc1e]{width:90%;height:%?200?%;padding:%?30?% 5%;border-radius:%?12?%;background:#f2f2f2}.pay-wechat[data-v-d414cc1e]{display:flex;align-items:center;height:%?100?%;line-height:%?100?%;padding:0 5%;width:90%;background:#f5ffef;border-radius:%?12?%}.pay-wechat uni-text[data-v-d414cc1e]{text-indent:%?12?%;font-size:%?30?%;font-weight:200}\r\n/* -------- 我的 -------- */.zhuige-user-login[data-v-d414cc1e]{height:%?300?%;padding:%?100?% 0;text-align:center}.zhuige-user-login uni-image[data-v-d414cc1e]{height:%?200?%;width:%?200?%;border-radius:50%}.zhuige-user-login uni-view[data-v-d414cc1e]{padding:%?20?%;font-size:%?36?%;color:#fff;font-weight:500}.zhuige-icon-set[data-v-d414cc1e]{display:flex;flex-wrap:nowrap;padding:%?30?% 0;border-bottom:%?16?% solid #eee}.zhuige-icon[data-v-d414cc1e]{width:25%;text-align:center}.zhuige-icon uni-image[data-v-d414cc1e]{height:%?72?%;width:%?72?%;margin-bottom:%?-8?%}.zhuige-icon uni-view[data-v-d414cc1e]{font-size:%?26?%;font-weight:300;text-align:center}.zhuige-user-menu[data-v-d414cc1e]{padding-bottom:%?100?%}.zhuige-user-opt[data-v-d414cc1e]{display:flex;align-items:center;justify-content:space-between;padding:%?10?% %?30?%;border-bottom:%?1?% solid #ddd;line-height:3rem}uni-button.zhuige-user-opt[data-v-d414cc1e]{background:none;border-bottom:%?1?% solid #ddd}uni-button.zhuige-user-opt[data-v-d414cc1e]::after{border:none;border-radius:0}.zhuige-user-opt-title[data-v-d414cc1e]{display:flex;align-items:center}.zhuige-user-opt-title uni-view[data-v-d414cc1e]{font-size:%?30?%;font-weight:400;color:#333;margin-right:%?20?%}\r\n/* -------- 订单详情 -------- */.zhuige-order-state[data-v-d414cc1e]{padding:%?60?% %?30?% %?30?%;text-align:center}.zhuige-order-state uni-view[data-v-d414cc1e]{height:%?120?%;line-height:%?120?%;border:%?1?% solid #ddd;border-radius:%?12?%;font-size:%?32?%;color:#f40;font-weight:600}.zhuige-order-data[data-v-d414cc1e]{border-top:%?16?% solid #eee}.zhuige-order-data > uni-view[data-v-d414cc1e]{padding:%?30?%;border-bottom:%?1?% solid #ddd;display:flex;align-items:center}.zhuige-order-data > uni-view[data-v-d414cc1e]:last-of-type{border:none}.zhuige-order-data > uni-view uni-view[data-v-d414cc1e]{font-size:%?28?%;font-weight:500;margin-right:%?10?%}.zhuige-order-data > uni-view uni-text[data-v-d414cc1e]{font-size:%?28?%;font-weight:200;color:#999}.zhuige-order-data > uni-view uni-text.order-num[data-v-d414cc1e]{font-size:%?30?%;color:#333;font-weight:300}.zhuige-order-data > uni-view.order-prix uni-text[data-v-d414cc1e]:first-of-type{font-size:%?18?%;color:#f40;font-weight:200}.zhuige-order-data > uni-view.order-prix uni-text[data-v-d414cc1e]:last-of-type{font-size:%?36?%;color:#f40;font-weight:600;margin-left:%?8?%}.zhuige-order-button[data-v-d414cc1e]{display:flex;align-items:center;justify-content:flex-end;padding:%?20?% %?30?% %?60?%;background:#fafafa}.zhuige-order-button uni-view[data-v-d414cc1e], .zhuige-order-button uni-button[data-v-d414cc1e]{height:%?68?%;line-height:%?68?%;padding:0 %?40?%;border-radius:%?68?%;font-size:%?26?%;font-weight:200;background:#fff;border:%?1?% solid #ddd;margin-left:%?30?%;margin-right:0}.zhuige-order-button uni-button[data-v-d414cc1e]{height:%?72?%;line-height:%?72?%}.zhuige-order-button uni-view.confirm-btn[data-v-d414cc1e]{color:#fff;background:#f40;width:%?200?%;padding:0;text-align:center;border:%?1?% solid #f40}.zhuige-order-button uni-button[data-v-d414cc1e]::after{border:none}.zhuige-order-remark-info[data-v-d414cc1e]{padding-bottom:%?30?%;line-height:1.8rem;color:#555;font-weight:200}\r\n/* -------- 订单详情 -------- */.zhuige-tab-nav[data-v-d414cc1e]{position:fixed;z-index:99;width:100%;top:0;left:0;display:flex;flex-wrap:nowrap;align-items:center;border-bottom:%?1?% solid #ddd;background:#fff}.zhuige-tab-nav uni-view[data-v-d414cc1e]{width:20%;height:%?120?%;line-height:%?120?%;text-align:center;position:relative}.zhuige-tab-nav uni-view uni-text[data-v-d414cc1e]{font-size:%?26?%;font-weight:300;color:#555}.zhuige-tab-nav uni-view uni-text[data-v-d414cc1e]:nth-child(2){padding-left:%?4?%}.zhuige-tab-nav uni-view.active uni-text[data-v-d414cc1e]{color:0;font-weight:600}.zhuige-tab-nav uni-view.active[data-v-d414cc1e]::before{content:"";position:absolute;width:%?40?%;margin-left:%?-20?%;left:50%;bottom:%?20?%;background:#333;height:2px}.zhuige-tab-box[data-v-d414cc1e]{padding:%?120?% 0}.zhuige-order-block[data-v-d414cc1e]{padding:%?20?% %?30?%;border-bottom:%?16?% solid #eee}.zhuige-order-block  .zhuige-cart-list-block[data-v-d414cc1e]{padding:%?20?% 0}.zhuige-order-block-title[data-v-d414cc1e], .zhuige-order-block-footer[data-v-d414cc1e]{display:flex;align-items:center;justify-content:space-between}.zhuige-order-block-title uni-view[data-v-d414cc1e]:first-of-type{font-size:%?28?%;font-weight:600}.zhuige-order-block-title uni-view[data-v-d414cc1e]:nth-child(2){font-size:%?26?%;font-weight:300;position:relative}.zhuige-order-block-title uni-view[data-v-d414cc1e]:nth-child(2)::after{content:" ";left:-10px;height:6px;top:9px;width:6px;border-radius:6px;position:absolute}.state-pay[data-v-d414cc1e]{color:#f40}.state-pay[data-v-d414cc1e]::after{background:#f40}.state-take[data-v-d414cc1e]{color:#2c70db}.state-take[data-v-d414cc1e]::after{background:#2c70db}.state-over[data-v-d414cc1e]{color:#ff9024}\r\n/* .state-over::after {\r\n\t\t\t\tbackground: #FF9024;\r\n\t\t\t} */.state-cancel[data-v-d414cc1e]{color:#bbb}\r\n/* .state-cancel::after {\r\n\t\t\t\tbackground: #BBBBBB;\r\n\t\t\t} */.zhuige-order-block-footer > uni-view[data-v-d414cc1e]:first-of-type{font-size:%?26?%;color:#999;font-weight:300}.zhuige-order-block-footer-btn[data-v-d414cc1e]{display:flex;font-size:%?24?%;font-weight:200}.zhuige-order-block-footer-btn uni-view[data-v-d414cc1e], .zhuige-order-block-footer-btn uni-button[data-v-d414cc1e]{height:%?60?%;line-height:%?60?%;margin-left:%?16?%;width:%?170?%;text-align:center;border-radius:%?60?%;border:%?1?% solid #ddd;background:none;font-size:%?24?%;font-weight:200}.zhuige-order-block-footer-btn uni-view.active[data-v-d414cc1e]{color:#fff;background:#f40;border-color:#f40}.zhuige-order-block-footer-btn uni-button[data-v-d414cc1e]::after{border:none}.zhuige-brand[data-v-d414cc1e]{padding:%?60?% %?40?%;text-align:center;font-size:%?26?%;font-weight:300;color:#999}.content[data-v-d414cc1e]{padding:%?30?%}',""]),e.exports=t},"326b":function(e,t,i){"use strict";var d=i("4ea4");i("ac1f"),i("841c"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(i("f1a9")),o=d(i("90e1")),n=(d(i("20c8")),d(i("1c69")),d(i("4842")),{data:function(){return{keyword:"",historys:[]}},onLoad:function(e){var t=this;uni.getStorage({key:a.default.ZHUIGE_SEARCH_KEY,success:function(e){t.historys=e.data}})},onShareAppMessage:function(){return{title:getApp().globalData.appDesc+"_"+getApp().globalData.appName,path:"pages/index/index"}},methods:{clickSearch:function(){this.search(this.keyword)},confirmSearch:function(){this.search(this.keyword)},clickHistory:function(e){this.search(e)},clickClear:function(){var e=this;uni.showModal({title:"提示",content:"确定要清空搜索历史吗？",success:function(t){t.confirm&&uni.setStorage({key:a.default.ZHUIGE_SEARCH_KEY,data:[],success:function(){e.historys=[]}})}})},clickCancel:function(){o.default.navigateBack()},search:function(e){var t=this;uni.getStorage({key:a.default.ZHUIGE_SEARCH_KEY,success:function(i){for(var d=[e],o=0;o<i.data.length&&d.length<a.default.ZHUIGE_SEARCH_MAX_COUNT;o++)e!=i.data[o]&&d.push(i.data[o]);t.historys=d,uni.setStorage({data:d,key:a.default.ZHUIGE_SEARCH_KEY})},fail:function(i){var d=[e];t.historys=d,uni.setStorage({data:d,key:a.default.ZHUIGE_SEARCH_KEY})}}),o.default.openLink("/pages/list/list?search="+e+"&title=搜索【"+e+"】")}}});t.default=n},"36d2":function(e,t,i){"use strict";var d=i("7152"),a=i.n(d);a.a},"37dc7":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return d}));var d={uniIcons:i("8d6c").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"zhuige-wide-search"},[i("v-uni-view",{staticClass:"bar"},[i("uni-icons",{attrs:{type:"search",size:"24",color:"#333333"}}),i("v-uni-input",{attrs:{type:"text","confirm-type":"search",placeholder:"请输入关键词..."},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmSearch.apply(void 0,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e.keyword.length>0?i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickSearch.apply(void 0,arguments)}}},[e._v("搜索")]):i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickCancel.apply(void 0,arguments)}}},[e._v("取消")])],1),e.historys.length>0?i("v-uni-view",{staticClass:"zhuige-search-list"},[i("v-uni-view",{staticClass:"zhuige-title"},[e._v("搜索历史")]),i("v-uni-view",{staticClass:"zhuige-search-tags"},[e._l(e.historys,(function(t,d){return i("v-uni-text",{key:d,on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.clickHistory(t)}}},[e._v(e._s(t))])})),i("v-uni-text",{staticClass:"del",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickClear.apply(void 0,arguments)}}},[e._v("清空历史")])],2)],1):e._e()],1)},o=[]},7152:function(e,t,i){var d=i("185d");"string"===typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);var a=i("4f06").default;a("07e5bcce",d,!0,{sourceMap:!1,shadowMode:!1})},b4f6:function(e,t,i){"use strict";i.r(t);var d=i("37dc7"),a=i("d875");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("36d2");var n,c=i("f0c5"),r=Object(c["a"])(a["default"],d["b"],d["c"],!1,null,"d414cc1e",null,!1,d["a"],n);t["default"]=r.exports},d875:function(e,t,i){"use strict";i.r(t);var d=i("326b"),a=i.n(d);for(var o in d)"default"!==o&&function(e){i.d(t,e,(function(){return d[e]}))}(o);t["default"]=a.a}}]);