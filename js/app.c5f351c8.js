(function(){var e={5473:function(e,t,o){"use strict";var n=o(5102),i=o(9269);function a(e,t,o,n,a,c){const r=(0,i.up)("Editor");return(0,i.wg)(),(0,i.j4)(r)}var c=o(3201);const r={class:"container row"},l={class:"actionButtons col-12"},s={class:"left"},d={class:"right"},u={class:"editor col-xs-12 col-md-6"},m={class:"content"},p={ref:"canvasRef"},h={class:"bottom"},g={class:"layer col-xs-12 col-md-6"};function b(e,t,o,a,b,y){const v=(0,i.up)("q-btn"),f=(0,i.up)("Toolbar"),x=(0,i.up)("Layer");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",l,[(0,i._)("div",s,[(0,i.Wm)(v,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"stay_current_landscape",onClick:t[0]||(t[0]=e=>a.onChangeOrientation("L"))}),(0,i.Wm)(v,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"crop_square",onClick:t[1]||(t[1]=e=>a.onChangeOrientation("S"))}),(0,i.Wm)(v,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"stay_current_portrait",onClick:t[2]||(t[2]=e=>a.onChangeOrientation("P"))})]),(0,i._)("div",d,[(0,i.Wm)(v,{round:"",style:{background:"#ffc107",color:"white"},class:"q-mr-lg",icon:"qr_code",size:"md"}),(0,i.Wm)(v,{style:{background:"#ffc107",color:"white"},label:"저장",size:"md",onClick:a.onClickSaveToImage},null,8,["onClick"])])]),(0,i.wy)((0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("div",{id:"canvas-container",class:(0,c.C_)([{landscape:a.isLandscape},{vertical:!a.isLandscape}])},[(0,i._)("canvas",p,null,512)],2)]),(0,i._)("div",h,[(0,i.wy)((0,i.Wm)(f,{activeObject:a.activeObject,onEmit_changeColor:a.changeColor,onEmit_changeFont:a.changeFont,onEmit_changeFontSize:a.changeFontSize},null,8,["activeObject","onEmit_changeColor","onEmit_changeFont","onEmit_changeFontSize"]),[[n.F8,a.showTools]])])],512),[[n.F8,a.isReady]]),(0,i._)("div",g,[a.isReady?((0,i.wg)(),(0,i.j4)(x,{key:0,componentList:a.componentList,activeObjectIndex:a.activeObjectIndex,onEmit_selectObject:a.selectObject,onEmit_changeTextBox:a.changeTextBox,onEmit_changeImage:a.changeImage,onEmit_showTextToolbox:t[3]||(t[3]=e=>a.showTools=e)},null,8,["componentList","activeObjectIndex","onEmit_selectObject","onEmit_changeTextBox","onEmit_changeImage"])):(0,i.kq)("",!0)])])}o(4719);var y=o(6237),v=o(8237);o(2903);const f=e=>((0,i.dD)("data-v-1eb00e5d"),e=e(),(0,i.Cn)(),e),x={class:"tools row justify-between"},L={class:"col-6 textColor"},T=f((()=>(0,i._)("div",{class:"col-6 textFont"},[(0,i._)("div",{id:"font-picker"})],-1))),_={class:"col-12 textFontSize"};function w(e,t,o,n,a,c){const r=(0,i.up)("q-color"),l=(0,i.up)("q-popup-proxy"),s=(0,i.up)("q-icon"),d=(0,i.up)("q-input"),u=(0,i.up)("q-slider");return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("div",L,[(0,i.Wm)(d,{filled:"",modelValue:n.color,"onUpdate:modelValue":t[1]||(t[1]=e=>n.color=e),class:"colorPicker"},{append:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"colorize",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.color,"onUpdate:modelValue":[t[0]||(t[0]=e=>n.color=e),n.onChangeColor],"no-header-tabs":""},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),T,(0,i._)("div",_,[(0,i.Wm)(u,{modelValue:n.fontSize,"onUpdate:modelValue":[t[2]||(t[2]=e=>n.fontSize=e),n.onChangeFontSize],"marker-labels":n.markerLabels,min:5,max:200,class:"q-mt-sm","track-color":"white"},null,8,["modelValue","marker-labels","onUpdate:modelValue"])])])}var z=o(3763),M={name:"Toolbar",emits:["emit_changeColor","emit_changeFont","emit_changeFontSize"],props:{activeObject:Object},setup(e,{emit:t}){const o="AIzaSyAzF9jcH2VStLPUl6JDvj3yuipVM20Os6A",n=(0,y.iH)("#000000"),a=(0,y.iH)(0),c=(0,y.iH)([5,50,100,150,200]);(0,i.YP)(e,(({activeObject:e})=>{e&&(a.value=Math.round(2.62*e.fontSize))})),(0,i.bv)((()=>{r()}));const r=()=>{const e=new z.Z(o,"Open Sans",{limit:30});e.setOnChange((e=>{t("emit_changeFont",e)}))},l=()=>{t("emit_changeColor",n.value)},s=()=>{t("emit_changeFontSize",a.value)};return{color:n,fontSize:a,markerLabels:c,onChangeColor:l,onChangeFontSize:s}}},Y=o(7617),Z=o(9647),k=o(4633),N=o(6162),j=o(3353),O=o(7989),I=o(4553),V=o(1410),C=o.n(V);const G=(0,Y.Z)(M,[["render",w],["__scopeId","data-v-1eb00e5d"]]);var D=G;C()(M,"components",{QInput:Z.Z,QIcon:k.Z,QPopupProxy:N.Z,QColor:j.Z,QSlider:O.Z,QField:I.Z});const B={class:"wrapper"},S={class:"content scroll"},U={key:0,class:"textbox"},E={class:"left"},R={class:"content"},W={class:"right"},F={key:1,class:"imagebox"},Q={class:"right"};function X(e,t,o,n,a,r){const l=(0,i.up)("q-icon"),s=(0,i.up)("q-input"),d=(0,i.up)("q-btn"),u=(0,i.up)("q-img"),m=(0,i.up)("q-file"),p=(0,i.up)("q-item-section"),h=(0,i.up)("q-item"),g=(0,i.up)("q-list"),b=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",S,[(0,i.Wm)(g,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.resources,((e,o)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(h,{key:o,active:n.activeIndex===o,clickable:"","active-class":"active",onClick:e=>n.onClickComponent(o)},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,c.C_)(["division",{text:e.text}])},null,2),(0,i.Wm)(p,{class:"item-selection"},{default:(0,i.w5)((()=>[e.text?((0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("div",E,[(0,i.Wm)(l,{size:"24px",name:"text_fields",color:"gray"})]),(0,i._)("div",R,[(0,i.Wm)(s,{modelValue:e.text,"onUpdate:modelValue":[t=>e.text=t,t[0]||(t[0]=e=>n.onChangeTextBox(e))],dense:!0,borderless:"",autogrow:"","input-class":"textEditor",onFocus:t[1]||(t[1]=e=>n.onFocusInput())},null,8,["modelValue","onUpdate:modelValue"])]),(0,i._)("div",W,[(0,i.Wm)(d,{size:"xs",style:{background:"#f2f2f2",color:"dark"},onClick:e=>n.onClickTextToolbox(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{name:"edit",size:"24px",color:"gray"})])),_:2},1032,["onClick"])])])):((0,i.wg)(),(0,i.iD)("div",F,[(0,i.Wm)(u,{src:e._element.currentSrc,fit:"contain","spinner-size":"32px","spinner-color":"gray",style:{height:"50px","max-width":"50px"}},null,8,["src"]),(0,i.Wm)(m,{ref_for:!0,ref:"imagePickerRef",modelValue:n.pickerImageFile,"onUpdate:modelValue":[t[2]||(t[2]=e=>n.pickerImageFile=e),e=>n.imagePickerHandler(o)],accept:".jpg, .png, image/*",style:{display:"none"}},null,8,["modelValue","onUpdate:modelValue"]),(0,i._)("div",Q,[(0,i.Wm)(d,{size:"xs",style:{background:"#ff0080",color:"white"},onClick:e=>n.onClickTextToolbox(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{name:"image",size:"24px",color:"gray"})])),_:2},1032,["onClick"])])]))])),_:2},1024)])),_:2},1032,["active","onClick"])),[[b]]))),128))])),_:1})])])}var A={name:"Layer",props:{componentList:Array,activeObjectIndex:Number},emit:["emit_selectObject","emit_changeTextBox","emit_changeImage","emit_showTextToolbox"],setup(e,{emit:t}){let o=(0,i.Fl)((()=>e.componentList)),n=(0,y.iH)(o.value),a=(0,y.iH)(null),c=(0,y.iH)(null),r=(0,y.iH)(null);(0,i.bv)((()=>{})),(0,i.YP)(e,(({activeObjectIndex:e})=>{-1!=e?l(e):a.value=null}));const l=e=>{a.value=e,t("emit_selectObject",e)},s=e=>{t("emit_changeTextBox",{changeIndex:a.value,changeText:e})},d=e=>{c.value[e].pickFiles()},u=()=>{t("emit_showTextToolbox",!0)},m=()=>{console.log("@@@@@@@@@@@@@@@@@@@"),t("emit_showTextToolbox",!1)},p=e=>{if(r.value){let o=new FileReader;o.onload=o=>{const n=new Image;n.src=o.target.result,n.onload=()=>{let o=h(n);t("emit_changeImage",{componentIndex:e,base64Image:o})}},o.readAsDataURL(r.value)}},h=e=>{let t=document.createElement("canvas"),o=1024,n=e.width,i=e.height;return n>i?n>o&&(i*=o/n,n=o):i>o&&(n*=o/i,i=o),t.width=n,t.height=i,t.getContext("2d").drawImage(e,0,0,n,i),t.toDataURL("image/jpeg")};return{resources:n,activeIndex:a,imagePickerRef:c,pickerImageFile:r,imagePickerHandler:p,onClickComponent:l,onChangeTextBox:s,onClickChangeImage:d,onClickTextToolbox:u,onFocusInput:m}}},H=o(2146),J=o(5246),q=o(2278),P=o(570),K=o(4711),$=o(8723),ee=o(8658);const te=(0,Y.Z)(A,[["render",X],["__scopeId","data-v-f8a9ce1e"]]);var oe=te;C()(A,"components",{QList:H.Z,QItem:J.Z,QItemSection:q.Z,QIcon:k.Z,QInput:Z.Z,QBtn:P.Z,QImg:K.Z,QFile:$.Z}),C()(A,"directives",{Ripple:ee.Z});var ne=JSON.parse('{"h":{"id":"33a43a19fad844d99a266855e3f8927e","componentType":"Layout","attributes":{"type":["typeImage2","styleSideHorizontal"],"state":"PublishedUsed","orientation":"Landscape","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼","지하철광고","옥외광고"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343631564,"templateRanking":725},"version":9,"created":1652336368100,"lastModified":1661740614749,"label":"KO222001_fas_v01","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mZjFhMDYyYS01OTIxLWEzMDItNTVlZC05MDkxZGViZjM4ZjE","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mZjFhMDYyYS01OTIxLWEzMDItNTVlZC05MDkxZGViZjM4ZjE","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":840,"height":1080},"origin":{"x":0,"y":0}}},{"id":"img2","componentType":"Component","subtype":"Image","attributes":{"size":{"width":487,"height":351},"origin":{"x":1138,"y":378}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1920,"height":1080},"origin":{"x":0,"y":0}}},{"id":"deco_img4","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":190,"height":84},"origin":{"x":1280,"y":317}}},{"id":"h1_300w_26h_26lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":300,"height":26},"origin":{"x":1230,"y":245},"fontsize":25,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":26,"max-character-count":999}},{"id":"h2_500w_36h_36lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":500,"height":36},"origin":{"x":1125,"y":762},"fontsize":34,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":36,"max-character-count":999}},{"id":"h3_700w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":700,"height":39},"origin":{"x":1030,"y":930},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}},{"id":"h4_800w_30h_30lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":30},"origin":{"x":981,"y":1000},"fontsize":29,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":30,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci85MjFkODk3Ni05NWQxLTFmZTYtNTFjYy0yY2FjM2JlYWNkZmY"}},{"id":"img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mNTEyYmIzZS00YmFjLWQ1MGEtODllYy0xZTZlMWQzZDFiYmU"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci82MWI2OWRlYS01MDk5LTBhNTgtMmYyNy0wMjNjMzY5ZGM0OTI"}},{"id":"deco_img4","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9hYTlmNTM2Ni1hMDQ3LTZlNzgtYzY0YS1hZDk5M2UzZjcyYjA"}},{"id":"h1_300w_26h_26lead_vcenter","attributes":{"color":"#594139","content":"M.U JEWELRY"}},{"id":"h2_500w_36h_36lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h3_700w_39h_39lead_vcenter","attributes":{"color":"#815142","content":"커플 주얼리 전문, 엠유주얼리"}},{"id":"h4_800w_30h_30lead_vcenter","attributes":{"color":"#b9895f","content":"웨딩커플링 / 부부의날 선물 / 커플반지 / 다이아반지"}}],"userActionDetail":[]}}'),ie=JSON.parse('{"h":{"id":"a34a0e9ed62d47ae83e131212397b8fb","componentType":"Layout","attributes":{"type":["typeImage1","styleTop"],"state":"PublishedUsed","orientation":"Portrait","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343626083,"templateRanking":686},"version":6,"created":1652336417319,"lastModified":1653268641289,"label":"KO222001_fas_v01_vertical","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mYjhiMDNlYy01ODgxLTczMTEtN2JhMy1kYTY4YWJiYWMxMGY","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mYjhiMDNlYy01ODgxLTczMTEtN2JhMy1kYTY4YWJiYWMxMGY","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":782,"height":564},"origin":{"x":151,"y":939}}},{"id":"deco_img2","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1080,"height":1920},"origin":{"x":0,"y":0}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":306,"height":135},"origin":{"x":379,"y":841}}},{"id":"h1_700w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":700,"height":39},"origin":{"x":190,"y":340},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}},{"id":"h2_800w_133h_133lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":133},"origin":{"x":140,"y":487},"fontsize":136,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":133,"max-character-count":999}},{"id":"h3_800w_109h_109lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":800,"height":109},"origin":{"x":140,"y":650},"fontsize":111,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":109,"max-character-count":999}},{"id":"h4_800w_58h_58lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":800,"height":58},"origin":{"x":133,"y":1557},"fontsize":55,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":58,"max-character-count":999}},{"id":"h5_800w_30h_30lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":30},"origin":{"x":140,"y":1771},"fontsize":29,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":30,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci82OGZmN2ZiMC1mNjFiLTYzZTktZDkxMC03YzhmNzcxMmFlYjA"}},{"id":"deco_img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci80MTY4MTFkZS0zYmQ5LWM0MWItNTI2Ny0wMDUxNDAzOTM4NTM"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9iNzNhMzk0YS1kZDQzLTkwNTQtOTQxYi1jOWZjZWQ5YTMzNDk"}},{"id":"h1_700w_39h_39lead_vcenter","attributes":{"color":"#815142","content":"커플 주얼리 전문, 엠유주얼리"}},{"id":"h2_800w_133h_133lead_vcenter","attributes":{"color":"#594139","content":"M.U"}},{"id":"h3_800w_109h_109lead_vcenter","attributes":{"color":"#594139","content":"jewelry"}},{"id":"h4_800w_58h_58lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h5_800w_30h_30lead_vcenter","attributes":{"color":"#b9895f","content":"웨딩커플링 / 부부의날 선물 / 커플반지 / 다이아반지"}}],"userActionDetail":[]}}'),ae=JSON.parse('{"h":{"id":"6d36c4384fa74bd49f4b96f0685e4e01","componentType":"Layout","attributes":{"type":["typeImage1","styleTop"],"state":"PublishedUsed","orientation":"Square","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343629295,"templateRanking":907},"version":8,"created":1652336271793,"lastModified":1653268618279,"label":"KO222001_fas_v01_square","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci81ZWM1OWU3MS1hMDRjLTZhMTYtN2EyNC0wMmM5MTJkYjdhYzg","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci81ZWM1OWU3MS1hMDRjLTZhMTYtN2EyNC0wMmM5MTJkYjdhYzg","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":782,"height":564},"origin":{"x":151,"y":139}}},{"id":"deco_img2","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1080,"height":1080},"origin":{"x":0,"y":0}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":306,"height":135},"origin":{"x":379,"y":41}}},{"id":"h1_800w_58h_58lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":800,"height":58},"origin":{"x":133,"y":757},"fontsize":55,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":58,"max-character-count":999}},{"id":"h2_500w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":500,"height":39},"origin":{"x":290,"y":996},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci83Mjg1ZDdmZC1hZGI5LTNlOTgtZWEzMy01YzZhNmY5NmE0NTA"}},{"id":"deco_img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci8yOTE2ZWQ1OS1hY2I2LTE1ZDQtMzIxYi00ZDZmZGQzMDBlODc"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci80ZWZhODk0My02MTQ0LWI3ZTUtYjE2Mi0yMzNkYTVmMGYyZWI"}},{"id":"h1_800w_58h_58lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h2_500w_39h_39lead_vcenter","attributes":{"color":"#594139","content":"M.U JEWELRY"}}],"userActionDetail":[]}}'),ce=(o(3957),{name:"Editor",components:{Toolbar:D,Layer:oe},setup(){const e=2.62;let t=(0,y.iH)(ne.h),o=null,n=(0,y.iH)(null),a=(0,y.iH)(null),c=(0,y.iH)(-1),r=(0,y.iH)([]),l=(0,y.iH)(!1),s=(0,y.iH)(!1),d=(0,i.Fl)((()=>r.value));const u=(0,i.Fl)((()=>"Portrait"!==t.value?.attributes?.orientation));(0,i.bv)((()=>{o=m(),p(),N()})),(0,i.Jd)((()=>{window.removeEventListener("resize",k)}));const m=()=>{let t=u.value?(1920/e).toString():(1080/e).toString(),o=u.value?(1080/e).toString():(1920/e).toString();return new v.fabric.Canvas(n.value,{preserveObjectStacking:!0,stopContextMenu:!0,isDrawingMode:!1,width:t,height:o,centeredScaling:!0,lockUniScaling:!0,allowTouchScrolling:!0})},p=async()=>{let e=f();e.imageResources&&await g(e.imageResources).then((e=>{h(e)})),e.textResources&&await b(e.textResources);let t=o.getObjects();t.forEach((e=>{e.selectable=!1,e.evented=!1})),r.value=t;let n=new v.fabric.ActiveSelection(t,{canvas:o});n.center(),n.destroy(),s.value=!0},h=t=>{t.forEach((t=>{let n=t.layout,i=new v.fabric.Image(t);i.set({originIndex:t.originIndex,crossOrigin:"Anonymous",left:n.origin.x/e,top:n.origin.y/e,width:n.size.width/e,height:n.size.height/e}),o.add(i),o.renderAll()}))},g=e=>{let t=[],o=0;return new Promise((n=>{e.forEach(((i,a)=>{let c=i.layoutAttributes,r=i.componentAttributes,l=new Image;l.originIndex=i.originIndex,l.index=a,l.src=r.attributes.location,l.layout=c,t.push(l),l.onload=()=>{o+=1,o===e.length&&n(t)}}))}))},b=t=>{t.forEach((t=>{let n=t.componentAttributes,i=t.layoutAttributes;if(n&&i){let a=n.attributes,c=new v.fabric.Textbox(a.content,{originIndex:t.originIndex,fill:a.color,textAlign:i["text-align"],fontFamily:i.font,fontSize:Math.round(i.fontsize/e),width:Math.round(i.size.width/e),height:Math.round(i.size.height/e),left:Math.round(i.origin.x/e),top:Math.round(i.origin.y/e),lockMovementX:!0,lockMovementY:!0,lockScalingX:!0});o.add(c),c.on("scaling",(e=>{console.log(e)})),c.on("editing:entered",(e=>{console.log(e)})),c.on("text:changed",(e=>{console.log(e)})),o.renderAll()}}))},f=()=>{let e={},o=[],n=[],i=[],a=t.value;if(a){let t=a.layout,c=a.components;t&&c&&(t.forEach(((e,t)=>{let a=e.attributes,r=c.find((t=>t.id===e.id)),l={originIndex:t,layoutAttributes:a,componentAttributes:r};"Background"===e.subtype||"Image"===e.subtype||"Sticker"===e.subtype?o.push(l):"TextBox"===e.subtype?n.push(l):"Shape"===e.subtype&&i.push(l)})),e.imageResources=o,e.textResources=n)}return e},x=e=>{let t=e.selected[0],o=t.originIndex;a.value=t,c.value=o},L=()=>{o.setViewportTransform([1,0,0,1,0,0])},T=()=>{c.value=-1,a.value=null,l.value=!1},_=e=>{o.getActiveObject().set("fill",e),o.renderAll()},w=e=>{o.getActiveObject().set("fontFamily",e.family),o.renderAll()},z=t=>{o.getActiveObject().set("fontSize",Math.round(t/e)),o.renderAll()},M=e=>{o.setActiveObject(o.item(e)),o.renderAll()},Y=e=>{o.renderAll()},Z=e=>{let t=o.item(c.value);var n=t.getBoundingRect();console.log(n),a.value.setSrc(e.base64Image,(()=>{a.value.width,a.value.height;a.value.left=n.left,a.value.top=n.top,a.value.width=n.width,a.value.height=n.height,o.renderAll()}))},k=()=>{let e=o.width;o.getObjects().forEach((t=>{t.set({left:t.getBoundingRect().left*o.width/e+(t.left-t.getBoundingRect().left)}),t.setCoords()})),o.calcOffset(),o.renderAll()},N=()=>{o.on({"selection:updated":x,"selection:created":x}),o.on("selection:cleared",T),o.on("mouse:dblclick",L)},j=()=>{let e=o.toDataURL({format:"jpeg",quality:1});console.log(e)},O=e=>{s.value=!1,o.getObjects().forEach((e=>{o.remove(e)})),"L"===e?t.value=ne.h:"S"===e?t.value=ae.h:"P"===e&&(t.value=ie.h),o=m(),p(),N()};return{isLandscape:u,canvasRef:n,showTools:l,activeObject:a,activeObjectIndex:c,changeColor:_,changeFont:w,changeFontSize:z,componentList:d,isReady:s,selectObject:M,changeTextBox:Y,changeImage:Z,onClickSaveToImage:j,onChangeOrientation:O}}});const re=(0,Y.Z)(ce,[["render",b],["__scopeId","data-v-000c9400"]]);var le=re;C()(ce,"components",{QBtn:P.Z});var se={name:"App",components:{Editor:le},setup(){return{}}};const de=(0,Y.Z)(se,[["render",a]]);var ue=de,me=o(751),pe={config:{},plugins:{}};const he=(0,n.ri)(ue);he.use(me.Z,pe),he.mount("#app")},4960:function(){},6759:function(){},6272:function(){}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,a<c&&(c=a));if(r){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,c=n[0],r=n[1],l=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var d=l(o)}for(t&&t(n);s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkwebapp_svg_editor"]=self["webpackChunkwebapp_svg_editor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5473)}));n=o.O(n)})();
//# sourceMappingURL=app.c5f351c8.js.map