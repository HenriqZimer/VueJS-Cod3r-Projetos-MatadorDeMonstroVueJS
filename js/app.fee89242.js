(function(){"use strict";var e={590:function(e,t,n){var o=n(6369),i=function(){var e=this,t=e._self._c;return t("matadorMonstro")},a=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"matador"},[t("panelScores",{attrs:{playerLife:e.playerLife,monsterLife:e.monsterLife}}),t("panelResult",{attrs:{playerLife:e.playerLife,monsterLife:e.monsterLife},on:{eventoGamePai:e.Game}}),t("panelButtons",{attrs:{playerLife:e.playerLife,monsterLife:e.monsterLife},on:{eventoAtaquePai:e.Ataque,eventoEspecialPai:e.Especial,eventoCuraPai:e.Cura,eventoDesistirPai:e.Desistir}})],1)},s=[],l=function(){var e=this,t=e._self._c;return e.playerLife>0&&e.monsterLife>0?t("div",{staticClass:"panel buttons"},[t("btnAtacar",{on:{ataqueClicadoNeto:e.eventoAtaqueFilho}}),t("btnAtaqueEspecial",{on:{especialClicadoNeto:e.eventoEspecialFilho}}),t("btnCurar",{on:{curaClicadoNeto:e.eventoCuraFilho}}),t("btnDesistir",{on:{desistirClicadoNeto:e.eventoDesistirFilho}})],1):e._e()},u=[],c=function(){var e=this,t=e._self._c;return t("buttonDefault",{attrs:{label:"Kaioken Ataque",btnAtaque:""},on:{onClick:e.eventoAtaqueNeto}})},f=[],m=function(){var e=this,t=e._self._c;return t("button",{staticClass:"button",class:{btnNewGame:e.btnNewGame,btnAtaque:e.btnAtaque,btnAtaqueEspecial:e.btnAtaqueEspecial,btnCurar:e.btnCurar,btnDesistir:e.btnDesistir},on:{click:function(t){return e.$emit("onClick",e.label)}}},[e._v(" "+e._s(e.label)+" ")])},p=[],h={props:{label:{},btnNewGame:{type:Boolean},btnAtaque:{type:Boolean},btnAtaqueEspecial:{type:Boolean},btnCurar:{type:Boolean},btnDesistir:{type:Boolean}}},d=h,v=n(1001),b=(0,v.Z)(d,m,p,!1,null,null,null),L=b.exports,_={components:{buttonDefault:L},methods:{eventoAtaqueNeto(){this.$emit("ataqueClicadoNeto")}}},C=_,y=(0,v.Z)(C,c,f,!1,null,null,null),N=y.exports,g=function(){var e=this,t=e._self._c;return t("buttonDefault",{attrs:{label:"Super Kamehameha",btnAtaqueEspecial:""},on:{onClick:e.eventoEspecialNeto}})},D=[],M={components:{buttonDefault:L},methods:{eventoEspecialNeto(){this.$emit("especialClicadoNeto")}}},w=M,Z=(0,v.Z)(w,g,D,!1,null,null,null),A=Z.exports,G=function(){var e=this,t=e._self._c;return t("buttonDefault",{attrs:{label:"Semente dos Deuses",btnCurar:""},on:{onClick:e.eventoCuraNeto}})},k=[],x={components:{buttonDefault:L},methods:{eventoCuraNeto(){this.$emit("curaClicadoNeto")}}},O=x,q=(0,v.Z)(O,G,k,!1,null,null,null),z=q.exports,j=function(){var e=this,t=e._self._c;return t("buttonDefault",{attrs:{label:"Desistir",btnDesistir:""},on:{onClick:e.eventoDesistirNeto}})},P=[],T={components:{buttonDefault:L},methods:{eventoDesistirNeto(){this.$emit("desistirClicadoNeto")}}},E=T,F=(0,v.Z)(E,j,P,!1,null,null,null),J=F.exports,B={props:["playerLife","monsterLife"],components:{btnAtacar:N,btnAtaqueEspecial:A,btnCurar:z,btnDesistir:J},methods:{eventoAtaqueFilho(){this.$emit("eventoAtaquePai")},eventoCuraFilho(){this.$emit("eventoCuraPai")},eventoEspecialFilho(){this.$emit("eventoEspecialPai")},eventoDesistirFilho(){this.$emit("eventoDesistirPai")}}},I=B,Y=(0,v.Z)(I,l,u,!1,null,null,null),$=Y.exports,X=function(){var e=this,t=e._self._c;return e.playerLife<=0||e.monsterLife<=0?t("div",{staticClass:"panel result"},[e.monsterLife<=0?t("div",{staticClass:"win"},[t("p",[e._v("Você Ganhou !!! :)")]),t("img",{attrs:{src:"https://pa1.aminoapps.com/6661/a890882943caf30333aca0fae80207831eaaa8d7_hq.gif"}})]):t("div",{staticClass:"lose"},[t("p",[e._v("Você Perdeu! :(")]),t("img",{attrs:{src:"https://media.tenor.com/X8pkKnPmo58AAAAC/goku-sad.gif"}})]),t("btnNovoJogo",{on:{gameClicadoNeto:e.eventoGameFilho}})],1):e._e()},Q=[],V=function(){var e=this,t=e._self._c;return t("buttonDefault",{attrs:{label:"Novo Game",btnNewGame:""},on:{onClick:e.eventoGameNeto}})},W=[],S={components:{buttonDefault:L},methods:{eventoGameNeto(){this.$emit("gameClicadoNeto")}}},U=S,K=(0,v.Z)(U,V,W,!1,null,null,null),H=K.exports,R={components:{btnNovoJogo:H},props:["playerLife","monsterLife"],methods:{eventoGameFilho(){this.$emit("eventoGamePai")}}},ee=R,te=(0,v.Z)(ee,X,Q,!1,null,null,null),ne=te.exports,oe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"panel scores"},[t("div",{staticClass:"score"},[e._m(0),t("h1",[e._v("Goku")]),t("div",{staticClass:"life-bar"},[t("div",{staticClass:"life",class:{danger:e.playerLife<20},style:{width:e.playerLife+"%"}})]),t("div",[e._v(e._s(e.playerLife)+"%")])]),t("div",{staticClass:"score"},[e._m(1),t("h1",[e._v("Freeza")]),t("div",{staticClass:"life-bar"},[t("div",{staticClass:"life",class:{danger:e.monsterLife<20},style:{width:e.monsterLife+"%"}})]),t("div",[e._v(e._s(e.monsterLife)+"%")])])])},ie=[function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfcca197-3578-4aac-affa-0f78c0bac51c/detnsfd-cb6a28c3-bdcf-46e8-8941-6bb4e94be31d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmY2NhMTk3LTM1NzgtNGFhYy1hZmZhLTBmNzhjMGJhYzUxY1wvZGV0bnNmZC1jYjZhMjhjMy1iZGNmLTQ2ZTgtODk0MS02YmI0ZTk0YmUzMWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XbQ9zX_7vZHlJbe4Hn4zfvDm_sp0QO5Tl_ZfBcAx5NM",width:"247",height:"150"}})])},function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{src:"https://gifimgs.com/animations/anime/dragon-ball-z/Frieza/frieza_14.gif",width:"247",height:"150"}})])}],ae={props:["playerLife","monsterLife"],methods:{enviarDados(){this.$emit("healthBar",{playerLife:this.playerLife,monsterLife:this.monsterLife})}}},re=ae,se=(0,v.Z)(re,oe,ie,!1,null,null,null),le=se.exports,ue={components:{panelButtons:$,panelResult:ne,panelScores:le},data(){return{playerLife:100,monsterLife:100}},methods:{atualizarDados(e){this.playerLife=e.playerLife,this.monsterLife=e.monsterLife},Ataque(){this.monsterLife-=Math.floor(6*Math.random())+5,this.playerLife-=Math.floor(6*Math.random())+5},Especial(){this.monsterLife-=Math.floor(7*Math.random())+5,this.playerLife-=Math.floor(6*Math.random())+5},Cura(){this.playerLife+=Math.floor(3*Math.random())+8,this.playerLife-=Math.floor(6*Math.random())+5},Desistir(){this.reloadPageAfterDelay()},Game(){window.location.reload()},reloadPageAfterDelay(){setTimeout((()=>{window.location.reload()}),2e3)}}},ce=ue,fe=(0,v.Z)(ce,r,s,!1,null,null,null),me=fe.exports,pe={components:{matadorMonstro:me}},he=pe,de=(0,v.Z)(he,i,a,!1,null,null,null),ve=de.exports;o.ZP.config.productionTip=!1,new o.ZP({render:e=>e(ve)}).$mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],s=o[1],l=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(o);u<r.length;u++)a=r[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkmatador_de_monstro"]=self["webpackChunkmatador_de_monstro"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(590)}));o=n.O(o)})();
//# sourceMappingURL=app.fee89242.js.map