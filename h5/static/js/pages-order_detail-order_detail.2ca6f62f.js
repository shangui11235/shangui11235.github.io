(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_detail-order_detail"],{"19dc":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* =========== 基础 =========== */.content[data-v-1dba6eb2]{color:#333;font:normal 14px/1.8 Arial,Microsoft YaHei,WenQuanYi Micro Hei,Verdana,Tahoma,sans-serif;background-color:#fff}.zhuige-nav-search[data-v-1dba6eb2]{display:flex;align-items:center;background:hsla(0,0%,68.6%,.1);height:%?60?%;padding:0 %?20?%;min-width:%?160?%;border-radius:%?30?%;border:%?1?% solid hsla(0,0%,68.6%,.2)}.zhuige-nav-search uni-text[data-v-1dba6eb2]{font-size:%?24?%;font-weight:400;color:#999}.zhuige-main-top[data-v-1dba6eb2]{padding:%?200?% %?30?% %?30?%;border-bottom:%?16?% solid #eee}\r\n/* -------- 轮播 -------- */.zhuige-swiper[data-v-1dba6eb2]{margin-bottom:%?30?%}.zhuige-swiper uni-swiper[data-v-1dba6eb2], .zhuige-swiper uni-swiper-item[data-v-1dba6eb2], .zhuige-swiper uni-image[data-v-1dba6eb2]{height:%?400?%;width:100%;overflow:hidden;border-radius:%?12?%}\r\n/* -------- 自定义图标 -------- */.zhuige-icon-menu[data-v-1dba6eb2]{display:flex;flex-wrap:nowrap;align-items:center}.zhuige-icon-menu uni-view[data-v-1dba6eb2]{width:20%;text-align:center}.zhuige-icon-menu uni-view uni-image[data-v-1dba6eb2]{height:%?96?%;width:%?96?%;margin:0 auto}.zhuige-icon-menu uni-view uni-text[data-v-1dba6eb2]{display:block;font-size:%?24?%;font-weight:300}\r\n/* -------- 滑动推荐 -------- */.zhuige-recom[data-v-1dba6eb2]{padding:%?30?% 0;border-bottom:%?16?% solid #eee}.zhuige-title[data-v-1dba6eb2]{padding:0 %?30?%;display:flex;justify-content:space-between;align-items:center}.zhuige-title uni-view[data-v-1dba6eb2]{font-size:%?32?%;font-weight:600}.zhuige-title uni-text[data-v-1dba6eb2]{font-size:%?24?%;font-weight:300}.zhuige-scroll[data-v-1dba6eb2]{padding-top:%?20?%}.zhuige-scroll uni-scroll-view[data-v-1dba6eb2]{white-space:nowrap;overflow-x:scroll}.zhuige-scroll-block[data-v-1dba6eb2]{position:relative;height:%?240?%;width:%?320?%;margin-right:%?16?%;display:inline-block}.zhuige-scroll-block[data-v-1dba6eb2]:first-of-type{margin-left:%?30?%}.zhuige-scroll-block[data-v-1dba6eb2]:last-of-type{margin-right:%?30?%}.zhuige-scroll-block uni-image[data-v-1dba6eb2]{height:%?240?%;width:%?320?%;border-radius:%?12?%}.zhuige-scroll-block uni-view[data-v-1dba6eb2]{display:block;width:%?300?%;color:#fff;bottom:%?0?%;position:absolute;z-index:12;font-size:%?24?%;height:%?70?%;line-height:%?70?%;padding:0 %?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0 0 %?6?% %?6?%;background:linear-gradient(180deg,transparent,rgba(0,0,0,.8))}\r\n/* -------- 商品列表 -------- */.zhuige-goods-group[data-v-1dba6eb2]{background:#fbfbfb}.zhuige-goods-nav[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #eee}.zhuige-goods-scroll[data-v-1dba6eb2]{width:90%;white-space:nowrap}.zhuige-goods-scroll uni-view[data-v-1dba6eb2]{height:%?90?%;display:inline-flex;justify-content:center;align-items:center;-webkit-align-items:center;-webkit-box-align:center;line-height:%?90?%;padding:0 %?20?%;text-align:center}.zhuige-goods-scroll uni-view.active[data-v-1dba6eb2]{font-weight:600;font-size:%?32?%}.zhuige-goods-scroll uni-view.active[data-v-1dba6eb2]::after{position:absolute;content:"";width:%?30?%;height:%?6?%;margin-top:%?60?%;background:#333}.zhuige-goods-more[data-v-1dba6eb2]{width:10%}.zhuige-goods-list[data-v-1dba6eb2]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:%?30?%}.zhuige-goods[data-v-1dba6eb2]{width:49%;background:#fff;border-radius:%?12?%;margin-bottom:%?20?%}.zhuige-goods uni-image[data-v-1dba6eb2]{height:%?360?%;width:100%;border-radius:%?12?% %?12?% 0 0}.zhuige-goods-text[data-v-1dba6eb2]{padding:%?12?% %?20?%}.zhuige-goods-title[data-v-1dba6eb2]{max-height:3.4rem;overflow:hidden}.zhuige-goods-title uni-text[data-v-1dba6eb2]{font-size:%?28?%;font-weight:600;line-height:1.8rem}.zhuige-goods-title uni-text.mark[data-v-1dba6eb2]{line-height:1rem;padding:%?6?% %?10?%;font-size:%?18?%;font-weight:300;color:#fff;background:#f40;border-radius:%?4?%;margin-right:%?8?%;vertical-align:text-bottom}.zhuige-goods-price[data-v-1dba6eb2]{padding-top:%?10?%;display:flex;align-items:baseline}.zhuige-goods-price uni-view.promotion[data-v-1dba6eb2]{padding-right:%?12?%}.promotion uni-text[data-v-1dba6eb2]{color:#f42;font-size:%?36?%;font-weight:600}.promotion uni-text[data-v-1dba6eb2]:first-of-type{font-size:%?24?%;font-weight:200}.zhuige-goods-price uni-view.original uni-text[data-v-1dba6eb2]{font-size:%?26?%;text-decoration:line-through;font-weight:300;color:#666}\r\n/* -------- 提示 -------- */.zhuige-end-tips[data-v-1dba6eb2]{height:%?160?%;line-height:%?160?%;text-align:center;font-size:%?24?%;font-weight:200;color:#999}\r\n/* -------- 搜索 -------- */.zhuige-wide-search[data-v-1dba6eb2]{padding:%?60?% 0;display:flex;align-items:center;justify-content:space-between}.zhuige-wide-search .bar[data-v-1dba6eb2]{width:82%;padding:0 %?20?%;background:#f5f5f5;border:%?1?% solid #eee;border-radius:%?40?%;height:%?70?%;display:flex;align-items:center}.zhuige-wide-search .bar uni-input[data-v-1dba6eb2]{width:90%;margin-left:%?20?%}.zhuige-wide-search uni-text[data-v-1dba6eb2]{font-size:%?26?%;font-weight:300}.zhuige-search-list .zhuige-title[data-v-1dba6eb2]{padding:%?30?% 0 0}.zhuige-search-tags[data-v-1dba6eb2]{padding:%?30?% 0;display:flex;flex-wrap:wrap;align-items:center}.zhuige-search-tags uni-text[data-v-1dba6eb2]{height:1.8rem;line-height:1.8rem;font-size:%?24?%;font-weight:200;color:#666;border-radius:%?6?%;padding:0 %?28?%;border:%?1?% solid #ddd;margin:0 %?20?% %?20?% 0}.zhuige-search-tags uni-text.del[data-v-1dba6eb2]{border-color:#fff;color:#f40}.zhuige-none-tips[data-v-1dba6eb2]{text-align:center;padding:%?100?%}.zhuige-none-tips uni-image[data-v-1dba6eb2]{height:%?200?%;width:%?200?%;margin-bottom:%?30?%}.zhuige-none-tips uni-view[data-v-1dba6eb2]{font-size:%?24?%;font-weight:300;color:#999}\r\n/* -------- 商品详情 -------- */.zhuige-detail-img uni-swiper[data-v-1dba6eb2], .zhuige-detail-img uni-swiper-item[data-v-1dba6eb2], .zhuige-detail-img uni-image[data-v-1dba6eb2]{height:%?750?%;width:100%;overflow:hidden}.zhuige-detail-title[data-v-1dba6eb2]{padding:%?30?%}.zhuige-detail-title .goods-name[data-v-1dba6eb2]{padding-bottom:%?20?%;font-size:%?32?%;font-weight:600;line-height:1.8rem}.zhuige-detail-title .goods-intro[data-v-1dba6eb2]{padding-bottom:%?20?%;display:flex;align-items:center;border-bottom:%?1?% solid #ddd}.zhuige-detail-title .goods-intro uni-text[data-v-1dba6eb2]{font-size:%?24?%;font-weight:300;color:#666}.zhuige-detail-title .goods-intro uni-text.mark[data-v-1dba6eb2]{font-size:%?20?%;padding:%?2?% %?20?%;border-radius:%?6?%;color:#fff;background:#f40;margin-right:%?20?%}.zhuige-detail-title .goods-option[data-v-1dba6eb2], .zhuige-category-goods .goods-option[data-v-1dba6eb2]{padding-top:%?20?%;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center}.zhuige-detail-title .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(1), .zhuige-category-goods .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(1){font-size:%?18?%;margin-right:%?6?%;color:#f40}.zhuige-detail-title .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(2), .zhuige-category-goods .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(2){font-size:%?36?%;font-weight:600;color:#f40}.zhuige-detail-title .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(3), .zhuige-category-goods .goods-option .price uni-text[data-v-1dba6eb2]:nth-child(3){margin-left:%?20?%;font-size:%?28?%;font-weight:300;color:#666;text-decoration:line-through}.zhuige-detail-title .goods-option .numbers uni-text[data-v-1dba6eb2]:nth-child(1){font-size:%?28?%;color:#666;font-weight:200;padding-right:%?30?%;border-right:%?1?% solid #666}.zhuige-detail-title .goods-option .numbers uni-text[data-v-1dba6eb2]:nth-child(2){font-size:%?28?%;font-weight:200;color:#666;padding-left:%?30?%}.zhuige-category-goods .goods-add[data-v-1dba6eb2]{line-height:1rem}.zhuige-goods-detail[data-v-1dba6eb2]{padding:%?30?% %?30?% %?140?%;border-top:%?16?% solid #eee}.zhuige-goods-detail .goods-title[data-v-1dba6eb2]{font-size:%?36?%;font-weight:600;padding-bottom:%?20?%}.zhuige-goods-detail .goods-detail-view[data-v-1dba6eb2]{word-break:break-word}.zhuige-goods-detail .goods-detail-view uni-image[data-v-1dba6eb2]{max-width:100%}.zhuige-goods-bar[data-v-1dba6eb2]{position:fixed;display:flex;align-items:center;width:86%;margin:0 7%;bottom:%?40?%}.zhuige-goods-cart-btn[data-v-1dba6eb2]{position:relative}.zhuige-goods-cart-btn uni-view[data-v-1dba6eb2]{font-size:%?20?%;color:#fff;position:absolute;right:-8px;top:0;background:#f40;height:%?36?%;text-align:center;width:%?36?%;line-height:%?36?%;border-radius:50%}.zhuige-goods-cart-btn[data-v-1dba6eb2]{width:%?90?%;margin-right:%?20?%;height:%?90?%;line-height:%?90?%;border-radius:50%;text-align:center;background:#fff}.zhuige-goods-btn[data-v-1dba6eb2]{display:flex}.zhuige-goods-btn uni-view[data-v-1dba6eb2]{color:#fff;height:%?90?%;line-height:%?90?%}.zhuige-goods-btn uni-view[data-v-1dba6eb2]:nth-child(1){background:#000;font-size:%?32?%;padding:0 %?60?%;border-radius:%?60?% 0 0 %?60?%}.zhuige-goods-btn uni-view[data-v-1dba6eb2]:nth-child(2){background:#f40;font-size:%?32?%;padding:0 %?60?%;border-radius:0 %?60?% %?60?% 0}\r\n/* -------- 商品分类 -------- */.zhuige-category[data-v-1dba6eb2]{position:fixed;height:100%;display:flex;width:100%;flex-wrap:nowrap}.zhuige-category-nav[data-v-1dba6eb2]{width:30%;height:100%;background:#f7f7f7;overflow-y:scroll}.zhuige-category-nav uni-view[data-v-1dba6eb2]{height:4rem;line-height:4rem;padding-left:%?40?%;font-size:%?28?%;font-weight:300;position:relative}.zhuige-category-nav uni-view.active[data-v-1dba6eb2]{background:#fff;font-weight:600}.zhuige-category-nav uni-view.active[data-v-1dba6eb2]::after{content:"";position:absolute;border-color:inherit;width:4px;height:21px;top:20px;left:7px;background:#f40}.zhuige-category-list[data-v-1dba6eb2]{width:70%;height:100%;background:#fff;overflow-y:scroll}.zhuige-category-title[data-v-1dba6eb2]{font-size:%?28?%;font-weight:600;padding:%?40?% %?30?% 0}.zhuige-category-group[data-v-1dba6eb2]{padding:%?30?%}.zhuige-category-block[data-v-1dba6eb2]{display:flex;border-bottom:%?1?% solid #ddd;align-items:center;overflow:hidden;padding:%?20?% 0}.zhuige-category-block uni-image[data-v-1dba6eb2]{-webkit-box-flex:0;-webkit-flex:0 0 %?128?%;-ms-flex:0 0 %?128?%;flex:0 0 %?128?%;height:%?128?%;width:%?128?%;border-radius:%?4?%;margin-right:%?20?%}.zhuige-category-goods[data-v-1dba6eb2]{width:68%}.zhuige-category-goods .goods-name[data-v-1dba6eb2]{height:1rem;line-height:1rem;font-weight:600;word-break:keep-all;text-overflow:ellipsis;overflow:hidden}\r\n/* -------- 购物车 -------- */.zhuige-cart-opt[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:space-between;padding:%?40?% %?30?%;border-bottom:%?16?% solid #eee}.zhuige-cart-opt .num[data-v-1dba6eb2]{font-size:%?28?%;font-weight:300;color:#555}.zhuige-cart-opt .num uni-text[data-v-1dba6eb2]{color:#f40;font-weight:600;padding-left:%?10?%}.zhuige-cart-opt uni-view[data-v-1dba6eb2]:nth-child(2){color:#fff;font-size:%?22?%;font-weight:200;background:#f40;padding:%?5?% %?20?%;border-radius:%?4?%}.zhuige-cart-list[data-v-1dba6eb2]{padding:%?0?% %?30?%}.zhuige-cart-list-block[data-v-1dba6eb2]{display:flex;align-items:center;padding:%?30?% 0;border-bottom:%?1?% solid #ddd}.zhuige-cart-list-block[data-v-1dba6eb2]:last-of-type{border:none}.list-opt[data-v-1dba6eb2]{display:flex;align-items:center;-webkit-box-flex:0;-webkit-flex:0 0 %?200?%;-ms-flex:0 0 %?200?%;flex:0 0 %?200?%;height:%?128?%;width:%?200?%;border-radius:%?4?%;margin-right:%?20?%}.list-opt uni-image[data-v-1dba6eb2]{height:%?128?%;width:%?128?%;margin-left:%?10?%;border-radius:%?6?%}.list-info[data-v-1dba6eb2]{flex:1;overflow:hidden}.list-title[data-v-1dba6eb2]{font-size:%?28?%;font-weight:600;height:1rem;line-height:1rem;word-break:keep-all;text-overflow:ellipsis;overflow:hidden}.list-setup[data-v-1dba6eb2]{padding-top:%?10?%;display:flex;align-items:center;justify-content:space-between}.list-setup .list-setup-num[data-v-1dba6eb2]{color:#f40}.list-setup .list-setup-num uni-text[data-v-1dba6eb2]:nth-child(1){font-size:%?22?%}.list-setup .list-setup-num uni-text[data-v-1dba6eb2]:nth-child(2){font-size:%?36?%;font-weight:600;margin-left:%?8?%}.list-setup .list-setup-opt[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:space-between;height:%?50?%;line-height:%?50?%;border-radius:%?6?%;border:1px solid #ddd}.list-setup .list-setup-opt uni-text[data-v-1dba6eb2]{width:%?50?%;text-align:center}.list-setup .list-setup-opt uni-input[data-v-1dba6eb2]{width:%?60?%;text-align:center;height:%?50?%;border-left:1px solid #ddd;border-right:1px solid #ddd}.zhuige-cart-count[data-v-1dba6eb2]{position:fixed;bottom:0;display:flex;align-items:center;justify-content:space-between;padding:%?20?% 4% %?40?%;width:92%;background:#fafafa}.cart-check[data-v-1dba6eb2]{display:flex;align-items:center}.count-num[data-v-1dba6eb2]{font-size:%?26?%;margin-left:%?8?%}.cart-confirm[data-v-1dba6eb2]{display:flex;align-items:center}.cart-total[data-v-1dba6eb2]{color:#f40}.cart-total uni-text[data-v-1dba6eb2]:nth-child(1){font-size:%?22?%}.cart-total uni-text[data-v-1dba6eb2]:nth-child(2){font-size:%?36?%;font-weight:600;margin:0 %?20?% 0 %?8?%}.cart-btn[data-v-1dba6eb2]{height:%?68?%;line-height:%?68?%;padding:0 %?40?%;border-radius:%?68?%;background:#f40;color:#fff;font-size:%?26?%;font-weight:200}.cart-confirm .del[data-v-1dba6eb2]{background:#000}\r\n/* -------- 订单确认 -------- */.zhuige-address-set[data-v-1dba6eb2]{display:flex;align-items:center;padding:%?30?% 0}.address-icon[data-v-1dba6eb2]{width:10%;text-align:right}.address-info[data-v-1dba6eb2]{width:77%;margin-left:3%}.address-info uni-view[data-v-1dba6eb2]:nth-child(1){padding-bottom:%?6?%}.address-info uni-view:nth-child(1) uni-text[data-v-1dba6eb2]{font-size:%?28?%;font-weight:400;line-height:1.4rem;margin-right:%?20?%}.address-info uni-view[data-v-1dba6eb2]:nth-child(2){font-size:%?28?%;font-weight:200;line-height:1.4rem;color:#666}.address-more[data-v-1dba6eb2]{width:10%;text-align:center}.address-set-tips[data-v-1dba6eb2]{font-size:%?28?%;font-weight:200;line-height:1.4rem;padding-left:%?30?%}.zhuige-confirm-list[data-v-1dba6eb2]{border-bottom:%?16?% solid #eee;border-top:%?16?% solid #eee}.zhuige-order-list[data-v-1dba6eb2]{padding:0}.zhuige-order-list .list-opt uni-image[data-v-1dba6eb2], .zhuige-confirm-list .list-opt uni-image[data-v-1dba6eb2]{margin:0}.zhuige-confirm-list .list-opt[data-v-1dba6eb2], .zhuige-order-block .list-opt[data-v-1dba6eb2], .zhuige-order-list .list-opt[data-v-1dba6eb2]{flex:0 0 %?140?%;height:%?128?%;width:%?140?%}.zhuige-confirm-list .goods-confirm[data-v-1dba6eb2], .zhuige-order-list .goods-confirm[data-v-1dba6eb2]{display:flex}.zhuige-confirm-list .list-setup uni-view[data-v-1dba6eb2]:nth-child(2), .zhuige-order-list .list-setup uni-view[data-v-1dba6eb2]:nth-child(2){padding:%?8?% 0 0 %?20?%;color:#999}.zhuige-order-remark[data-v-1dba6eb2], .zhuige-order-pay-type[data-v-1dba6eb2]{padding:%?30?% %?30?% 0}.zhuige-order-pay-type[data-v-1dba6eb2]{min-height:%?320?%}.zhuige-order-remark .zhuige-title[data-v-1dba6eb2], .zhuige-order-pay-type .zhuige-title[data-v-1dba6eb2]{font-size:%?30?%;font-weight:500;padding:0 0 %?20?%}.zhuige-order-remark uni-textarea[data-v-1dba6eb2]{width:90%;height:%?200?%;padding:%?30?% 5%;border-radius:%?12?%;background:#f2f2f2}.pay-wechat[data-v-1dba6eb2]{display:flex;align-items:center;height:%?100?%;line-height:%?100?%;padding:0 5%;width:90%;background:#f5ffef;border-radius:%?12?%}.pay-wechat uni-text[data-v-1dba6eb2]{text-indent:%?12?%;font-size:%?30?%;font-weight:200}\r\n/* -------- 我的 -------- */.zhuige-user-login[data-v-1dba6eb2]{height:%?300?%;padding:%?100?% 0;text-align:center}.zhuige-user-login uni-image[data-v-1dba6eb2]{height:%?200?%;width:%?200?%;border-radius:50%}.zhuige-user-login uni-view[data-v-1dba6eb2]{padding:%?20?%;font-size:%?36?%;color:#fff;font-weight:500}.zhuige-icon-set[data-v-1dba6eb2]{display:flex;flex-wrap:nowrap;padding:%?30?% 0;border-bottom:%?16?% solid #eee}.zhuige-icon[data-v-1dba6eb2]{width:25%;text-align:center}.zhuige-icon uni-image[data-v-1dba6eb2]{height:%?72?%;width:%?72?%;margin-bottom:%?-8?%}.zhuige-icon uni-view[data-v-1dba6eb2]{font-size:%?26?%;font-weight:300;text-align:center}.zhuige-user-menu[data-v-1dba6eb2]{padding-bottom:%?100?%}.zhuige-user-opt[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:space-between;padding:%?10?% %?30?%;border-bottom:%?1?% solid #ddd;line-height:3rem}uni-button.zhuige-user-opt[data-v-1dba6eb2]{background:none;border-bottom:%?1?% solid #ddd}uni-button.zhuige-user-opt[data-v-1dba6eb2]::after{border:none;border-radius:0}.zhuige-user-opt-title[data-v-1dba6eb2]{display:flex;align-items:center}.zhuige-user-opt-title uni-view[data-v-1dba6eb2]{font-size:%?30?%;font-weight:400;color:#333;margin-right:%?20?%}\r\n/* -------- 订单详情 -------- */.zhuige-order-state[data-v-1dba6eb2]{padding:%?60?% %?30?% %?30?%;text-align:center}.zhuige-order-state uni-view[data-v-1dba6eb2]{height:%?120?%;line-height:%?120?%;border:%?1?% solid #ddd;border-radius:%?12?%;font-size:%?32?%;color:#f40;font-weight:600}.zhuige-order-data[data-v-1dba6eb2]{border-top:%?16?% solid #eee}.zhuige-order-data > uni-view[data-v-1dba6eb2]{padding:%?30?%;border-bottom:%?1?% solid #ddd;display:flex;align-items:center}.zhuige-order-data > uni-view[data-v-1dba6eb2]:last-of-type{border:none}.zhuige-order-data > uni-view uni-view[data-v-1dba6eb2]{font-size:%?28?%;font-weight:500;margin-right:%?10?%}.zhuige-order-data > uni-view uni-text[data-v-1dba6eb2]{font-size:%?28?%;font-weight:200;color:#999}.zhuige-order-data > uni-view uni-text.order-num[data-v-1dba6eb2]{font-size:%?30?%;color:#333;font-weight:300}.zhuige-order-data > uni-view.order-prix uni-text[data-v-1dba6eb2]:first-of-type{font-size:%?18?%;color:#f40;font-weight:200}.zhuige-order-data > uni-view.order-prix uni-text[data-v-1dba6eb2]:last-of-type{font-size:%?36?%;color:#f40;font-weight:600;margin-left:%?8?%}.zhuige-order-button[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:flex-end;padding:%?20?% %?30?% %?60?%;background:#fafafa}.zhuige-order-button uni-view[data-v-1dba6eb2], .zhuige-order-button uni-button[data-v-1dba6eb2]{height:%?68?%;line-height:%?68?%;padding:0 %?40?%;border-radius:%?68?%;font-size:%?26?%;font-weight:200;background:#fff;border:%?1?% solid #ddd;margin-left:%?30?%;margin-right:0}.zhuige-order-button uni-button[data-v-1dba6eb2]{height:%?72?%;line-height:%?72?%}.zhuige-order-button uni-view.confirm-btn[data-v-1dba6eb2]{color:#fff;background:#f40;width:%?200?%;padding:0;text-align:center;border:%?1?% solid #f40}.zhuige-order-button uni-button[data-v-1dba6eb2]::after{border:none}.zhuige-order-remark-info[data-v-1dba6eb2]{padding-bottom:%?30?%;line-height:1.8rem;color:#555;font-weight:200}\r\n/* -------- 订单详情 -------- */.zhuige-tab-nav[data-v-1dba6eb2]{position:fixed;z-index:99;width:100%;top:0;left:0;display:flex;flex-wrap:nowrap;align-items:center;border-bottom:%?1?% solid #ddd;background:#fff}.zhuige-tab-nav uni-view[data-v-1dba6eb2]{width:20%;height:%?120?%;line-height:%?120?%;text-align:center;position:relative}.zhuige-tab-nav uni-view uni-text[data-v-1dba6eb2]{font-size:%?26?%;font-weight:300;color:#555}.zhuige-tab-nav uni-view uni-text[data-v-1dba6eb2]:nth-child(2){padding-left:%?4?%}.zhuige-tab-nav uni-view.active uni-text[data-v-1dba6eb2]{color:0;font-weight:600}.zhuige-tab-nav uni-view.active[data-v-1dba6eb2]::before{content:"";position:absolute;width:%?40?%;margin-left:%?-20?%;left:50%;bottom:%?20?%;background:#333;height:2px}.zhuige-tab-box[data-v-1dba6eb2]{padding:%?120?% 0}.zhuige-order-block[data-v-1dba6eb2]{padding:%?20?% %?30?%;border-bottom:%?16?% solid #eee}.zhuige-order-block  .zhuige-cart-list-block[data-v-1dba6eb2]{padding:%?20?% 0}.zhuige-order-block-title[data-v-1dba6eb2], .zhuige-order-block-footer[data-v-1dba6eb2]{display:flex;align-items:center;justify-content:space-between}.zhuige-order-block-title uni-view[data-v-1dba6eb2]:first-of-type{font-size:%?28?%;font-weight:600}.zhuige-order-block-title uni-view[data-v-1dba6eb2]:nth-child(2){font-size:%?26?%;font-weight:300;position:relative}.zhuige-order-block-title uni-view[data-v-1dba6eb2]:nth-child(2)::after{content:" ";left:-10px;height:6px;top:9px;width:6px;border-radius:6px;position:absolute}.state-pay[data-v-1dba6eb2]{color:#f40}.state-pay[data-v-1dba6eb2]::after{background:#f40}.state-take[data-v-1dba6eb2]{color:#2c70db}.state-take[data-v-1dba6eb2]::after{background:#2c70db}.state-over[data-v-1dba6eb2]{color:#ff9024}\r\n/* .state-over::after {\r\n\t\t\t\tbackground: #FF9024;\r\n\t\t\t} */.state-cancel[data-v-1dba6eb2]{color:#bbb}\r\n/* .state-cancel::after {\r\n\t\t\t\tbackground: #BBBBBB;\r\n\t\t\t} */.zhuige-order-block-footer > uni-view[data-v-1dba6eb2]:first-of-type{font-size:%?26?%;color:#999;font-weight:300}.zhuige-order-block-footer-btn[data-v-1dba6eb2]{display:flex;font-size:%?24?%;font-weight:200}.zhuige-order-block-footer-btn uni-view[data-v-1dba6eb2], .zhuige-order-block-footer-btn uni-button[data-v-1dba6eb2]{height:%?60?%;line-height:%?60?%;margin-left:%?16?%;width:%?170?%;text-align:center;border-radius:%?60?%;border:%?1?% solid #ddd;background:none;font-size:%?24?%;font-weight:200}.zhuige-order-block-footer-btn uni-view.active[data-v-1dba6eb2]{color:#fff;background:#f40;border-color:#f40}.zhuige-order-block-footer-btn uni-button[data-v-1dba6eb2]::after{border:none}.zhuige-brand[data-v-1dba6eb2]{padding:%?60?% %?40?%;text-align:center;font-size:%?26?%;font-weight:300;color:#999}',""]),e.exports=t},4966:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=a(i("90e1")),o=a(i("20c8")),n=a(i("1c69")),r=a(i("4842")),b={data:function(){return this.order_id=void 0,{order:void 0}},onLoad:function(e){e.order_id?(this.order_id=e.order_id,this.loadData()):uni.reLaunch("/pages/index/index")},onPullDownRefresh:function(){this.loadData()},onShareAppMessage:function(){return{title:getApp().globalData.appDesc+"_"+getApp().globalData.appName,path:"pages/index/index"}},methods:{clickConfirm:function(){var e=this;uni.showModal({title:"提示",content:"请在收到货物后再确认",success:function(t){t.confirm&&r.default.post(n.default.ZHUIGE_SHOP_ORDER_CONFIRM,{order_id:e.order_id}).then((function(t){0==t.code?e.order.confirmtime=t.data.confirmtime:o.default.toast(t.msg)}),(function(e){console.log(e)}))}})},clickCancel:function(){var e=this;uni.showModal({title:"提示",content:"确定要取消订单吗？",success:function(t){t.confirm&&r.default.post(n.default.ZHUIGE_SHOP_ORDER_CANCEL,{order_id:e.order_id}).then((function(t){0==t.code?e.order.canceltime=t.data.canceltime:o.default.toast(t.msg)}),(function(e){console.log(e)}))}})},clickDelete:function(){var e=this;uni.showModal({title:"提示",content:"确定要删除订单吗？",success:function(t){t.confirm&&r.default.post(n.default.ZHUIGE_SHOP_ORDER_DELETE,{order_id:e.order_id}).then((function(e){0==e.code?d.default.navigateBack():o.default.toast(e.msg)}),(function(e){console.log(e)}))}})},clickPay:function(){r.default.post(n.default.ZHUIGE_SHOP_ORDER_PAY,{order_id:this.order_id}).then((function(e){0==e.code?o.default.toast("平台暂不支持"):o.default.toast(e.msg)}),(function(e){console.log(e)}))},loadData:function(){var e=this;r.default.post(n.default.ZHUIGE_SHOP_ORDER_DETAIL,{order_id:this.order_id}).then((function(t){0==t.code&&(e.order=t.data.order),uni.stopPullDownRefresh()}),(function(e){console.log(e)}))}}};t.default=b},"9e53":function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={uniIcons:i("8d6c").default},d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[e.order?[i("v-uni-view",{staticClass:"zhuige-order-state"},[e.order.confirmtime?i("v-uni-view",[e._v("已完成")]):e.order.canceltime?i("v-uni-view",[e._v("已取消")]):e.order.paytime?i("v-uni-view",[e._v("待收货")]):i("v-uni-view",[e._v("待付款")])],1),i("v-uni-view",{staticClass:"zhuige-address-set"},[i("v-uni-view",{staticClass:"address-icon"},[i("uni-icons",{attrs:{type:"location-filled",size:"24"}})],1),i("v-uni-view",{staticClass:"address-info"},[i("v-uni-view",[i("v-uni-text",[e._v(e._s(e.order.addressee))]),i("v-uni-text",[e._v(e._s(e.order.mobile))])],1),i("v-uni-view",[e._v(e._s(e.order.address))])],1)],1),e.order.goods_list&&e.order.goods_list.length>0?i("v-uni-view",{staticClass:"zhuige-cart-list zhuige-confirm-list"},e._l(e.order.goods_list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"zhuige-cart-list-block"},[i("v-uni-view",{staticClass:"list-opt"},[i("v-uni-image",{attrs:{src:t.thumb,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"list-info"},[i("v-uni-view",{staticClass:"list-title"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"list-setup"},[i("v-uni-view",{staticClass:"goods-confirm"},[i("v-uni-view",{staticClass:"list-setup-num"},[i("v-uni-text",[e._v("￥")]),i("v-uni-text",[e._v(e._s(t.price))])],1),i("v-uni-view",[i("uni-icons",{attrs:{type:"closeempty",size:"12",color:"#999999"}}),i("v-uni-text",[e._v(e._s(t.count))])],1)],1)],1)],1)],1)})),1):e._e(),i("v-uni-view",{staticClass:"zhuige-order-remark"},[i("v-uni-view",{staticClass:"zhuige-title"},[e._v("备注信息")]),i("v-uni-view",{staticClass:"zhuige-order-remark-info"},[e._v(e._s(e.order.remark?e.order.remark:"无"))])],1),i("v-uni-view",{staticClass:"zhuige-order-data"},[i("v-uni-view",[i("v-uni-view",[e._v("订单编号：")]),i("v-uni-text",{staticClass:"order-num"},[e._v(e._s(e.order.trade_no))])],1),i("v-uni-view",[i("v-uni-view",[e._v("下单时间：")]),i("v-uni-text",[e._v(e._s(e.order.createtime))])],1),i("v-uni-view",[i("v-uni-view",[e._v("支付方式：")]),i("v-uni-text",[e._v("微信支付")])],1),i("v-uni-view",[i("v-uni-view",[e._v("支付时间：")]),i("v-uni-text",[e._v(e._s(e.order.paytime?e.order.paytime:"未支付"))])],1),i("v-uni-view",{staticClass:"order-prix"},[i("v-uni-view",[e._v("实付金额：")]),i("v-uni-text",[e._v("￥")]),i("v-uni-text",[e._v(e._s(e.order.amount))])],1)],1),e.order.express_type&&e.order.express_no?i("v-uni-view",{staticClass:"zhuige-order-data"},[i("v-uni-view",[i("v-uni-view",[e._v("配送方式：")]),i("v-uni-text",[e._v(e._s(e.order.express_type))])],1),i("v-uni-view",[i("v-uni-view",[e._v("快递单号：")]),i("v-uni-text",[e._v(e._s(e.order.express_no))])],1)],1):e._e(),i("v-uni-view",{staticClass:"zhuige-order-button"},[e.order.paytime?[e.order.confirmtime?[i("v-uni-button",{attrs:{"open-type":"contact"}},[e._v("退换/售后")])]:[i("v-uni-button",{attrs:{"open-type":"contact"}},[e._v("申请退款")]),i("v-uni-view",{staticClass:"confirm-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickConfirm.apply(void 0,arguments)}}},[e._v("确认收货")])]]:[e.order.canceltime?[i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickDelete.apply(void 0,arguments)}}},[e._v("删除订单")])]:[i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickCancel.apply(void 0,arguments)}}},[e._v("取消订单")]),i("v-uni-view",{staticClass:"confirm-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickPay.apply(void 0,arguments)}}},[e._v("付款")])]]],2)]:e._e()],2)},o=[]},b891:function(e,t,i){"use strict";var a=i("db0b"),d=i.n(a);d.a},b96b:function(e,t,i){"use strict";i.r(t);var a=i("9e53"),d=i("d7bb");for(var o in d)"default"!==o&&function(e){i.d(t,e,(function(){return d[e]}))}(o);i("b891");var n,r=i("f0c5"),b=Object(r["a"])(d["default"],a["b"],a["c"],!1,null,"1dba6eb2",null,!1,a["a"],n);t["default"]=b.exports},d7bb:function(e,t,i){"use strict";i.r(t);var a=i("4966"),d=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=d.a},db0b:function(e,t,i){var a=i("19dc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var d=i("4f06").default;d("7eff5d84",a,!0,{sourceMap:!1,shadowMode:!1})}}]);