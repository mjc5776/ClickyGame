(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?h=200"},{id:2,image:"https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?h=200"},{id:3,image:"https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?h=200"},{id:4,image:"https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?h=200"},{id:5,image:"https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?h=200"},{id:6,image:"https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?h=200"},{id:7,image:"https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?h=200"},{id:8,image:"https://images.pexels.com/photos/275582/pexels-photo-275582.jpeg?h=200"},{id:9,image:"https://images.pexels.com/photos/356968/pexels-photo-356968.jpeg?h=200"},{id:10,image:"https://images.pexels.com/photos/164294/pexels-photo-164294.jpeg?h=200"},{id:11,image:"https://images.pexels.com/photos/237325/pexels-photo-237325.jpeg?h=200"},{id:12,image:"https://images.pexels.com/photos/286076/pexels-photo-286076.jpeg?h=200"}]},,,,,,,,function(e,t,o){e.exports=o(20)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(3),s=o.n(i),c=o(4),r=o(5),l=o(7),p=o(6),h=o(8),m=(o(15),function(e){return a.a.createElement("div",{className:"card img-container img-thumbnail hover"},a.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),u=(o(16),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),d=(o(17),function(e){return a.a.createElement("div",{className:"gameScore"},a.a.createElement("h3",{className:"score"},"Your Score ",e.total),a.a.createElement("h3",{className:"status"},e.status))}),g=o(1),f=(o(18),function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={skyline:g,clickedSkylineIds:[],score:0,goal:12,status:""},o.shuffleScoreCard=function(e){var t=o.state.clickedSkylineIds;if(t.includes(e))o.setState({clickedSkylineIds:[],score:0,status:"Sorry Game Over! Click a picture to play again!"});else{if(t.push(e),12===t.length)return o.setState({score:12,status:"You Won! Click a picture to play again!",clickedSkylineIds:[]}),void console.log("You Win");o.setState({skyline:g,clickedSkylineIds:t,score:t.length,status:" "});for(var n=g.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),i=[g[a],g[n]];g[n]=i[0],g[a]=i[1]}}},o}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Clicky-Game!"),a.a.createElement("p",{className:"App-intro"},"Click on an image to earn points, but don't click on any more than once!")),a.a.createElement(d,{total:this.state.score,goal:12,status:this.state.status}),a.a.createElement(u,null,this.state.skyline.map(function(t){return a.a.createElement(m,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})})),a.a.createElement("footer",null))}}]),t}(n.Component)),k=(o(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function v(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(a.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ClickyGame",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ClickyGame","/service-worker.js");k?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):v(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.cc9eaa5b.chunk.js.map