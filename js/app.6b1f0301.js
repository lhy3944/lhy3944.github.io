(function(){var e={8312:function(e,t,o){"use strict";var n=o(5102),i=o(9269);function a(e,t,o,n,a,c){const l=(0,i.up)("Editor");return(0,i.wg)(),(0,i.j4)(l)}var c=o(3201);const l={class:"container row"},r={class:"actionButtons col-12"},s={class:"left"},d={class:"right"},u={class:"editor col-xs-12 col-md-6"},m={class:"content"},p={ref:"canvasRef"},h={class:"bottom"},g={class:"layer col-xs-12 col-md-6"};function b(e,t,o,a,b,v){const y=(0,i.up)("q-btn"),f=(0,i.up)("Toolbar"),x=(0,i.up)("Layer");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",r,[(0,i._)("div",s,[(0,i.Wm)(y,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"stay_current_landscape",onClick:t[0]||(t[0]=e=>a.onChangeOrientation("L"))}),(0,i.Wm)(y,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"crop_square",onClick:t[1]||(t[1]=e=>a.onChangeOrientation("S"))}),(0,i.Wm)(y,{class:"q-mr-sm",flat:"",color:"white",size:"sm",icon:"stay_current_portrait",onClick:t[2]||(t[2]=e=>a.onChangeOrientation("P"))})]),(0,i._)("div",d,[(0,i.Wm)(y,{round:"",style:{background:"#ffc107",color:"white"},class:"q-mr-lg",icon:"qr_code",size:"md"}),(0,i.Wm)(y,{style:{background:"#ffc107",color:"white"},label:"저장",size:"md",onClick:a.onClickSaveToImage},null,8,["onClick"])])]),(0,i.wy)((0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("div",{id:"canvas-container",class:(0,c.C_)([{landscape:a.isLandscape},{vertical:!a.isLandscape}])},[(0,i._)("canvas",p,null,512)],2)]),(0,i._)("div",h,[(0,i.wy)((0,i.Wm)(f,{activeObject:a.activeObject,onEmit_changeColor:a.changeColor,onEmit_changeFont:a.changeFont,onEmit_changeFontSize:a.changeFontSize},null,8,["activeObject","onEmit_changeColor","onEmit_changeFont","onEmit_changeFontSize"]),[[n.F8,a.showTools]])])],512),[[n.F8,a.isReady]]),(0,i._)("div",g,[a.isReady?((0,i.wg)(),(0,i.j4)(x,{key:0,originImageResources:a.originImageResources,componentList:a.componentList,activeObjectIndex:a.activeObjectIndex,onEmit_selectObject:a.selectObject,onEmit_changeTextBox:a.changeTextBox,onEmit_changeImage:a.changeImage,onEmit_resetImage:a.resetImage},null,8,["originImageResources","componentList","activeObjectIndex","onEmit_selectObject","onEmit_changeTextBox","onEmit_changeImage","onEmit_resetImage"])):(0,i.kq)("",!0)])])}o(4719);var v=o(6237),y=o(8237);o(2903);const f={class:"tools row justify-between"},x={class:"col-6 textColor"},w={class:"col-6 textFont"},L={class:"col-12 textFontSize"};function _(e,t,o,n,a,c){const l=(0,i.up)("q-color"),r=(0,i.up)("q-popup-proxy"),s=(0,i.up)("q-icon"),d=(0,i.up)("q-input"),u=(0,i.up)("q-select"),m=(0,i.up)("q-slider");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",x,[(0,i.Wm)(d,{filled:"",modelValue:n.color,"onUpdate:modelValue":t[1]||(t[1]=e=>n.color=e),class:"colorPicker"},{append:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"colorize",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{modelValue:n.color,"onUpdate:modelValue":[t[0]||(t[0]=e=>n.color=e),n.onChangeColor],"no-header-tabs":""},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,i._)("div",w,[(0,i.Wm)(u,{modelValue:n.fontFamily,"onUpdate:modelValue":[t[2]||(t[2]=e=>n.fontFamily=e),n.onChangeFontFamily],options:n.fontFamilyList,"bg-color":"white",dense:"",square:"",filled:"",borderless:""},null,8,["modelValue","options","onUpdate:modelValue"])]),(0,i._)("div",L,[(0,i.Wm)(m,{modelValue:n.fontSize,"onUpdate:modelValue":[t[3]||(t[3]=e=>n.fontSize=e),n.onChangeFontSize],"marker-labels":n.markerLabels,min:5,max:200,class:"q-mt-sm","track-color":"white"},null,8,["modelValue","marker-labels","onUpdate:modelValue"])])])}o(3763);var T={name:"Toolbar",emits:["emit_changeColor","emit_changeFont","emit_changeFontSize"],props:{activeObject:Object},setup(e,{emit:t}){const o=(0,v.iH)("#000000"),n=(0,v.iH)(0),a=(0,v.iH)([5,50,100,150,200]),c=["Arial","Arial Black","Impact","Tahoma","Times New Roman"],l=(0,v.iH)("Arial");(0,i.YP)(e,(({activeObject:e})=>{e&&(n.value=Math.round(2.62*e.fontSize))})),(0,i.bv)((()=>{}));const r=()=>{t("emit_changeColor",o.value)},s=()=>{t("emit_changeFontSize",n.value)},d=()=>{t("emit_changeFont",l.value)};return{color:o,fontSize:n,fontFamilyList:c,fontFamily:l,markerLabels:a,onChangeColor:r,onChangeFontSize:s,onChangeFontFamily:d}}},z=o(7617),M=o(6053),Y=o(4633),Z=o(9778),k=o(6527),I=o(6466),C=o(7989),N=o(4553),j=o(1410),O=o.n(j);const V=(0,z.Z)(T,[["render",_],["__scopeId","data-v-0607a528"]]);var D=V;O()(T,"components",{QInput:M.Z,QIcon:Y.Z,QPopupProxy:Z.Z,QColor:k.Z,QSelect:I.Z,QSlider:C.Z,QField:N.Z});const S={class:"wrapper"},G={class:"content scroll"},R={key:0,class:"textbox"},B={class:"left"},U={class:"content"},E={class:"right"},W={key:1,class:"imagebox"},F={class:"right"};function Q(e,t,o,a,l,r){const s=(0,i.up)("q-icon"),d=(0,i.up)("q-input"),u=(0,i.up)("q-btn"),m=(0,i.up)("q-img"),p=(0,i.up)("q-file"),h=(0,i.up)("q-item-section"),g=(0,i.up)("q-item"),b=(0,i.up)("q-list"),v=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",G,[(0,i.Wm)(b,{bordered:"",separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.resources,((e,o)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(g,{key:o,active:a.activeIndex===o,clickable:"","active-class":"active",onClick:e=>a.onClickComponent(o)},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,c.C_)(["division",{text:void 0!==e.text}])},null,2),(0,i.Wm)(h,{class:"item-selection"},{default:(0,i.w5)((()=>[void 0!==e.text?((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",B,[(0,i.Wm)(s,{size:"24px",name:"text_fields",color:"gray"})]),(0,i._)("div",U,[(0,i.Wm)(d,{modelValue:e.text,"onUpdate:modelValue":[t=>e.text=t,t[0]||(t[0]=e=>a.onChangeTextBox(e))],dense:!0,borderless:"",autogrow:"","input-class":"textEditor"},null,8,["modelValue","onUpdate:modelValue"])]),(0,i._)("div",E,[(0,i.Wm)(u,{size:"xs",style:{background:"#f2f2f2",color:"dark"},onClick:e=>a.onClickTextToolbox(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"edit",size:"24px",color:"gray"})])),_:2},1032,["onClick"])])])):((0,i.wg)(),(0,i.iD)("div",W,[(0,i.Wm)(m,{src:e?._element?.currentSrc,fit:"contain","spinner-size":"32px","spinner-color":"gray",style:{height:"50px","max-width":"50px"}},null,8,["src"]),(0,i.Wm)(p,{ref_for:!0,ref:"imagePickerRef",modelValue:a.pickerImageFile,"onUpdate:modelValue":[t[1]||(t[1]=e=>a.pickerImageFile=e),e=>a.imagePickerHandler(o)],accept:".jpg, .png, image/*",style:{display:"none"}},null,8,["modelValue","onUpdate:modelValue"]),(0,i._)("div",F,[(0,i.wy)((0,i.Wm)(u,{size:"xs",style:{background:"#ff0080",color:"white","margin-right":"4px"},onClick:e=>a.onClickResetImage(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"restore",size:"24px",color:"gray"})])),_:2},1032,["onClick"]),[[n.F8,e.changeMode]]),(0,i.Wm)(u,{size:"xs",style:{background:"#ff0080",color:"white"},onClick:e=>a.onClickChangeImage(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"image",size:"24px",color:"gray"})])),_:2},1032,["onClick"])])]))])),_:2},1024)])),_:2},1032,["active","onClick"])),[[v]]))),128))])),_:1})])])}var X=o(5999);function A(e,t,o,n,a,c){const l=(0,i.up)("q-icon"),r=(0,i.up)("cropper"),s=(0,i.up)("q-btn"),d=(0,i.up)("q-card-actions"),u=(0,i.up)("q-card"),m=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.j4)(m,{ref:"dialogRef",persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{name:"close",class:"close all-pointer-events",color:"white",onClick:n.onClickCloseBtn},null,8,["onClick"]),(0,i.Wm)(u,{class:"q-dialog-plugin"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{ref:"cropperRef",class:"cropper","image-class":"cropper__image","image-restriction":"fill-area","default-boundaries":"fill",src:o.imagePath,transitions:!0,autoZoom:!0,"stencil-props":{class:"cropper-stencil",previewClass:"cropper-stencil__preview",draggingClass:"cropper-stencil--dragging",handlersClasses:{default:"cropper-handler",eastNorth:"cropper-handler--east-north",westNorth:"cropper-handler--west-north",eastSouth:"cropper-handler--east-south",westSouth:"cropper-handler--west-south"}},onChange:n.change},null,8,["src","onChange"]),(0,i.Wm)(d,{class:"footer",align:"right"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{style:{background:"#ffc107",color:"white"},size:"md",label:"저장",onClick:n.onClickSaveCropImage},null,8,["onClick"])])),_:1})])),_:1})])),_:1},512)}var H=o(7846),q=o(4457),J={name:"ImageCropDialog",components:{Cropper:q.fl},props:{imagePath:String},emits:[...H.Z.emits],setup(e,{emit:t}){const{dialogRef:o,onDialogOK:n,onDialogHide:i,onDialogCancel:a}=(0,H.Z)(),c=(0,v.iH)(null),l=()=>{},r=()=>{u()},s=({coordinates:e,canvas:t})=>{console.log(e,t)},d=()=>{const e=c.value.getResult(),t=e.canvas.toDataURL({format:"jpeg",quality:1});n({cropImage:t})},u=()=>{t("hide")};return{dialogRef:o,cropperRef:c,onDialogCancel:a,onDialogHide:i,onClickCloseBtn:r,onLoadImage:l,change:s,onClickSaveCropImage:d}}},P=o(1682),K=o(8055),$=o(4333),ee=o(4686),te=o(4711);const oe=(0,z.Z)(J,[["render",A],["__scopeId","data-v-07139a2a"]]);var ne=oe;O()(J,"components",{QDialog:P.Z,QIcon:Y.Z,QCard:K.Z,QCardActions:$.Z,QBtn:ee.Z,QImg:te.Z});var ie={name:"Layer",props:{originImageResources:Array,componentList:Array,activeObjectIndex:Number},emit:["emit_selectObject","emit_changeTextBox","emit_changeImage","emit_showTextToolbox"],setup(e,{emit:t}){const o=(0,X.Z)();let n=(0,i.Fl)((()=>e.componentList)),a=(0,v.iH)(n.value),c=(0,v.iH)(null),l=(0,v.iH)(null),r=(0,v.iH)(null);(0,i.bv)((()=>{})),(0,i.YP)(e,(({activeObjectIndex:e})=>{-1!=e?s(e):c.value=null}));const s=e=>{c.value=e,t("emit_selectObject",e)},d=e=>{t("emit_changeTextBox",{changeIndex:c.value,changeText:e})},u=e=>{l.value[e].pickFiles()},m=n=>{o.dialog({message:"원본 이미지로 변경합니다.",cancel:!0,persistent:!0}).onOk((()=>{let o=e.originImageResources[n];t("emit_resetImage",o)}))},p=()=>{t("emit_showTextToolbox",!0)},h=()=>{t("emit_showTextToolbox",!1),t("emit_editMode",!0)},g=e=>{if(r.value){let t=new FileReader;t.onload=t=>{const n=new Image;n.src=t.target.result,n.onload=()=>{o.dialog({component:ne,componentProps:{imagePath:n.src}}).onOk((t=>{t&&t.cropImage&&b(e,t.cropImage)}))}},t.readAsDataURL(r.value),a.value[e].changeMode=!0,r.value=null}},b=(e,o)=>{const n=new Image;n.src=o,n.width=a.value[e].width,n.height=a.value[e].height,n.onload=()=>{let o=y(n);t("emit_changeImage",{componentIndex:e,base64Image:o})}},y=e=>{let t=document.createElement("canvas"),o=768,n=e.width,i=e.height;return n>i?n>o&&(i*=o/n,n=o):i>o&&(n*=o/i,i=o),t.width=n,t.height=i,t.getContext("2d").drawImage(e,0,0,n,i),t.toDataURL("image/jpeg")};return{resources:a,activeIndex:c,imagePickerRef:l,pickerImageFile:r,imagePickerHandler:g,onClickComponent:s,onChangeTextBox:d,onClickChangeImage:u,onClickResetImage:m,onClickTextToolbox:p,onFocusInput:h}}},ae=o(2146),ce=o(5246),le=o(2278),re=o(6967),se=o(8658);const de=(0,z.Z)(ie,[["render",Q],["__scopeId","data-v-03009262"]]);var ue=de;O()(ie,"components",{QList:ae.Z,QItem:ce.Z,QItemSection:le.Z,QIcon:Y.Z,QInput:M.Z,QBtn:ee.Z,QImg:te.Z,QFile:re.Z}),O()(ie,"directives",{Ripple:se.Z});var me=JSON.parse('{"h":{"id":"33a43a19fad844d99a266855e3f8927e","componentType":"Layout","attributes":{"type":["typeImage2","styleSideHorizontal"],"state":"PublishedUsed","orientation":"Landscape","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼","지하철광고","옥외광고"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343631564,"templateRanking":725},"version":9,"created":1652336368100,"lastModified":1661740614749,"label":"KO222001_fas_v01","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mZjFhMDYyYS01OTIxLWEzMDItNTVlZC05MDkxZGViZjM4ZjE","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mZjFhMDYyYS01OTIxLWEzMDItNTVlZC05MDkxZGViZjM4ZjE","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":840,"height":1080},"origin":{"x":0,"y":0}}},{"id":"img2","componentType":"Component","subtype":"Image","attributes":{"size":{"width":487,"height":351},"origin":{"x":1138,"y":378}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1920,"height":1080},"origin":{"x":0,"y":0}}},{"id":"deco_img4","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":190,"height":84},"origin":{"x":1280,"y":317}}},{"id":"h1_300w_26h_26lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":300,"height":26},"origin":{"x":1230,"y":245},"fontsize":25,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":26,"max-character-count":999}},{"id":"h2_500w_36h_36lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":500,"height":36},"origin":{"x":1125,"y":762},"fontsize":34,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":36,"max-character-count":999}},{"id":"h3_700w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":700,"height":39},"origin":{"x":1030,"y":930},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}},{"id":"h4_800w_30h_30lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":30},"origin":{"x":981,"y":1000},"fontsize":29,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":30,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci85MjFkODk3Ni05NWQxLTFmZTYtNTFjYy0yY2FjM2JlYWNkZmY"}},{"id":"img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mNTEyYmIzZS00YmFjLWQ1MGEtODllYy0xZTZlMWQzZDFiYmU"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci82MWI2OWRlYS01MDk5LTBhNTgtMmYyNy0wMjNjMzY5ZGM0OTI"}},{"id":"deco_img4","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9hYTlmNTM2Ni1hMDQ3LTZlNzgtYzY0YS1hZDk5M2UzZjcyYjA"}},{"id":"h1_300w_26h_26lead_vcenter","attributes":{"color":"#594139","content":"M.U JEWELRY"}},{"id":"h2_500w_36h_36lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h3_700w_39h_39lead_vcenter","attributes":{"color":"#815142","content":"커플 주얼리 전문, 엠유주얼리"}},{"id":"h4_800w_30h_30lead_vcenter","attributes":{"color":"#b9895f","content":"웨딩커플링 / 부부의날 선물 / 커플반지 / 다이아반지"}}],"userActionDetail":[]}}'),pe=JSON.parse('{"h":{"id":"a34a0e9ed62d47ae83e131212397b8fb","componentType":"Layout","attributes":{"type":["typeImage1","styleTop"],"state":"PublishedUsed","orientation":"Portrait","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343626083,"templateRanking":686},"version":6,"created":1652336417319,"lastModified":1653268641289,"label":"KO222001_fas_v01_vertical","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mYjhiMDNlYy01ODgxLTczMTEtN2JhMy1kYTY4YWJiYWMxMGY","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9mYjhiMDNlYy01ODgxLTczMTEtN2JhMy1kYTY4YWJiYWMxMGY","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":782,"height":564},"origin":{"x":151,"y":939}}},{"id":"deco_img2","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1080,"height":1920},"origin":{"x":0,"y":0}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":306,"height":135},"origin":{"x":379,"y":841}}},{"id":"h1_700w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":700,"height":39},"origin":{"x":190,"y":340},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}},{"id":"h2_800w_133h_133lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":133},"origin":{"x":140,"y":487},"fontsize":136,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":133,"max-character-count":999}},{"id":"h3_800w_109h_109lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Light","size":{"width":800,"height":109},"origin":{"x":140,"y":650},"fontsize":111,"font-style":"","multi-line":false,"text-align":"center","font-Weight":300,"text-all-caps":false,"vertical-center":true,"text-line-spacing":109,"max-character-count":999}},{"id":"h4_800w_58h_58lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":800,"height":58},"origin":{"x":133,"y":1557},"fontsize":55,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":58,"max-character-count":999}},{"id":"h5_800w_30h_30lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":800,"height":30},"origin":{"x":140,"y":1771},"fontsize":29,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":30,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci82OGZmN2ZiMC1mNjFiLTYzZTktZDkxMC03YzhmNzcxMmFlYjA"}},{"id":"deco_img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci80MTY4MTFkZS0zYmQ5LWM0MWItNTI2Ny0wMDUxNDAzOTM4NTM"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci9iNzNhMzk0YS1kZDQzLTkwNTQtOTQxYi1jOWZjZWQ5YTMzNDk"}},{"id":"h1_700w_39h_39lead_vcenter","attributes":{"color":"#815142","content":"커플 주얼리 전문, 엠유주얼리"}},{"id":"h2_800w_133h_133lead_vcenter","attributes":{"color":"#594139","content":"M.U"}},{"id":"h3_800w_109h_109lead_vcenter","attributes":{"color":"#594139","content":"jewelry"}},{"id":"h4_800w_58h_58lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h5_800w_30h_30lead_vcenter","attributes":{"color":"#b9895f","content":"웨딩커플링 / 부부의날 선물 / 커플반지 / 다이아반지"}}],"userActionDetail":[]}}'),he=JSON.parse('{"h":{"id":"6d36c4384fa74bd49f4b96f0685e4e01","componentType":"Layout","attributes":{"type":["typeImage1","styleTop"],"state":"PublishedUsed","orientation":"Square","searchKeyword":{"imageTag":["가정의달","부부의날","반지","주얼리","커플링","커플반지","웨딩","결혼"],"contentTag":["상품","신제품"],"seasonalTag":["봄","봄맞이","꽃"]},"stateChangeDate":1652343629295,"templateRanking":907},"version":8,"created":1652336271793,"lastModified":1653268618279,"label":"KO222001_fas_v01_square","location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci81ZWM1OWU3MS1hMDRjLTZhMTYtN2EyNC0wMmM5MTJkYjdhYzg","thumbnail":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci81ZWM1OWU3MS1hMDRjLTZhMTYtN2EyNC0wMmM5MTJkYjdhYzg","tags":{"ko_keywords":["ko"],"ko_productcategories":["ae5b1eff35cf4d2db8f3bad6efb95985"]},"categories":{"ko":["이벤트"]},"curatedTags":[],"layout":[{"id":"img1","componentType":"Component","subtype":"Image","attributes":{"size":{"width":782,"height":564},"origin":{"x":151,"y":139}}},{"id":"deco_img2","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":1080,"height":1080},"origin":{"x":0,"y":0}}},{"id":"deco_img3","componentType":"Component","subtype":"Sticker","attributes":{"size":{"width":306,"height":135},"origin":{"x":379,"y":41}}},{"id":"h1_800w_58h_58lead","componentType":"Component","subtype":"TextBox","attributes":{"font":"Allura","size":{"width":800,"height":58},"origin":{"x":133,"y":757},"fontsize":55,"font-style":"","multi-line":false,"text-align":"right","font-Weight":400,"text-all-caps":false,"text-line-spacing":58,"max-character-count":999}},{"id":"h2_500w_39h_39lead_vcenter","componentType":"Component","subtype":"TextBox","attributes":{"font":"NEXONLv1GothicLowOTF-Regular","size":{"width":500,"height":39},"origin":{"x":290,"y":996},"fontsize":37,"font-style":"","multi-line":false,"text-align":"center","font-Weight":400,"text-all-caps":false,"vertical-center":true,"text-line-spacing":39,"max-character-count":999}}],"components":[{"id":"img1","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci83Mjg1ZDdmZC1hZGI5LTNlOTgtZWEzMy01YzZhNmY5NmE0NTA"}},{"id":"deco_img2","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci8yOTE2ZWQ1OS1hY2I2LTE1ZDQtMzIxYi00ZDZmZGQzMDBlODc"}},{"id":"deco_img3","attributes":{"location":"https://cdn.prod.api.promota.net/dispatcher/0.4/discovery/api/resolvecontent?resource=aHR0cDovL2NjcmVzb3VyY2UtaW50LnByb2QuYXBpLnByb21vdGEubmV0L2NjcmVzb3VyY2UvMy4wL2FwaS9kb3dubG9hZC91cy13ZXN0LTI6MDdjYzU2MDEtYzU1OS00N2Q0LTg2OGItZmY5MmJlZTkzM2IxL3BvcnRhbGZvbGRlci80ZWZhODk0My02MTQ0LWI3ZTUtYjE2Mi0yMzNkYTVmMGYyZWI"}},{"id":"h1_800w_58h_58lead","attributes":{"color":"#b9895f","content":"a special jewelry "}},{"id":"h2_500w_39h_39lead_vcenter","attributes":{"color":"#594139","content":"M.U JEWELRY"}}],"userActionDetail":[]}}'),ge=(o(3957),o(668)),be={name:"Editor",components:{Toolbar:D,Layer:ue},setup(){const e=2.62;let t=(0,v.iH)(me.h),o=null,n=(0,v.iH)(null),a=(0,v.iH)(null),c=(0,v.iH)(-1),l=(0,v.iH)([]),r=(0,v.iH)(!1),s=(0,v.iH)(!1),d=(0,v.iH)(!1),u=(0,v.iH)([]),m=(0,i.Fl)((()=>l.value));const p=(0,i.Fl)((()=>"Portrait"!==t.value?.attributes?.orientation));let h={beforeWidth:0,widthList:[]};(0,i.bv)((()=>{o=g(),b(),V()})),(0,i.Jd)((()=>{window.removeEventListener("resize",O)}));const g=()=>{let t=p.value?(1920/e).toString():(1080/e).toString(),o=p.value?(1080/e).toString():(1920/e).toString();return new y.fabric.Canvas(n.value,{preserveObjectStacking:!0,stopContextMenu:!0,isDrawingMode:!1,width:t,height:o,centeredScaling:!0,lockUniScaling:!0,allowTouchScrolling:!1})},b=async()=>{let e=L();e.imageResources&&await x(e.imageResources).then((e=>{f(e)})),e.textResources&&await w(e.textResources);let t=o.getObjects();t.forEach((e=>{e.selectable=!1,e.evented=!1})),l.value=t;let n=new y.fabric.ActiveSelection(t,{canvas:o});n.center(),n.destroy(),d.value=!0},f=t=>{t.forEach((t=>{let n=t.layout,i=new y.fabric.Image(t);i.set({originIndex:t.originIndex,crossOrigin:"Anonymous",left:n.origin.x/e,top:n.origin.y/e,width:n.size.width/e,height:n.size.height/e}),o.add(i),o.renderAll(),u.value.push(ge.cloneDeep(i))}))},x=e=>{let t=[],o=0;return new Promise((n=>{e.forEach(((i,a)=>{let c=i.layoutAttributes,l=i.componentAttributes,r=new Image;r.originIndex=i.originIndex,r.index=a,r.src=l.attributes.location,r.layout=c,t.push(r),r.onload=()=>{o+=1,o===e.length&&n(t)}}))}))},w=t=>{t.forEach((t=>{let n=t.componentAttributes,i=t.layoutAttributes;if(n&&i){let a=n.attributes,c=new y.fabric.Textbox(a.content,{originIndex:t.originIndex,fill:a.color,textAlign:i["text-align"],fontFamily:i.font,fontSize:Math.round(i.fontsize/e),width:Math.round(i.size.width/e),height:Math.round(i.size.height/e),left:Math.round(i.origin.x/e),top:Math.round(i.origin.y/e),lockMovementX:!0,lockMovementY:!0,lockScalingX:!0,lockScalingY:!0,centeredScaling:!0});o.add(c),o.renderAll()}}))},L=()=>{let e={},o=[],n=[],i=[],a=t.value;if(a){let t=a.layout,c=a.components;t&&c&&(t.forEach(((e,t)=>{let a=e.attributes,l=c.find((t=>t.id===e.id)),r={originIndex:t,layoutAttributes:a,componentAttributes:l};"Background"===e.subtype||"Image"===e.subtype||"Sticker"===e.subtype?o.push(r):"TextBox"===e.subtype?n.push(r):"Shape"===e.subtype&&i.push(r)})),e.imageResources=o,e.textResources=n)}return e},_=e=>{let t=e.selected[0],o=t.originIndex;a.value=t,r.value=!!t.text,c.value=o},T=e=>{let t=e.e.deltaY,n=o.getZoom();t>0?n-=.1:n+=.1,n>20&&(n=10),n<.5&&(n=.5),o.zoomToPoint({x:e.e.offsetX,y:e.e.offsetY},n),e.e.preventDefault(),e.e.stopPropagation()},z=()=>{o.setViewportTransform([1,0,0,1,0,0])},M=()=>{c.value=-1,a.value=null,r.value=!1},Y=e=>{o.getActiveObject().set("fill",e),o.renderAll()},Z=e=>{o.getActiveObject().set("fontFamily",e),o.renderAll()},k=t=>{o.getActiveObject().set("fontSize",Math.round(t/e)),o.renderAll()},I=e=>{o.setActiveObject(o.item(e)),o.renderAll()},C=e=>{o.fire("text:changed",{target:o.getActiveObject()})},N=e=>{let t=o.item(c.value),n=t.getBoundingRect();console.log(n),a.value.setSrc(e.base64Image,(()=>{a.value.left=n.left,a.value.top=n.top,a.value.width=n.width,a.value.height=n.height})),a.value.origin=t,o.renderAll()},j=e=>{console.log(e);let t=o.item(c.value);t.set(e),o.renderAll(),m.value[c.value].changeMode=!1,c.value=-1},O=()=>{let e=o.width;o.getObjects().forEach((t=>{t.set({left:t.getBoundingRect().left*o.width/e+(t.left-t.getBoundingRect().left)}),t.setCoords()})),o.calcOffset(),o.renderAll()},V=()=>{o.on({"selection:updated":_,"selection:created":_}),o.on("selection:cleared",M),o.on("mouse:wheel",T),o.on("mouse:dblclick",z),o.on("text:changed",D)},D=e=>{let t=e.target,o=t.width-20,n=t.calcTextWidth(),i=t.text?.length||0,a=h.widthList.findIndex((e=>e===i));const c=6;if(i<h.widthList[0])return t.fontSize+=h.widthList.length,void(h.widthList=[]);a>-1?(t.fontSize+=1,h.widthList.splice(a,1)):o<=n&&i>h.beforeWidth&&c<=t.fontSize&&(h.widthList.push(i),t.fontSize-=1),h.beforeWidth=i},S=()=>{let e=o.toDataURL({format:"jpeg",quality:1});console.log(e)},G=e=>{d.value=!1,o.getObjects().forEach((e=>{o.remove(e)})),"L"===e?t.value=me.h:"S"===e?t.value=he.h:"P"===e&&(t.value=pe.h),o=g(),b(),V(),u.value=[]};return{isLandscape:p,canvasRef:n,showTools:r,editMode:s,activeObject:a,activeObjectIndex:c,changeColor:Y,changeFont:Z,changeFontSize:k,componentList:m,originImageResources:u,isReady:d,selectObject:I,changeTextBox:C,changeImage:N,resetImage:j,onClickSaveToImage:S,onChangeOrientation:G}}};const ve=(0,z.Z)(be,[["render",b],["__scopeId","data-v-9a9fc2f8"]]);var ye=ve;O()(be,"components",{QBtn:ee.Z});var fe={name:"App",components:{Editor:ye},setup(){return{}}};const xe=(0,z.Z)(fe,[["render",a]]);var we=xe,Le=o(8029),_e=o(9457),Te={config:{},plugins:{Dialog:_e.Z}};const ze=(0,n.ri)(we);ze.use(Le.Z,Te),ze.mount("#app")},4960:function(){},6759:function(){},6272:function(){}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(l=!1,a<c&&(c=a));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,c=n[0],l=n[1],r=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(r)var d=r(o)}for(t&&t(n);s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkwebapp_svg_editor"]=self["webpackChunkwebapp_svg_editor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8312)}));n=o.O(n)})();
//# sourceMappingURL=app.6b1f0301.js.map