(this.webpackJsonpmovie_trailers=this.webpackJsonpmovie_trailers||[]).push([[0],{137:function(e,t,a){e.exports=a(228)},142:function(e,t,a){},143:function(e,t,a){},161:function(e,t,a){},169:function(e,t,a){},217:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),l=(a(142),a(33)),c=a(34),s=a(36),p=a(35),m=a(37),d=(a(143),a(25)),u=a(39),h=a.n(u),v=a(233),g=a(234),b=a(239),f=a(232),E=a(237),k=a(236),y=a(231),w=a(238),O=a(235),j=(a(161),a(115)),N=a.n(j);a(169);var C=function(e){var t=e.trailers,a=[];return t.forEach((function(e,t){var n="https://www.youtube.com/watch?v=".concat(e.key,"&enablejsapi=1"),i=o.a.createElement("div",{className:"player-wrapper "},o.a.createElement(N.a,{className:"react-player",url:n,controls:!0,key:t,id:e.id,width:"100%",height:"100%"}));a.push(i)})),o.a.createElement(o.a.Fragment,null," ",a[0]," ")},S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).populateModal=function(t){var a="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("615416944a44ce93ed4100b890e43b0a","&append_to_response=videos");h.a.get(a).then((function(t){var a=t.data.videos.results;console.log(a);var n=[];a.forEach((function(e){n.push(e)})),e.setState({trailers:n})})),e.setState({visible:!0})},e.toggleModal=function(){e.setState({visible:!e.state.visible,trailers:[]})},e.state={trailers:[],visible:!1},e.populateModal=e.populateModal.bind(Object(d.a)(e)),e.toggleModal=e.toggleModal.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"visitHomePage",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){var e=this,t=this.props.movie;return o.a.createElement("div",{className:"cardsConainer"},o.a.createElement(E.a,{key:t.id,bsPrefix:"card"},o.a.createElement(E.a.Header,{bsPrefix:"cardHeader"},o.a.createElement("p",{className:"movieTitle"},t.title),o.a.createElement("p",null,t.release_date)),o.a.createElement(E.a.Body,{className:"cardBody"},o.a.createElement("div",{className:"cardOverlay"},o.a.createElement("div",{className:"actionBtn"},o.a.createElement(k.a,{overlay:o.a.createElement(y.a,{id:"tooltip-disabled"}," ",o.a.createElement("h3",null,"Watch Trailer")," ")},o.a.createElement("span",{className:"d-inline-block"},o.a.createElement(w.a,{variant:"link",onClick:function(){e.populateModal(t.id)}},o.a.createElement("span",{className:"glyphicon glyphicon-play-circle"})))),o.a.createElement(k.a,{overlay:o.a.createElement(y.a,{id:"tooltip-disabled"}," ",o.a.createElement("h3",null,"Visit Homepage")," ")},o.a.createElement("span",{className:"d-inline-block"},o.a.createElement(w.a,{variant:"link",onClick:this.visitHomePage.bind(this)},o.a.createElement("span",{className:"glyphicon glyphicon-info-sign"}))))),o.a.createElement(E.a.Text,{bsPrefix:"cardText"},t.overview)),o.a.createElement(E.a.Img,{className:"cardImage",variant:"top",src:t.poster,alt:"movie_backdrop",onError:function(e){e.target.onerror=null,e.target.src="http://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}})),o.a.createElement(E.a.Footer,{bsPrefix:"cardFooter"})),o.a.createElement(O.a,{footer:null,closable:!1,destroyOnClose:!0,width:"70vw",visible:this.state.visible,onOk:this.toggleModal,onCancel:this.toggleModal,toggleModal:this.toggleModal},o.a.createElement(C,{trailers:this.state.trailers})))}}]),t}(n.Component),_=(a(217),a(218),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).handleOk=function(t){e.setState({modal:{visible:!1}})},e.handleCancel=function(t){e.setState({modal:{visible:!1}})},e.state={loading:!1,noData:!1,movies:[],titleInput:""},e.onChange=e.onChange.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/popular?api_key=".concat("615416944a44ce93ed4100b890e43b0a","&language=en-US");h.a.get(t).then((function(t){var a=[];t.data.results.forEach((function(e){e.poster="https://image.tmdb.org/t/p/original"+e.poster_path,e.backdrop="https://image.tmdb.org/t/p/original"+e.backdrop_path;var t=o.a.createElement(S,{movie:e,key:e.id});a.push(t)})),e.setState({movies:a})}))}},{key:"onChange",value:function(e){var t=this;e.stopPropagation(),e.preventDefault(),e.nativeEvent.stopImmediatePropagation();var a="615416944a44ce93ed4100b890e43b0a",n=e.target.value;this.setState({titleInput:n});var i="https://api.themoviedb.org/3/movie/latest?api_key=".concat(a,"&language=en-US"),r="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false");null===n?h.a.get(i).then((function(e){var a=[];e.data.results.forEach((function(e){e.poster="https://image.tmdb.org/t/p/original"+e.poster_path,e.backdrop="https://image.tmdb.org/t/p/original"+e.backdrop_path;var t=o.a.createElement(S,{movie:e,key:e.id});a.push(t)})),t.setState({movies:a})})):h.a.get(r).then((function(e){if(e.data.results>=0)return t.setState({loading:!1}),console.log("Looks like there was a problem. Status Code: "+e.status),void t.setState({noData:!0});var a=[];e.data.results.forEach((function(e){e.poster="https://image.tmdb.org/t/p/original"+e.poster_path,e.backdrop="https://image.tmdb.org/t/p/original"+e.backdrop_path;var t=o.a.createElement(S,{movie:e,key:e.id});a.push(t)})),t.setState({movies:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.loading?o.a.createElement("div",{className:"loadingContainer"},o.a.createElement(f.a,{size:"large",className:"spinner"})):this.state.movies;return o.a.createElement("div",null,o.a.createElement(v.a,{bsPrefix:"jumbotron"},o.a.createElement(g.a,{className:"mb-3"},o.a.createElement(b.a,{bsPrefix:"searchInput","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",className:"searchInput",type:"text",name:"searchMovie",value:this.state.titleInput,onChange:this.onChange,onClick:function(e){e.preventDefault()},placeholder:" Search..."}))),o.a.createElement("div",{className:"contentContainer"},e))}}]),t}(n.Component)),M=(a(227),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"appTitle"},"Movie Trailer Search App"),o.a.createElement("img",{alt:"powers-by-tmdb",width:"100",src:"powered-by-rectangle-green.svg"})),o.a.createElement(_,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[137,1,2]]]);
//# sourceMappingURL=main.eb6e6c33.chunk.js.map