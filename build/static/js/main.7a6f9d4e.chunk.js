(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),u=t.n(r),c=t(2),l=function(e){var n=e.person,t=e.onClick;return o.a.createElement("div",null,o.a.createElement("p",null,n.name," ",n.number),o.a.createElement("button",{onClick:t},"delete"))},i=function(e){var n=e.persons,t=e.onClick;return n.map((function(e){return o.a.createElement(l,{onClick:function(){return t(e)},key:e.name,person:e})}))},m=function(e){var n=e.onSubmit,t=e.onNameChange,a=e.onNumberChange,r=e.newName,u=e.newNumber;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,o.a.createElement("p",null," name: ",o.a.createElement("input",{onChange:t,value:r})),o.a.createElement("p",null,"number: ",o.a.createElement("input",{onChange:a,value:u}))),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},d=t(3),s=t.n(d),f="/api/persons",b=function(){return s.a.get(f).then((function(e){return e.data}))},h=function(e){return s.a.post(f,e).then((function(e){return e.data}))},p=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.onChange,t=e.input;return o.a.createElement("div",null,"filter shown with ",o.a.createElement("input",{onChange:n,value:t}))},v=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},C=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),d=l[0],s=l[1],f=Object(a.useState)(""),C=Object(c.a)(f,2),k=C[0],S=C[1],j=Object(a.useState)(""),O=Object(c.a)(j,2),y=O[0],N=O[1],L=Object(a.useState)(null),T=Object(c.a)(L,2),B=T[0],z=T[1],A=Object(a.useState)(null),J=Object(c.a)(A,2),R=J[0],x=J[1];Object(a.useEffect)((function(){b().then((function(e){r(e)}))}),[]);var D=t.filter((function(e){return e.name.toLowerCase().startsWith(y.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(v,{message:B}),o.a.createElement(w,{message:R}),o.a.createElement(E,{onChange:function(e){N(e.target.value.trimStart())},input:y}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n={name:d,number:k},a=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}));"undefined"!==typeof a?window.confirm("".concat(d," is already added to phonebook, replace number with new one?"))&&p(a.id,n).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),z("Changed ".concat(d," address in the phonebook.")),setTimeout((function(){z(null)}),5e3)})):h(n).then((function(e){r(t.concat(e)),z("Added ".concat(d," to the phonebook.")),setTimeout((function(){z(null)}),5e3)})).catch((function(e){x("".concat(e)),setTimeout((function(){x(null)}),5e3)})),s(""),S("")},onNameChange:function(e){s(e.target.value)},onNumberChange:function(e){S(e.target.value)},newName:d,newNumber:k}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(i,{persons:D,onClick:function(e){window.confirm("confirm deletion of ".concat(e.name))&&g(e.id).then(r(t.filter((function(n){return n.id!==e.id})))).catch((function(){x("".concat(e.name," has already been deleted please reload the page")),setTimeout((function(){x(null)}),5e3)}))}}))};u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a6f9d4e.chunk.js.map