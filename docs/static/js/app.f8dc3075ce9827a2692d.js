webpackJsonp([1],{"2pey":function(e,t){},"9G6W":function(e,t){},"9VQR":function(e,t){},DC6F:function(e,t){e.exports='<svg viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg"><circle cx="53" cy="53" r="50"></circle></svg>'},GNlj:function(e,t){e.exports='<svg viewBox="0 0 100 105" xmlns="http://www.w3.org/2000/svg"><path d="M50 2L93.3013 77H6.69873L50 2Z"></path></svg>'},Hz2z:function(e,t){},JH8r:function(e,t){e.exports='<svg viewBox="0 0 34 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66669 80H31.6667V98.3333H1.66669V80Z" fill="#6D6E71"></path><path d="M31.6667 41.6667C31.6626 37.1086 28.5791 33.1283 24.1667 31.9849C22.6986 31.6056 21.6716 30.284 21.6667 28.7687V8.33334H11.6667V28.7687C11.6618 30.284 10.6348 31.6056 9.16669 31.9849C4.75425 33.1283 1.67076 37.1086 1.66669 41.6667V53.3333H31.6667V41.6667Z" fill="#6D6E71"></path><path d="M11.6667 1.66666H21.6667V8.33332H11.6667V1.66666Z" fill="#8B5E3C"></path><path d="M1.66669 53.3333H31.6667V80H1.66669V53.3333Z" fill="#5EAC24"></path><path d="M24.5898 30.3719C23.855 30.1855 23.339 29.5264 23.3333 28.7687V1.66667C23.3333 0.746256 22.5871 0 21.6667 0H11.6667C10.7463 0 10 0.746256 10 1.66667V28.7687C9.9943 29.5272 9.47673 30.1855 8.74186 30.3719C3.59456 31.7049 -0.000813664 36.3493 1.38123e-07 41.6667V98.3333C1.38123e-07 99.2537 0.746257 100 1.66667 100H31.6667C32.5871 100 33.3333 99.2537 33.3333 98.3333V41.6667C33.3333 36.3493 29.738 31.7041 24.5898 30.3719ZM13.3333 3.33333H20V6.66667H13.3333V3.33333ZM30 78.3333H3.33333V55H30V78.3333ZM3.33333 96.6667V81.6667H30V96.6667H3.33333ZM30 51.6667H3.33333V41.6667C3.33171 37.8678 5.89925 34.5492 9.57682 33.597C11.7822 33.0306 13.3268 31.0457 13.3333 28.7687V10H20V28.7687C20.0041 31.0465 21.5487 33.0347 23.7549 33.6019C27.4308 34.5532 29.9992 37.8695 30 41.6667V51.6667Z" fill="#231F20"></path></svg>'},L1rV:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[t("router-link",{attrs:{to:"/"}},[this._v("vizumizu")])],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},o,!1,function(e){i("eZUo")},null,null).exports,s=i("/ocq"),r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("div",{staticClass:"button-wrapper"},[i("button",{staticClass:"button add",on:{click:e.createModel}},[e._v("create a new model")]),e._v(" "),i("router-link",{staticClass:"button show",attrs:{to:"/record"}},[e._v("add a record")])],1),e._v(" "),i("ul",e._l(e.models,function(t,n){return i("li",{key:n},[i("router-link",{attrs:{to:{name:"Model",params:{id:t.id}}}},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),i("div",[i("router-link",{staticClass:"button edit",attrs:{to:{name:"editModel",params:{id:t.id}}}},[e._v("\n          edit model\n        ")]),e._v(" "),i("router-link",{staticClass:"button show",attrs:{to:{name:"ModelData",params:{id:t.id}}}},[e._v("\n          see model data\n        ")]),e._v(" "),i("button",{staticClass:"delete",on:{click:function(i){e.deleteModel(t.id)}}},[e._v("delete model")])],1)],1)}))])},staticRenderFns:[]};var l=i("VU/8")({name:"home",computed:{models:function(){return this.$store.state.appStore.models}},methods:{createModel:function(){var e=this;this.$store.dispatch("appStore/createModel").then(function(t){e.$router.replace("/editModel/"+t.id)})},deleteModel:function(e){this.$store.dispatch("appStore/deleteModel",e)}},mounted:function(){this.$store.dispatch("appStore/setModelList")}},r,!1,function(e){i("jEYU")},"data-v-21ab6bdc",null).exports,d=i("pFYg"),u=i.n(d),c=i("fZjL"),f=i.n(c),p=i("Zx67"),h=i.n(p),v=i("zwoO"),m=i.n(v),g=i("Pf15"),V=i.n(g),_=i("woOf"),y=i.n(_),w=i("Zrlr"),S=i.n(w),F=i("wxAW"),C=i.n(F),k=i("mlGo"),b=i.n(k),M=i("JH8r"),I=i.n(M),$=i("UenH"),x=i.n($),E=i("DC6F"),P=i.n(E),R=i("GNlj"),H=i.n(R),N=[{name:"wine3",width:34,height:100,src:I.a},{name:"rect",width:102,height:102,src:x.a},{name:"circle",width:102,height:102,src:P.a},{name:"triangle",width:100,height:102,src:H.a}],B=N;function z(e){return N.find(function(t){return t.name===e})}var O=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b()(),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"untitled";S()(this,e),this.id=t,this.name=i}return C()(e,null,[{key:"load",value:function(t){return y()(new e,t)}}]),e}(),A=function(e){function t(e,i){S()(this,t);var n=m()(this,(t.__proto__||h()(t)).call(this,e,i));return n.fields=[],n.shape=null,n.stroke="rgba(18,118,193,1)",n.fill="rgba(186,75,62,1)",n.hasRecordName=!1,n}return V()(t,e),C()(t,null,[{key:"load",value:function(e){if(e&&e.id&&e.name){var i=y()(new t,e);return i.fields=i.fields.map(function(e){return D.load(e)}),i}return null}}]),t}(O),D=function(){function e(t){S()(this,e),this.id=b()(),this.name=t||"untitled",this.fieldValues=[],this.shape=null,this.transform=new L}return C()(e,null,[{key:"load",value:function(t){if(t&&t.id){var i=y()(new e,t);return i.fieldValues=i.fieldValues.map(function(e){return T.load(e)}),i.transform=L.load(i.transform),i}return null}}]),e}(),T=function(){function e(t){S()(this,e),this.id=b()(),this.value=t||""}return C()(e,null,[{key:"load",value:function(t){if(t&&(t.value||t.id)){var i=new e;return y()(i,t)}return null}}]),e}(),L=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S()(this,e),this.values=i,this.type=t}return C()(e,[{key:"addVisual",value:function(e,t){this.values[e]=t}}],[{key:"load",value:function(t){var i=new e;return t&&(i.type=t.type,f()(t.values).forEach(function(e){i.addVisual(e,U.load(t.values[e]))})),i}}]),e}(),U=function(){function e(t,i){S()(this,e),this.type=t||"",this.mappedValue=i||""}return C()(e,null,[{key:"load",value:function(t){return y()(new e,t)}}]),e}(),Z=[{type:"StrokeColor",mappedValue:"rgba()"},{type:"FillColor",mappedValue:"rgba()"},{type:"Opacity",mappedValue:0},{type:"Shape",mappedValue:B.map(function(e){return e.name})},{type:"Rotation",mappedValue:0},{type:"Size",mappedValue:0},{type:"StrokeType",mappedValue:["solid","dotted","dashed"]},{type:"StrokeSize",mappedValue:0}],q={name:"fieldValue",props:["field","fieldValue"],data:function(){return{}},computed:{id:function(){return this.fieldValue.id},value:{get:function(){return this.fieldValue.value},set:function(e){this.$store.dispatch("modelStore/updateValueOfField",{field:this.field,value:{id:this.fieldValue.id,value:e}})}},visualValue:{get:function(){return this.$store.getters["modelStore/getVisualById"](this.field,this.fieldValue.id)||this.selectedVisual.mappedValue},set:function(e){this.saveVisualValue(e)}},transform:function(){return this.field.transform},selectedVisual:function(){var e=this.transform&&this.transform.type;return Z.find(function(t){return t.type===e})},selectedVisualValue:function(){return this.selectedVisual?this.selectedVisual.mappedValue:""},isMultipleValue:function(){return"object"===u()(this.selectedVisualValue)},isColor:function(){return this.selectedVisual&&this.selectedVisual.type.includes("Color")}},methods:{isError:function(e){return"number"!=typeof e&&!e},deleteValue:function(){var e={id:this.id,fieldId:this.field.id};console.log(e,"fv"),this.$store.dispatch("modelStore/deleteValueOfField",e)},saveVisualValue:function(e){var t={type:this.selectedVisual.type,mappedValue:e};this.$store.dispatch("modelStore/saveVisualToField",{field:this.field,value:this.fieldValue,visual:t})}}},G={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"value-row"},[i("div",[i("label",{attrs:{for:e.id}},[e._v("Value name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:{error:e.isError(e.value)},attrs:{id:e.id,type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),i("button",{on:{click:e.deleteValue}},[e._v("X")])]),e._v(" "),e.isMultipleValue?i("div",[i("label",[e._v("visual value")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.visualValue,expression:"visualValue"}],class:{error:e.isError(e.visualValue)},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.visualValue=t.target.multiple?i:i[0]}}},e._l(e.selectedVisualValue,function(t,n){return i("option",{key:n,domProps:{value:t}},[e._v(e._s(t)+"\n      ")])}))]):i("div",[i("label",[e._v("visual value")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.visualValue,expression:"visualValue"}],class:{error:e.isError(e.visualValue)},attrs:{type:"text"},domProps:{value:e.visualValue},on:{input:function(t){t.target.composing||(e.visualValue=t.target.value)}}})]),e._v(" "),e.isColor?i("div",{staticClass:"colormarker",style:{backgroundColor:e.visualValue}}):e._e()])},staticRenderFns:[]};var j=i("VU/8")(q,G,!1,function(e){i("9VQR")},"data-v-24bfbb2e",null).exports,Y={name:"shapeSelect",props:["options","defaultOption","selectedItem"],computed:{isDefaultSelected:function(){return"null"===this.selectedItem},shapes:function(){var e=Z.filter(function(e){return"Shape"===e.type}).pop();return e.mappedValue}},methods:{onSelect:function(e){this.$emit("onSelectChange",e.target.value)},isSelected:function(e){return this.selectedItem===e}}},J={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("select",{on:{change:e.onSelect}},[e._l(e.shapes,function(t,n){return i("option",{key:n,domProps:{value:t,selected:e.isSelected(t)}},[e._v(e._s(t))])}),e._v(" "),e.defaultOption?i("option",{attrs:{value:"null"},domProps:{selected:e.isDefaultSelected}},[e._v(e._s(e.defaultOption))]):e._e()],2)},staticRenderFns:[]},W=i("VU/8")(Y,J,!1,null,null,null).exports,X={name:"fieldInput",props:["field"],data:function(){return{visualTypes:Z.map(function(e){return e.type}),shapes:Z.find(function(e){return"Shape"===e.type}).mappedValue}},computed:{id:function(){return this.field.id},name:{get:function(){return this.field.name},set:function(e){this.$store.dispatch("modelStore/updateField",{id:this.field.id,name:e})}},shape:{get:function(){return this.field.shape||null}},selectedVisual:{get:function(){return this.field.transform&&this.field.transform.type},set:function(e){this.$store.dispatch("modelStore/updateField",{id:this.field.id,transform:new L(e)})}}},methods:{onShapeChange:function(e){this.$store.dispatch("modelStore/updateField",{id:this.field.id,shape:e})},saveField:function(){var e={name:this.field.name,fieldId:this.id,shape:this.fieldShape};this.$store.dispatch("modelStore/saveVisualToField",{fieldId:this.id,type:this.selectedVisual}),this.$store.dispatch("modelStore/saveFieldToModel",e)},addFieldValue:function(){this.$store.dispatch("modelStore/addValueToField",this.id)},deleteField:function(){this.$store.dispatch("modelStore/deleteField",{fieldId:this.field.id})}},components:{fieldValue:j,shapeSelect:W}},Q={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"field-row"},[i("div",[i("label",{attrs:{for:e.id}},[e._v("Field name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:e.id,type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),i("div",[i("label",[e._v("Field visual")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedVisual,expression:"selectedVisual"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedVisual=t.target.multiple?i:i[0]}}},e._l(e.visualTypes,function(t,n){return i("option",{key:n,domProps:{value:t}},[e._v(e._s(t)+"\n      ")])}))]),e._v(" "),i("div",[i("label",[e._v("Field shape")]),e._v(" "),i("shape-select",{attrs:{defaultOption:"model",selectedItem:e.shape},on:{onSelectChange:e.onShapeChange}})],1),e._v(" "),i("div",{staticClass:"field-values"},e._l(e.field.fieldValues,function(t){return i("div",{key:t.id},[i("field-value",{attrs:{fieldValue:t,field:e.field}})],1)})),e._v(" "),i("div",{staticClass:"button-row"},[i("button",{staticClass:"add-button",on:{click:e.addFieldValue}},[e._v("add value")]),e._v(" "),i("button",{staticClass:"delete-button",on:{click:e.deleteField}},[e._v("X")])])])},staticRenderFns:[]};var K={name:"createModel",data:function(){return{id:this.$route.params.id,shapes:Z.find(function(e){return"Shape"===e.type}).mappedValue}},computed:{name:{get:function(){return this.$store.state.modelStore.name},set:function(e){this.$store.commit("modelStore/setName",e)}},shape:{get:function(){return this.$store.state.modelStore.shape}},fill:{get:function(){return this.$store.state.modelStore.fill},set:function(e){this.$store.commit("modelStore/setFill",e)}},stroke:{get:function(){return this.$store.state.modelStore.stroke},set:function(e){this.$store.commit("modelStore/setStroke",e)}},fields:function(){return this.$store.state.modelStore.fields}},methods:{isError:function(e){return!e&&this.$store.state.modelStore.error},onShapeChange:function(e){this.$store.commit("modelStore/setShape",e)},save:function(){this.$store.dispatch("modelStore/save")},addField:function(){this.$store.dispatch("modelStore/addFieldToModel")}},mounted:function(){this.$store.dispatch("modelStore/refreshModel",this.$route.params.id)},components:{fieldInput:i("VU/8")(X,Q,!1,function(e){i("gyxb")},"data-v-79280fb1",null).exports,shapeSelect:W}},ee={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("div",{staticClass:"button-wrapper"},[i("router-link",{staticClass:"button show",attrs:{to:{name:"ModelData",params:{id:e.id}}}},[e._v("\n      see model data\n    ")]),e._v(" "),i("button",{staticClass:"save-button",on:{click:e.save}},[e._v("save model")]),e._v(" "),i("button",{staticClass:"add-button",on:{click:e.addField}},[e._v("add new field")]),e._v(" "),i("router-link",{staticClass:"button shape",attrs:{to:{name:"ShapeEditor",params:{id:e.id}}}},[e._v("\n      edit layout\n    ")])],1),e._v(" "),i("div",{staticClass:"model-details"},[i("label",[e._v("model name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"title",class:{error:e.isError(e.name)},attrs:{type:"text",placeholder:"add model name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("div",{staticClass:"basic-visuals"},[i("div",[i("label",[e._v("basic shape")]),e._v(" "),i("shape-select",{attrs:{defaultOption:"select a shape",selectedItem:e.shape},on:{onSelectChange:e.onShapeChange}})],1),e._v(" "),i("div",[i("label",[e._v("basic fill")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.fill,expression:"fill"}],class:{error:e.isError(e.fill)},attrs:{type:"text",placeholder:"add fill color"},domProps:{value:e.fill},on:{input:function(t){t.target.composing||(e.fill=t.target.value)}}}),e._v(" "),i("div",{staticClass:"colormarker",style:{backgroundColor:e.fill}})]),e._v(" "),i("div",[i("label",[e._v("basic stroke")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.stroke,expression:"stroke"}],class:{error:e.isError(e.stroke)},attrs:{type:"text",placeholder:"add stroke color"},domProps:{value:e.stroke},on:{input:function(t){t.target.composing||(e.stroke=t.target.value)}}}),e._v(" "),i("div",{staticClass:"colormarker",style:{borderColor:e.stroke}})])])]),e._v(" "),e._l(e.fields,function(e){return i("div",{key:e.id},[i("field-input",{attrs:{id:e.id,field:e}})],1)})],2)},staticRenderFns:[]};var te=i("VU/8")(K,ee,!1,function(e){i("Hz2z")},null,null).exports,ie={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("h1",[e._v(e._s(e.model.name))]),e._v(" "),i("p",[i("router-link",{staticClass:"button edit",attrs:{to:{name:"editModel",params:e.id}}},[e._v("edit model")])],1),e._v(" "),i("ul",e._l(e.model.fields,function(t){return i("li",{key:t.id},[i("h2",[e._v(e._s(t.name))]),e._v(" "),i("ul",e._l(t.fieldValues,function(t){return i("li",{key:t.id},[e._v(e._s(t.name))])}))])}))])},staticRenderFns:[]};var ne=i("VU/8")({name:"model",computed:{id:function(){return this.$route.params.id},model:function(){return this.$store.state.modelStore}},created:function(){this.$store.dispatch("modelStore/refreshModel",this.id)}},ie,!1,function(e){i("2pey")},"data-v-e8188400",null).exports,oe=i("bOdI"),ae=i.n(oe),se={name:"visual",props:["set","image"],data:function(){return{shape:this.set&&this.set.shape||"circle",fillcolor:this.set&&this.set.fillcolor||"none",strokecolor:this.set&&this.set.strokecolor||"#000",strokesize:this.set&&this.set.strokesize||5,stroketype:this.set&&this.set.stroketype||"solid",opacity:this.set&&this.set.opacity||1,rotation:this.set&&this.set.rotation||0,size:this.set&&this.set.size||100}},computed:{img:function(){return this.image?this.image:this.set&&this.set.shape?z(this.set.shape):""},style:function(){var e=parseInt(this.size,10)/100;return{fill:this.fillcolor,stroke:this.strokecolor,strokeWidth:this.strokesize,opacity:this.opacity,transform:"scale("+e+") rotate("+this.rotation+"deg)"}}}},re={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"visual",style:this.style,domProps:{innerHTML:this._s(this.img.src)}})}]};var le=i("VU/8")(se,re,!1,function(e){i("gjGP")},"data-v-16832a6c",null).exports,de={name:"ModelData",computed:{id:function(){return this.$route.params.id},records:function(){return this.$store.getters["recordStore/getRecordsByModel"](this.id)},model:function(){return this.$store.getters["appStore/getModelById"](this.id)},visualsets:function(){var e=this;return this.records.map(function(t){return t.map(function(t){return e.mapVisual(t.fieldId,t.fieldValueId)}).reduce(function(e,t){return y()(e,t),e},{})})}},methods:{getFieldById:function(e){return this.model.fields.find(function(t){return t.id===e})},getLegendVisual:function(e,t){var i,n=e.transform.values[t.id].type.toLowerCase(),o=e.transform.values[t.id].mappedValue;return i={},ae()(i,n,o),ae()(i,"shape",e.shape),i},mapVisual:function(e,t){var i=this.getFieldById(e).transform.values[t];return ae()({},i.type.toLowerCase(),i.mappedValue)}},created:function(){this.$store.dispatch("appStore/setModelList"),this.$store.dispatch("recordStore/setRecordList")},components:{visual:le}},ue={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("h1",[e._v("Collected data: "+e._s(e.model.name))]),e._v(" "),i("router-link",{staticClass:"button edit",attrs:{to:{name:"editModel",params:{id:e.model.id}}}},[e._v("\n    edit model\n  ")]),e._v(" "),i("div",{staticClass:"legend"},e._l(e.model.fields,function(t,n){return i("div",{key:n,staticClass:"field"},[i("h3",[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"legend-visuals"},e._l(t.fieldValues,function(n,o){return i("div",{key:o},[i("p",[e._v(e._s(n.name))]),e._v(" "),i("div",{staticClass:"visual-wrapper"},[i("visual",{attrs:{set:e.getLegendVisual(t,n)}})],1)])}))])})),e._v(" "),i("div",{staticClass:"visual-grid"},e._l(e.visualsets,function(e,t){return i("visual",{key:t,attrs:{set:e}})}))],1)},staticRenderFns:[]};var ce=i("VU/8")(de,ue,!1,function(e){i("zWVY")},"data-v-f0b8e1a0",null).exports,fe={name:"Record",data:function(){return{recordName:"untitled",selectedModelId:"select one",selectedModelsFields:[]}},computed:{id:function(){return this.$route.params.id},selectedModel:function(){var e=window.localStorage.getItem(this.selectedModelId);return A.load(JSON.parse(e))},models:function(){return this.$store.state.appStore.models}},methods:{saveRecord:function(){var e=this.selectedModelsFields.map(function(e){return{fieldId:e.data.id,fieldValueId:e.value}}),t={name:this.recordName,model:this.selectedModel.id,values:e};this.$store.dispatch("recordStore/addRecord",t)},saveRecordAndAdd:function(e){e.preventDefault(),this.saveRecord(),this.$router.go(this.$route.path)},saveRecordAndFinish:function(e){e.preventDefault(),this.saveRecord(),this.$router.go("/")}},watch:{selectedModel:function(){console.log(this.selectedModel),this.selectedModelsFields=this.selectedModel.fields.map(function(e){return{data:e,value:""}})}},created:function(){this.$store.dispatch("recordStore/setRecordList"),this.$store.dispatch("appStore/setModelList")}},pe={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("h1",[e._v("Add a new record")]),e._v(" "),i("form",[i("div",{staticClass:"input-row"},[i("label",[e._v("Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recordName,expression:"recordName"}],attrs:{type:"text"},domProps:{value:e.recordName},on:{input:function(t){t.target.composing||(e.recordName=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"input-row"},[i("label",[e._v("select model")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedModelId,expression:"selectedModelId"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedModelId=t.target.multiple?i:i[0]}}},[e._l(e.models,function(t,n){return i("option",{key:n,domProps:{value:t.id}},[e._v(e._s(t.name))])}),e._v(" "),i("option",{attrs:{selected:"",value:"null"}},[e._v("choose one")])],2)]),e._v(" "),e.selectedModel?i("div",e._l(e.selectedModel.fields,function(t,n){return i("div",{key:n,staticClass:"input-row"},[i("label",[e._v("select "+e._s(t.name))]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedModelsFields[n].value,expression:"selectedModelsFields[i].value"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.selectedModelsFields[n],"value",t.target.multiple?i:i[0])}}},e._l(t.fieldValues,function(t,n){return i("option",{key:n,domProps:{value:t.id}},[e._v(e._s(t.name))])}))])})):e._e(),e._v(" "),i("button",{on:{click:e.saveRecordAndFinish}},[e._v("save")]),e._v(" "),i("button",{on:{click:e.saveRecordAndAdd}},[e._v("save and add new")])])])},staticRenderFns:[]};var he,ve,me=i("VU/8")(fe,pe,!1,function(e){i("L1rV")},"data-v-b9f8e922",null).exports,ge=i("Dd8w"),Ve=i.n(ge),_e=i("NYxO"),ye=i("n+SM"),we=i("BO1k"),Se=i.n(we),Fe=i("d7EF"),Ce=i.n(Fe),ke=i("ifoU"),be=i.n(ke),Me=i("DFHm"),Ie=function(){function e(t){var i=this;S()(this,e),this.solver=t,this.position=[0,0],this.size=[0,0],this.left=new Me.f,this.top=new Me.f,this.width=new Me.f,this.height=new Me.f,this.hcenter=new Me.f,this.vcenter=new Me.f,this.bottom=new Me.f,this.right=new Me.f,this.solver.addEditVariable(this.left,Me.e.weak),this.solver.addEditVariable(this.top,Me.e.weak),this.solver.addEditVariable(this.width,Me.e.strong),this.solver.addEditVariable(this.height,Me.e.strong),this.innerConstraint=[new Me.a(new Me.b([-1,this.hcenter],this.left,[.5,this.width]),Me.c.Eq,0,Me.e.required),new Me.a(new Me.b([-1,this.vcenter],this.top,[.5,this.height]),Me.c.Eq,0,Me.e.required),new Me.a(new Me.b([-1,this.bottom],this.top,this.height),Me.c.Eq,0,Me.e.required),new Me.a(new Me.b([-1,this.right],this.left,this.width),Me.c.Eq,0,Me.e.required),new Me.a(this.top,Me.c.Ge,0,Me.e.required),new Me.a(this.left,Me.c.Ge,0,Me.e.required)],this.innerConstraint.forEach(function(e){return i.solver.addConstraint(e)}),this.outerConstraints=[]}return C()(e,[{key:"setPosition",value:function(e){var t=Ce()(e,2),i=t[0],n=t[1];this.solver.suggestValue(this.left,i),this.solver.suggestValue(this.top,n)}},{key:"setSize",value:function(e){var t=Ce()(e,2),i=t[0],n=t[1];this.solver.suggestValue(this.width,i),this.solver.suggestValue(this.height,n)}},{key:"setOuterConstraints",value:function(e){var t=this;this.outerConstraints=e.map(function(e){var i=e[0],n=e[1],o=n.layoutItem,a=n.prop;return new Me.a(new Me.b([-1,t[i]],o[a]),Me.c.Eq,0,Me.e.strong)}),this.outerConstraints.forEach(function(e){t.solver.addConstraint(e)})}},{key:"removeOuterConstraints",value:function(){var e=this;this.outerConstraints.forEach(function(t){return e.solver.removeConstraint(t)}),this.outerConstraints=[]}},{key:"getPlacement",value:function(){return{top:this.top.value(),left:this.left.value(),width:this.width.value(),height:this.height.value(),right:this.right.value(),bottom:this.bottom.value(),hcenter:this.hcenter.value(),vcenter:this.vcenter.value()}}},{key:"getHorizontalValues",value:function(t){var i=t||this.getPlacement();return e.horizontalAxises.map(function(e){return[e,i[e]]})}},{key:"getVerticalValues",value:function(t){var i=t||this.getPlacement();return e.verticalAxises.map(function(e){return[e,i[e]]})}},{key:"destroy",value:function(){var e=this;this.innerConstraint.forEach(function(t){return e.solver.removeConstraint(t)})}},{key:"getCpPosition",value:function(e){return[this[e[0]].value(),this[e[1]].value()]}},{key:"getCpPositions",value:function(){var t=this;return e.connectionPoints.map(function(e){return{cp:e,position:t.getCpPosition(e)}})}},{key:"placement",get:function(){return this.getPlacement()}}],[{key:"connectionPoints",get:function(){return[["top","left"],["top","hcenter"],["top","right"],["vcenter","left"],["vcenter","hcenter"],["vcenter","right"],["bottom","left"],["bottom","hcenter"],["bottom","right"]]}},{key:"horizontalAxises",get:function(){return["left","hcenter","right"]}},{key:"verticalAxises",get:function(){return["top","vcenter","bottom"]}}]),e}(),$e=i("gRE1"),xe=i.n($e),Ee=i("Gu7T"),Pe=i.n(Ee),Re={fields:function(e){return e.fields},selected:function(e){return function(t){return e.selectedFields.findIndex(function(e){return e.id===t})>-1}},layout:function(e,t){var i=t.fields;return e.solver.updateVariables(),i.map(function(e){var t=e.layoutItem.placement;return{id:e.id,image:e.image,src:e.image&&e.image.src||"",top:t.top,left:t.left,width:t.width,height:t.height}})},images:function(e){return e.images},imageByName:function(e){return function(t){return e.images.find(function(e){return e.name===t})}},getFieldById:function(e){return function(t){return e.fields.find(function(e){return e.id===t})}},getNearbyPoints:function(e){return function(t){var i,n=e.fields,o=[],a=[],s=t.layoutItem.getPlacement(),r=t.layoutItem.getHorizontalValues(s),l=t.layoutItem.getVerticalValues(s),d=[],u=[];n.forEach(function(e){var t=e.layoutItem,i=e.id,n=t.getPlacement();o=o.concat(t.getHorizontalValues(n).map(function(e){return[].concat(Pe()(e),[i])})),a=a.concat(t.getVerticalValues(n).map(function(e){return[].concat(Pe()(e),[i])}))}),r.forEach(function(e){o.forEach(function(i){Math.abs(i[1]-e[1])<10&&t.id!==i[2]&&d.push([e,i])})}),l.forEach(function(e){a.forEach(function(i){Math.abs(i[1]-e[1])<10&&t.id!==i[2]&&u.push([e,i])})});var c={};return d.forEach(function(e){var i=Ce()(e,2),n=i[0],o=i[1];c[o[2]]||(c[o[2]]=[[{fieldId:t.id,prop:n[0]},{fieldId:o[2],prop:o[0]}]])}),u.forEach(function(e){var i=Ce()(e,2),n=i[0],o=i[1];c[o[2]]&&(c[o[2]][1]=[{fieldId:t.id,prop:n[0]},{fieldId:o[2],prop:o[0]}])}),(i=[]).concat.apply(i,Pe()(xe()(c)))}}},He="setFieldPosition",Ne="setFieldConstrain",Be="removeFieldConstrain",ze="loadFields",Oe="addField",Ae="updatePosition",De="resetLayoutStore",Te="updateSolver",Le={namespaced:!0,state:{fields:[],solver:new Me.d,constrains:new be.a},mutations:(he={},ae()(he,Te,function(e){e.solver.updateVariables()}),ae()(he,De,function(e){e.solver.clear(),e.fields=[],e.constrains=new be.a}),ae()(he,Oe,function(e,t){if(t.shape){var i=[20,40],n=new Ie(e.solver),o={id:t.id,name:t.name,image:z(t.shape),position:i,layoutItem:n};e.fields=e.fields.concat(o),n.setPosition(i),n.setSize([o.image.width,o.image.height])}}),ae()(he,Ae,function(e,t){var i=t.field,n=t.position;i.layoutItem.setPosition(n)}),he),actions:(ve={},ae()(ve,ze,function(e,t){var i=e.commit,n=e.rootGetters;t.forEach(function(e){e.shape=n["modelStore/getFieldShape"](e),i(Oe,e)})}),ae()(ve,He,function(e,t){e.state;var i=e.commit,n=e.getters,o=t.id,a=t.position,s=n.getFieldById(o);i(Ae,{field:s,position:a}),i(Te)}),ae()(ve,Be,function(e,t){var i=e.state,n=i.solver,o=new be.a,a=!0,s=!1,r=void 0;try{for(var l,d=Se()(i.constrains);!(a=(l=d.next()).done);a=!0){var u=l.value,c=Ce()(u,2),f=c[0],p=c[1],h=Ce()(f,2),v=h[0],m=h[1];v.fieldId===t||m.fieldId===t?n.removeConstraint(p):o.set(f,p)}}catch(e){s=!0,r=e}finally{try{!a&&d.return&&d.return()}finally{if(s)throw r}}i.constrains=o}),ae()(ve,Ne,function(e,t){var i=e.state,n=e.getters,o=e.commit,a=i.solver,s=i.constrains;console.log("nearby",t),t.forEach(function(e){var t=Ce()(e,2),i=t[0],o=t[1],r=n.getFieldById(i.fieldId),l=n.getFieldById(o.fieldId);console.log("new constrain: ",function(e){return e[0].fieldId+":"+e[0].prop+"="+e[1].fieldId+":"+e[1].prop}(e));var d=new Me.a(new Me.b([-1,r.layoutItem[i.prop]],l.layoutItem[o.prop]),Me.c.Eq,0,Me.e.strong);a.addConstraint(d),s.set(e,d)}),o(Te)}),ve),getters:Re},Ue={name:"ShapeEditor",components:{visual:le},computed:Ve()({},Object(_e.b)({layout:"layoutStore/layout"}),{model:function(){return this.$store.getters["appStore/getModelById"](this.id)},id:function(){return this.$route.params.id}}),methods:{setupDrag:function(){var e=this,t=new ye.Draggable(this.$el),i=0,n=0,o=null,a=null;t.on("drag:start",function(t){var s=t.sensorEvent,r=t.source,l=r.dataset.fieldId;i=s.clientX-r.dataset.left,n=s.clientY-r.dataset.top,o=e.$store.getters["layoutStore/getFieldById"](l),a=null,e.$store.dispatch("layoutStore/"+Be,o.id)}),t.on("drag:move",function(t){var o=t.source.dataset.fieldId,a=t.sensorEvent,s=[a.clientX-i,a.clientY-n];e.$store.dispatch("layoutStore/"+He,{id:o,position:s})}),t.on("drag:stop",function(t){(a=e.$store.getters["layoutStore/getNearbyPoints"](o))&&e.$store.dispatch("layoutStore/"+Ne,a)})}},mounted:function(){this.setupDrag(),this.$store.dispatch("modelStore/refreshModel",this.$route.params.id),this.$store.dispatch("layoutStore/"+ze,this.$store.getters["modelStore/getFieldsToDraw"])}},Ze={render:function(){var e=this.$createElement,t=this._self._c||e;return t("main",this._l(this.layout,function(e,i){return t("div",{key:i,staticClass:"draggable-source",style:{top:e.top+"px",left:e.left+"px",width:e.width+"px",height:e.height+"px"},attrs:{"data-field-id":e.id,"data-top":e.top,"data-left":e.left}},[t("visual",{attrs:{image:e.image}})],1)}))},staticRenderFns:[]};var qe=i("VU/8")(Ue,Ze,!1,function(e){i("9G6W")},null,null).exports;n.a.use(s.a);var Ge=new s.a({routes:[{path:"/",name:"Home",component:l},{path:"/editModel/:id",name:"editModel",component:te,params:!0},{path:"/model/:id",name:"Model",component:ne,params:!0},{path:"/record",name:"Record",component:me,params:!0},{path:"/modelData/:id",name:"ModelData",component:ce,params:!0},{path:"/shapeEditor/:id",name:"ShapeEditor",component:qe,params:!0}]}),je=i("//Fk"),Ye=i.n(je),Je=i("mvHQ"),We=i.n(Je),Xe={namespaced:!0,state:{models:[],visuals:[]},getters:{getModelById:function(e){return function(t){return e.models.find(function(e){return e.id===t})}}},mutations:{addModelToList:function(e,t){e.models.push(t)},setModels:function(e,t){e.models=t.map(function(e){return O.load(e)})},removeModel:function(e,t){e.models=e.models.filter(function(e){return e.id!==t})},updateModel:function(e,t){e.models=e.models.map(function(e){return e.id===t.id?new O(t.id,t.name):e})}},actions:{save:function(e){var t=e.state;window.localStorage.setItem("models",We()(t.models))},initModel:function(e,t){window.localStorage.setItem(t.id,We()(t))},load:function(e){(0,e.commit)("setModels",JSON.parse(window.localStorage.getItem("models")))},setModelList:function(e){(0,e.dispatch)("load")},createModel:function(e){e.state;var t=e.commit,i=e.dispatch,n=new O;return t("addModelToList",n),i("save"),i("initModel",n),new Ye.a(function(e){return e(n)},function(e){return console.log(e)})},updateModel:function(e,t){var i=e.commit,n=e.dispatch;n("load"),i("updateModel",t),n("save")},deleteModel:function(e,t){var i=e.commit,n=e.dispatch;i("removeModel",t),n("save")}}},Qe={namespaced:!0,state:{id:"",name:"",fields:[],shape:"rect",fill:"",stroke:"",error:!1},getters:{getFieldById:function(e){return function(t){return e.fields.find(function(e){return e.id===t})}},getFieldValueById:function(){return function(e,t){return t.fieldValues.find(function(t){return t.id===e})}},getVisualById:function(){return function(e,t){return e.transform.values[t]&&e.transform.values[t].mappedValue}},getAllFields:function(e){return e.fields},getFieldShape:function(e){return function(t){return"null"===t.shape?e.shape:t.shape}},getFieldsToDraw:function(e){return e.fields.reduce(function(e,t){return e.find(function(e){return e.shape===t.shape})||e.push(t),e},[])}},mutations:{setModel:function(e,t){y()(e,t)},addField:function(e,t){e.fields=e.fields.concat(t)},removeField:function(e,t){e.fields=e.fields.filter(function(e){return t!==e.id})},updateField:function(e,t){var i=t.oldField,n=t.newField;y()(i,n)},addFieldValue:function(e,t){var i=t.field,n=t.value;i.fieldValues=i.fieldValues.concat(n)},removeFieldValue:function(e,t){var i=t.field,n=t.valueId;i.fieldValues=i.fieldValues.filter(function(e){return e.id!==n})},updateFieldValue:function(e,t){var i=t.field,n=t.value;i.fieldValues=i.fieldValues.map(function(e){return e.id===n.id?y()(e,n):e})},setVisualToValue:function(e,t){var i=t.field,n=t.value,o=t.visual;i.transform.values[n.id]=U.load(o)},setName:function(e,t){e.name=t},setShape:function(e,t){e.shape=t},setFill:function(e,t){e.fill=t},setStroke:function(e,t){e.stroke=t}},actions:{addValueToField:function(e,t){var i=e.getters;e.dispatch;(0,e.commit)("addFieldValue",{field:i.getFieldById(t),value:new T})},updateValueOfField:function(e,t){(0,e.commit)("updateFieldValue",{field:t.field,value:t.value})},deleteValueOfField:function(e,t){var i=e.getters,n=t.valueId,o=t.fieldId,a=i.getFieldById(o),s=i.getFieldValueById(n,a),r=a.fieldValues.indexOf(s);a.fieldValues.splice(r,1)},resetVisualsOfFiels:function(e,t){e.getters.getFieldById(t).transform=new L},saveVisualToField:function(e,t){e.getters;(0,e.commit)("setVisualToValue",{field:t.field,value:t.value,visual:t.visual})},addFieldToModel:function(e){(0,e.commit)("addField",new D)},saveFieldToModel:function(e,t){var i=e.getters,n=(e.dispatch,t.name),o=t.shape,a=t.fieldId,s=i.getFieldById(a);s.name=n,s.shape=o},deleteField:function(e,t){var i=e.commit;e.dispatch;i("removeField",t.fieldId)},updateField:function(e,t){var i=e.getters;(0,e.commit)("updateField",{oldField:i.getFieldById(t.id),newField:t})},refreshModel:function(e,t){e.state;var i=e.commit,n=window.localStorage.getItem(t);n&&i("setModel",A.load(JSON.parse(n)))},updateModelData:function(e,t){var i=e.state;y()(i,t)},save:function(e){var t=e.state,i=e.dispatch;""!==t.name&&""!==t.fill&&""!==t.stroke&&""!==t.shape?(i("appStore/updateModel",t,{root:!0}),window.localStorage.setItem(t.id,We()(t))):t.error=!0}}},Ke={namespaced:!0,state:{records:[]},getters:{getRecordsByModel:function(e){return function(t){return e.records.filter(function(e){return e.model===t}).map(function(e){return e.values})}}},mutations:{addRecord:function(e,t){e.records.push(t)},setRecords:function(e,t){e.records=t}},actions:{addRecord:function(e,t){var i=e.state;(0,e.commit)("addRecord",t),localStorage.setItem("records",We()(i.records))},setRecordList:function(e){var t=e.commit;localStorage.getItem("records")&&t("setRecords",JSON.parse(localStorage.getItem("records")))}}};n.a.use(_e.a);var et=new _e.a.Store({modules:{appStore:Xe,modelStore:Qe,recordStore:Ke,layoutStore:Le}});n.a.config.productionTip=!1,new n.a({el:"#app",router:Ge,store:et,components:{App:a},template:"<App/>"})},UenH:function(e,t){e.exports='<svg viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="100" height="100"></rect></svg>'},eZUo:function(e,t){},gjGP:function(e,t){},gyxb:function(e,t){},jEYU:function(e,t){},zWVY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f8dc3075ce9827a2692d.js.map