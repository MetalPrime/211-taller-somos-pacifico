(this["webpackJsonp211-taller-somos-pacifico"]=this["webpackJsonp211-taller-somos-pacifico"]||[]).push([[0],{25:function(e,i,n){},26:function(e,i,n){},28:function(e,i,n){},37:function(e,i,n){},38:function(e,i,n){},39:function(e,i,n){},40:function(e,i,n){},41:function(e,i,n){},42:function(e,i,n){},43:function(e,i,n){"use strict";n.r(i);var t=n(1),c=n.n(t),a=n(19),o=n.n(a),s=n(9),r=n(18),l=n(8),m=(n(25),n(3)),g=(n(26),"".concat("/211-taller-somos-pacifico","/img/")),u=function(e){if(!e.includes("blank"))return"".concat(g).concat(e)},p=n(0),d=function(e){var i=e.setConfigTypeImage,n=e.setConfigColorImage,t=e.setConfigMaterialImage,c=e.setConfigDesignImage,a=e.price;return Object(p.jsxs)("section",{className:"SaveItem",children:[Object(p.jsxs)("section",{className:"SaveItem__img",children:[Object(p.jsx)("img",{src:null==i?void 0:u(i),alt:null==i?void 0:i,className:"DisplayImg__img"}),Object(p.jsx)("img",{src:null==t?void 0:u(t),alt:null==t?void 0:t,className:"DisplayImg__img"}),Object(p.jsx)("img",{src:null==n?void 0:u(n),alt:null==n?void 0:n,className:"DisplayImg__img",style:{mixBlendMode:"hard-light"}}),Object(p.jsx)("img",{src:null==c?void 0:u(c),alt:null==c?void 0:c,className:"DisplayImg__img"})]}),Object(p.jsx)("section",{className:"SaveItem__info",children:Object(p.jsxs)("p",{children:["Precio Total $",a]})})]})},j=(n(28),function(e){var i=e.products;return 0===i.length?Object(p.jsx)(m.a,{to:"/newProduct"}):Object(p.jsxs)("section",{className:"Buy",children:[Object(p.jsx)("h1",{children:"Comprar"}),Object(p.jsx)(s.b,{to:"/newProduct",children:"Crear nuevo elemento"}),Object(p.jsx)("section",{className:"Buy__Options",children:i.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{price:e.price,setConfigColorImage:e.setConfigColorImage,setConfigColorPrice:e.setConfigColorPrice,setConfigDesignImage:e.setConfigDesignImage,setConfigDesignPrice:e.setConfigDesignPrice,setConfigMaterialImage:e.setConfigMaterialImage,setConfigMaterialPrice:e.setConfigMaterialPrice,setConfigTypeImage:e.setConfigTypeImage,setConfigTypePrice:e.setConfigTypePrice,id:e.id}),Object(p.jsx)(s.b,{to:"/editProduct/".concat(e.id),children:"Editar producto"})]},e.id)}))})]})}),b=c.a.createContext({products:[]}),f=n(2),O=(n(37),n(38),function(e){var i=e.list,n=e.setAmount;return Object(p.jsxs)("section",{className:"Amount",children:[Object(p.jsx)("h1",{children:"Cantidad"}),Object(p.jsx)("select",{name:"amount",className:"Amount__select",onChange:function(e){n(parseInt(e.target.value))},children:i.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})}),h=(n(39),function(e){var i=e.currentPrice;return Object(p.jsxs)("section",{className:"Precio",children:[Object(p.jsx)("h1",{children:"Precio"}),Object(p.jsx)("p",{children:"$ ".concat(void 0===i?0:i," .000")})]})}),C=(n(40),n.p+"static/media/optionNote.5f1a78d8.svg"),x=n.p+"static/media/optionShirt.559f6d5e.svg",v=n.p+"static/media/optionThermo.a987c5f7.svg",y=function(e){var i=e.isNone,n=e.mainItemColor,t=e.mainItemDesign,c=e.mainItemMaterial,a=e.mainItemType;return i=null!==n||null!==t||null!==c||null!==a,Object(p.jsxs)("div",{className:"DisplayImg",children:[!i&&Object(p.jsxs)("section",{className:"DisplayImg__section",children:[Object(p.jsx)("h1",{children:"Busca y Personaliza tu objeto deseado en el panel de la izquierda"}),Object(p.jsxs)("section",{children:[Object(p.jsx)("img",{src:C,alt:"OptionNote"}),Object(p.jsx)("img",{src:x,alt:"OptionShirt"}),Object(p.jsx)("img",{src:v,alt:"OptionThermo"})]})]}),i&&Object(p.jsxs)("section",{className:"DisplayImg__imgs",children:[Object(p.jsx)("img",{src:null==a?void 0:u(a),alt:null==a?void 0:a,className:"DisplayImg__img"}),Object(p.jsx)("img",{src:null==c?void 0:u(c),alt:null==c?void 0:c,className:"DisplayImg__img"}),Object(p.jsx)("img",{src:null==n?void 0:u(n),alt:null==n?void 0:n,className:"DisplayImg__img",style:{mixBlendMode:"hard-light"}}),Object(p.jsx)("img",{src:null==t?void 0:u(t),alt:null==t?void 0:t,className:"DisplayImg__img"})]})]})},I=(n(41),n.p+"static/media/arrow.e73f5d55.svg"),_=(n(42),function(e){e.name;var i=e.imgElement,n=e.isSelect,t=e.selected,c=e.kindItem,a=u(i);return Object(p.jsx)("button",{onClick:t,className:n?"Options Options__isSelected":"Options",children:"Color"===c?Object(p.jsx)("div",{style:{backgroundColor:i,width:"80%",height:"70%"}}):Object(p.jsx)("img",{src:a,alt:""})})}),N=function(e){var i=e.name,n=e.displays,t=e.showOptions,c=e.list,a=e.config,o=e.setConfig,s=(e.price,e.setPrice),r=(e.imgSrc,e.setImgSrc),l=(e.product,e.setProduct),m=c.find((function(e){return e.name===a.type}));return Object(p.jsxs)("div",{className:"SelectionElements",children:[Object(p.jsxs)("section",{className:"SelectionElements__display",children:[Object(p.jsx)("h1",{children:i}),Object(p.jsx)("button",{onClick:t,children:Object(p.jsx)("img",{src:I,alt:"btnArrow",className:n?"SelectionElements__display--btn":"SelectionElements__display--btnNo"})})]}),n&&Object(p.jsxs)("section",{className:"SelectionElements__options",children:[c.map((function(e){if("Articulo"===i)return Object(p.jsx)(_,{kindItem:"Articulo",name:e.name,imgElement:e.icon,selected:function(){o((function(i){return Object(f.a)(Object(f.a)({},i),{},{type:e.name})})),s((function(i){return Object(f.a)(Object(f.a)({},i),{},{type:e.price})})),r((function(i){return Object(f.a)(Object(f.a)({},i),{},{type:e.img})})),function(e,i,n){l((function(t){return Object(f.a)(Object(f.a)({},t),{},{setConfigTypeName:e,setConfigTypePrice:i,setConfigTypeImage:n})}))}(e.name,e.price,e.img)},isSelect:a.type===e.name},e.name)})),null===m||void 0===m?void 0:m.colors.map((function(e){if("Color"===i)return Object(p.jsxs)(_,{kindItem:"Color",name:e.name,imgElement:void 0===e.icon?e.img:e.icon,selected:function(){o((function(i){return Object(f.a)(Object(f.a)({},i),{},{color:e.name})})),s((function(i){return Object(f.a)(Object(f.a)({},i),{},{color:e.price})})),r((function(i){return Object(f.a)(Object(f.a)({},i),{},{color:e.img})})),function(e,i,n){l((function(t){return Object(f.a)(Object(f.a)({},t),{},{setConfigColorName:e,setConfigColorPrice:i,setConfigColorImage:n})}))}(e.name,e.price,e.img)},isSelect:a.color===e.name,children:["//",e.name]},e.name)})),null===m||void 0===m?void 0:m.materials.map((function(e){if("Material"===i)return Object(p.jsxs)(_,{kindItem:"Material",name:e.name,imgElement:e.img,selected:function(){o((function(i){return Object(f.a)(Object(f.a)({},i),{},{material:e.name})})),s((function(i){return Object(f.a)(Object(f.a)({},i),{},{material:e.price})})),r((function(i){return Object(f.a)(Object(f.a)({},i),{},{material:e.img})})),function(e,i,n){l((function(t){return Object(f.a)(Object(f.a)({},t),{},{setConfigMaterialName:e,setConfigMaterialPrice:i,setConfigMaterialImage:n})}))}(e.name,e.price,e.img)},isSelect:a.material===e.name,children:["//",e.name]},e.name)})),null===m||void 0===m?void 0:m.design.map((function(e){if("Dise\xf1o"===i)return Object(p.jsxs)(_,{name:e.name,kindItem:"Dise\xf1o",imgElement:void 0===e.icon?e.img:e.icon,selected:function(){o((function(i){return Object(f.a)(Object(f.a)({},i),{},{design:e.name})})),s((function(i){return Object(f.a)(Object(f.a)({},i),{},{design:e.price})})),r((function(i){return Object(f.a)(Object(f.a)({},i),{},{design:e.img})})),function(e,i,n){l((function(t){return Object(f.a)(Object(f.a)({},t),{},{setConfigDesignName:e,setConfigDesignPrice:i,setConfigDesignImage:n})}))}(e.name,e.price,e.img)},isSelect:a.design===e.name,children:["//",e.name]},e.name)}))]})]})},A=[{id:5,name:"Articulo",display:!1},{id:2,name:"Color",display:!1},{id:3,name:"Material",display:!1},{id:4,name:"Dise\xf1o",display:!1}],k=[{label:0,value:0},{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6}],P=[{name:"thermos",img:"thermo/thermoBase.png",price:15,icon:"optionThermo.svg",colors:[{name:"red",img:"thermo/thermoRojo.png",icon:"#9f0a1c",price:5},{name:"blue",img:"thermo/thermoAzul.png",icon:"#283382",price:10},{name:"orange",img:"thermo/thermoNaranja.png",icon:"#cb651a",price:10}],materials:[{name:"aluminum",img:"thermo/thermoAluminio.png",price:12},{name:"plastic",img:"thermo/thermoBase.png",price:6}],design:[{name:"Mira ve",img:"shirt/dise\xf1oMiraVe.png",icon:"shirt/MIRAVE.png",price:5},{name:"Gato",img:"shirt/dise\xf1oGato.png",icon:"shirt/GATO.png",price:5},{name:"Ya te Caigo",img:"shirt/dise\xf1oYaTeCaigo.png",icon:"shirt/YATECAIGO.png",price:5}]},{name:"notebook",img:"notebook/notebookBase.png",price:20,icon:"optionNote.svg",colors:[{name:"yellow",img:"notebook/notebookAmarilla.png",icon:"#CAA937",price:7},{name:"blue",img:"notebook/notebookBlue.png",icon:"#2d4179",price:5},{name:"black",img:"notebook/notebookNegro.png",icon:"#000000",price:2},{name:"white",img:"notebook/notebookBase.png",icon:"#FFFFFF",price:0},{name:"orange",img:"notebook/notebookNaranja.png",icon:"#cb651a",price:0}],materials:[{name:"leather",img:"notebook/notebookLeather.png",price:10},{name:"recycle",img:"notebook/notebookRecycle.png",price:2},{name:"paper",img:"notebook/notebookBase.png",price:0}],design:[{name:"Mira ve",img:"shirt/dise\xf1oMiraVe.png",icon:"shirt/MIRAVE.png",price:5},{name:"Gato",img:"shirt/dise\xf1oGato.png",icon:"shirt/GATO.png",price:5},{name:"Ya te Caigo",img:"shirt/dise\xf1oYaTeCaigo.png",icon:"shirt/YATECAIGO.png",price:5}]},{name:"t-shirt",img:"shirt/camisaBase.png",price:25,icon:"optionShirt.svg",colors:[{name:"yellow",img:"shirt/camisaAmarilla.png",icon:"#CAA937",price:7},{name:"blue",img:"shirt/camisaAzul.png",icon:"#2d4179",price:5},{name:"black",img:"shirt/camisaNegra.png",icon:"#000000",price:2},{name:"white",img:"shirt/camisaBase.png",icon:"#FFFFFF",price:0}],materials:[],design:[{name:"Mira ve",img:"shirt/dise\xf1oMiraVe.png",icon:"shirt/MIRAVE.png",price:5},{name:"Gato",img:"shirt/dise\xf1oGato.png",icon:"shirt/GATO.png",price:5},{name:"Ya te Caigo",img:"shirt/dise\xf1oYaTeCaigo.png",icon:"shirt/YATECAIGO.png",price:5}]}],S=function(e){var i=e.onFinish,n=Object(m.g)().id,c=Object(t.useContext)(b).products.find((function(e){return console.log(e.id+""===n),e.id+""===n})),a=t.useState(c||{id:Date.now(),setConfigTypeName:"",setConfigTypeImage:"",setConfigTypePrice:0,setConfigColorName:"",setConfigColorImage:"",setConfigColorPrice:0,setConfigMaterialName:"",setConfigMaterialImage:"",setConfigMaterialPrice:0,setConfigDesignName:"",setConfigDesignImage:"",setConfigDesignPrice:0,price:0}),o=Object(l.a)(a,2),s=o[0],r=o[1],g=Object(m.f)(),u=t.useState({type:null,color:null,material:null,design:null}),d=Object(l.a)(u,2),j=d[0],C=d[1],x=t.useState({type:null,color:null,material:null,design:null}),v=Object(l.a)(x,2),I=v[0],_=v[1],S=t.useState(A),D=Object(l.a)(S,2),M=(D[0],D[1]),T=t.useState({type:null,color:null,material:null,design:null}),E=Object(l.a)(T,2),w=E[0],B=E[1],F=t.useState(0),G=Object(l.a)(F,2),Y=G[0],R=G[1],V=t.useState(0),z=Object(l.a)(V,2),J=z[0],$=z[1];t.useEffect((function(){R(J*((null!=w.color?w.color:0)+(null!=w.design?w.design:0)+(null!=w.material?w.material:0)+(null!=w.type?w.type:0))),r((function(e){return Object(f.a)(Object(f.a)({},e),{},{price:Y})}))}),[J,w]);return Object(p.jsx)("section",{className:"Creator",children:Object(p.jsxs)("section",{className:"App",children:[Object(p.jsxs)("article",{className:"App__commands",children:[Object(p.jsx)("section",{className:"App__options",children:A.map((function(e){var i=e.id,n=e.name,t=e.display;return Object(p.jsx)(N,{name:n,displays:t,showOptions:function(){!function(e){var i=A.slice(),n=i.findIndex((function(i){return i.id===e}));i[n].display?(i[n].display=!1,M(i)):(i[n].display=!0,M(i))}(i)},list:P,config:j,setConfig:C,price:w,setPrice:B,imgSrc:I,setImgSrc:_,product:s,setProduct:r},i)}))}),Object(p.jsxs)("section",{className:"App__update",children:[Object(p.jsx)(O,{list:k,setAmount:$}),Object(p.jsx)(h,{currentPrice:Y})]}),Object(p.jsxs)("section",{className:"App__btns",children:[Object(p.jsx)("button",{className:"btn btn__recommend",onClick:function(){g.push("/recomendar")},children:"Recomendar"}),Object(p.jsx)("button",{className:"btn btn__buy",onClick:function(){i(s),g.push("/comprar")},children:"Comprar"})]})]}),Object(p.jsx)("article",{className:"App__display",children:Object(p.jsx)(y,{isNone:!1,mainItemColor:I.color,mainItemDesign:I.design,mainItemMaterial:I.material,mainItemType:I.type})})]})})},D=function(){var e=c.a.useState([]),i=Object(l.a)(e,2),n=i[0],t=i[1],a=function(e){t((function(i){var n=i.findIndex((function(i){return i.id===e.id}));if(n>=0){var t=Object(r.a)(i);return t[n]=e,t}return[].concat(Object(r.a)(i),[e])}))};return Object(p.jsx)("main",{children:Object(p.jsx)(b.Provider,{value:{products:n},children:Object(p.jsxs)(s.a,{basename:"/211-taller-somos-pacifico",children:[Object(p.jsx)(m.b,{path:["/newProduct","/editProduct/:id"],render:function(){return Object(p.jsx)(S,{onFinish:a})}}),Object(p.jsx)(m.b,{path:"/recomendar",render:function(){return Object(p.jsx)("h1",{children:"Recomendar"})}}),Object(p.jsx)(m.b,{path:"/comprar",render:function(){return Object(p.jsx)(j,{products:n})}})]})})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(D,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ed1bfc63.chunk.js.map