(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[6840],{27445:(t,e,n)=>{"use strict";n.r(e);var o=n(6293),i=n(3571),s=(n(97157),n(10906)),r=n(33632);n.p=window.itsecWebpackPublicPath,(0,i.registerPlugin)("itsec-admin-notices-dashboard-admin-bar",{render:()=>(0,o.createElement)(s.AdminBarFill,null,(0,o.createElement)(r.Z,null))})},33632:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var o=n(6293),i=n(64893),s=n(95122),r=n(48015),c=n(14776);const a=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));var u=n(3967);const p=(0,n(52117).Z)(i.ToolbarButton,{shouldForwardProp:t=>"noticesCount"!==t,target:"e17c85xw0"})("&::after{position:absolute;left:-6px;top:-6px;z-index:1;min-width:24px;padding:4px;font-size:11px;color:",(({theme:t})=>t.colors.text.white),";background:",(({theme:t})=>t.colors.primary.base),";border-radius:12px;content:'",(({noticesCount:t})=>t),"';opacity:",(({noticesCount:t})=>t?1:0),";transition:opacity 1000ms ease-in-out;}");function d(){const[t,e]=(0,o.useState)(!1),{notices:n,noticesLoaded:c}=(0,r.useSelect)((t=>({notices:t("ithemes-security/admin-notices").getNotices(),noticesLoaded:t("ithemes-security/admin-notices").areNoticesLoaded()})),[]);return(0,o.createElement)(React.Fragment,null,(0,o.createElement)(p,{"aria-expanded":t,onClick:()=>!t&&e(!0),icon:a,text:(0,s.__)("Alerts","better-wp-security"),noticesCount:n.length}),t&&(0,o.createElement)(i.Popover,{className:"itsec-admin-bar-admin-notices__content",expandOnMobile:!0,focusOnMount:"container",position:"bottom left",headerTitle:(0,s.__)("Notifications","better-wp-security"),onClose:()=>e(!1),onFocusOutside:()=>e(!1)},(0,o.createElement)(u.Z,{notices:n,loaded:c})))}},97157:t=>{t.exports=function(){return this.itsec.core["admin-notices-api"]}()},10906:t=>{t.exports=function(){return this.itsec.dashboard.api}()},31600:t=>{t.exports=function(){return this.itsec.packages.data}()},64893:t=>{t.exports=function(){return this.wp.components}()},9576:t=>{t.exports=function(){return this.wp.compose}()},48015:t=>{t.exports=function(){return this.wp.data}()},82521:t=>{t.exports=function(){return this.wp.date}()},6293:t=>{t.exports=function(){return this.wp.element}()},95122:t=>{t.exports=function(){return this.wp.i18n}()},81834:t=>{t.exports=function(){return this.wp.isShallowEqual}()},81019:t=>{t.exports=function(){return this.wp.keycodes}()},3571:t=>{t.exports=function(){return this.wp.plugins}()},14776:t=>{t.exports=function(){return this.wp.primitives}()},73470:t=>{t.exports=function(){return this.wp.url}()},99196:t=>{"use strict";t.exports=window.React},92819:t=>{"use strict";t.exports=window.lodash}},t=>{t.O(0,[7271,1930,5307,5257,1511,976,5813,6179,5896],(()=>(27445,t(t.s=27445))));var e=t.O();((window.itsec=window.itsec||{}).core=window.itsec.core||{})["admin-notices-dashboard-admin-bar"]=e}]);