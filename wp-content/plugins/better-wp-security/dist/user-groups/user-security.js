(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[6528],{78362:(e,t,s)=>{"use strict";s.r(t);var r=s(6293),n=s(3571),i=s(95122),o=s(48015),a=s(71930),l=s(30805),u=s(62470),c=s(87375),p=s(31600),d=s(52117),g=s(64893);const m=(0,d.Z)("div",{target:"e1f9t0q75"})({name:"damvy5",styles:"display:flex;gap:1rem"}),h=(0,d.Z)(g.Modal,{target:"e1f9t0q74"})({name:"9b2neq",styles:"max-width:766px;min-width:480px;.components-modal__content{padding:0;}.components-modal__header{padding:.5rem 1.5rem;}.components-modal__header-heading{font-size:1rem;}"}),f=(0,d.Z)("div",{target:"e1f9t0q73"})({name:"lsfn84",styles:"padding:.5rem 1.5rem"}),w=(0,d.Z)("div",{target:"e1f9t0q72"})({name:"wd4z5z",styles:"display:flex;gap:1rem;flex-direction:row;flex-wrap:wrap;padding:1.25rem 0 2rem 0"}),x=(0,d.Z)(a.xv,{target:"e1f9t0q71"})("background:",(({theme:e})=>e.colors.surface.secondary),";border-radius:25px;padding:.5rem;"),_=(0,d.Z)(a.zx,{target:"e1f9t0q70"})({name:"qc0g5u",styles:"margin:1rem 0 1.5rem 0"});function y(){const[e,t]=(0,r.useState)(!1),{matchables:s,queryParams:n}=(0,o.useSelect)((e=>({matchables:e(c.store).getMatchables(),queryParams:e(p.userSecurityStore).getQueryParams("main")||{}})),[]),u=s.filter((e=>"user-group"===e.type)).map((e=>({value:e.id,label:e.label,indeterminate:!1}))),d=n.solid_user_groups||[];return(0,r.createElement)(React.Fragment,null,(0,r.createElement)(l.EditingModalActionFill,null,(0,r.createElement)(l.EditingModalActionDropdown,{title:(0,i.__)("Add to a User Group","better-wp-security"),description:(0,i.__)("Add the selected users to new user groups.","better-wp-security"),dropdownTitle:(0,i.__)("Add to User Groups","better-wp-security"),dropdownButtonText:(0,i.__)("Add to User Groups","better-wp-security"),slug:"add-user-groups",options:u,confirmationText:(0,i.__)("Adding User Groups","better-wp-security")})),(0,r.createElement)(l.UserSecurityFilterFill,null,(0,r.createElement)(a.By,{slug:"solid_user_groups",title:(0,i.__)("User Groups","better-wp-security"),options:u})),(0,r.createElement)(l.UserSecurityActionsFill,null,(0,r.createElement)(m,null,(0,r.createElement)(a.zx,{text:(0,i.__)("Edit User Group Settings","better-wp-security"),onClick:()=>{t(!0)},disabled:0===d.length})),e&&(0,r.createElement)(E,{matchables:s,setIsOpen:t,selectedUserGroupIds:d})))}function E({matchables:e,setIsOpen:t,selectedUserGroupIds:s}){const n=(0,u.useSettingsDefinitions)(),{saveBulkEdits:a,saveGroupSettings:l}=(0,o.useDispatch)(u.store),{isSaving:p}=(0,o.useSelect)((e=>({isSaving:s.length>1?e(u.store).isSavingBulkEdits(s):e(c.store).isUpdatingSettings(s[0])})),[s]);if(!s)return null;const d=s.map((t=>e.find((e=>e.id===t))));return(0,r.createElement)(h,{title:(0,i.__)("Edit User Group Settings","better-wp-security"),className:"itsec-apply-css-vars",onRequestClose:()=>{t(!1)}},(0,r.createElement)(f,null,(0,r.createElement)(S,{selectedUserGroups:d}),(0,r.createElement)(u.SettingsForm,{definitions:n,settingComponent:s.length>1?u.BulkSettingField:u.SingleSettingField,groupIds:s.length>1?s:null,groupId:1===s.length?s[0]:null}),(0,r.createElement)(_,{text:(0,i.__)("Update User Group Settings","better-wp-security"),variant:"primary",onClick:async()=>{s.length>1?await a(s):await l(s[0]),t(!1)},align:"right",isBusy:p})))}function S({selectedUserGroups:e}){return(0,r.createElement)(React.Fragment,null,(0,r.createElement)(a.xv,{level:4,text:(0,i.__)("User groups selected","better-wp-security"),weight:a.fs.HEAVY,size:a.yH.NORMAL}),(0,r.createElement)(w,null,e.slice(0,10).map(((e,t)=>(0,r.createElement)(x,{text:e.label,weight:a.fs.HEAVY,key:t})))))}s.p=window.itsecWebpackPublicPath,(0,i.setLocaleData)({"":{}},"ithemes-security-pro"),(0,n.registerPlugin)("itsec-user-groups-user-security",{render:()=>(0,r.createElement)(y,null)})},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},30805:e=>{e.exports=function(){return this.itsec.pages["user-security"]}()},87375:e=>{e.exports=function(){return this.itsec["user-groups"].api}()},62470:e=>{e.exports=function(){return this.itsec["user-groups"].ui}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},6293:e=>{e.exports=function(){return this.wp.element}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},3571:e=>{e.exports=function(){return this.wp.plugins}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React}},e=>{e.O(0,[1930],(()=>(78362,e(e.s=78362))));var t=e.O();((window.itsec=window.itsec||{})["user-groups"]=window.itsec["user-groups"]||{})["user-security"]=t}]);