!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"/SBQ":function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return c});var o=i("MMSt"),a=i("fXoL"),r=function(){var t=function t(){n(this,t),this.isNextVersion=location.hostname.startsWith("next.material.angular.io"),this.version=o.a};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Sb({type:t,selectors:[["app-footer"]],decls:25,vars:4,consts:[[1,"docs-footer"],[1,"docs-footer-list"],[1,"docs-footer-logo"],[1,"footer-logo"],["src","../../../assets/img/homepage/angular-white-transparent.svg","alt","Angular icon",1,"docs-footer-angular-logo"],["translation-result",""],["href","https://angular.cn"],["translation-origin","off"],["href","https://angular.io"],[1,"docs-footer-version"],["src","../../../assets/img/angular-material-logo.svg","alt","Angular Material icon",1,"angular-material-logo"],["translation-result","",1,"version"],["translation-origin","off",1,"version"],[1,"docs-footer-copyright"],["href","https://github.com/angular/components/blob/master/LICENSE"]],template:function(t,e){1&t&&(a.ec(0,"footer",0),a.ec(1,"div",1),a.ec(2,"div",2),a.ec(3,"div",3),a.Zb(4,"img",4),a.ec(5,"span",5),a.ec(6,"a",6),a.Sc(7,"\u5b66\u4e60 Angular"),a.dc(),a.dc(),a.ec(8,"span",7),a.ec(9,"a",8),a.Sc(10,"Learn Angular"),a.dc(),a.dc(),a.dc(),a.dc(),a.ec(11,"div",9),a.Zb(12,"img",10),a.ec(13,"span",11),a.Sc(14),a.dc(),a.ec(15,"span",12),a.Sc(16),a.dc(),a.dc(),a.ec(17,"div",13),a.ec(18,"div"),a.ec(19,"span"),a.Sc(20,"Powered by Google \xa92010-2020."),a.dc(),a.ec(21,"a",14),a.Sc(22,"Code licensed under an MIT-style License."),a.dc(),a.ec(23,"span"),a.Sc(24,"Documentation licensed under CC BY 4.0."),a.dc(),a.dc(),a.dc(),a.dc(),a.dc()),2&t&&(a.Qb("is-next-version",e.isNextVersion),a.Mb(14),a.Uc("\u5f53\u524d\u7248\u672c\uff1a",e.version,""),a.Mb(2),a.Uc("Current Version: ",e.version,""))},styles:[".docs-footer[_ngcontent-%COMP%]{padding:12px;font-size:12px}.docs-footer-list[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:row wrap;padding:8px}.docs-footer-logo[_ngcontent-%COMP%]{flex:1}.docs-footer-angular-logo[_ngcontent-%COMP%]{height:50px}.docs-footer-version[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex:1}.docs-footer-version[_ngcontent-%COMP%]   .angular-material-logo[_ngcontent-%COMP%]{height:40px;margin:10px 0 10px 16px}.docs-footer-version[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{margin:0 40px}.docs-footer-copyright[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end;flex-direction:column;min-width:225px;margin-top:16px}.docs-footer-copyright[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-end;text-align:center}@media (min-width:885px){.docs-footer-copyright[_ngcontent-%COMP%]{margin-top:0}}.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;line-height:50px;margin:0 40px;vertical-align:bottom}.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;padding:0}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (max-width:884px){.docs-footer-list[_ngcontent-%COMP%]{flex-direction:column}}"]}),t}(),c=function(){var t=function t(){n(this,t)};return t.\u0275mod=a.Wb({type:t}),t.\u0275inj=a.Vb({factory:function(e){return new(e||t)}}),t}()},"4h5w":function(t,i,o){"use strict";o.d(i,"a",function(){return s}),o.d(i,"b",function(){return d});var a=o("fXoL"),r=o("TQAw"),c=0,s=function(){var t=function(){function t(e,i){n(this,t),this.el=e,this.navigationFocusService=i,this.tabindex="-1",this.outline="none",e.nativeElement.id||(e.nativeElement.id="skip-link-target-"+c++),this.navigationFocusService.requestFocusOnNavigation(e.nativeElement),this.navigationFocusService.requestSkipLinkFocus(e.nativeElement)}return e(t,[{key:"ngOnDestroy",value:function(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Yb(a.p),a.Yb(r.a))},t.\u0275dir=a.Tb({type:t,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(t,e){2&t&&(a.hc("tabindex",e.tabindex),a.Nc("outline",e.outline))}}),t}(),d=function(){var t=function t(){n(this,t)};return t.\u0275mod=a.Wb({type:t}),t.\u0275inj=a.Vb({factory:function(e){return new(e||t)}}),t}()},"5ztx":function(t,i,o){"use strict";o.d(i,"a",function(){return c});var a=o("fXoL"),r=o("jhN1"),c=function(){var t=function(){function t(e){n(this,t),this.bodyTitle=e,this._originalTitle="Angular Material UI \u7ec4\u4ef6\u5e93",this._title="",this._titleCn=""}return e(t,[{key:"updateTitle",value:function(){this.bodyTitle.setTitle("".concat(this.titleCn," ").concat(this.title," - Angular Material \u7ec4\u4ef6\u5e93"))}},{key:"title",get:function(){return this._title},set:function(t){this._title=t||"",this.updateTitle()}},{key:"titleCn",get:function(){return this._titleCn},set:function(t){this._titleCn=t||"\u9996\u9875",this.updateTitle()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.ic(r.c))},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Wp6s:function(t,e,i){"use strict";i.d(e,"a",function(){return v}),i.d(e,"b",function(){return h}),i.d(e,"c",function(){return f}),i.d(e,"d",function(){return l}),i.d(e,"e",function(){return b}),i.d(e,"f",function(){return p}),i.d(e,"g",function(){return x}),i.d(e,"h",function(){return g}),i.d(e,"i",function(){return m});var o=i("R1ws"),a=i("FKr1"),r=i("fXoL"),c=["*",[["mat-card-footer"]]],s=["*","mat-card-footer"],d=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],u=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],l=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t}(),m=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t}(),g=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t}(),h=function(){var t=function t(){n(this,t),this.align="start"};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&r.Qb("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t}(),p=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t}(),f=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Tb({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),t}(),v=function(){var t=function t(e){n(this,t),this._animationMode=e};return t.\u0275fac=function(e){return new(e||t)(r.Yb(o.a,8))},t.\u0275cmp=r.Sb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&r.Qb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:s,decls:2,vars:0,template:function(t,e){1&t&&(r.uc(c),r.tc(0),r.tc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t}(),b=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Sb({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:u,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(r.uc(d),r.tc(0),r.ec(1,"div",0),r.tc(2,1),r.dc(),r.tc(3,2))},encapsulation:2,changeDetection:0}),t}(),x=function(){var t=function t(){n(this,t)};return t.\u0275mod=r.Wb({type:t}),t.\u0275inj=r.Vb({factory:function(e){return new(e||t)},imports:[[a.j],a.j]}),t}()},Xm50:function(t,i,o){"use strict";o.d(i,"a",function(){return c});var a=o("fXoL"),r=[{id:"getting-started",name:"Getting started",nameCn:"\u5feb\u901f\u4e0a\u624b",document:"/docs-content/guides/getting-started.html",overview:"Add Angular Material to your project!",overviewCn:"\u628a Angular Material \u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff01"},{id:"schematics",name:"Schematics",nameCn:"\u539f\u7406\u56fe",document:"/docs-content/guides/schematics.html",overview:"Use schematics to quickly generate views with Material Design components.",overviewCn:"\u4f7f\u7528\u539f\u7406\u56fe\u5feb\u901f\u751f\u6210\u5e26\u6709 Material Design \u7ec4\u4ef6\u7684\u89c6\u56fe\u3002"},{id:"theming",name:"Theming Angular Material",nameCn:"Angular Material \u4e3b\u9898",document:"/docs-content/guides/theming.html",overview:"Customize your application with Angular Material's theming system.",overviewCn:"\u4f7f\u7528 Angular Material \u7684\u4e3b\u9898\u4f53\u7cfb\u5b9a\u5236\u4f60\u7684\u5e94\u7528\u3002"},{id:"theming-your-components",name:"Theming your own components",nameCn:"\u4e3a\u4f60\u81ea\u5df1\u7684\u7ec4\u4ef6\u8bbe\u7f6e\u4e3b\u9898",document:"/docs-content/guides/theming-your-components.html",overview:"Use Angular Material's theming system in your own custom components.",overviewCn:"\u5728\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Angular Material \u7684\u4e3b\u9898\u4f53\u7cfb\u3002"},{id:"typography",name:"Customizing Typography",nameCn:"\u81ea\u5b9a\u4e49\u6392\u7248",document:"/docs-content/guides/typography.html",overview:"Configure the typography settings for Angular Material components.",overviewCn:"\u4e3a Angular Material \u7ec4\u4ef6\u914d\u7f6e\u6392\u7248\u8bbe\u7f6e\u3002"},{id:"customizing-component-styles",name:"Customizing component styles",nameCn:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6837\u5f0f",document:"/docs-content/guides/customizing-component-styles.html",overview:"Understand how to approach style customization with Angular Material components.",overviewCn:"\u4e86\u89e3\u5982\u4f55\u5b9a\u5236 Angular Material \u7ec4\u4ef6\u7684\u6837\u5f0f\u3002"},{id:"creating-a-custom-form-field-control",name:"Custom form field control",nameCn:"\u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6",document:"/docs-content/guides/creating-a-custom-form-field-control.html",overview:"Build a custom control that integrates with `<mat-form-field>`.",overviewCn:"\u6784\u5efa\u4e00\u4e2a\u53ef\u4ee5\u548c `<mat-form-field>` \u96c6\u6210\u7684\u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6\u3002"},{id:"elevation",name:"Elevation helpers",nameCn:"\u7eb5\u6df1\u52a9\u624b",document:"/docs-content/guides/elevation.html",overview:"Enhance your components with elevation and depth.",overviewCn:"\u5229\u7528\u7eb5\u6df1\u611f\u5f3a\u5316\u4f60\u7684\u7ec4\u4ef6\u3002"},{id:"creating-a-custom-stepper-using-the-cdk-stepper",name:"Custom stepper using the CdkStepper",nameCn:"\u4f7f\u7528 CdkStepper \u81ea\u5b9a\u4e49\u6b65\u8fdb\u5668",document:"/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html",overview:"Create a custom stepper components using Angular CDK.",overviewCn:"\u4f7f\u7528 Angular CDK \u521b\u5efa\u81ea\u5b9a\u4e49\u6b65\u8fdb\u5668\u7ec4\u4ef6\u3002"},{id:"using-component-harnesses",name:"Testing with component harnesses",nameCn:"\u4f7f\u7528\u7ec4\u4ef6\u6d4b\u8bd5\u5de5\u5177\u8fdb\u884c\u6d4b\u8bd5",document:"/docs-content/guides/using-component-harnesses.html",overview:"Write tests with component harnesses for convenience and meaningful results.",overviewCn:"\u4f7f\u7528\u7ec4\u4ef6\u6d4b\u8bd5\u5de5\u5177\u7f16\u5199\u6d4b\u8bd5\uff0c\u4ee5\u83b7\u5f97\u4fbf\u5229\u6027\uff0c\u5e76\u8f93\u51fa\u66f4\u6709\u610f\u4e49\u7684\u7ed3\u679c\u3002"},{id:"deploy-to-local",name:"Deploy to local",nameCn:"\u90e8\u7f72\u5230\u672c\u5730\u73af\u5883\uff08\u8bd1\u8005\uff09",document:"/docs-content/guides/deploy-to-local.html",overview:"Deploy this document to a local environment for use in an intranet or offline environment",overviewCn:"\u5c06\u672c\u6587\u6863\u90e8\u7f72\u5230\u5c40\u57df\u7f51\u6216\u672c\u5730\u73af\u5883\uff0c\u4ee5\u4fbf\u5728\u4f01\u4e1a\u5185\u7f51\u6216\u8131\u673a\u7b49\u73af\u5883\u4e0b\u4f7f\u7528"}],c=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"getAllItems",value:function(){return r}},{key:"getItemById",value:function(t){return r.find(function(e){return e.id===t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Ub({token:t,factory:t.\u0275fac}),t}()},f0Cb:function(t,i,o){"use strict";o.d(i,"a",function(){return s}),o.d(i,"b",function(){return d});var a=o("8LU1"),r=o("FKr1"),c=o("fXoL"),s=function(){var t=function(){function t(){n(this,t),this._vertical=!1,this._inset=!1}return e(t,[{key:"vertical",get:function(){return this._vertical},set:function(t){this._vertical=Object(a.c)(t)}},{key:"inset",get:function(){return this._inset},set:function(t){this._inset=Object(a.c)(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Sb({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,e){2&t&&(c.Nb("aria-orientation",e.vertical?"vertical":"horizontal"),c.Qb("mat-divider-vertical",e.vertical)("mat-divider-horizontal",!e.vertical)("mat-divider-inset",e.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,e){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),t}(),d=function(){var t=function t(){n(this,t)};return t.\u0275mod=c.Wb({type:t}),t.\u0275inj=c.Vb({factory:function(e){return new(e||t)},imports:[[r.j],r.j]}),t}()},kpJg:function(t,i,o){"use strict";o.r(i),o.d(i,"Homepage",function(){return L}),o.d(i,"HomepageModule",function(){return j});var a,r=o("tBat"),c=o("bTqV"),s=o("/SBQ"),d=o("tyNb"),u=o("4h5w"),l=o("NFeN"),m=o("f0Cb"),g=o("Wp6s"),h=o("Xm50"),p=o("ofXK"),f=o("fXoL"),v=((a=function t(){n(this,t)}).\u0275mod=f.Wb({type:a}),a.\u0275inj=f.Vb({factory:function(t){return new(t||a)},imports:[[p.c,l.b,c.c]]}),a),b=o("8W4w"),x=o("5ztx"),w=o("u47x"),y=["contentWrapper"];function C(t,e){if(1&t){var n=f.fc();f.ec(0,"button",5),f.lc("click",function(){return f.Gc(n),f.pc().previous()}),f.ec(1,"mat-icon"),f.Sc(2,"navigate_before"),f.dc(),f.dc()}}function M(t,e){if(1&t){var n=f.fc();f.ec(0,"button",6),f.lc("click",function(){return f.Gc(n),f.pc().next()}),f.ec(1,"mat-icon"),f.Sc(2,"navigate_next"),f.dc(),f.dc()}}var _,P,O=["*"],k=((P=function(){function t(e,i){n(this,t),this.carousel=e,this.element=i,this.role="listitem",this.width=this.carousel.itemWidth,this.tabindex="-1"}return e(t,[{key:"focus",value:function(){this.element.nativeElement.focus({preventScroll:!0})}}]),t}()).\u0275fac=function(t){return new(t||P)(f.Yb(S),f.Yb(f.p))},P.\u0275dir=f.Tb({type:P,selectors:[["","carousel-item",""]],hostVars:4,hostBindings:function(t,e){2&t&&(f.hc("tabindex",e.tabindex),f.Nb("role",e.role),f.Nc("width",e.width,"px"))}}),P),S=((_=function(){function t(e){n(this,t),this.element=e,this.position=0,this.showPrevArrow=!1,this.showNextArrow=!0,this._index=0}return e(t,[{key:"onKeydown",value:function(t){switch(t.key){case"Tab":this.focusKeyManager.activeItem||(this.focusKeyManager.setFirstItemActive(),this._updateItemTabIndices());break;case"ArrowLeft":this.focusKeyManager.activeItemIndex===this.index&&this.previous(),this.focusKeyManager.setPreviousItemActive(),this._updateItemTabIndices();break;case"ArrowRight":this.focusKeyManager.activeItemIndex===this.index+this.visibleItems-1&&this.next(),this.focusKeyManager.setNextItemActive(),this._updateItemTabIndices()}}},{key:"onResize",value:function(){this._resizeCarousel()}},{key:"ngAfterContentInit",value:function(){var t=this;this.focusKeyManager=new w.g(this.items),setTimeout(function(){t.itemsArray=t.items.toArray(),t.shiftWidth=t.items.first.element.nativeElement.clientWidth,t._resizeCarousel()})}},{key:"next",value:function(){this.showNextArrow&&this._shiftItems(1)}},{key:"previous",value:function(){this.showPrevArrow&&this._shiftItems(-1)}},{key:"_updateItemTabIndices",value:function(){var t=this;this.items.forEach(function(e){e.tabindex=e===t.focusKeyManager.activeItem?"0":"-1"})}},{key:"_shiftItems",value:function(t){var e=this;this.index+=t,this.position+=t*this.shiftWidth,this.items.forEach(function(t){t.element.nativeElement.style.transform="translateX(-".concat(e.position,"px)")})}},{key:"_resizeCarousel",value:function(){var t=Math.max(1,Math.min(Math.floor(this.element.nativeElement.offsetWidth/this.shiftWidth),this.items.length));if(this.visibleItems!==t){if(this.visibleItems<t){var e=this.index-(this.items.length-this.visibleItems)+1;e>0&&this._shiftItems(-e)}else this.focusKeyManager.activeItemIndex&&this.focusKeyManager.activeItemIndex>this.index+t-1&&(this.focusKeyManager.setPreviousItemActive(),this._updateItemTabIndices());this.visibleItems=t,this.showNextArrow=this.index<this.items.length-this.visibleItems}this.wrapper.nativeElement.style.width=this.visibleItems*this.shiftWidth+"px"}},{key:"index",get:function(){return this._index},set:function(t){this._index=t,this.showPrevArrow=t>0,this.showNextArrow=t<this.items.length-this.visibleItems}}]),t}()).\u0275fac=function(t){return new(t||_)(f.Yb(f.p))},_.\u0275cmp=f.Sb({type:_,selectors:[["app-carousel"]],contentQueries:function(t,e,n){var i;1&t&&f.Rb(n,k,!1),2&t&&f.Bc(i=f.mc())&&(e.items=i)},viewQuery:function(t,e){var n;1&t&&f.Wc(y,!0),2&t&&f.Bc(n=f.mc())&&(e.wrapper=n.first)},inputs:{ariaLabel:["aria-label","ariaLabel"],itemWidth:"itemWidth"},ngContentSelectors:O,decls:6,vars:4,consts:[["role","region",1,"docs-carousel-content-wrapper",3,"keyup","resize"],["contentWrapper",""],["aria-hidden","true","tabindex","-1","class","docs-carousel-nav docs-carousel-nav-prev","mat-mini-fab","","aria-label","previous",3,"click",4,"ngIf"],["role","list","tabindex","0",1,"docs-carousel-content"],["aria-hidden","true","tabindex","-1","class","docs-carousel-nav docs-carousel-nav-next","mat-mini-fab","","aria-label","next",3,"click",4,"ngIf"],["aria-hidden","true","tabindex","-1","mat-mini-fab","","aria-label","previous",1,"docs-carousel-nav","docs-carousel-nav-prev",3,"click"],["aria-hidden","true","tabindex","-1","mat-mini-fab","","aria-label","next",1,"docs-carousel-nav","docs-carousel-nav-next",3,"click"]],template:function(t,e){1&t&&(f.uc(),f.ec(0,"div",0,1),f.lc("keyup",function(t){return e.onKeydown(t)})("resize",function(){return e.onResize()},!1,f.Fc),f.Qc(2,C,3,0,"button",2),f.ec(3,"div",3),f.tc(4),f.dc(),f.Qc(5,M,3,0,"button",4),f.dc()),2&t&&(f.Nc("min-width",e.shiftWidth+"px"),f.Mb(2),f.vc("ngIf",e.showPrevArrow),f.Mb(3),f.vc("ngIf",e.showNextArrow))},directives:[p.t,c.b,l.a],styles:["app-carousel{display:flex;align-items:center;justify-content:center;margin:0 40px}.docs-carousel-content{display:flex;flex-direction:row;overflow:hidden;outline:none}.docs-carousel-content-wrapper{position:relative}[carousel-item]{flex-shrink:0;transition:transform .5s ease-in-out}.docs-carousel-nav{position:absolute;top:50%;transform:translateY(-50%)}.docs-carousel-nav-prev{left:-40px}.docs-carousel-nav-next{right:-40px}"],encapsulation:2}),_);function A(t,e){if(1&t&&(f.ec(0,"a",19),f.ec(1,"div",20),f.Zb(2,"img",21),f.dc(),f.ec(3,"p"),f.Sc(4),f.ec(5,"small"),f.Sc(6),f.dc(),f.dc(),f.dc()),2&t){var n=e.$implicit;f.xc("routerLink","/components/",n.id,""),f.Mb(2),f.xc("src","../../../assets/screenshots/",n.id,".scene.png",f.Ic),f.Mb(2),f.Uc("",n.nameCn,"\xa0"),f.Mb(2),f.Tc(n.name)}}function I(t,e){if(1&t&&(f.ec(0,"a",22),f.ec(1,"mat-card",23),f.ec(2,"mat-card-title"),f.Sc(3),f.dc(),f.Zb(4,"div",24),f.ec(5,"mat-card-content",25),f.Sc(6),f.dc(),f.dc(),f.dc()),2&t){var n=e.$implicit;f.xc("routerLink","/guide/",n.id,""),f.Mb(3),f.Tc(n.nameCn),f.Mb(3),f.Uc(" ",n.overviewCn," ")}}var T,z,W=["datepicker","input","slide-toggle","slider","button"],L=((T=function(){function t(e,i){n(this,t),this._componentPageTitle=e,this.guideItems=i,this.isNextVersion=location.hostname.startsWith("next.material.angular.io")}return e(t,[{key:"ngOnInit",value:function(){this._componentPageTitle.title="",this._componentPageTitle.titleCn=""}},{key:"getTopComponents",value:function(){return W.map(function(t){return b.a.components.find(function(e){return e.id===t})})}}]),t}()).\u0275fac=function(t){return new(t||T)(f.Yb(x.a),f.Yb(h.a))},T.\u0275cmp=f.Sb({type:T,selectors:[["app-homepage"]],decls:79,vars:8,consts:[["focusOnNavigation","","aria-label","Get started","id","homepage-header",1,"docs-header-background"],[1,"docs-header-section"],[1,"docs-header-headline"],[1,"mat-h1"],["translation-result",""],["translation-origin","off"],[1,"docs-header-start"],["translation-result","","mat-raised-button","","routerLink","/guide/getting-started",1,"docs-button"],["translation-origin","off","mat-raised-button","","routerLink","/guide/getting-started",1,"docs-button"],[1,"docs-homepage-promo"],[1,"docs-homepage-row","docs-introduction"],[1,"docs-homepage-row-column"],[1,"docs-homepage-featured-components","docs-homepage-carousel-row"],[3,"itemWidth","aria-label"],["carousel-item","","class","docs-featured-components-carousel-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/components",1,"docs-link"],[1,"docs-homepage-guides","docs-homepage-carousel-row"],["carousel-item","","class","docs-homepage-guides-carousel-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/guides",1,"docs-link"],["carousel-item","",1,"docs-featured-components-carousel-item",3,"routerLink"],[1,"docs-homepage-img-container"],["alt","","role","presentation",3,"src"],["carousel-item","",1,"docs-homepage-guides-carousel-item",3,"routerLink"],[1,"docs-homepage-guides-card"],[1,"docs-homepage-guides-card-divider"],[1,"docs-component-category-list-card-summary"]],template:function(t,e){1&t&&(f.ec(0,"header",0),f.ec(1,"div",1),f.ec(2,"div",2),f.ec(3,"h1",3),f.Sc(4,"Angular Material"),f.dc(),f.ec(5,"h2",4),f.Sc(6," Material Design \u7ec4\u4ef6\u5e93 for Angular"),f.dc(),f.ec(7,"h2",5),f.Sc(8," Material Design components for Angular"),f.dc(),f.dc(),f.ec(9,"div",6),f.ec(10,"a",7),f.Sc(11,"\u5feb\u901f\u4e0a\u624b"),f.dc(),f.ec(12,"a",8),f.Sc(13,"Get started"),f.dc(),f.dc(),f.dc(),f.dc(),f.ec(14,"main",9),f.ec(15,"div",10),f.ec(16,"div",11),f.ec(17,"h2",4),f.Sc(18,"\u9ad8\u8d28\u91cf"),f.dc(),f.ec(19,"h2",5),f.Sc(20,"High quality"),f.dc(),f.ec(21,"p",4),f.Sc(22,"\u652f\u6301\u56fd\u9645\u5316\u548c\u65e0\u969c\u788d\u6027\u7684\u7ec4\u4ef6\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u4eba\u8bbe\u8ba1\u3002\u6d4b\u8bd5\u5145\u5206\uff0c\u4fdd\u969c\u6027\u80fd\u548c\u53ef\u9760\u6027\u3002"),f.dc(),f.ec(23,"p",5),f.Sc(24," Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. "),f.dc(),f.ec(25,"p",4),f.Sc(26,"\u76f4\u767d\u7684 API\uff0c\u5728\u5404\u4e2a\u5e73\u53f0\u4e0a\u5177\u6709\u4e00\u81f4\u7684\u884c\u4e3a\u3002"),f.dc(),f.ec(27,"p",5),f.Sc(28,"Straightforward APIs with consistent cross platform behaviour."),f.dc(),f.dc(),f.ec(29,"div",11),f.ec(30,"h2",4),f.Sc(31,"\u591a\u624d\u591a\u827a"),f.dc(),f.ec(32,"h2",5),f.Sc(33,"Versatile"),f.dc(),f.ec(34,"p",4),f.Sc(35,"\u63d0\u4f9b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6784\u5efa\u652f\u6301\u5e38\u7528\u4ea4\u4e92\u6a21\u5f0f\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),f.dc(),f.ec(36,"p",5),f.Sc(37," Provide tools that help developers build their own custom components with common interaction patterns. "),f.dc(),f.ec(38,"p",4),f.Sc(39,"\u53ef\u5728 Material Design \u89c4\u8303\u7684\u6846\u67b6\u5185\u8fdb\u884c\u5b9a\u5236\u3002"),f.dc(),f.ec(40,"p",5),f.Sc(41," Customizable within the bounds of the Material Design specification. "),f.dc(),f.dc(),f.ec(42,"div",11),f.ec(43,"h2",4),f.Sc(44,"\u65e0\u7f1d\u96c6\u6210"),f.dc(),f.ec(45,"h2",5),f.Sc(46,"Frictionless"),f.dc(),f.ec(47,"p",4),f.Sc(48,"\u7531 Angular \u56e2\u961f\u6784\u5efa\uff0c\u4e0e Angular \u65e0\u7f1d\u96c6\u6210"),f.dc(),f.ec(49,"p",5),f.Sc(50," Built by the Angular team to integrate seamlessly with Angular. "),f.dc(),f.ec(51,"p",4),f.Sc(52,"\u4ece\u8349\u7a3f\u9636\u6bb5\u5f00\u59cb\uff0c\u6216\u7a7a\u964d\u5230\u73b0\u6709\u5e94\u7528\u3002"),f.dc(),f.ec(53,"p",5),f.Sc(54," Start from scratch or drop into your existing applications. "),f.dc(),f.dc(),f.dc(),f.Zb(55,"mat-divider"),f.ec(56,"div",12),f.ec(57,"h2",4),f.Sc(58,"\u7279\u6027\u7ec4\u4ef6"),f.dc(),f.ec(59,"h2",5),f.Sc(60,"Featured components"),f.dc(),f.ec(61,"app-carousel",13),f.Qc(62,A,7,4,"a",14),f.dc(),f.ec(63,"a",15),f.Sc(64," \u67e5\u770b\u6240\u6709\u7ec4\u4ef6 "),f.ec(65,"mat-icon"),f.Sc(66,"chevron_right"),f.dc(),f.dc(),f.dc(),f.Zb(67,"mat-divider"),f.ec(68,"div",16),f.Zb(69,"h2",4),f.ec(70,"h2",5),f.Sc(71,"Guides"),f.dc(),f.ec(72,"app-carousel",13),f.Qc(73,I,7,3,"a",17),f.dc(),f.ec(74,"a",18),f.Sc(75," \u67e5\u770b\u6240\u6709\u6307\u5357 "),f.ec(76,"mat-icon"),f.Sc(77,"chevron_right"),f.dc(),f.dc(),f.dc(),f.dc(),f.Zb(78,"app-footer")),2&t&&(f.Qb("is-next-version",e.isNextVersion),f.Mb(61),f.vc("itemWidth",260)("aria-label","Featured components"),f.Mb(1),f.vc("ngForOf",e.getTopComponents()),f.Mb(10),f.vc("itemWidth",260)("aria-label","Guides"),f.Mb(1),f.vc("ngForOf",e.guideItems.getAllItems()))},directives:[u.a,c.a,d.e,m.a,S,p.s,l.a,s.a,k,g.a,g.i,g.d],styles:['.docs-header-background[_ngcontent-%COMP%]{overflow:hidden;position:relative;height:420px}.docs-header-background[_ngcontent-%COMP%]:before{content:"";position:absolute;background-image:url(angular-white-transparent.6504667372b77bd8f80e.svg);background-size:600px;top:0;bottom:0;left:0;right:0;background-repeat:no-repeat;background-position:80% 20px;opacity:.2}.docs-header-section[_ngcontent-%COMP%]{width:90%;position:absolute;z-index:0;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.docs-header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:56px;font-weight:700;line-height:56px;margin:15px 5px}.docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:300;line-height:28px;margin:15px 0 25px}.docs-homepage-promo[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;padding:16px}.docs-homepage-promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.docs-homepage-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;font-weight:400;margin:16px 0;padding:0}.docs-homepage-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;margin:0 0 24px;padding:0}.docs-homepage-promo[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:75%}.docs-homepage-promo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.docs-homepage-row[_ngcontent-%COMP%]{width:75%;display:flex;flex-direction:row;margin:50px 0}.docs-homepage-carousel-row[_ngcontent-%COMP%]{margin:50px 0;width:75%;display:flex;flex-direction:column}.docs-homepage-carousel-row[_ngcontent-%COMP%]   a.docs-link[_ngcontent-%COMP%]{width:100%;text-align:right}.docs-homepage-carousel-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card-divider[_ngcontent-%COMP%]{width:30%;height:5px;margin:15px auto}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-carousel-item[_ngcontent-%COMP%]{padding:15px;display:flex;text-decoration:none}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card.mat-card[_ngcontent-%COMP%]{text-align:center}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{height:35%;display:flex;align-items:center;justify-content:center;font-size:20px}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]{padding:15px;text-align:center}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   .docs-homepage-img-container[_ngcontent-%COMP%]{overflow:hidden;width:259px;height:144px;margin-bottom:10px}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.3s ease-in-out;width:100%}.docs-homepage-row-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 auto;width:30%}.docs-header-start[_ngcontent-%COMP%]{text-align:center;margin:50px 0 0}.docs-header-start[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{font-size:15px}@media (max-width:1200px){.docs-header-background[_ngcontent-%COMP%]{height:330px}.docs-header-background[_ngcontent-%COMP%]:before{background-image:none}}@media (max-width:850px){.docs-header-background[_ngcontent-%COMP%]:before{background-image:none}.docs-introduction[_ngcontent-%COMP%]{flex-direction:column}.docs-homepage-row-column[_ngcontent-%COMP%]{width:100%}}@media (max-width:720px){.docs-header-start[_ngcontent-%COMP%]{margin:15px 0 0}.docs-homepage-carousel-row[_ngcontent-%COMP%], .docs-homepage-row[_ngcontent-%COMP%]{margin:15px 0}}']}),T),N=[{path:"",component:L}],j=((z=function t(){n(this,t)}).\u0275mod=f.Wb({type:z}),z.\u0275inj=f.Vb({factory:function(t){return new(t||z)},providers:[h.a],imports:[[r.a,c.c,s.b,d.f.forChild(N),u.b,l.b,m.b,g.g,p.c,v]]}),z)},tBat:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var o=i("fXoL");i("tk/3");var a=function(){var t=function t(){n(this,t)};return t.\u0275mod=o.Wb({type:t}),t.\u0275inj=o.Vb({factory:function(e){return new(e||t)}}),t}()}}])}();