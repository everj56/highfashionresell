(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[2645],{79612:(e,t,n)=>{"use strict";n.d(t,{f:()=>o});var r=n(90071),s=n(17563),a=n(92819);function o(e,t){const n=(0,r.lX)(),o=n=>{const a="string"==typeof n?(0,r.cP)(n):n,o=(0,s.parse)(a.search?.substring(1))||{};return{...a,pathname:e.pathname,search:"?"+(0,s.stringify)({...o,path:a.pathname,...t})}};return{get length(){return n.length},get action(){return n.action},get location(){const e=(0,s.parse)(n.location.search.substring(1)),r=e.path||"/";return{...n.location,pathname:r,search:"?"+(0,s.stringify)((0,a.omit)(e,["path",Object.keys(t)]))}},createHref:e=>n.createHref(o(e)),push:(e,t)=>{n.push(o(e),t)},replace:(e,t)=>{n.replace(o(e),t)},go:(...e)=>n.go.apply(n,e),goBack:(...e)=>n.goBack.apply(n,e),goForward:(...e)=>n.goForward.apply(n,e),block:(...e)=>n.block.apply(n,e),listen(e){return n.listen((()=>{e(this.location,this.action)}))}}}},94798:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ProgressBarBeforeFill:()=>ye,ScanComponentPromo:()=>it,ScanIssueDetailColumn:()=>Ot,ScanIssueDetailContent:()=>Nt,ScanIssueText:()=>Rt,ScanResultActionButtons:()=>ft,SiteScanIssue:()=>Pt,SiteScanIssueActions:()=>jt,SiteScanIssuesFill:()=>he,SiteScanMutedIssuesFill:()=>Ee,store:()=>pe});var r={};n.r(r),n.d(r,{FAILED_ACTION:()=>j,FAILED_COMPONENT_SCAN:()=>T,FAILED_GROUP_SCAN:()=>z,FINISH_ACTION:()=>B,FINISH_COMPONENT_SCAN:()=>L,FINISH_SCAN:()=>M,RECEIVE_ISSUE:()=>G,REGISTER_COMPONENT:()=>A,REGISTER_COMPONENT_GROUP:()=>Z,START_ACTION:()=>D,START_COMPONENT_SCAN:()=>F,START_SCAN:()=>P,applyIssueAction:()=>R,registerScanComponent:()=>_,registerScanComponentGroup:()=>I,startScan:()=>k});var s={};n.r(s),n.d(s,{componentHasIssues:()=>Q,getComponentBySlug:()=>K,getCurrentScanComponent:()=>ae,getErrorForComponent:()=>ne,getErrors:()=>te,getIssue:()=>J,getIssueActions:()=>ce,getIssues:()=>X,getIssuesForComponent:()=>Y,getIssuesForComponentGroup:()=>ee,getPreviousScanComponent:()=>oe,getScanComponentStatus:()=>q,getScanComponents:()=>$,getScanGroup:()=>W,getUpcomingScanComponent:()=>ie,hasCompletedScan:()=>se,isApplyingAction:()=>le,isScanRunning:()=>re});var a=n(6293),o=n(25993),i=n.n(o),c=n(95122),l=n(16550),u=n(42236),m=n(12614),p=n(64893),d=n(3571),g=n(48015),h=n(25703),f=n(71930),E=n(87514),v=n.n(E),y=n(31511);const x="waiting",S="busy",w="done",b="failed";function _(e){return{type:A,args:e}}function I(e){return{type:Z,args:e}}const k=()=>async({select:e,dispatch:t})=>{t({type:P});const n=e.getScanComponents(),r={};for(let s=0;s<n.length;s++){const a=n[s];if(e.getScanComponentStatus(a.slug)===x){if(t({type:F,component:a.slug}),a.group){if(void 0===r[a.group])try{r[a.group]=await Promise.all([e.getScanGroup(a.group).execute(),H(2500)]).then((e=>e[0]))}catch(e){t(O(a.group,e));continue}else await H(2500);const n=r[a.group];Array.isArray(n)&&t(C(a.slug,n.filter((e=>e.component===a.slug))))}else try{const e=await Promise.all([a.execute(),H(2500)]).then((e=>e[0]));t(C(a.slug,e))}catch(e){t(N(a.slug,e))}s<n.length-1?await H(3750):await H(2e3)}}return t({type:M}),e.getIssues()};function C(e,t){return{type:L,component:e,issues:t}}function N(e,t){return{type:T,component:e,error:t}}function O(e,t){return{type:z,group:e,error:t}}const R=(e,t)=>async({dispatch:n,select:r})=>{const s=(0,y.Rg)(e,t);if(s){n({type:D,rel:t,issue:e});try{var a;const o=await v()({url:s,method:"POST"});n({type:B,rel:t,issue:e});const i=r.getComponentBySlug(e.component),c=r.getScanGroup(i.group),l=null!==(a=c?.transform?.(o))&&void 0!==a?a:o;return n({type:G,issue:l}),o}catch(r){return n({type:j,rel:t,issue:e,error:r}),r}}},A="REGISTER_COMPONENT",Z="REGISTER_COMPONENT_GROUP",F="START_SCAN_COMPONENT",T="FAILED_COMPONENT_SCAN",L="FINISH_COMPONENT_SCAN",z="FAILED_GROUP_SCAN",P="START_SCAN",M="FINISH_SCAN",D="START_ACTION",B="FINISH_ACTION",G="RECEIVE_ISSUE",j="FAILED_ACTION",H=e=>new Promise((t=>setTimeout(t,e)));var V=n(28306),U=n(92819);const $=(0,V.Z)((e=>(0,U.sortBy)(e.components,"priority")),(e=>[e.components]));function K(e,t){return e.components[t]}function W(e,t){return e.componentGroups[t]}function q(e,t){return e.componentStatus[t]||x}function X(e){return e.issues}function J(e,t){return e.bySelf[t]?.item}function Q(e,t){return e.issues.some((e=>e.component===t&&!e.muted))}const Y=(0,V.Z)(((e,t)=>e.issues.filter((e=>e.component===t))),(e=>[e.issues])),ee=(0,V.Z)(((e,t)=>e.issues.filter((n=>K(e,n.component)?.group===t))),(e=>[e.issues])),te=(0,V.Z)((e=>Object.values(e.componentErrors).concat(Object.values(e.groupErrors))),(e=>[e.componentErrors,e.groupErrors]));function ne(e,t){const n=e.components[t]?.group;return n?e.groupErrors[n]:e.componentErrors[t]}function re(e){return e.isRunning}function se(e){return!re(e)&&Object.keys(e.componentStatus).length>0}function ae(e){return(0,U.findKey)(e.componentStatus,(function(e){return e===S}))}function oe(e){const t=$(e),n=t.findLastIndex((t=>q(e,t.slug)===w||q(e,t.slug)===b));return t[n]?.slug}function ie(e){if(ae(e))return;const t=$(e),n=t.findIndex((t=>q(e,t.slug)===x));return t[n]?.slug}function ce(e,t){return(0,U.reduce)(t._links,((e,t,n)=>t.reduce(((e,t)=>t.title?(e.push({rel:n,title:t.title,isDestructive:t.isDestructive||!1,snackbar:t.snackbar||!1}),e):e),e)),[])}function le(e,t,n){return e.actions.includes(`${n}:${t.component}:${t.id}`)}const ue={components:{},componentGroups:{},componentStatus:{},componentErrors:{},groupErrors:{},issues:[],isRunning:!1,actions:[]},me=(0,g.createReduxStore)("ithemes-security/site-scan-ui",{actions:r,selectors:s,reducer:function(e=ue,t){switch(t.type){case A:return{...e,components:{...e.components,[t.args.slug]:t.args}};case Z:return{...e,componentGroups:{...e.componentGroups,[t.args.slug]:t.args}};case F:return{...e,componentStatus:{...e.componentStatus,[t.component]:S}};case T:return{...e,componentStatus:{...e.componentStatus,[t.component]:b},componentErrors:{...e.componentErrors,[t.component]:t.error}};case L:return{...e,componentStatus:{...e.componentStatus,[t.component]:w},issues:[...e.issues,...t.issues]};case z:return{...e,groupErrors:{...e.groupErrors,[t.group]:t.error},componentStatus:{...e.componentStatus,...e.componentGroups[t.group]?.components.reduce(((e,t)=>(e[t]=b,e)),{})||{}}};case P:return{...e,componentStatus:{},componentErrors:{},groupErrors:{},issues:[],isRunning:!0};case M:return{...e,isRunning:!1};case D:return{...e,actions:[...e.actions,`${t.rel}:${t.issue.component}:${t.issue.id}`]};case B:case j:return{...e,actions:e.actions.filter((e=>e!==`${t.rel}:${t.issue.component}:${t.issue.id}`))};case G:const n=e.issues.findIndex((e=>e.id===t.issue.id&&e.component===t.issue.component));if(-1===n)return{...e,issues:[...e.issues,t.issue]};const r=[...e.issues];return r.splice(n,1,t.issue),{...e,issues:r};default:return e}}});(0,g.register)(me);const pe=me;var de=n(47959),ge=n(9576);const{Fill:he,Slot:fe}=(0,p.createSlotFill)("SiteScanIssues"),{Fill:Ee,Slot:ve}=(0,p.createSlotFill)("SiteScanMutedIssues"),{Fill:ye,Slot:xe}=(0,p.createSlotFill)("ProgressBarBefore");var Se=n(60976),we=n(52117);const be=(0,we.Z)("div",{target:"edgf2if4"})({name:"1gcahmj",styles:"padding:1rem 1.5rem;border-radius:2px 2px 0 0"}),_e=(0,we.Z)("div",{target:"edgf2if3"})("border:1px solid ",(({theme:e})=>e.colors.border.normal),";margin-top:1.25rem;"),Ie=(0,we.Z)(f.xv,{target:"edgf2if2"})({name:"1cy4go1",styles:"width:15%"}),ke=(0,we.Z)(f.xv,{target:"edgf2if1"})("display:flex;justify-content:space-between;padding:0.875rem;text-transform:uppercase;background-color:",(({theme:e})=>e.colors.surface.tertiary),";border-top:1px solid ",(({theme:e})=>e.colors.border.normal),";border-bottom:1px solid ",(({theme:e})=>e.colors.border.normal),";"),Ce=(0,we.Z)(f.Tg,{target:"edgf2if0"})({name:"113otod",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.25rem;padding:2rem;max-width:1680px"});function Ne({hasIssues:e,type:t}){const{isScanRunning:n}=(0,g.useSelect)((e=>({isScanRunning:e(pe).isScanRunning()})),[]),r=(0,ge.useViewportMatch)("small","<"),s=(0,ge.useViewportMatch)("large");return(0,a.createElement)(_e,null,(0,a.createElement)(be,null,(0,a.createElement)(f.X6,{level:3,size:f.yH.LARGE,weight:600,text:(0,c.__)("Scan Results","better-wp-security")})),r?(0,a.createElement)(Oe,{hasIssues:e,isScanRunning:n,type:t}):(0,a.createElement)(Re,{hasIssues:e,isScanRunning:n,isLarge:s,type:t}))}function Oe({hasIssues:e,isScanRunning:t,type:n}){return(0,a.createElement)(React.Fragment,null,(0,a.createElement)(ke,null,(0,a.createElement)(f.xv,{textTransform:"uppercase",variant:f.rK.DARK,text:(0,c.__)("Type and Scan Info","better-wp-security")}),(0,a.createElement)(f.xv,{textTransform:"uppercase",variant:f.rK.DARK,text:(0,c.__)("Severity","better-wp-security")})),t||e?(0,a.createElement)(React.Fragment,null,"active"===n&&(0,a.createElement)(fe,null),"muted"===n&&(0,a.createElement)(ve,null)):(0,a.createElement)(Ae,null))}function Re({hasIssues:e,isScanRunning:t,isLarge:n,type:r}){return(0,a.createElement)("table",{className:"itsec-scan__table"},(0,a.createElement)("thead",null,n?(0,a.createElement)("tr",null,(0,a.createElement)(Ie,{as:"th",text:(0,c.__)("Type","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Scan Info","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Severity","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Action","better-wp-security"),align:"right"})):(0,a.createElement)("tr",null,(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Type","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Scan Info","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Severity","better-wp-security")}),(0,a.createElement)(f.xv,{as:"th",text:(0,c.__)("Action","better-wp-security"),align:"right"}))),t||e?(0,a.createElement)("tbody",null,"active"===r&&(0,a.createElement)(fe,null),"muted"===r&&(0,a.createElement)(ve,null)):(0,a.createElement)("tbody",null,(0,a.createElement)("tr",null,(0,a.createElement)("td",{colSpan:"6"},(0,a.createElement)(Ae,null)))))}function Ae(){const{startScan:e}=(0,g.useDispatch)(pe),{hasRunScan:t}=(0,g.useSelect)((e=>({hasRunScan:e(pe).hasCompletedScan()})),[]);return(0,a.createElement)(Ce,null,(0,a.createElement)(de.nU,{icon:(0,a.createElement)(Se.AE,null)}),(0,a.createElement)(f.xv,{variant:f.rK.DARK,weight:700,text:t?(0,c.__)("No scan results found!","better-wp-security"):(0,c.__)("Scan to find issues with your site’s security.","better-wp-security")}),(0,a.createElement)(f.zx,{onClick:()=>{e()},variant:"primary",text:(0,c.__)("Start Site Scan","better-wp-security")}))}function Ze({issues:e}){const{hasScanRun:t}=(0,g.useSelect)((e=>({hasScanRun:e(pe).hasCompletedScan()})),[]),n=e.filter((e=>!e.muted)).length,r=e.filter((e=>e.muted)).length,s=(0,a.useMemo)((()=>[{name:"scan-results",title:t?(0,c.sprintf)((0,c.__)("Scan Results (%d)","better-wp-security"),n):(0,c.__)("Scan Results","better-wp-security"),render:()=>(0,a.createElement)(Ne,{hasIssues:n>0,type:"active"})},{name:"ignored-results",title:t?(0,c.sprintf)((0,c.__)("Muted Results (%d)","better-wp-security"),r):(0,c.__)("Muted Results","better-wp-security"),render:()=>(0,a.createElement)(Ne,{hasIssues:r>0,type:"muted"})}]),[t,n,r]);return(0,a.createElement)(f.x4,{tabs:s},(({render:e})=>(0,a.createElement)(e,null)))}var Fe=n(31600),Te=n(70917),Le=n(14776);const ze=(0,a.createElement)(Le.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(Le.Path,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"}));var Pe=n(87329),Me=n(28184),De=n(65202);const Be=Te.F4`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;function Ge({status:e,hasIssues:t,isStep:n}){switch(e){case"upgrade":return(0,a.createElement)(Ye,{icon:ze,size:16,isStep:n});case x:return(0,a.createElement)(Xe,{isStep:n});case S:return(0,a.createElement)(Je,{isStep:n});case w:return t?(0,a.createElement)(et,{icon:Pe.Z,size:16,isStep:n}):(0,a.createElement)(tt,{icon:Me.Z,size:16,isStep:n});default:return(0,a.createElement)(nt,{icon:De.Z,size:16,isStep:n})}}function je(e,t,n,r,s="pro"){if("free"===s&&"left"===r){if(0===t)return"#333333";if(20===t)return""}else{if(0===t&&"left"===r)return"";if(t===n-1&&"right"===r)return""}switch(e){case x:return"#cecece";case"upgrade":return"#333333";default:return"#6817C5"}}const He=(0,we.Z)("div",{target:"e107mwd516"})({name:"146trfc",styles:"position:relative;display:flex;flex-direction:column;align-items:center;padding:0.5rem 0;overflow:auto"}),Ve=(0,we.Z)("div",{target:"e107mwd515"})("display:grid;grid-auto-columns:min-content;grid-auto-flow:column;margin:0 auto;opacity:1;animation:0.5s forwards;animation-name:",(({isComplete:e})=>e&&(0,Te.iv)(Be,";","")),";"),Ue=(0,we.Z)("div",{target:"e107mwd514"})("display:flex;flex-direction:column;align-items:center;gap:0.5rem;position:",(({isStep:e})=>e&&"absolute"),";left:",(({isStep:e})=>e&&"50%"),";transform:",(({isStep:e})=>e&&"translate(-50%, 0)"),";z-index:2;transition:opacity 1.25s ease-in-out .5s;opacity:",(({isStep:e})=>e&&"current"!==e?0:1),";animation:1.75s 1.75s forwards;animation-name:",(({isStep:e})=>"next"===e&&(0,Te.iv)(Be,";","")),";@media screen and (min-width: ",(({theme:e})=>e.breaks.small),"px){gap:1rem;}"),$e=(0,we.Z)("div",{target:"e107mwd513"})({name:"1qic15g",styles:"position:relative;height:120px"}),Ke=(0,we.Z)("div",{target:"e107mwd512"})("display:flex;align-items:center;align-self:stretch;position:relative;height:20px;@media screen and (min-width: ",(({theme:e})=>e.breaks.small),"px){height:40px;}"),We=(0,we.Z)("div",{target:"e107mwd511"})("background:",(({background:e})=>e),";border-top:",(({background:e})=>e&&"2px solid #F6F7F7"),";border-bottom:",(({background:e})=>e&&"2px solid #F6F7F7"),";min-width:50%;width:2rem;height:0.3rem;@media screen and (min-width: ",(({theme:e})=>e.breaks.small),"px){height:1rem;width:2.75rem;border-width:4px;}@media screen and (min-width: ",(({theme:e})=>e.breaks.xlarge),"px){width:3.5rem;}@media screen and (min-width: ",(({theme:e})=>e.breaks.wide),"px){width:4.0rem;}"),qe=({theme:e,isStep:t})=>(0,Te.iv)("position:",t?"static":"absolute","!important;left:calc(50%);transform:",!t&&"translate(-50%, 0)",";height:20px!important;width:20px!important;border:2px solid ",e.colors.surface.tertiary,";@media screen and (min-width: ",e.breaks.small,"px){left:calc(50%);height:40px!important;width:40px!important;border-width:6px;}",""),Xe=(0,we.Z)("div",{target:"e107mwd510"})(qe,";background:#cecece;border-radius:50%;border-color:",(({theme:e})=>e.colors.surface.primary),";"),Je=(0,we.Z)(p.Spinner,{target:"e107mwd59"})(qe,";color:",(({theme:e})=>e.colors.primary.darker20),"!important;background:white;border-radius:50%;margin:0!important;animation:ease-in 250ms;animation-name:",(({isStep:e})=>e&&(0,Te.iv)(Be,";","")),";"),Qe=(0,we.Z)(p.Icon,{shouldForwardProp:e=>"isStep"!==e,target:"e107mwd58"})(qe,";fill:white;border-radius:50%;animation:ease-in 250ms;animation-name:",(({isStep:e})=>e&&(0,Te.iv)(Be,";","")),";"),Ye=(0,we.Z)(Qe,{target:"e107mwd57"})("background:",(({theme:e})=>e.colors.surface.dark),";"),et=(0,we.Z)(Qe,{target:"e107mwd56"})({name:"17ktdlk",styles:"background:#FFC518"}),tt=(0,we.Z)(Qe,{target:"e107mwd55"})("background:",(({theme:e})=>e.colors.surface.primaryAccent),";"),nt=(0,we.Z)(Qe,{target:"e107mwd54"})({name:"rdog0l",styles:"background:#D63638"}),rt=(0,we.Z)("div",{target:"e107mwd53"})({name:"1musbqr",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:-0.5rem"}),st=(0,we.Z)("span",{target:"e107mwd52"})("content:' ';height:0;border:0.5rem solid transparent;border-bottom-color:",(({status:e,theme:t})=>"upgrade"===e?t.colors.surface.dark:t.colors.surface.primaryAccent),";"),at=(0,we.Z)(f.xv,{target:"e107mwd51"})("display:flex;text-align:center;justify-content:center;align-items:center;background:",(({status:e,theme:t})=>"upgrade"===e?t.colors.surface.dark:t.colors.surface.primaryAccent),";color:white;padding:0.5rem 0.875rem;width:56px;height:56px;border-radius:8px;font-size:11px;@media screen and (min-width: ",(({theme:e})=>e.breaks.small),"px){font-size:0.875rem;width:80px;}@media screen and (min-width: ",(({theme:e})=>e.breaks.xlarge),"px){width:104px;}"),ot=(0,we.Z)(f.zx,{target:"e107mwd50"})("border-radius:2px;padding:4px 2px;font-size:0.6875rem;&:hover{background:",(({theme:e})=>e.colors.surface.secondary),"!important;color:",(({theme:e})=>e.colors.text.accent),";}@media screen and (min-width: ",(({theme:e})=>e.breaks.medium),"px){font-size:",(({theme:e})=>e.sizes.text.normal),"rem;padding:0.5rem 0.875rem;}");function it({label:e,description:t,index:n}){const r="upgrade";return(0,a.createElement)(Ue,null,(0,a.createElement)(Ke,null,(0,a.createElement)(We,{background:je(r,n,50,"left","free")}),(0,a.createElement)(Ge,{status:r}),(0,a.createElement)(We,{background:je(r,n,50,"right","free")})),(0,a.createElement)(p.Tooltip,{text:t},(0,a.createElement)(rt,null,(0,a.createElement)(st,{status:r}),(0,a.createElement)(at,{status:r,text:e}))),(0,a.createElement)(ot,{variant:"tertiary",href:"https://go.solidwp.com/upgrade-to-solid-security-pro",target:"_blank",text:(0,c.__)("Unlock","better-wp-security")}))}function ct({slug:e,index:t,length:n,isStep:r,installType:s}){const{component:o,status:i,hasIssues:c}=(0,g.useSelect)((t=>({component:t(pe).getComponentBySlug(e),status:t(pe).getScanComponentStatus(e),hasIssues:t(pe).componentHasIssues(e)})),[e]);return(0,a.createElement)(Ue,{isStep:r},r?(0,a.createElement)(Ge,{isStep:r,status:i,hasIssues:c}):(0,a.createElement)(Ke,null,(0,a.createElement)(We,{background:je(i,t,n,"left",s)}),(0,a.createElement)(Ge,{status:i,hasIssues:c}),(0,a.createElement)(We,{background:je(i,t,n,"right",s)})),(0,a.createElement)(p.Tooltip,{text:o.description},(0,a.createElement)(rt,null,(0,a.createElement)(st,{status:i}),(0,a.createElement)(at,{status:i,text:o.label}))))}function lt({components:e,isComplete:t}){const{installType:n}=(0,g.useSelect)((e=>({installType:e(Fe.coreStore).getInstallType()})),[]);return(0,a.createElement)(Ve,{isComplete:t},(0,a.createElement)(xe,null),e.map(((t,r)=>(0,a.createElement)(ct,{key:t.slug,slug:t.slug,index:r,length:e.length,installType:n}))))}function ut(){const{currentStep:e,previousStep:t,nextStep:n}=(0,g.useSelect)((e=>({currentStep:e(pe).getCurrentScanComponent(),previousStep:e(pe).getPreviousScanComponent(),nextStep:e(pe).getUpcomingScanComponent()})),[]);return(0,a.createElement)($e,null,t&&(0,a.createElement)(ct,{slug:t,isStep:"previous",key:t}),e&&(0,a.createElement)(ct,{slug:e,isStep:"current",key:e}),n&&(0,a.createElement)(ct,{slug:n,isStep:"next",key:n}))}function mt({components:e}){const{isScanRunning:t,hasCompletedScan:n}=(0,g.useSelect)((e=>({isScanRunning:e(pe).isScanRunning(),hasCompletedScan:e(pe).hasCompletedScan()})),[]);return(0,a.createElement)(He,null,!t&&(0,a.createElement)(lt,{components:e,isComplete:n}),t&&(0,a.createElement)(ut,{components:e}))}const pt=(0,we.Z)(f.Tg,{target:"ebxa02v5"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),dt=(0,we.Z)("div",{target:"ebxa02v4"})("gap:",(({theme:{getSize:e}})=>e(1)),";width:100%;max-width:1680px;margin:0 auto 2rem;padding:",(({theme:{getSize:e}})=>`${e(1)} ${e(1.25)}`),";"),gt=(0,we.Z)("div",{target:"ebxa02v3"})("display:flex;justify-content:space-between;align-items:center;padding-bottom:",(({theme:{getSize:e}})=>e(1)),";"),ht=(0,we.Z)(f.Tg,{target:"ebxa02v2"})("display:flex;flex-direction:column;gap:",(({theme:{getSize:e}})=>`${e(2.5)} 0`),";padding:",(({theme:{getSize:e}})=>`${e(1)} ${e(1.25)}`),";"),ft=(0,we.Z)("div",{target:"ebxa02v1"})({name:"r2g86h",styles:"display:flex;align-items:center;gap:1rem"}),Et=(0,we.Z)(p.SnackbarList,{target:"ebxa02v0"})({name:"f3gyrr",styles:".components-snackbar{margin:0 auto;}.components-snackbar__content{position:relative;gap:1rem;align-items:center;}.components-snackbar .components-snackbar__content-with-icon{margin-left:0;}.components-snackbar .components-snackbar__icon{position:relative;left:0;top:0;}"});function vt({history:e}){const{startScan:t}=(0,g.useDispatch)(pe),{removeNotice:n}=(0,g.useDispatch)(h.store),{components:r,issues:s,snackbarNotices:o}=(0,g.useSelect)((e=>({components:e(pe).getScanComponents(),issues:e(pe).getIssues(),snackbarNotices:e(h.store).getNotices("ithemes-security")})),[]);return(0,a.createElement)(m.a,{theme:f.U1},(0,a.createElement)(l.F0,{history:e},(0,a.createElement)(u.Fz,{ReactRouterRoute:l.AW},(0,a.createElement)(pt,{className:"itsec-site-scan",variant:f.h1.UNDER_PAGE},(0,a.createElement)(p.SlotFillProvider,null,(0,a.createElement)(d.PluginArea,null),(0,a.createElement)(p.Popover.Slot,null),(0,a.createElement)(de.Qf,null),(0,a.createElement)(l.rs,null,(0,a.createElement)(dt,null,(0,a.createElement)(f.X6,{level:1,weight:f.fs.NORMAL,text:(0,c.__)("Site Scans","better-wp-security")}),(0,a.createElement)(gt,null,(0,a.createElement)(f.xv,{size:f.yH.SMALL,variant:f.rK.MUTED,text:(0,c.__)("Scan your site for security issues and find out how fix them.","better-wp-security")}),(0,a.createElement)(f.zx,{onClick:()=>{t()},variant:"primary",text:(0,c.__)("Start Site Scan","better-wp-security")})),(0,a.createElement)(ht,{variant:f.h1.PRIMARY},(0,a.createElement)("div",null,(0,a.createElement)(f.X6,{level:2,size:f.yH.LARGE,weight:600,text:(0,c.__)("Scan","better-wp-security")})),(0,a.createElement)(mt,{components:r}),(0,a.createElement)(Ze,{issues:s})))),(0,a.createElement)(Et,{notices:o,onRemove:e=>n(e,"ithemes-security")}))))))}var yt=n(79612),xt=n(96015),St=n(83904);function wt(e){switch(e){case"low":return"#B8E6BF";case"medium":return"#FFC518";case"high":return"#FFABAF";default:return"#D63638"}}function bt(e){switch(e){case"low":return(0,c.__)("Low","better-wp-security");case"medium":return(0,c.__)("Medium","better-wp-security");case"high":return(0,c.__)("High","better-wp-security");default:return(0,c.__)("Critical","better-wp-security")}}const _t=(0,we.Z)("div",{target:"ee9gv7n10"})({name:"1dt2p9p",styles:"display:grid;grid-column-gap:2rem;grid-template-columns:0.5fr 1fr;overflow-wrap:anywhere"}),It=(0,we.Z)(f.xv,{target:"ee9gv7n9"})("display:flex;justify-content:center;align-items:center;padding:0.125rem 0.5rem;width:min-content;min-width:4.5rem;background-color:",(({backgroundColor:e})=>e),";border-radius:2px;"),kt=(0,we.Z)("div",{target:"ee9gv7n8"})({name:"1xj2l20",styles:"display:flex;gap:2rem;flex-wrap:wrap;justify-content:space-between"}),Ct=(0,we.Z)(f.Tg,{target:"ee9gv7n7"})("display:",(({isExpanded:e})=>e?"table-row":"none"),";"),Nt=(0,we.Z)("div",{target:"ee9gv7n6"})({name:"w1xf4t",styles:"display:flex;flex-wrap:wrap;gap:2rem"}),Ot=(0,we.Z)("div",{target:"ee9gv7n5"})({name:"9ffgsy",styles:"display:flex;flex-direction:column;justify-content:space-between;max-width:70ch"}),Rt=(0,we.Z)(f.xv,{target:"ee9gv7n4"})({name:"aeppwa",styles:"line-height:1.3rem;margin-top:.4rem"}),At=(0,we.Z)("div",{target:"ee9gv7n3"})({name:"p2oy12",styles:"display:flex;flex-direction:column;gap:0.25rem"}),Zt=(0,we.Z)("td",{target:"ee9gv7n2"})({name:"2qga7i",styles:"text-align:right"}),Ft=(0,we.Z)("div",{target:"ee9gv7n1"})({name:"m9q4tf",styles:"display:grid;grid-template-columns:2fr 1fr 0.5fr;gap:1rem;overflow-wrap:anywhere;align-items:center;padding:1rem"}),Tt=(0,we.Z)(f.Tg,{target:"ee9gv7n0"})("display:",(({isExpanded:e})=>!e&&"none"),";padding:1rem;");function Lt({icon:e,issue:t,isLarge:n,children:r}){const{component:s}=(0,g.useSelect)((e=>({component:e(pe).getComponentBySlug(t.component)})),[t.component]),[o,i]=(0,a.useState)(!1);return(0,a.createElement)(React.Fragment,null,(0,a.createElement)("tr",null,n&&(0,a.createElement)(React.Fragment,null,(0,a.createElement)("td",null,(0,a.createElement)(f.xv,{icon:e,text:s.label})),(0,a.createElement)("td",null,(0,a.createElement)(_t,null,(0,a.createElement)(React.Fragment,null,(0,a.createElement)(f.xv,{weight:600,text:t.title}),t.description&&(0,a.createElement)(f.xv,{text:t.description})))),(0,a.createElement)("td",null,(0,a.createElement)(It,{weight:600,backgroundColor:wt(t.severity),text:bt(t.severity)}))),!n&&(0,a.createElement)(React.Fragment,null,(0,a.createElement)("td",{colSpan:"2"},(0,a.createElement)(At,null,(0,a.createElement)(f.xv,{icon:e,text:s.label}),(0,a.createElement)(React.Fragment,null,(0,a.createElement)(f.xv,{as:"p",weight:600,text:t.title}),t.description&&(0,a.createElement)(f.xv,{as:"p",text:t.description})))),(0,a.createElement)("td",null,(0,a.createElement)(It,{weight:600,backgroundColor:wt(t.severity),text:bt(t.severity)}))),(0,a.createElement)(Zt,null,(0,a.createElement)(f.zx,{"aria-controls":"solid-scan-result-"+t.component+"-"+t.id,"aria-expanded":o,icon:o?xt.Z:St.Z,iconPosition:"right",iconGap:0,onClick:()=>i(!o),variant:"tertiary",label:(0,c.__)("View Details","better-wp-security"),text:n&&(0,c.__)("View Details","better-wp-security")}))),(0,a.createElement)(Ct,{as:"tr",id:"solid-scan-result-"+t.component+"-"+t.id,isExpanded:o,variant:"tertiary"},(0,a.createElement)("td",{colSpan:n?5:4},(0,a.createElement)(kt,null,r))))}function zt({icon:e,issue:t,children:n}){const{component:r}=(0,g.useSelect)((e=>({component:e(pe).getComponentBySlug(t.component)})),[t.component]),[s,o]=(0,a.useState)(!1);return(0,a.createElement)(React.Fragment,null,(0,a.createElement)(Ft,null,(0,a.createElement)("div",null,(0,a.createElement)(f.xv,{icon:e,text:r.label}),(0,a.createElement)(React.Fragment,null,(0,a.createElement)(f.xv,{as:"p",weight:600,text:t.title}),t.description&&(0,a.createElement)(f.xv,{as:"p",text:t.description}))),(0,a.createElement)("div",null,(0,a.createElement)(It,{backgroundColor:wt(t.severity),weight:600,text:bt(t.severity)})),(0,a.createElement)(f.zx,{"aria-controls":"solid-scan-result-"+t.component+"-"+t.id,"aria-expanded":s,icon:s?xt.Z:St.Z,iconPosition:"right",onClick:()=>o(!s),variant:"tertiary"})),(0,a.createElement)(Tt,{variant:"tertiary",isExpanded:s},(0,a.createElement)(kt,{id:"solid-scan-result-"+t.component+"-"+t.id},n)))}function Pt({issue:e,icon:t,children:n}){const r=(0,ge.useViewportMatch)("small","<"),s=(0,ge.useViewportMatch)("large");return r?(0,a.createElement)(zt,{issue:e,icon:t,children:n}):(0,a.createElement)(Lt,{issue:e,icon:t,children:n,isLarge:s})}var Mt=n(11984);function Dt({action:e,isApplying:t,onApply:n,isDisabled:r}){return(0,a.createElement)(f.zx,{isBusy:t,onClick:n,variant:"ithemes-security:mute-vulnerability"===e.rel||"ithemes-security:mute-issue"===e.rel?"muted":"secondary",text:e.title,disabled:r})}function Bt({action:e,isApplying:t,onApply:n}){const r={title:(0,c.__)("Confirm your action","better-wp-security"),body:(0,c.__)("Are you sure you want to do this?","better-wp-security"),onContinue:n,continueText:e.title},[s,o]=(0,f.HW)(r);return(0,a.createElement)(React.Fragment,null,(0,a.createElement)(f.zx,{isDestructive:e.isDestructive,isBusy:t,onClick:s,text:e.title}),o)}function Gt({action:e,issue:t}){const{applyIssueAction:n}=(0,g.useDispatch)(pe),{createNotice:r}=(0,g.useDispatch)("core/notices"),{isApplying:s}=(0,g.useSelect)((n=>({isApplying:n(pe).isApplyingAction(t,e.rel)})),[e.rel,t]),[o,i]=(0,a.useState)(!1),c=async()=>{await n(t,e.rel),e.snackbar&&(r("success",e.snackbar,{type:"snackbar",context:"ithemes-security",icon:(0,a.createElement)(Mt.Z,{icon:Me.Z,fill:"#fff"})}),i(!0),setTimeout((function(){i(!1)}),5e3))};return e.isDestructive?(0,a.createElement)(Bt,{action:e,isApplying:s,onApply:c}):(0,a.createElement)(Dt,{action:e,isApplying:s,onApply:c,isDisabled:o})}function jt({issue:e,allowedActions:t}){const{actions:n}=(0,g.useSelect)((t=>({actions:t(pe).getIssueActions(e)})),[e]),r=t?n.filter((e=>t?.includes(e.rel))):n;return r?(0,a.createElement)(ft,null,r.map((t=>(0,a.createElement)(Gt,{key:t.rel,action:t,issue:e})))):null}n.p=window.itsecWebpackPublicPath,(0,c.setLocaleData)({"":{}},"ithemes-security-pro");const Ht=(0,yt.f)(document.location,{page:"itsec-site-scan"});i()((()=>{const e=document.getElementById("itsec-site-scan-root");(0,a.render)((0,a.createElement)(vt,{history:Ht}),e)}))},11984:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(6293);const s=function({icon:e,size:t=24,...n}){return(0,r.cloneElement)(e,{width:t,height:t,...n})}},82506:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(s.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"}))},32010:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(s.Path,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"}))},83904:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(s.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},96015:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(s.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},65202:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},67527:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.Path,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"}))},87329:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6293),s=n(14776);const a=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,r.createElement)(s.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},35800:function(e,t,n){!function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=n(t);function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var a={error:null},o=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state=a,t.resetErrorBoundary=function(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];null==t.props.onReset||(e=t.props).onReset.apply(e,r),t.reset()},t}var n,o;o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,s(n,o),t.getDerivedStateFromError=function(e){return{error:e}};var i=t.prototype;return i.reset=function(){this.setState(a)},i.componentDidCatch=function(e,t){var n,r;null==(n=(r=this.props).onError)||n.call(r,e,t)},i.componentDidUpdate=function(e,t){var n,r,s,a,o=this.state.error,i=this.props.resetKeys;null!==o&&null!==t.error&&(void 0===(s=e.resetKeys)&&(s=[]),void 0===(a=i)&&(a=[]),s.length!==a.length||s.some((function(e,t){return!Object.is(e,a[t])})))&&(null==(n=(r=this.props).onResetKeysChange)||n.call(r,e.resetKeys,i),this.reset())},i.render=function(){var e=this.state.error,t=this.props,n=t.fallbackRender,s=t.FallbackComponent,a=t.fallback;if(null!==e){var o={error:e,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(a))return a;if("function"==typeof n)return n(o);if(s)return r.createElement(s,o);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(r.Component);e.ErrorBoundary=o,e.useErrorHandler=function(e){var t=r.useState(null),n=t[0],s=t[1];if(null!=e)throw e;if(null!=n)throw n;return s},e.withErrorBoundary=function(e,t){var n=function(n){return r.createElement(o,t,r.createElement(e,n))},s=e.displayName||e.name||"Unknown";return n.displayName="withErrorBoundary("+s+")",n},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(99196))},62845:(e,t,n)=>{"use strict";n.d(t,{r8:()=>o});var r=n(99196);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const a=Symbol(),o=e=>((e,t)=>{const n=Object.keys(t);let o=t,i=null;const c={};n.forEach((e=>{c[e]=new Set}));const l=(t,n)=>n.type===a?n.r?n.r(t):n.e:e(t,n),u=(e,t)=>{const n=n=>{return s({},n,{[e]:(r=n[e],a=t,"function"==typeof a?a(r):a)});var r,a};if(i)i({type:a,r:n});else{o=n(o);const t=o[e];c[e].forEach((e=>e(t)))}},m=(e,t)=>{n.forEach((n=>{const r=t[n];e[n]!==r&&c[n].forEach((e=>e(r)))}))};return{useGlobalStateProvider:()=>{const[e,t]=(0,r.useReducer)(l,o);(0,r.useEffect)((()=>{if(i)throw new Error("Only one global state provider is allowed");return i=t,t({type:a,e:o}),()=>{i=null}}),[]);const n=(0,r.useRef)(e);m(n.current,e),n.current=e,(0,r.useEffect)((()=>{o=e}),[e])},useGlobalState:e=>{const[t,n]=(0,r.useState)(o[e]);return(0,r.useEffect)((()=>(c[e].add(n),n(o[e]),()=>{c[e].delete(n)})),[e]),[t,(0,r.useCallback)((t=>u(e,t)),[e])]},getGlobalState:e=>o[e],setGlobalState:u,getState:()=>o,setState:e=>{if(i)i({type:a,e});else{const t=o;o=e,m(t,o)}},dispatch:t=>{if(i)i(t);else{const n=o;o=e(o,t),m(n,o)}return t}}})(((e,t)=>e),e)},28306:(e,t,n)=>{"use strict";var r,s;function a(e){return[e]}function o(){var e={clear:function(){e.head=null}};return e}function i(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function c(e,t){var n,c;function l(){n=s?new WeakMap:o()}function u(){var n,r,s,a,o,l=arguments.length;for(a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];for(o=t.apply(null,a),(n=c(o)).isUniqueByDependants||(n.lastDependants&&!i(o,n.lastDependants,0)&&n.clear(),n.lastDependants=o),r=n.head;r;){if(i(r.args,a,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:e.apply(null,a)},a[0]=null,r.args=a,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return t||(t=a),c=s?function(e){var t,s,a,i,c,l=n,u=!0;for(t=0;t<e.length;t++){if(!(c=s=e[t])||"object"!=typeof c){u=!1;break}l.has(s)?l=l.get(s):(a=new WeakMap,l.set(s,a),l=a)}return l.has(r)||((i=o()).isUniqueByDependants=u,l.set(r,i)),l.get(r)}:function(){return n},u.getDependants=t,u.clear=l,l(),u}n.d(t,{Z:()=>c}),r={},s="undefined"!=typeof WeakMap},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},87514:e=>{e.exports=function(){return this.wp.apiFetch}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},25993:e=>{e.exports=function(){return this.wp.domReady}()},6293:e=>{e.exports=function(){return this.wp.element}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},25703:e=>{e.exports=function(){return this.wp.notices}()},3571:e=>{e.exports=function(){return this.wp.plugins}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React},91850:e=>{"use strict";e.exports=window.ReactDOM},92819:e=>{"use strict";e.exports=window.lodash},76292:e=>{"use strict";e.exports=window.moment}},e=>{e.O(0,[7271,1930,5307,5257,9071,1511,976,7959],(()=>(94798,e(e.s=94798))));var t=e.O();((window.itsec=window.itsec||{}).pages=window.itsec.pages||{})["site-scan"]=t}]);