(this.webpackJsonpnav2goe=this.webpackJsonpnav2goe||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(9),i=n.n(s),a=(n(14),n(3)),j=(n(4),n(1));var l=n(7),u=n.n(l),b=function(e){return Object(j.jsx)("div",{className:"ErrorPage",children:Object(j.jsxs)("div",{className:"ErrorPageTitle",children:[Object(j.jsx)("header",{className:u.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:u.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:u.a.actions,children:Object(j.jsx)("button",{onClick:e.onConfirm,children:"Zur\xfcck zur Suche"})})]})})},o=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("header",{className:"Startseite-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsxs)("div",{id:"endText",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("br",{}),"Vielen Dank f\xfcr die Teilnahme!"," "]}),Object(j.jsxs)("p",{children:["Klicken Sie jetzt bitte auf den Button, um zur Umfrage zu gelangen",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})]}),Object(j.jsx)("div",{id:"containerButtonEnd",children:Object(j.jsx)("a",{href:"https://www.survio.com/survey/d/C3K5I4C4W7L5R1J7O",children:"Umfrage starten"})})]})})},d=n(5),h=n(6),O=function(e,t,n){for(var c=e.split(":"),r=Object(a.a)(c,2),s=r[0],i=r[1],j=(t=Number(t),Number(s)+Number(t)),l=Number(i)+Number(n);l>=60;)l-=60,j+=1;return l<10&&(l="0"+l),j>=24&&(j-=24),j<10&&(j="0"+j),[j+":"+l,!1]},x=function(e){var t=e.toString().split("-"),n=Number(t[1]),c=Number(t[2]);Number(t[0]);return c+"."+n+"."},m=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(a.a)(i,2),u=l[0],b=(l[1],Object(c.useState)(!1)),m=Object(a.a)(b,2);m[0],m[1];console.log(e.departureDay,e.departureStop);var v=function(e){var t=Math.floor(e),n=Math.round(60*(e-t));return"".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n)}(function(t){var n=t.split(":"),c=Object(a.a)(n,2),r=c[0],s=c[1],i=e.additionalRandomMinutes,j=Number(s)+Number(i);return Number(r)+Number(j)/60}(e.departureTime)),p=function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),s=Number(Math.floor(.15*c)),i=Number(c-r-s);return[Number(r),Number(s),Number(i)]}(e.durationH,e.durationMin);!function(e,t){Number(e);var n=Number(t),c=Number(60*e+n),r=Number(Math.floor(.3*c)),s=Number(Math.floor(.1*c)),i=Number(Math.floor(.2*c)),a=Number(Math.floor(.15*c)),j=Number(c-r-s-i-a);Number(r),Number(s),Number(i),Number(a),Number(j)}(e.durationH,e.durationMin);return r?Object(j.jsx)(o,{}):Object(j.jsx)("div",{className:"container-verbindung",children:u?null:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{className:"Verbindung-header",children:"Verbindung"}),Object(j.jsx)("h2",{children:"\xdcbersicht"}),Object(j.jsx)("div",{className:"connectionChoice",children:Object(j.jsxs)("div",{id:"containerFastestConnection",children:[Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Fahrtkosten: 2.60 \u20ac "}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Dauer: 0 h 42 min"}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Umstiege: 1"}),Object(j.jsxs)("div",{className:"umstiegIcons",children:[Object(j.jsx)(d.a,{size:"3rem",color:"white"}),Object(j.jsx)(h.b,{size:"3rem",color:"white"}),Object(j.jsx)(d.a,{size:"3rem",color:"white"})]})]})}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 1"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",x(e.departureDay)," um"," ",v," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 50"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",x(e.departureDay)," um"," ",O(v,Number(0),Number(p[0]))," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," ",e.departureStop," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]})]}),Object(j.jsx)("h2",{className:"h2ConnectionDisplay",children:"Schritt 2"}),Object(j.jsxs)("div",{className:"container-ConnectionDisplay",children:[Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[" ",Object(j.jsx)("p",{children:"Abfahrt:"})," ",x(e.departureDay)," um"," ",O(v,Number(0),Number(p[0]+p[1]))," "]}),Object(j.jsx)("div",{className:"verbindung-textfeld",children:"Linie: 18"}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft:"})," ",x(e.departureDay)," um"," ",O(v,Number(0),Number(p[0]+p[1]+p[2]))," "]}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Abfahrt an Haltestelle:"})," Weender Stra\xdfe-Ost"," "]}),Object(j.jsx)("div",{className:"busIcon",children:Object(j.jsx)(d.a,{size:"3rem",color:"white"})}),Object(j.jsxs)("div",{className:"verbindung-textfeld",children:[Object(j.jsx)("p",{children:"Ankunft an Haltestelle:"})," ",e.destinationStop," "]})]}),Object(j.jsxs)("div",{className:"buttons-verbindung",children:[Object(j.jsxs)("button",{className:"button",onClick:function(){e.onGoBack()},type:"submit",children:[" ","Zur\xfcck"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){s(!0),e.onSetStartFormHidden(!0)},children:[" ","Test Beenden?"]})]})]})})},v=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1],l=Object(c.useState)(""),u=Object(a.a)(l,2),o=u[0],d=u[1],O=Object(c.useState)(""),x=Object(a.a)(O,2),v=x[0],p=x[1],f=Object(c.useState)(""),g=Object(a.a)(f,2),N=g[0],S=g[1],k=Object(c.useState)(!1),z=Object(a.a)(k,2),C=z[0],w=z[1],F=Object(c.useState)(),y=Object(a.a)(F,2),D=y[0],H=y[1],A=Object(c.useState)(!1),B=Object(a.a)(A,2),T=B[0],M=B[1],G=Object(c.useRef)(),I=Object(c.useRef)(),L=!1;return Object(j.jsxs)(r.a.Fragment,{children:[D&&Object(j.jsx)(b,{title:D.title,message:D.message,onConfirm:function(){H(!1)}}),T?null:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Verbindungssuche "}),Object(j.jsxs)("div",{className:"container-searchpage",children:[Object(j.jsx)("input",{list:"haltestellen",spellCheck:"false",type:"text",value:s,onChange:function(e){i(e.target.value)},placeholder:"Start",ref:G}),Object(j.jsx)("button",{className:"button-swap",onClick:function(){var e=G.current.value;i(I.current.value),d(e)},children:Object(j.jsx)(h.a,{size:"3rem"})}),Object(j.jsx)("input",{list:"haltestellen",spellCheck:"false",type:"text",value:o,onChange:function(e){d(e.target.value)},placeholder:"Ziel",ref:I}),Object(j.jsx)("input",{type:"date",value:v,onChange:function(e){p(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"time",value:N,onChange:function(e){S(e.target.value)}})]})]}),Object(j.jsx)("div",{children:C?Object(j.jsx)(m,{onSetStartFormHidden:e.onSetStartFormHidden,onGoBack:function(){M(!1),w(!1)},departureStop:s,destinationStop:o,departureDay:v,departureTime:N,durationH:0,durationMin:42,additionalRandomMinutes:3}):Object(j.jsxs)("div",{className:"buttons-search-page",children:[Object(j.jsx)("button",{className:"button-search",onClick:function(){0===s.trim().length||0===o.trim().length?(H({title:"Falsche Daten",message:"Bitte geben Sie einen passenden Start- und Zielort ein!"}),L=!0):""===N||""===v?(H({title:"Falsche Daten",message:"Bitte geben Sie einen Abfahrtstag und eine Abfahrtszeit an!"}),L=!0):s===o&&(H({title:"Falsche Daten",message:"Start- und Zielort d\xfcrfen nicht identisch sein!"}),L=!0),L||(M(!0),w(!0))},children:"Suchen"}),Object(j.jsx)("button",{className:"button-search",onClick:function(){e.onGoBack()},type:"submit",children:"Zur\xfcck zur Startseite"})," "]})}),Object(j.jsxs)("datalist",{id:"haltestellen",children:[Object(j.jsx)("option",{value:"An der Lutte"}),Object(j.jsx)("option",{value:"Auf dem Hagen"}),Object(j.jsx)("option",{value:"Baumweg"}),Object(j.jsx)("option",{value:"Bornbreite"}),Object(j.jsx)("option",{value:"B\xfcrgerstra\xdfe"}),Object(j.jsx)("option",{value:"Deisterstra\xdfe"}),Object(j.jsx)("option",{value:"Elmweg"}),Object(j.jsx)("option",{value:"Fritz-Stra\xdfe"}),Object(j.jsx)("option",{value:"Gehrenring"}),Object(j.jsx)("option",{value:"Gr\xfcner Weg"}),Object(j.jsx)("option",{value:"Hauptbahnhof"}),Object(j.jsx)("option",{value:"Hardtweg"}),Object(j.jsx)("option",{value:"Hiroshimaplatz"}),Object(j.jsx)("option",{value:"Kiessee"}),Object(j.jsx)("option",{value:"Klinikum"}),Object(j.jsx)("option",{value:"Klosterweg"}),Object(j.jsx)("option",{value:"Kreuzbergring"}),Object(j.jsx)("option",{value:"Krugstra\xdfe"}),Object(j.jsx)("option",{value:"Landgericht/ Bahnhof"}),Object(j.jsx)("option",{value:"Lutteranger"}),Object(j.jsx)("option",{value:"Reinholdstra\xdfe"}),Object(j.jsx)("option",{value:"Schillerstra\xdfe"}),Object(j.jsx)("option",{value:"Sch\xfctzenplatz"}),Object(j.jsx)("option",{value:"Siekweg"}),Object(j.jsx)("option",{value:"Sollstra\xdfe"}),Object(j.jsx)("option",{value:"Stadtstieg"}),Object(j.jsx)("option",{value:"Tammstra\xdfe"}),Object(j.jsx)("option",{value:"Teichstra\xdfe"}),Object(j.jsx)("option",{value:"Treuenhagen"}),Object(j.jsx)("option",{value:"Tulpenweg"}),Object(j.jsx)("option",{value:"Waldstra\xdfe"})]})]})},p=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(a.a)(i,2),u=l[0],b=l[1],o=Object(c.useState)(!1),d=Object(a.a)(o,2),h=d[0],O=d[1];return Object(j.jsxs)("div",{children:[r?null:Object(j.jsx)("form",{children:Object(j.jsxs)("header",{className:"StartPage-header",children:[Object(j.jsx)("h1",{className:"logo",children:"Nav2G\xf6"}),Object(j.jsx)("div",{id:"welcomeText",children:Object(j.jsxs)("p",{children:[h?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),"Wilkommen. ",Object(j.jsx)("br",{}),"Nutzen sie diese App um sich in folgender Situation weiterzuhelfen:",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Sie haben sich dazu entschieden, Ihre Freunde in G\xf6ttingen zu besuchen. Nachdem Sie am Hauptbahnhof in G\xf6ttingen angekommen sind, wollen Sie die \xf6ffentlichen Verkehrsmittel nutzen, um zu ihren Freunden zu fahren.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Ihre Freunde haben Ihnen bereits mitgeteilt, dass Sie an der Haltestelle "Treuenhagen" wohnen. Da sie Ihre Freunde nun ungl\xfccklicherweise nicht mehr erreichen k\xf6nnen, haben Sie sich die lokale Mobilit\xe4ts-App \u201eNav2G\xf6\u201c heruntergeladen, um sich vor Ort zurechtzufinden. ',Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})]}),"Nutzen Sie f\xfcr die Verbindungssuche vom Hauptbahnhof nach Treuenhagen das aktuelle Datum und die aktuelle Uhrzeit.",Object(j.jsx)("br",{})]})}),Object(j.jsx)("h1",{id:"appVersionAnzeige2",children:"App-Version 2"})]})}),u?Object(j.jsx)(v,{onGoBack:function(){b(!1),O(!1)},onSetStartFormHidden:s}):Object(j.jsx)("button",{id:"welcomeTextButton",onClick:function(){b(!0),O(!0)},type:"submit",children:"Weiter"})]})},f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()},4:function(e,t,n){},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.eec9f688.chunk.js.map