(()=>{var a,t,e,p={667:function(a,t){t.q=void 0,t.q="3.2.2"},927:function(a,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.UpgreekConfiguration=void 0;var p=e(251),n=e(871),o=e(108);new n.CharacterMap("upgreek",function(a,t){var e=t.attributes||{},e=(e.mathvariant=o.TexConstant.Variant.NORMAL,a.create("token","mi",e,t.char));a.Push(e)},{upalpha:"α",upbeta:"β",upgamma:"γ",updelta:"δ",upepsilon:"ϵ",upzeta:"ζ",upeta:"η",uptheta:"θ",upiota:"ι",upkappa:"κ",uplambda:"λ",upmu:"μ",upnu:"ν",upxi:"ξ",upomicron:"ο",uppi:"π",uprho:"ρ",upsigma:"σ",uptau:"τ",upupsilon:"υ",upphi:"ϕ",upchi:"χ",uppsi:"ψ",upomega:"ω",upvarepsilon:"ε",upvartheta:"ϑ",upvarpi:"ϖ",upvarrho:"ϱ",upvarsigma:"ς",upvarphi:"φ",Upgamma:"Γ",Updelta:"Δ",Uptheta:"Θ",Uplambda:"Λ",Upxi:"Ξ",Uppi:"Π",Upsigma:"Σ",Upupsilon:"Υ",Upphi:"Φ",Uppsi:"Ψ",Upomega:"Ω"}),t.UpgreekConfiguration=p.Configuration.create("upgreek",{handler:{macro:["upgreek"]}})},955:function(a,t){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,t.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},871:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseResult=MathJax._.input.tex.SymbolMap.parseResult,t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},108:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TexConstant=MathJax._.input.tex.TexConstants.TexConstant}},n={};function o(a){var t=n[a];return void 0!==t||(t=n[a]={exports:{}},p[a](t,t.exports,o)),t.exports}a=o(955),t=o(667),e=o(927),MathJax.loader&&MathJax.loader.checkVersion("[tex]/upgreek",t.q,"tex-extension"),(0,a.r8)({_:{input:{tex:{upgreek:{UpgreekConfiguration:e}}}}})})();