(this["webpackJsonpmriya-resort"]=this["webpackJsonpmriya-resort"]||[]).push([[0],{21:function(e,s,i){},23:function(e,s,i){"use strict";i.r(s);var c=i(1),a=i.n(c),t=i(4),n=i.n(t),l=(i(22),i(2)),m=i(3),r=i.n(m),j=i(0);var o=function(e){var s=e.items,i=e.onClick,c=e.menuListSelect,t=e.mobile,n=e.db;return Object(j.jsx)("ul",{className:"modal-menu__main-menu",children:s.map((function(e,s){var m=Object(l.a)(e,2),o=m[0],_=m[1];return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("li",{className:r()("modal-menu__list modal-menu__main-menu-list",{"modal-menu__main-menu-list_select":c===_}),onClick:function(){return i(_)},children:o},"".concat(o,"_").concat(_)),t&&Object(j.jsx)("div",{className:r()("modal-menu__information-wrapper",{hidden:c!==_}),children:t&&c===_&&void 0!==n.items[s]&&n.items[s].links.map((function(e){return Object(j.jsx)("li",{className:"modal-menu__list modal-menu__information-menu-list",children:e},"".concat(_,"_").concat(s))}))})]})}))})};var _=function(e){var s=e.items,i=e.text;return Object(j.jsxs)("div",{className:"modal-menu__information-wrapper",children:[Object(j.jsx)("ul",{className:"menu modal-menu__information-menu",children:s.map((function(e,s){return Object(j.jsx)("li",{className:"modal-menu__list modal-menu__information-menu-list",children:e},"".concat(e,"_").concat(s))}))}),Object(j.jsx)("p",{className:"modal-menu__text",children:i})]})};var u=function(e){var s=e.items,i=e.sliderIndex,c=e.onClick;return Object(j.jsx)(a.a.Fragment,{children:s.map((function(e){return Object(j.jsx)("button",{className:r()("modal-menu__slider-trigger",{"modal-menu__slider-trigger_select":i===+e}),onClick:function(){return c(+e)}},e)}))})};var d=function(){var e=Object(c.useState)(1),s=Object(l.a)(e,2),i=s[0],a=s[1];return i>3?a(1):i<1&&a(3),Object(c.useEffect)((function(){var e=setInterval((function(){a((function(e){return e+1}))}),3e3);return function(){return clearInterval(e)}}),[]),Object(j.jsxs)("div",{className:"modal-menu__slider",children:[Object(j.jsxs)("div",{className:"modal-menu__slide",children:[Object(j.jsx)("img",{className:"modal-menu__slide-image",src:"./header-slider/".concat(i,".jpg"),alt:"#"}),Object(j.jsxs)("div",{className:"modal-menu__slide-info",children:[Object(j.jsx)("h2",{className:"modal-menu__slide-title",children:"\u0410\u043d\u0442\u0438\u0441\u0442\u0440\u0435\u0441\u0441"}),Object(j.jsx)("p",{className:"modal-menu__slide-text",children:"10-21 \u0434\u043d\u044f"}),Object(j.jsx)("button",{className:"modal-menu__slide-button",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]}),Object(j.jsx)("div",{className:"modal-menu__slider-triggers",children:Object(j.jsx)(u,{sliderIndex:i,onClick:function(e){a(e)},items:["1","2","3"]})})]})},b=i(7);var x=function(e){var s=e.logoImage,i=Object(c.useState)(window.screen.width),a=Object(l.a)(i,2),t=a[0],n=a[1],m=Object(c.useState)(!1),r=Object(l.a)(m,2),u=r[0],x=r[1],O=Object(c.useState)(!1),h=Object(l.a)(O,2),N=h[0],A=h[1],f=Object(c.useState)("medicine"),g=Object(l.a)(f,2),v=g[0],k=g[1];return Object(c.useEffect)((function(){return window.addEventListener("resize",(function(){n(window.screen.width)})),function(){return window.removeEventListener("resize",(function(){n(window.screen.width)}))}}),[]),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsxs)("header",{className:"header",children:[t>900?Object(j.jsx)("button",{className:"burger-menu",onClick:function(){return x(!0)}}):Object(j.jsx)("button",{className:"burger-menu",onClick:function(){return A(!0)}}),Object(j.jsx)("div",{className:"container header__container",children:Object(j.jsxs)("div",{className:"header__inner",children:[Object(j.jsxs)("ul",{className:"menu header__menu",children:[Object(j.jsx)("li",{className:"menu__list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435"})}),Object(j.jsx)("li",{className:"menu__list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0411\u043b\u043e\u0433"})}),Object(j.jsx)("li",{className:"menu__list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"FAQ"})}),Object(j.jsx)("li",{className:"menu__list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]}),Object(j.jsx)("div",{className:"logo header__logo",children:Object(j.jsx)("img",{className:"logo__image",src:s,alt:"#"})}),Object(j.jsxs)("div",{className:"languages",children:[Object(j.jsx)("button",{className:"languages__button languages__button_active",children:"ru"}),Object(j.jsx)("button",{className:"languages__button",children:"eng"})]}),Object(j.jsxs)("ul",{className:"menu header__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_white menu__list_login",children:Object(j.jsx)("a",{className:"menu__link menu__link_dashed",href:"#",children:"\u0412\u0445\u043e\u0434"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white",children:Object(j.jsx)("a",{className:"menu__link",href:"tel:8 800 500 6847",children:"8 800 500 6847"})})]})]})}),Object(j.jsx)("button",{className:"mobile-login"})]}),u&&Object(j.jsx)("div",{className:"modal-menu",children:Object(j.jsxs)("div",{className:"modal-menu__window",children:[Object(j.jsx)("header",{className:"header modal-menu__header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"header__inner",children:[Object(j.jsx)("div",{className:"logo modal-menu__logo",children:Object(j.jsx)("img",{className:"logo__image modal-menu__logo-image",src:s,alt:"#"})}),Object(j.jsxs)("ul",{className:"menu modal-menu__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0411\u043b\u043e\u0433"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"FAQ"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white menu__list_login modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_dashed",href:"#",children:"\u0412\u0445\u043e\u0434"})})]})]})})}),Object(j.jsx)("div",{className:"modal-menu__wrapper",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"modal-menu__inner",children:[Object(j.jsxs)("aside",{className:"social",children:[Object(j.jsx)("span",{className:"line social__line"}),Object(j.jsxs)("ul",{className:"menu social__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_facebook_colored social__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_twitter_colored social__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_instagram_colored social__menu-link",href:"#"})})]})]}),Object(j.jsxs)("main",{className:"modal-menu__main",children:[Object(j.jsx)(o,{menuListSelect:v,onClick:function(e){return k(e)},items:[["\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435","placement"],["\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430","medicine"],["\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f","activity"],["\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435","beauty"],["\u0411\u0430\u0440\u044b \u0438 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b","bars"],["\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f","entertainment"],["\u0421\u043f\u043e\u0440\u0442","sport"],["\u0414\u0435\u0442\u044f\u043c","children"],["\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","transport"]]}),Object(j.jsx)("div",{className:"modal-menu__information",children:b.items.map((function(e,s){return v!==e.category?"":Object(j.jsx)(_,{items:e.links,text:e.info},"".concat(e,"_").concat(s))}))}),Object(j.jsx)(d,{})]}),Object(j.jsx)("div",{className:"modal-menu__mail",children:Object(j.jsx)("a",{className:"modal-menu__mail-link",href:"mailto:info@mriyaresort.com",children:"info@mriyaresort.com"})})]})})}),Object(j.jsx)("button",{className:"modal-menu__button modal-menu__button-close",onClick:function(){return x(!1)}})]})}),N&&Object(j.jsx)("div",{className:"modal-menu modal-menu_mobile",children:Object(j.jsxs)("div",{className:"modal-menu__window",children:[Object(j.jsxs)("header",{className:"header modal-menu__header",children:[Object(j.jsx)("button",{className:"modal-menu__button modal-menu__button-language",children:"RU"}),Object(j.jsx)("div",{className:"logo modal-menu__logo modal-menu__logo_mobile",children:Object(j.jsx)("img",{className:"logo__image modal-menu__logo-image",src:s,alt:"#"})}),Object(j.jsx)("button",{className:"modal-menu__button modal-menu__button-close modal-menu__button-close_mobile",onClick:function(){return A(!1)}})]}),Object(j.jsxs)("div",{className:"modal-menu__wrapper",children:[Object(j.jsxs)("main",{className:"modal-menu__main",children:[Object(j.jsx)(o,{mobile:!0,db:b,menuListSelect:v,onClick:function(e){return k(e)},items:[["\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435","placement"],["\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430","medicine"],["\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f","activity"],["\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435","beauty"],["\u0411\u0430\u0440\u044b \u0438 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b","bars"],["\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f","entertainment"],["\u0421\u043f\u043e\u0440\u0442","sport"],["\u0414\u0435\u0442\u044f\u043c","children"],["\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","transport"]]}),Object(j.jsx)("button",{className:"modal-menu__wrapper-button",children:"\u041d\u0430\u0439\u0442\u0438 \u043d\u043e\u043c\u0435\u0440"}),Object(j.jsxs)("ul",{className:"menu modal-menu__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0411\u043b\u043e\u0433"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"FAQ"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0410\u0444\u0438\u0448\u0430"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0421\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u0412\u0430\u0436\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object(j.jsx)("li",{className:"menu__list menu__list_white modal-menu__menu-list",children:Object(j.jsx)("a",{className:"menu__link",href:"#",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]}),Object(j.jsx)("div",{className:"social",children:Object(j.jsxs)("ul",{className:"menu social__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_facebook_colored social__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_twitter_colored social__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle social__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_instagram_colored social__menu-link",href:"#"})})]})}),Object(j.jsx)("p",{className:"modal-menu__main-text",children:"8 800 500 6847"})]}),Object(j.jsx)("div",{className:"modal-menu__mail",children:Object(j.jsx)("a",{className:"modal-menu__mail-link",href:"mailto:info@mriyaresort.com",children:"info@mriyaresort.com"})})]})]})})]})},O=i.p+"static/media/flower.d070afc4.png",h=i.p+"static/media/mobile-flower.863e53ab.png";var N=function(){return Object(j.jsx)("section",{className:"first-frame",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"first-frame__inner",children:[Object(j.jsxs)("div",{className:"first-frame__info",children:[Object(j.jsx)("h2",{className:"first-frame__heading",children:"Family & Health Club"}),Object(j.jsxs)("h1",{className:"first-frame__title",children:["Mriya",Object(j.jsx)("br",{}),"Resort"]}),Object(j.jsx)("p",{className:"first-frame__text",children:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u043a\u0443\u0440\u043e\u0440\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0439 \u0441\u0435\u043c\u044c\u0438 \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u0447\u0435\u0440\u043d\u043e\u0433\u043e \u043c\u043e\u0440\u044f"})]}),Object(j.jsxs)("div",{className:"first-frame__buttons",children:[Object(j.jsxs)("div",{className:"first-frame__buttons-wrapper",children:[Object(j.jsx)("button",{className:"first-frame__button first-frame__button_colored",children:"\u041d\u0430\u0439\u0442\u0438 \u043d\u043e\u043c\u0435\u0440"}),Object(j.jsx)("button",{className:"first-frame__button",children:"3D \u0442\u0443\u0440"})]}),Object(j.jsx)("span",{className:"line first-frame__line"}),Object(j.jsx)("button",{className:"first-frame__button first-frame__button_arrow_down"})]}),Object(j.jsxs)("ul",{className:"menu first-frame__menu",children:[Object(j.jsx)("li",{className:"menu__list menu__list_circle first-frame__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_facebook first-frame__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle first-frame__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_twitter first-frame__menu-link",href:"#"})}),Object(j.jsx)("li",{className:"menu__list menu__list_circle first-frame__menu-list",children:Object(j.jsx)("a",{className:"menu__link menu__link_instagram first-frame__menu-link",href:"#"})})]}),Object(j.jsx)("div",{className:"weather",children:Object(j.jsxs)("div",{className:"weather__inner",children:[Object(j.jsx)("h2",{className:"weather__degrees",children:"27\xb0"}),Object(j.jsx)("p",{className:"weather__expect",children:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e"}),Object(j.jsx)("p",{className:"weather__metadata",children:"\u042f\u043b\u0442\u0430, \u0420\u043e\u0441\u0441\u0438\u044f"})]})}),Object(j.jsx)("img",{className:"first-frame__image",src:O,alt:"#"}),Object(j.jsx)("img",{className:"first-frame__image_mobile",src:h,alt:"#"})]})})})};var A=function(e){var s=e.imagePath,i=e.discount,c=e.text;return Object(j.jsxs)("div",{className:r()("specification__item",{specification__item_without_title:!i}),children:[Object(j.jsx)("img",{className:"specification__item-image",src:s,alt:"#"}),Object(j.jsxs)("div",{className:"specification__item-information",children:[i&&Object(j.jsx)("h2",{className:"specification__item-discount",children:i}),Object(j.jsx)("p",{className:"specification__item-text",children:c})]})]})},f=i(9);var g=function(e){var s=e.items,i=e.onClick,c=e.menuListState;return Object(j.jsx)("ul",{className:"menu",children:s.map((function(e,s){return Object(j.jsx)("li",{className:r()("menu__list specification__menu-list",{"specification__menu-list_active":c===s}),onClick:function(){return i(s)},children:e},"".concat(s,"_").concat(e))}))})};var v=function(){var e=Object(c.useState)(0),s=Object(l.a)(e,2),i=s[0],a=s[1];return i>2?a(0):i<0&&a(2),Object(j.jsx)("section",{className:"choose",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"choose__inner",children:[Object(j.jsx)("h2",{className:"choose__title",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043e\u0442\u0434\u044b\u0445"}),Object(j.jsxs)("form",{className:"choose__form",name:"choose__form",action:"#",children:[Object(j.jsx)("select",{className:"choose__form-input choose__form-select",name:"",id:"",children:Object(j.jsx)("option",{className:"choose__form-option",value:"Family vacation",children:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u043e\u0442\u0434\u044b\u0445"})}),Object(j.jsx)("div",{className:"choose__form-input",children:Object(j.jsx)("p",{className:"choose__form-text",children:"\u043f\u0442, 8 \u043c\u0430\u044f \u2014 \u0432\u0441, 17 \u043c\u0430\u044f"})}),Object(j.jsx)("div",{className:"choose__form-input",children:Object(j.jsx)("p",{className:"choose__form-text",children:"2 \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445  \u2022  \u0431\u0435\u0437 \u0434\u0435\u0442\u0435\u0439  \u2022  1 \u043d\u043e\u043c\u0435\u0440"})}),Object(j.jsx)("button",{className:"choose__form-button",type:"submit",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(j.jsxs)("div",{className:"specification",children:[Object(j.jsxs)("div",{className:"specification__categories",children:[Object(j.jsx)(g,{onClick:function(e){return a(e)},menuListState:i,items:["\u0421\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f","\u0410\u0444\u0438\u0448\u0430","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043e\u0442\u0434\u044b\u0445\u0430"]}),Object(j.jsxs)("div",{className:"specification__buttons",children:[Object(j.jsx)("button",{className:"specification__button specification__button_left_arrow",onClick:function(){return a(i-1)}}),Object(j.jsx)("button",{className:"specification__button specification__button_right_arrow",onClick:function(){return a(i+1)}})]})]}),Object(j.jsx)("div",{className:"specification__content",children:Object(j.jsx)("div",{className:"specification__wrapper",children:f.cards.map((function(e,s){return i!==e.category?"":Object(j.jsx)(A,{imagePath:e.image,discount:e.discount,text:e.text},"".concat(e,"_").concat(s))}))})})]})]})})})};var k=function(){return Object(j.jsx)("section",{className:"information",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"information__inner",children:[Object(j.jsxs)("h2",{className:"information__title",children:["Mriya Resort & SPA \u2014",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"information__title information__title_bold",children:"\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0434\u044b\u0445"})]}),Object(j.jsx)("div",{className:"information__icon"}),Object(j.jsx)("div",{className:"information__wrapper",children:Object(j.jsx)("p",{className:"information__text",children:"\u0412 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043b\u0430\u043d\u0434\u0448\u0430\u0444\u0442\u0430 \u043a\u0443\u0440\u043e\u0440\u0442 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c. \u042d\u0442\u043e \u043c\u0435\u0441\u0442\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0433\u043e\u0440 \u043b\u044e\u0431\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0440\u0435."})}),Object(j.jsx)("button",{className:"information__button",children:"\u041e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435"})]})})})},p=i.p+"static/media/allinclusive-slide.9c0c3de7.jpg",S=i.p+"static/media/allinclusive-slide3.a41807d3.jpg";var V=function(e){var s=e.items,i=e.slideIndex,c=e.mobileSlideImage;return Object(j.jsx)(a.a.Fragment,{children:s.map((function(e){return i===+e.id&&Object(j.jsxs)("div",{className:"allinclusive__slide",children:[Object(j.jsxs)("div",{className:"allinclusive__slide-item",children:[Object(j.jsx)("img",{className:"allinclusive__item-image",src:p,alt:"#"}),Object(j.jsx)("p",{className:"allinclusive__item-text",children:"\u0417\u0430\u043d\u0438\u043c\u0430\u0442\u0435\u0441\u044c \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u043e\u043c \u0437\u0430\u043b\u0435 \u0438 \u043f\u043e\u0441\u0435\u0449\u0430\u0439\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(j.jsx)("a",{className:"allinclusive__item-link",href:"#",children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]}),Object(j.jsxs)("div",{className:"allinclusive__slide-wrapper",children:[Object(j.jsx)("p",{className:"allinclusive__slide-wrapper-subtitle",children:"\u041e\u0437\u0434\u043e\u0440\u043e\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(j.jsx)("p",{className:"allinclusive__slide-wrapper-title",children:"Mriya Resort \u2014 \u044d\u0442\u043e \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0433\u043e\u0440\u043e\u0434 \u0441\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u043a\u0430\u0436\u0434\u044b\u0439 \u043d\u0430\u0439\u0434\u0435\u0442 \u0441\u0435\u0431\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u0435 \u043f\u043e \u0432\u043a\u0443\u0441\u0443"}),Object(j.jsxs)("div",{className:"allinclusive__slide-item",children:[Object(j.jsx)("img",{className:"allinclusive__item-image",src:"data:image/jpeg;base64,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",alt:"#"}),Object(j.jsx)("p",{className:"allinclusive__item-text",children:"\u041f\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0435 \u0448\u0432\u0435\u0434\u0441\u043a\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0443"}),Object(j.jsx)("a",{className:"allinclusive__item-link",href:"#",children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]}),e.imageNum>2&&Object(j.jsxs)("div",{className:"allinclusive__slide-item allinclusive__slide-item_colored",children:[Object(j.jsx)("img",{className:"allinclusive__item-image",src:S,alt:"#"}),Object(j.jsx)("img",{className:"allinclusive__item-image_mobile",src:c,alt:"#"}),Object(j.jsx)("p",{className:"allinclusive__item-text",children:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0437\u043e\u043d\u044b \u0438 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430"}),Object(j.jsx)("a",{className:"allinclusive__item-link",href:"#",children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]},e)}))})};var y=function(e){var s=e.mobileSlideImage,i=Object(c.useState)(1),a=Object(l.a)(i,2),t=a[0],n=a[1];return t>2?n(1):t<1&&n(2),Object(j.jsx)("section",{className:"allinclusive",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"allinclusive__inner",children:[Object(j.jsxs)("div",{className:"allinclusive__wrapper",children:[Object(j.jsx)("h2",{className:"allinclusive__title",children:"\u0412\u0441\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e"}),Object(j.jsxs)("div",{className:"allinclusive__triggers",children:[Object(j.jsx)("button",{className:"allinclusive__button allinclusive__button_left",onClick:function(){return n(t-1)}}),Object(j.jsx)("button",{className:"allinclusive__button allinclusive__button_right",onClick:function(){return n(t+1)}})]})]}),Object(j.jsx)("div",{className:"allinclusive__slider",children:Object(j.jsx)(V,{mobileSlideImage:s,slideIndex:t,items:[{id:1,imageNum:"3"},{id:2,imageNum:"2"}]})})]})})})},E=i.p+"static/media/logo.33b1f9f7.svg",w=i.p+"static/media/1.d8cb1e89.jpg",U=i.p+"static/media/tablet.80e531fc.png";var C=function(){return Object(j.jsxs)("div",{className:"main-page",children:[Object(j.jsx)(x,{logoImage:E}),Object(j.jsx)(N,{}),Object(j.jsx)(v,{cardImage:w}),Object(j.jsx)(k,{}),Object(j.jsx)(y,{mobileSlideImage:w}),Object(j.jsxs)("section",{className:"tablet",children:[Object(j.jsx)("img",{className:"tablet__image",src:U,alt:"#"}),Object(j.jsx)("div",{className:"logo tablet__logo",children:Object(j.jsx)("img",{className:"logo__image tablet__logo-image",src:E,alt:"#"})})]})]})};i(21);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"items":[{"id":0,"links":["test","test"],"info":"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0438 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0445 \u043a\u0443\u0440\u043e\u0440\u0442\u043e\u0432 \u043c\u0438\u0440\u0430 Mriya Resort & SPA 5*%","category":"placement"},{"id":1,"links":["\u041a\u043b\u0438\u043d\u0438\u043a\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b","\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440"],"info":"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0438 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0445 \u043a\u0443\u0440\u043e\u0440\u0442\u043e\u0432 \u043c\u0438\u0440\u0430 Mriya Resort & SPA 5*","category":"medicine"}]}')},9:function(e){e.exports=JSON.parse('{"cards":[{"id":0,"image":"./cards/1.jpg","discount":"-20%","text":"\u0414\u043b\u044f \u0442\u0435\u0445 \u043a\u0442\u043e \u0440\u044f\u0434\u043e\u043c","category":0},{"id":1,"image":"./cards/2.jpg","discount":"-10%","text":"\u0420\u0430\u043d\u043d\u0435\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","category":0},{"id":2,"image":"./cards/3.jpg","text":"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u043e\u0442\u0434\u044b\u0445","category":2},{"id":3,"image":"./cards/4.jpg","text":"\u041e\u0437\u0434\u043e\u0440\u043e\u0432\u043b\u0435\u043d\u0438\u0435","category":2},{"id":4,"image":"./cards/5.jpg","text":"\u0420\u0435\u043b\u0430\u043a\u0441 \u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u0430","category":2},{"id":5,"image":"./cards/6.jpg","text":"\u041d\u043e\u0432\u044b\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f","category":2}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.47ddb2a5.chunk.js.map