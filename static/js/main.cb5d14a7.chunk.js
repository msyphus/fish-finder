(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"species":"Black Rockfish","image":"https://www.fishbase.se/images/species/Semel_u9.jpg","clicked":false},{"id":2,"species":"Blue Rockfish","image":"https://www.fishbase.se/images/species/Semys_u3.jpg","clicked":false},{"id":3,"species":"Olive Rockfish","image":"https://www.fishbase.se/images/species/Seser_u0.jpg","clicked":false},{"id":4,"species":"Yellowtail Rockfish","image":"https://www.fishbase.se/images/species/Sefla_u1.jpg","clicked":false},{"id":5,"species":"Canary Rockfish","image":"https://www.fishbase.se/images/species/Sepin_u2.jpg","clicked":false},{"id":6,"species":"Vermillion Rockfish","image":"https://www.fishbase.se/images/species/Semin_u0.jpg","clicked":false},{"id":7,"species":"Copper Rockfish","image":"https://www.fishbase.se/images/species/Secau_u5.jpg","clicked":false},{"id":8,"species":"Tiger Rockfish","image":"https://www.fishbase.se/images/species/senig_u4.jpg","clicked":false},{"id":9,"species":"Flag Rockfish","image":"https://www.fishbase.se/images/species/Serub_u1.jpg","clicked":false},{"id":10,"species":"Gopher Rockfish","image":"https://www.fishbase.se/images/species/Secar_u0.jpg","clicked":false},{"id":11,"species":"China Rockfish","image":"https://www.fishbase.se/images/species/Seneb_u0.jpg","clicked":false},{"id":12,"species":"Black-and-Yellow Rockfish","image":"https://www.fishbase.se/images/species/Sechr_u0.jpg","clicked":false},{"id":13,"species":"Yelloweye Rockfish","image":"https://www.fishbase.se/images/species/Serub_u0.jpg","clicked":false},{"id":14,"species":"Quillback Rockfish","image":"https://www.fishbase.se/images/species/Semal_u4.jpg","clicked":false},{"id":15,"species":"Widow Rockfish","image":"https://www.fishbase.se/images/species/Seent_u0.jpg","clicked":false},{"id":16,"species":"Kelp Rockfish","image":"http://www.fishbase.se/tools/UploadPhoto/uploads/kelprockfish.jpg","clicked":false}]')},function(e,s,i){e.exports=i(18)},,,,,function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){"use strict";i.r(s);var t=i(0),c=i.n(t),a=i(6),n=i.n(a),r=(i(13),i(1)),o=i(2),l=i(4),h=i(3);i(14);var p=function(e){return c.a.createElement("div",null,c.a.createElement("h1",{className:"title"},e.title))},u=(i(15),function(e){Object(l.a)(i,e);var s=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return(e=s.call.apply(s,[this].concat(c))).clicker=function(){e.props.handleOnClick(e.props.id)},e}return Object(o.a)(i,[{key:"render",value:function(){return c.a.createElement("div",{className:"card",onClick:this.clicker},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:this.props.species,src:this.props.image})))}}]),i}(c.a.Component));i(16);var f=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},m=i(7),d=(i(17),function(e){Object(l.a)(i,e);var s=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return(e=s.call.apply(s,[this].concat(c))).state={fish:m,currCount:0,hiCount:0,title:"Fish Finder"},e.increaseScore=function(){e.state.currCount<15?e.setState({currCount:e.state.currCount+1}):e.endGame()},e.resetScore=function(){e.state.currCount>e.state.hiCount&&e.setState({hiCount:e.state.currCount}),e.setState({currCount:0})},e.randomizeCards=function(){e.state.fish.sort((function(){return Math.random()-.5}))},e.endGame=function(){e.setState({currCount:e.state.currCount+1}),e.setState({title:"Fish Catcher!"}),e.setState({hiCount:16})},e.clicker=function(s){if(16!==e.state.currCount){var i=e.state.fish.filter((function(e){return e.id===s}));!1===i[0].clicked?(e.increaseScore(),i[0].clicked=!0):(e.resetScore(),e.state.fish.forEach((function(e){return e.clicked=!1})))}else e.resetScore(),e.state.fish.forEach((function(e){return e.clicked=!1})),e.setState({title:"Fish Finder"});e.randomizeCards()},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement(f,null,c.a.createElement(p,{title:this.state.title}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 mx-3 currScore"},c.a.createElement("h4",{className:"score"},"Current Score: ",this.state.currCount)),c.a.createElement("div",{className:"col-sm-6 mx-3 hiScore"},c.a.createElement("h4",{className:"score"},"High Score: ",this.state.hiCount))),this.state.fish.map((function(s,i){return c.a.createElement(u,{key:i,id:s.id,species:s.species,image:s.image,clicked:s.clicked,handleOnClick:e.clicker})})))}}]),i}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.cb5d14a7.chunk.js.map