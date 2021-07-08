var $jscomp={scope:{},findInternal:function(t,e,a){t instanceof String&&(t=String(t));for(var n=t.length,r=0;r<n;r++){var s=t[r];if(e.call(a,s,r,t))return{i:r,v:s}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,a){if(a.get||a.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=a.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(t,e,a,n){if(e){for(a=$jscomp.global,t=t.split("."),n=0;n<t.length-1;n++){var r=t[n];r in a||(a[r]={}),a=a[r]}t=t[t.length-1],n=a[t],e=e(n),e!=n&&null!=e&&$jscomp.defineProperty(a,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.find",function(t){return t||function(t,e){return $jscomp.findInternal(this,t,e).v}},"es6-impl","es3"),function(t,e,a){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(e||a)}(function(t){var e=function(e,a,n){var r={invalid:[],getCaret:function(){try{var t,a=0,n=e.get(0),s=document.selection,i=n.selectionStart;return s&&-1===navigator.appVersion.indexOf("MSIE 10")?(t=s.createRange(),t.moveStart("character",-r.val().length),a=t.text.length):(i||"0"===i)&&(a=i),a}catch(t){}},setCaret:function(t){try{if(e.is(":focus")){var a,n=e.get(0);n.setSelectionRange?n.setSelectionRange(t,t):(a=n.createTextRange(),a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select())}}catch(t){}},events:function(){e.on("keydown.mask",function(t){e.data("mask-keycode",t.keyCode||t.which),e.data("mask-previus-value",e.val()),e.data("mask-previus-caret-pos",r.getCaret()),r.maskDigitPosMapOld=r.maskDigitPosMap}).on(t.jMaskGlobals.useInput?"input.mask":"keyup.mask",r.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){e.keydown().keyup()},100)}).on("change.mask",function(){e.data("changed",!0)}).on("blur.mask",function(){o===r.val()||e.data("changed")||e.trigger("change"),e.data("changed",!1)}).on("blur.mask",function(){o=r.val()}).on("focus.mask",function(e){!0===n.selectOnFocus&&t(e.target).select()}).on("focusout.mask",function(){n.clearIfNotMatch&&!s.test(r.val())&&r.val("")})},getRegexMask:function(){for(var t,e,n,r,s=[],o=0;o<a.length;o++)(t=i.translation[a.charAt(o)])?(e=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),n=t.optional,(t=t.recursive)?(s.push(a.charAt(o)),r={digit:a.charAt(o),pattern:e}):s.push(n||t?e+"?":e)):s.push(a.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return s=s.join(""),r&&(s=s.replace(new RegExp("("+r.digit+"(.*"+r.digit+")?)"),"($1)?").replace(new RegExp(r.digit,"g"),r.pattern)),new RegExp(s)},destroyEvents:function(){e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(t){var a=e.is("input")?"val":"text";return 0<arguments.length?(e[a]()!==t&&e[a](t),a=e):a=e[a](),a},calculateCaretPosition:function(){var t=e.data("mask-previus-value")||"",a=r.getMasked(),n=r.getCaret();if(t!==a){var s,i=e.data("mask-previus-caret-pos")||0,a=a.length,o=t.length,c=t=0,l=0,u=0;for(s=n;s<a&&r.maskDigitPosMap[s];s++)c++;for(s=n-1;0<=s&&r.maskDigitPosMap[s];s--)t++;for(s=n-1;0<=s;s--)r.maskDigitPosMap[s]&&l++;for(s=i-1;0<=s;s--)r.maskDigitPosMapOld[s]&&u++;n>o?n=a:i>=n&&i!==o?r.maskDigitPosMapOld[n]||(i=n,n=n-(u-l)-t,r.maskDigitPosMap[n]&&(n=i)):n>i&&(n=n+(l-u)+c)}return n},behaviour:function(a){a=a||window.event,r.invalid=[];var n=e.data("mask-keycode");if(-1===t.inArray(n,i.byPassKeys)){var n=r.getMasked(),s=r.getCaret();return setTimeout(function(){r.setCaret(r.calculateCaretPosition())},10),r.val(n),r.setCaret(s),r.callbacks(a)}},getMasked:function(t,e){var s,o,c=[],l=void 0===e?r.val():e+"",u=0,f=a.length,p=0,d=l.length,h=1,v="push",m=-1,g=0,k=[];n.reverse?(v="unshift",h=-1,s=0,u=f-1,p=d-1,o=function(){return-1<u&&-1<p}):(s=f-1,o=function(){return u<f&&p<d});for(var y;o();){var b=a.charAt(u),M=l.charAt(p),j=i.translation[b];j?(M.match(j.pattern)?(c[v](M),j.recursive&&(-1===m?m=u:u===s&&(u=m-h),s===m&&(u-=h)),u+=h):M===y?(g--,y=void 0):j.optional?(u+=h,p-=h):j.fallback?(c[v](j.fallback),u+=h,p-=h):r.invalid.push({p:p,v:M,e:j.pattern}),p+=h):(t||c[v](b),M===b?(k.push(p),p+=h):(y=b,k.push(p+g),g++),u+=h)}return l=a.charAt(s),f!==d+1||i.translation[l]||c.push(l),c=c.join(""),r.mapMaskdigitPositions(c,k,d),c},mapMaskdigitPositions:function(t,e,a){for(t=n.reverse?t.length-a:0,r.maskDigitPosMap={},a=0;a<e.length;a++)r.maskDigitPosMap[e[a]+t]=1},callbacks:function(t){var s=r.val(),i=s!==o,c=[s,t,e,n],l=function(t,e,a){"function"==typeof n[t]&&e&&n[t].apply(this,a)};l("onChange",!0===i,c),l("onKeyPress",!0===i,c),l("onComplete",s.length===a.length,c),l("onInvalid",0<r.invalid.length,[s,t,e,r.invalid,n])}};e=t(e);var s,i=this,o=r.val();a="function"==typeof a?a(r.val(),void 0,e,n):a,i.mask=a,i.options=n,i.remove=function(){var t=r.getCaret();return r.destroyEvents(),r.val(i.getCleanVal()),r.setCaret(t),e},i.getCleanVal=function(){return r.getMasked(!0)},i.getMaskedVal=function(t){return r.getMasked(!1,t)},i.init=function(o){if(o=o||!1,n=n||{},i.clearIfNotMatch=t.jMaskGlobals.clearIfNotMatch,i.byPassKeys=t.jMaskGlobals.byPassKeys,i.translation=t.extend({},t.jMaskGlobals.translation,n.translation),i=t.extend(!0,{},i,n),s=r.getRegexMask(),o)r.events(),r.val(r.getMasked());else{n.placeholder&&e.attr("placeholder",n.placeholder),e.data("mask")&&e.attr("autocomplete","off"),o=0;for(var c=!0;o<a.length;o++){var l=i.translation[a.charAt(o)];if(l&&l.recursive){c=!1;break}}c&&e.attr("maxlength",a.length),r.destroyEvents(),r.events(),o=r.getCaret(),r.val(r.getMasked()),r.setCaret(o)}},i.init(!e.is("input"))};t.maskWatchers={};var a=function(){var a=t(this),r={},s=a.attr("data-mask");if(a.attr("data-mask-reverse")&&(r.reverse=!0),a.attr("data-mask-clearifnotmatch")&&(r.clearIfNotMatch=!0),"true"===a.attr("data-mask-selectonfocus")&&(r.selectOnFocus=!0),n(a,s,r))return a.data("mask",new e(this,s,r))},n=function(e,a,n){n=n||{};var r=t(e).data("mask"),s=JSON.stringify;e=t(e).val()||t(e).text();try{return"function"==typeof a&&(a=a(e)),"object"!=typeof r||s(r.options)!==s(n)||r.mask!==a}catch(t){}},r=function(t){var e,a=document.createElement("div");return t="on"+t,e=t in a,e||(a.setAttribute(t,"return;"),e="function"==typeof a[t]),e};t.fn.mask=function(a,r){r=r||{};var s=this.selector,i=t.jMaskGlobals,o=i.watchInterval,i=r.watchInputs||i.watchInputs,c=function(){if(n(this,a,r))return t(this).data("mask",new e(this,a,r))};return t(this).each(c),s&&""!==s&&i&&(clearInterval(t.maskWatchers[s]),t.maskWatchers[s]=setInterval(function(){t(document).find(s).each(c)},o)),this},t.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},t.fn.unmask=function(){return clearInterval(t.maskWatchers[this.selector]),delete t.maskWatchers[this.selector],this.each(function(){var e=t(this).data("mask");e&&e.remove().removeData("mask")})},t.fn.cleanVal=function(){return this.data("mask").getCleanVal()},t.applyDataMask=function(e){e=e||t.jMaskGlobals.maskElements,(e instanceof t?e:t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(a)},r={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&r("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}},t.jMaskGlobals=t.jMaskGlobals||{},r=t.jMaskGlobals=t.extend(!0,{},r,t.jMaskGlobals),r.dataMask&&t.applyDataMask(),setInterval(function(){t.jMaskGlobals.watchDataMask&&t.applyDataMask()},r.watchInterval)},window.jQuery,window.Zepto),function(t){"use strict";({initialized:!1,initialize:function(){this.initialized||(this.initialized=!0,this.build())},build:function(){this.initFormOuvidoria()},initFormOuvidoria:function(){var e=t("#form-ouvidoria"),a=1;if(e.length){var n=function(t){return t.replace(/\D/g,"").length<12?"000.000.000-009":"00.000.000/0000-00"},r={clearIfNotMatch:!0,onKeyPress:function(t,e,a,r){a.mask(n.apply({},arguments),r)}};e.find("#ctt_cpf_cnpj").mask(n,r),e.find("#ctt_telefone").mask("(00) 0000-00009",{clearIfNotMatch:!0}),e.find("#ctt_sigiloso").change(function(){t(this).is(":checked")?e.find(".hide-if-secret").hide():e.find(".hide-if-secret").show()}),e.find("#btn-add-attachment").click(function(){a++,e.find(".anexo_"+a).show(),a>=3&&(t(this).prop("disabled",!0),t(this).parent().hide())}),e.submit(function(a){a.preventDefault(),e.find("button[type=submit]").prop("disabled",!0),e.find(".alert-danger").html("").hide();var n=new FormData(e[0]),r=null;return n.set("ctt_cpf_cnpj",e.find("#ctt_cpf_cnpj").val().replace(/[^0-9]/g,"")),n.set("ctt_telefone",e.find("#ctt_telefone").val().replace(/[^0-9]/g,"")),t.ajax({type:"POST",url:"/ajax/contato",enctype:"multipart/form-data",data:n,processData:!1,contentType:!1,cache:!1,timeout:6e5,success:function(a){r=a.data.protocolo,document.getElementById("numeroProtocolo").innerHTML=r,e.hide().remove(),t("#alert-ouvidoria").show()},error:function(t){var a="";if(422==t.status)for(var n in t.responseJSON.data)a+=a?"<br>":"",a+=t.responseJSON.data[n];else a=t.responseJSON.message?t.responseJSON.message:"Ocorreu um erro ao tentar processar sua solicitação.";e.find(".alert-danger").html(a).show(),e.find("button[type=submit]").prop("disabled",!1)}}),!1})}}}).initialize()}(jQuery);