webpackJsonp([1],{"01Bi":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")(null,n,!1,function(t){i("yDuO")},null,null).exports,a=i("/ocq"),o={data:function(){return{backImage:"",w:0,n:0,deg:0,isPlay:!1,subm:"张杰/张碧晨-只要平凡(《我不是药神》- 主题曲) ",timer:null,timer2:null,timer3:null,timer4:null,fname:1,words:[],mid:"",ctop:0}},methods:{drawBackground:function(){var t=document.getElementById("can");t.width=window.innerWidth,t.height=window.innerHeight;var e=t.getContext("2d"),i=new Image;i.src=this.backImage,i.onload=function(){var s=Math.floor(Math.random()*t.width+50),n=Math.floor(Math.random()*t.height/2),r=setInterval(function a(){e.clearRect(0,0,t.width,t.height);e.drawImage(i,0,0,t.width,t.height);e.beginPath();e.strokeStyle="white";e.moveTo(s,n);e.lineTo(s-50,n+50);e.stroke();s-=10;n+=10;s<=-10&&(clearInterval(r),setTimeout(function(){s=Math.floor(Math.random()*t.width+50),n=Math.floor(Math.random()*t.height/2),r=setInterval(a,20)},2e3))},20)}},getBgImg:function(){var t=this;this.axios.get("http://127.0.0.1:3005/image/bg").then(function(e){t.backImage=e.data,t.drawBackground();var i=document.getElementById("mm");i.onplay=function(){t.isPlay=!0,t.$store.commit("chgMtime",1e3*i.duration)}})},roundImg:function(){this.deg=this.deg+5,document.getElementById("ming").style.transform="rotate("+this.deg+"deg)"},moveProgress:function(){var t=document.querySelector("div.progress>div"),e=t.nextElementSibling,i=t.parentElement.offsetWidth;document.querySelector("div.showtime");if(this.w>=i)return document.getElementById("cons").className="fa fa-play pp",clearInterval(this.timer),clearInterval(this.timer2),void clearInterval(this.timer4);this.w+=i/(this.$store.getters.getMtime/1e3),t.style.width=this.w+"px",this.w>e.offsetWidth/2&&(e.style.left=this.w-e.offsetWidth/2+"px")},clickProgress:function(t){if(this.isPlay){var e=document.querySelector("div.progress>div"),i=document.getElementById("wcon"),s=e.nextElementSibling,n=e.parentElement.offsetWidth,r=document.getElementById("mm");this.w=t.offsetX,this.n=1e3*(this.w/(n/(this.$store.getters.getMtime/1e3))).toFixed(2),this.$store.commit("chgNtime",this.n),r.currentTime=this.w/(n/(this.$store.getters.getMtime/1e3));for(var a=0;a<this.words.length-2;a++){var o=this.words[a].slice(1,9);if(o=60*parseInt(o.slice(0,2))*1e3+1e3*parseInt(o.slice(3)),void 0!=this.words[a+2]){var c=this.words[a+1].slice(1,9);c=60*parseInt(c.slice(0,2))*1e3+1e3*parseInt(c.slice(3))}if(this.n>=o&&this.n<=c){this.n-o<=Math.abs(c-this.n)?this.ctop=26*-a:this.ctop=26*-(a+1),i.children[a].style.color="#666",i.children[a+1].style.color="white",i.style.top=this.ctop+"px";break}this.n+13e3>=1e3*r.duration&&(this.ctop=26*-(this.words.length-2),i.style.top=this.ctop+"px",i.lastElementChild.previousElementSibling.style.color="white")}e.style.width=this.w+"px",this.w>s.offsetWidth/2&&(s.style.left=this.w-s.offsetWidth/2+"px")}},getWords:function(){var t=this;this.axios.get("http://127.0.0.1:3005/image/words",{params:{fname:this.fname}}).then(function(e){t.words=e.data.musicwords.split("\n"),t.mid=e.data.id})},timeFilter:function(t){var e=Math.floor(t/1e3/60),i=(60*(t/1e3/60-e)).toFixed(2);return e<10&&(e="0"+e),i<10&&(i="0"+i),e+":"+i},moveWords:function(){this.n+=10;for(var t=this.timeFilter(this.n),e=document.getElementById("wcon"),i=0;i<this.words.length;i++)this.words[i].slice(1,9)==t&&(this.ctop=26*-(i+1),void 0!=this.words[i+2]&&(e.style.top=this.ctop+"px"),e.children[i].style.color="#666",e.children[i+1].style.color="white");Math.floor(this.n)%1e3==0&&this.$store.commit("chgNtime",this.n),this.n>=1e3*mm.duration&&clearInterval(this.timer3)},musicPause:function(){var t=document.getElementById("mm"),e=document.getElementById("cons");t.paused?(t.play(),this.musicSwitchOn(),e.className="fa fa-pause"):(t.pause(),this.musicSwitchOff(),e.className="fa fa-play pp")},moveSubm:function(){this.subm=this.subm.slice(1)+this.subm.slice(0,1)},musicSwitchOn:function(){this.timer=setInterval(this.moveProgress,1e3),this.timer2=setInterval(this.roundImg,300),this.timer3=setInterval(this.moveWords,10),this.timer4=setInterval(this.moveSubm,1e3)},musicSwitchOff:function(){clearInterval(this.timer),clearInterval(this.timer2),clearInterval(this.timer3),clearInterval(this.timer4)}},mounted:function(){this.getBgImg(),this.getWords()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"music-info"},[s("div",{staticClass:"music-header"},[s("p",[t._v("只要平凡")]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.subm)}})]),t._v(" "),s("img",{attrs:{id:"ming",src:i("j1jh")}}),t._v(" "),s("div",{staticClass:"music-words"},[s("div",{attrs:{id:"wcon"}},t._l(t.words,function(e,i){return s("p",{key:i},[t._v(t._s(e.slice(e.lastIndexOf("]")+1)))])}))])]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"progress",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.clickProgress(e)}}},[s("div",{on:{click:function(e){if(e.target!==e.currentTarget)return null;t.clickProgress(e)}}}),t._v(" "),s("i",{staticClass:"fa fa-circle"})]),t._v(" "),s("div",{staticClass:"showtime"},[t._v("\n         "+t._s(t._f("dateFilter")(t.$store.getters.getNtime))+"\n      ")]),t._v(" "),t.isPlay?s("div",{staticClass:"endtime"},[t._v("\n         "+t._s(t._f("dateFilter")(t.$store.getters.getMtime))+"\n      ")]):s("div",{staticClass:"endtime"},[t._v("\n        00:00\n      ")])]),t._v(" "),s("div",{staticClass:"controls"},[t._m(3),t._v(" "),s("div",[t._m(4),t._v(" "),s("span",[s("i",{staticClass:"fa fa-play pp",attrs:{id:"cons"},on:{click:function(e){t.musicPause(e)}}})]),t._v(" "),t._m(5)]),t._v(" "),t._m(6)]),t._v(" "),s("audio",{attrs:{id:"mm",src:t.mid,muted:"false",preload:"auto"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("ul",[e("li",[this._v("音乐首页")]),this._v(" "),e("li",{staticClass:"header-active"},[this._v("正在播放")]),this._v(" "),e("li",[this._v("播放列表")]),this._v(" "),e("li",[this._v("歌曲搜索")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content",attrs:{id:"cont"}},[e("canvas",{attrs:{id:"can"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"operate"},[e("ul",[e("li",[e("i",{staticClass:"fa fa-heart"})]),this._v(" "),e("li",[e("i",{staticClass:"fa fa-download"})]),this._v(" "),e("li",[e("i",{staticClass:"fa fa-share-alt"})]),this._v(" "),e("li",[e("i",{staticClass:"fa fa-ellipsis-v"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[e("i",{staticClass:"fa fa-random"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-step-backward"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-step-forward"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[e("i",{staticClass:"fa fa-navicon"})])])}]};var l=i("VU/8")(o,c,!1,function(t){i("xVEe")},null,null).exports;s.a.use(a.a);var h=new a.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:l}]}),m=i("mtWM"),d=i.n(m),u=(i("01Bi"),i("NYxO"));s.a.prototype.axios=d.a,s.a.config.productionTip=!1,s.a.filter("dateFilter",function(t){var e=Math.floor(t/1e3/60),i=Math.round(60*(t/1e3/60-e));return e<10&&(e="0"+e),i<10&&(i="0"+i),e+":"+i}),s.a.use(u.a);var f=new u.a.Store({state:{mtime:24e4,ntime:0},mutations:{chgMtime:function(t,e){t.mtime=e},chgNtime:function(t,e){t.ntime=e}},getters:{getMtime:function(t){return t.mtime},getNtime:function(t){return t.ntime}}});new s.a({router:h,store:f,render:function(t){return t(r)}}).$mount("#app")},j1jh:function(t,e,i){t.exports=i.p+"static/img/m.3788ca2.jpg"},xVEe:function(t,e){},yDuO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ade6dd5e139db4e09a6e.js.map