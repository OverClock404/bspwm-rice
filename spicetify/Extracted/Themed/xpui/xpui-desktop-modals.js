"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7994],{62721:(e,n,s)=>{s.d(n,{AboutSpotifyModal:()=>A});var a=s(59496),t=s(90839),i=s(94),o=s(76282),l=s(63840),c=s(36546),r=s(69406),d=s(84070),u=s(9364);const g="hbpwhf54ljdKrhNTq4mA";var p=s(4637);const m=()=>{const e=(0,a.useContext)(r.z),n=(0,d.g)(),s=(0,a.useCallback)((()=>{e.prepareUpdate()}),[e]),t=(0,a.useCallback)((()=>{e.applyUpdate()}),[e]);switch(n?.state){case u.J.UPDATE_AVAILABLE:return(0,p.jsxs)("div",{children:[l.ag.get("about.upgrade.pending",n.version)," ",(0,p.jsx)("button",{className:g,onClick:s,children:l.ag.get("about.upgrade.pending_link")})]});case u.J.UPDATE_PROCESSING:return(0,p.jsx)("div",{children:l.ag.get("about.upgrade.downloading")});case u.J.UPDATE_READY:return(0,p.jsxs)("div",{children:[l.ag.get("about.upgrade.downloaded",n.version)," ",(0,p.jsx)("button",{className:g,onClick:t,children:l.ag.get("about.upgrade.restart_link")})]});case u.J.UPDATE_NONE:default:return null}};var h=s(90491),v=s(41090);const j="qi0hX8uXrbQyS6tvdDBt",x="WomzHWnDO_yFyjnkd49P",b="R83hOohwVshnd6bEkDO4",C=new Map([["Win32",l.ag.get("desktop-about.platform-win-x86")],["Win32_x86_64",l.ag.get("desktop-about.platform-win-x86-64")],["Win32_ARM64",l.ag.get("desktop-about.platform-win-arm-64")],["OSX",l.ag.get("desktop-about.platform-mac-x86")],["OSX_ARM64",l.ag.get("desktop-about.platform-mac-arm-64")],["Linux",l.ag.get("desktop-about.platform-linux")]]),N=()=>{const e=(0,a.useRef)(null),{settings:n}=(0,v.rV)(),s=function(){const e=(0,a.useContext)(r.z),[n,s]=(0,a.useState)(null);return(0,a.useEffect)((()=>{let n=!0;return e.getVersionInfo().then((e=>{n&&s(e)})),()=>{n=!1}}),[e,s]),n}(),t=l.ag.get("desktop-about.platform-unknown");if(null===s)return null;const i="1"===n.values.employee,o=n.values["app.enable-developer-mode"],c=i?s.containerBuildType:"",d=C.get(s.containerPlatform)??t,u=l.ag.get("desktop-about.platform",{employee_build_type:c},{platform:d}),g=l.ag.get("desktop-about.copy-version-info-tooltip");return(0,p.jsxs)("div",{className:j,children:[(0,p.jsxs)("div",{className:x,ref:e,children:[(0,p.jsx)("div",{children:u}),(0,p.jsx)("div",{children:s.containerVersion}),!!o&&(0,p.jsx)("div",{children:s.uiVersion}),!!o&&(0,p.jsxs)("div",{children:["cef_",s.cefVersion]})]}),(0,p.jsx)("button",{title:g,className:b,onClick:()=>{e.current&&(0,h.v)(e.current.innerText)},children:"⎘"})]})};var f=s(83686),k=s(56309),y=s(70787);const O="desktopmodals-aboutSpotifyModal-container",D="desktopmodals-aboutSpotifyModal-closeButton",w="desktopmodals-aboutSpotifyModal-content",I="Ifnz1lh1jjvqPqJ4KPo8",S="XF1XXenkrbdAK2rRoxoU",A=(0,a.memo)((function(){const e=(0,t.I0)(),{isOpen:n}=(0,t.v9)((e=>e.aboutSpotify)),s=new Date("2023-11-20").getUTCFullYear().toString(),r=(0,a.useCallback)((()=>{e((0,f.se)())}),[e]);return(0,p.jsx)(k.Z,{animated:!0,isOpen:n,onRequestClose:r,contentLabel:l.ag.get("about.title_label"),children:(0,p.jsxs)("div",{className:O,children:[(0,p.jsxs)("main",{className:w,children:[(0,p.jsx)(y.Z,{noLink:!0,hasText:!0}),(0,p.jsx)(N,{}),(0,p.jsx)(m,{}),(0,p.jsx)(i.D,{as:"div",variant:"finale",className:I,children:(0,p.jsx)(c.k,{source:l.ag.get("about.copyright",s),paragraphClassName:S})})]}),(0,p.jsx)("button",{"aria-label":l.ag.get("close_button_action"),className:D,onClick:r,children:(0,p.jsx)(o.k,{iconSize:24})})]})})}))},77498:(e,n,s)=>{s.r(n),s.d(n,{default:()=>v,mapDispatchToProps:()=>h});var a=s(90839),t=s(34634),i=s(94),o=s(63961),l=s(63840),c=s(56309);const r="uYKs_kQMPOziaeDj877B",d="i8qeSJJVx4PXb7fsvOTd",u="WhIzm3S3R6Ker3XvpYW6",g="qsKpcFrhrA8KtuTVIN_y";var p=s(4637);const m=({isOpen:e,onClose:n})=>(0,p.jsx)(c.Z,{isOpen:e,onRequestClose:n,contentLabel:l.ag.get("licenses.title"),children:(0,p.jsxs)("div",{className:r,children:[(0,p.jsxs)("main",{className:d,children:[(0,p.jsx)(i.D,{as:"h1",variant:"alto",semanticColor:"textBase",children:l.ag.get("licenses.title")}),(0,p.jsx)("iframe",{className:u,title:l.ag.get("licenses.title"),src:"/licenses.html"})]}),(0,p.jsx)("div",{className:g,children:(0,p.jsx)(o.D,{onClick:n,children:l.ag.get("close_button_action")})})]})});const h=e=>({hide:()=>e((0,t.xh)())}),v=(0,a.$j)((e=>({isOpen:e.licenses.isOpen})),h)((function({isOpen:e,hide:n}){return(0,p.jsx)(m,{isOpen:e,onClose:n})}))},37565:(e,n,s)=>{s.r(n),s.d(n,{InvitationModal:()=>f,default:()=>f});var a=s(59496),t=s(90839),i=s(44939),o=s(56309),l=s(1298),c=s(94),r=s(63961),d=s(40126),u=s(63840),g=s(32794),p=s(4637);const m=({size:e=60,className:n})=>(0,p.jsx)("img",{className:n,src:(0,g.g)("images/group-session-logo.svg"),height:e,width:e,alt:u.ag.get("web-player.social-connect.group-session-logo-alt")}),h="X_PPo45wobYp0Jzet5Sq",v="C9HFNCo18nqGzjfoFM6j",j="IKGIOXL2pLJpwY9VyU6c",x="QHBM1_M6TFArl2mu3THg",b="peBDnb4aULrz7QWmmxAv",C=({onCopyLink:e,onCancel:n})=>(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)(m,{className:v}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)(c.D,{as:"h3",variant:"alto",semanticColor:"textBase",children:u.ag.get("web-player.social-connect.invitation-modal.title")}),(0,p.jsx)(c.D,{as:"p",variant:"ballad",semanticColor:"textBase",className:x,children:u.ag.get("web-player.social-connect.invitation-modal.subtitle")})]}),(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)(r.D,{onClick:e,children:u.ag.get("web-player.social-connect.invitation-modal.button-primary")}),(0,p.jsx)(d.o,{semanticColor:"textBase",onClick:n,children:u.ag.get("web-player.social-connect.invitation-modal.button-tertiary")})]})]});var N=s(53169);const f=()=>{const{createSession:e,currentSession:n,deleteSession:s}=(0,l.A)(),c=(0,t.I0)(),r=(0,N.g)(),d=(0,t.v9)((e=>e.ui.groupSessionInvitationModal.isOpen)),u=(0,a.useCallback)((()=>{c((0,i.uA)())}),[c]),g=(0,a.useCallback)((async()=>{if(n){await s()}u()}),[u,n,s]),m=(0,a.useCallback)((async()=>{let s=n?.joinSessionUri;if(!s){const n=await e("REMOTE");if(!n?.joinSessionUri)return;s=n?.joinSessionUri}r(),c((0,i.uA)())}),[e,n,c,r]),h=(0,a.useCallback)((async()=>{await e("REMOTE")}),[e]);return(0,p.jsx)(o.Z,{isOpen:d,onRequestClose:u,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onAfterOpen:h,animated:!0,children:(0,p.jsx)(C,{onCopyLink:m,onCancel:g})})}},18258:(e,n,s)=>{s.r(n),s.d(n,{JoinModal:()=>T,default:()=>T});s(95101),s(42826),s(99692);var a=s(59496),t=s(90839),i=s(44939),o=s(56309),l=s(58039),c=s(23941),r=s(1298),d=s(82169),u=s(84875),g=s.n(u),p=s(94),m=s(63961),h=s(40126),v=s(63840),j=s(7199),x=s(4637);const b=({children:e})=>(0,x.jsx)("div",{className:j.Z.deviceContainer,children:e}),C=({children:e})=>(0,x.jsx)("div",{className:j.Z.legalNotice,children:(0,x.jsx)("div",{className:j.Z.innerLegalNotice,children:e})});let N=function(e){return e.NONE="NONE",e.JOINING="JOINING",e.JOINED="JOINED",e.FAILED="FAILED",e}({});var f=s(5337),k=s(94387),y=s(36173),O=s(6337);const D=({host:e,users:n,onJoinClick:s,onCancel:a,joinState:t,currentDeviceType:i,currentDeviceName:o})=>{const l=g()(j.Z.container,{[j.Z.waiting]:t===N.JOINING}),c=(0,f.z)(i);return(0,x.jsx)("div",{className:l,children:(0,x.jsxs)("div",{className:j.Z.innerContainer,children:[(0,x.jsxs)(O.x,{children:[(0,x.jsx)(k.o,{users:n,size:"xlarge",maxSlots:3}),(0,x.jsx)(p.D,{as:"h3",variant:"alto",semanticColor:"textBase",children:v.ag.get("web-player.social-connect.join-modal.title",{host:e?.displayName??""})})]}),(0,x.jsx)(b,{children:(0,x.jsxs)("div",{className:j.Z.singleDevice,children:[(0,x.jsx)(c,{semanticColor:"textBrightAccent"}),(0,x.jsx)(p.D,{variant:"cello",semanticColor:"textBrightAccent",children:v.ag.get("web-player.social-connect.join-modal.continue-on-this-device",{device:o})})]})}),(0,x.jsxs)(y.q,{children:[(0,x.jsx)(m.D,{onClick:s,disabled:t===N.JOINING,children:v.ag.get("web-player.social-connect.join-modal.button-primary")}),(0,x.jsx)(h.o,{semanticColor:"textBase",onClick:a,disabled:t===N.JOINING,children:v.ag.get("web-player.social-connect.join-modal.button-tertiary")}),(0,x.jsx)(C,{children:(0,x.jsx)(p.D,{variant:"finale",semanticColor:"textSubdued",children:v.ag.get("web-player.social-connect.join-modal.privacy-notice")})})]})]})})};var w=s(81634);function I(){const{isLocalDevice:e,deviceName:n}=(0,l.B)((({activeDevice:e})=>({isLocalDevice:e?.isLocal??!0,deviceName:e?.name??""})),((e,n)=>e.deviceName===n.deviceName&&e.isLocalDevice===n.isLocalDevice));return function(e,n){const s=(0,w.wW)();return e?s?v.ag.get("web-player.social-connect.join-modal.device-name.this-computer"):v.ag.get("web-player.social-connect.join-modal.device-name.this-browser"):n}(e,n)}var S=s(96102),A=s(67966);const E=()=>{const{spec:e,logger:n}=(0,A.fU)(S._,{});return{logJoin:(0,a.useCallback)((()=>{const s=e.joinButtonFactory().hitJoinSocialListeningSession();n.logInteraction(s)}),[n,e]),logCancel:(0,a.useCallback)((()=>{const s=e.cancelButtonFactory().hitUiHide();n.logInteraction(s)}),[n,e])}};var J=s(53424);const _=({joinToken:e,onCancel:n})=>{const{getSessionInfo:s,joinSession:o}=(0,r.A)(),{logJoin:d}=E(),u=(0,l.B)((({activeDevice:e})=>e?.type??c.Yi.COMPUTER)),g=I(),[p,m]=(0,a.useState)(null),h=(0,t.I0)();(0,a.useEffect)((()=>{s(e).then((e=>{e?m(e):(h((0,i.ky)()),h((0,i.od)()))}))}),[h,s,e]);const[v,j]=(0,a.useState)(N.NONE),b=(0,a.useCallback)((async()=>{j(N.JOINING),d();try{await o(e)&&j(N.JOINED)}catch(e){j(N.FAILED),h((0,i.Pt)())}h((0,i.ky)())}),[h,o,e,d]);if(!p)return null;const C=p.sessionMembers.find((e=>e.id===p.sessionOwnerId)),f=p.sessionMembers.map(J.V),k=C?(0,J.V)(C):null;return(0,x.jsx)(D,{host:k,users:f,onJoinClick:b,onCancel:n,joinState:v,currentDeviceType:u,currentDeviceName:g})},T=()=>{const{logCancel:e}=E(),n=(0,t.v9)((e=>{const n=e.ui.groupSessionJoinModal;return(0,d.isGroupSessionJoinModalOpen)(n)&&n.joinToken})),s=(0,t.I0)(),l=(0,a.useCallback)((()=>{e(),s((0,i.ky)())}),[s,e]),c=Boolean(n);return(0,x.jsx)(o.Z,{isOpen:c,onRequestClose:l,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,animated:!0,children:n&&(0,x.jsx)(_,{joinToken:n,onCancel:l})})}}}]);
//# sourceMappingURL=xpui-desktop-modals.js.map