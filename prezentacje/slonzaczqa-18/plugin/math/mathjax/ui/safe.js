(()=>{var t,e,r,n,a,i={306:function(t,e){e.q=void 0,e.q="3.2.2"},63:function(t,e,r){var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,i=r.call(t),o=[];try{for(;(void 0===e||0<e--)&&!(n=i.next()).done;)o.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},l=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||((n=n||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&n>=t.length?void 0:t)&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},f=(Object.defineProperty(e,"__esModule",{value:!0}),e.SafeHandler=e.SafeMathDocumentMixin=void 0,r(477));function u(t){var e=(t=>{function e(){for(var e,r,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(this,l([],o(n),!1))||this,f=(i.safe=new i.options.SafeClass(i,i.options.safeOptions),i.constructor.ProcessBits);f.has("safe")||f.allocate("safe");try{for(var u=s(i.inputJax),p=u.next();!p.done;p=u.next()){var c=p.value;c.name.match(/MathML/)?(c.mathml.filterAttribute=i.safe.mmlAttribute.bind(i.safe),c.mathml.filterClassList=i.safe.mmlClassList.bind(i.safe)):c.name.match(/TeX/)&&c.postFilters.add(i.sanitize.bind(c),-5.5)}}catch(t){e={error:t}}finally{try{p&&!p.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}return i}return a(e,t),e.prototype.sanitize=function(t){t.math.root=this.parseOptions.root,t.document.safe.sanitize(t.math,t.document)},e})(t);return e.OPTIONS=i(i({},t.OPTIONS),{safeOptions:i({},f.Safe.OPTIONS),SafeClass:f.Safe}),e}e.SafeMathDocumentMixin=u,e.SafeHandler=function(t){return t.documentClass=u(t.documentClass),t}},509:function(t,e,r){var n=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&n>=t.length?void 0:t)&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},a=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,i=r.call(t),o=[];try{for(;(void 0===e||0<e--)&&!(n=i.next()).done;)o.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},i=(Object.defineProperty(e,"__esModule",{value:!0}),e.SafeMethods=void 0,r(914));e.SafeMethods={filterURL:function(t,e){var r=(e.match(/^\s*([a-z]+):/i)||[null,""])[1].toLowerCase(),n=t.allow.URLs;return"all"===n||"safe"===n&&(t.options.safeProtocols[r]||!r)?e:null},filterClassList:function(t,e){var r=this;return e.trim().replace(/\s\s+/g," ").split(/ /).map(function(e){return r.filterClass(t,e)||""}).join(" ").trim().replace(/\s\s+/g,"")},filterClass:function(t,e){var r=t.allow.classes;return"all"===r||"safe"===r&&e.match(t.options.classPattern)?e:null},filterID:function(t,e){var r=t.allow.cssIDs;return"all"===r||"safe"===r&&e.match(t.options.idPattern)?e:null},filterStyles:function(t,e){var r,a,i,o;if("all"!==t.allow.styles){if("safe"!==t.allow.styles)return null;var l=t.adaptor,s=t.options;try{var f=l.node("div",{style:e}),u=l.node("div");try{for(var p=n(Object.keys(s.safeStyles)),c=p.next();!c.done;c=p.next()){var h=c.value;if(s.styleParts[h])try{i=void 0;for(var d=n(["Top","Right","Bottom","Left"]),y=d.next();!y.done;y=d.next()){var m,v=h+y.value;(m=this.filterStyle(t,v,f))&&l.setStyle(u,v,m)}}catch(t){i={error:t}}finally{try{y&&!y.done&&(o=d.return)&&o.call(d)}finally{if(i)throw i.error}}else(m=this.filterStyle(t,h,f))&&l.setStyle(u,h,m)}}catch(t){r={error:t}}finally{try{c&&!c.done&&(a=p.return)&&a.call(p)}finally{if(r)throw r.error}}e=l.allStyles(u)}catch(t){e=""}}return e},filterStyle:function(t,e,r){var a,n=t.adaptor.getStyle(r,e);return!("string"!=typeof n||""===n||n.match(/^\s*calc/)||n.match(/javascript:/)&&!t.options.safeProtocols.javascript||n.match(/data:/)&&!t.options.safeProtocols.data)&&(a=e.replace(/Top|Right|Left|Bottom/,""),t.options.safeStyles[e]||t.options.safeStyles[a])?this.filterStyleValue(t,e,n,r):null},filterStyleValue:function(t,e,r,n){var i,a=t.options.styleLengths[e];return a?"string"!=typeof a?this.filterStyleLength(t,e,r):(i=this.filterStyleLength(t,a,t.adaptor.getStyle(n,a)))?(t.adaptor.setStyle(n,a,i),t.adaptor.getStyle(n,e)):null:r},filterStyleLength:function(t,e,r){var n,s,o;return r.match(/^(.+)(em|ex|ch|rem|px|mm|cm|in|pt|pc|%)$/)?(n=(0,i.length2em)(r,1),o=t.options.styleLengths[e],s=(o=a(Array.isArray(o)?o:[-t.options.lengthMax,t.options.lengthMax],2))[0],o=o[1],s<=n&&n<=o?r:(n<s?s:o).toFixed(3).replace(/\.?0+$/,"")+"em"):null},filterFontSize:function(t,e){return this.filterStyleLength(t,"fontSize",e)},filterSizeMultiplier:function(t,e){var r=a(t.options.scriptsizemultiplierRange||[-1/0,1/0],2),n=r[0];return Math.min(r[1],Math.max(n,parseFloat(e))).toString()},filterScriptLevel:function(t,e){var r=a(t.options.scriptlevelRange||[-1/0,1/0],2),n=r[0];return Math.min(r[1],Math.max(n,parseInt(e))).toString()},filterData:function(t,e,r){return r.match(t.options.dataPattern)?e:null}}},477:function(t,e,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&n>=t.length?void 0:t)&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},i=(Object.defineProperty(e,"__esModule",{value:!0}),e.Safe=void 0,r(77)),o=r(509),l=(()=>{function t(t,e){this.filterAttributes=new Map([["href","filterURL"],["src","filterURL"],["altimg","filterURL"],["class","filterClassList"],["style","filterStyles"],["id","filterID"],["fontsize","filterFontSize"],["mathsize","filterFontSize"],["scriptminsize","filterFontSize"],["scriptsizemultiplier","filterSizeMultiplier"],["scriptlevel","filterScriptLevel"],["data-","filterData"]]),this.filterMethods=n({},o.SafeMethods),this.adaptor=t.adaptor,this.options=e,this.allow=this.options.allow}return t.prototype.sanitize=function(t,e){try{t.root.walkTree(this.sanitizeNode.bind(this))}catch(r){e.options.compileError(e,t,r)}},t.prototype.sanitizeNode=function(t){var e,r,n=t.attributes.getAllAttributes();try{for(var i=a(Object.keys(n)),o=i.next();!o.done;o=i.next()){var f,l=o.value,s=this.filterAttributes.get(l);s&&((f=this.filterMethods[s](this,n[l]))?f!==("number"==typeof f?parseFloat(n[l]):n[l])&&(n[l]=f):delete n[l])}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}},t.prototype.mmlAttribute=function(t,e){var r;return"class"===t?null:(r=this.filterAttributes.get(t)||("data-"===t.substr(0,5)?this.filterAttributes.get("data-"):null))?"number"==typeof(r=this.filterMethods[r](this,e,t))||"boolean"==typeof r?String(r):r:e},t.prototype.mmlClassList=function(t){var e=this;return t.map(function(t){return e.filterMethods.filterClass(e,t)}).filter(function(t){return null!==t})},t.OPTIONS={allow:{URLs:"safe",classes:"safe",cssIDs:"safe",styles:"safe"},lengthMax:3,scriptsizemultiplierRange:[.6,1],scriptlevelRange:[-2,2],classPattern:/^mjx-[-a-zA-Z0-9_.]+$/,idPattern:/^mjx-[-a-zA-Z0-9_.]+$/,dataPattern:/^data-mjx-/,safeProtocols:(0,i.expandable)({http:!0,https:!0,file:!0,javascript:!1,data:!1}),safeStyles:(0,i.expandable)({color:!0,backgroundColor:!0,border:!0,cursor:!0,margin:!0,padding:!0,textShadow:!0,fontFamily:!0,fontSize:!0,fontStyle:!0,fontWeight:!0,opacity:!0,outline:!0}),styleParts:(0,i.expandable)({border:!0,padding:!0,margin:!0,outline:!0}),styleLengths:(0,i.expandable)({borderTop:"borderTopWidth",borderRight:"borderRightWidth",borderBottom:"borderBottomWidth",borderLeft:"borderLeftWidth",paddingTop:!0,paddingRight:!0,paddingBottom:!0,paddingLeft:!0,marginTop:!0,marginRight:!0,marginBottom:!0,marginLeft:!0,outlineTop:!0,outlineRight:!0,outlineBottom:!0,outlineLeft:!0,fontSize:[.707,1.44]})},t})();e.Safe=l},723:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},77:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.util.Options.isObject,e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.OPTIONS=MathJax._.util.Options.OPTIONS,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions,e.lookup=MathJax._.util.Options.lookup},914:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.BIGDIMEN=MathJax._.util.lengths.BIGDIMEN,e.UNITS=MathJax._.util.lengths.UNITS,e.RELUNITS=MathJax._.util.lengths.RELUNITS,e.MATHSPACE=MathJax._.util.lengths.MATHSPACE,e.length2em=MathJax._.util.lengths.length2em,e.percent=MathJax._.util.lengths.percent,e.em=MathJax._.util.lengths.em,e.emRounded=MathJax._.util.lengths.emRounded,e.px=MathJax._.util.lengths.px}},o={};function l(t){var e=o[t];return void 0!==e||(e=o[t]={exports:{}},i[t].call(e.exports,e,e.exports,l)),e.exports}t=l(723),e=l(306),r=l(63),n=l(509),a=l(477),MathJax.loader&&MathJax.loader.checkVersion("ui/safe",e.q,"ui"),(0,t.r8)({_:{ui:{safe:{SafeHandler:r,SafeMethods:n,safe:a}}}}),MathJax.startup&&"undefined"!=typeof window&&MathJax.startup.extendHandler(function(t){return(0,r.SafeHandler)(t)})})();