"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[440,334,27],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./src/stories/components/OrderDetailNavigator.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OrderDetailNavigator:function(){return OrderDetailNavigator_stories_OrderDetailNavigator},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return OrderDetailNavigator_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,OrderDetailNavigator_stories_templateObject,_OrderDetailNavigator,_OrderDetailNavigator2,_OrderDetailNavigator3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),constants=__webpack_require__("./src/constants/index.ts"),url=__webpack_require__("./src/constants/url.ts"),useFetchData=__webpack_require__("./src/hooks/useFetchData.ts"),useGoToAnotherPage=__webpack_require__("./src/hooks/useGoToAnotherPage.ts"),recoil=__webpack_require__("./src/recoil/index.ts"),Button=__webpack_require__("./src/components/common/Button.tsx"),TrashCanIcon=__webpack_require__("./src/components/icons/TrashCanIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OrderDetailNavigator=function OrderDetailNavigator(_ref){var orderId=_ref.orderId,createdAt=_ref.createdAt,orderStatus=_ref.orderStatus,goToPage=(0,useGoToAnotherPage.L)(),location=(0,dist.TH)().pathname,server=(0,es.sJ)(recoil.vB),api=(0,useFetchData.$)().api,setOrderList=(0,es.Zl)(recoil.cu);return(0,jsx_runtime.jsxs)(S.Head,{tabIndex:0,children:[location!=="".concat(constants.u6.ORDER_LIST_PAGE,"/").concat(orderId)&&(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleOrderRemoveFromList(){api.delete("".concat(server).concat(url.m2,"/").concat(orderId)).then((function(){setOrderList((function(prev){return prev.filter((function(list){return list.orderId!==orderId}))}))})).catch((function(error){return alert(error.message)}))},children:(0,jsx_runtime.jsx)(TrashCanIcon.Z,{patternId:orderId,imageSize:{width:"40",height:"40"}})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("span",{children:"주문번호  | "}),(0,jsx_runtime.jsx)(S.OrderId,{children:orderId}),(0,jsx_runtime.jsxs)("span",{children:["[ ",createdAt," ]"]})]}),location!=="".concat(constants.u6.ORDER_LIST_PAGE,"/").concat(orderId)?(0,jsx_runtime.jsxs)(Button.Z,{css:buttonStyle,onClick:function onClick(){return goToPage("".concat(constants.u6.ORDER_LIST_PAGE,"/").concat(orderId))},children:[(0,jsx_runtime.jsx)("span",{children:"상세보기"}),(0,jsx_runtime.jsx)(index_esm.fmn,{})]}):(0,jsx_runtime.jsx)(S.OrderStatus,{children:orderStatus})]})},S={Head:styled_components_browser_esm.zo.li(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    padding: 30px 0 16px;\n    border-bottom: 1px solid var(--gray-color-300);\n    color: var(--text-color);\n\n    & button:first-child {\n      margin-right: 14px;\n\n      & svg {\n        margin-top: 3px;\n      }\n\n      & + p {\n        margin-right: auto;\n      }\n    }\n\n    @media (max-width: 420px) {\n      padding-bottom: 12px;\n\n      & button:first-child {\n        margin-right: 16px;\n      }\n\n      & p > span:first-child,\n      & p > span:nth-child(2) {\n        display: none;\n      }\n    }\n  "]))),OrderId:styled_components_browser_esm.zo.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    font-size: 14px;\n    margin: 0 auto 0 8px;\n\n    & + span {\n      margin-left: 28px;\n      font-size: 14px;\n      color: var(--text-color);\n    }\n\n    @media (max-width: 420px) {\n      & + span {\n        margin-left: 0;\n        font-size: 15px;\n        font-weight: 500;\n      }\n    }\n  "]))),OrderStatus:styled_components_browser_esm.zo.p(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    color: var(--red-color);\n  "])))},buttonStyle=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n\n  & > svg {\n    padding-top: 2px;\n    margin-left: 4px;\n  }\n\n  @media (max-width: 420px) {\n    & > svg {\n      padding-top: 0;\n    }\n\n    & span {\n      display: none;\n    }\n  }\n"]))),orderList_OrderDetailNavigator=OrderDetailNavigator;try{OrderDetailNavigator.displayName="OrderDetailNavigator",OrderDetailNavigator.__docgenInfo={description:"",displayName:"OrderDetailNavigator",props:{orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!0,type:{name:"enum",value:[{value:'"결제완료"'},{value:'"결제취소"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/orderList/OrderDetailNavigator.tsx#OrderDetailNavigator"]={docgenInfo:OrderDetailNavigator.__docgenInfo,name:"OrderDetailNavigator",path:"src/components/orderList/OrderDetailNavigator.tsx#OrderDetailNavigator"})}catch(__react_docgen_typescript_loader_error){}var OrderDetailNavigator_stories={component:orderList_OrderDetailNavigator,title:"Components/OrderList/OrderDetailNavigator",tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(OrderDetailNavigator_stories_S.Wrapper,{children:(0,jsx_runtime.jsx)(Story,{})})}]},OrderDetailNavigator_stories_OrderDetailNavigator=function OrderDetailNavigator(){return(0,jsx_runtime.jsx)(orderList_OrderDetailNavigator,{orderId:1,createdAt:"2023-06-04",orderStatus:constants.DF.PAID})},OrderDetailNavigator_stories_S={Wrapper:styled_components_browser_esm.zo.div(OrderDetailNavigator_stories_templateObject||(OrderDetailNavigator_stories_templateObject=(0,taggedTemplateLiteral.Z)(["\n    width: calc(100vw - 38vw);\n  "])))};OrderDetailNavigator_stories_OrderDetailNavigator.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OrderDetailNavigator_stories_OrderDetailNavigator.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OrderDetailNavigator=OrderDetailNavigator_stories_OrderDetailNavigator.parameters)||void 0===_OrderDetailNavigator?void 0:_OrderDetailNavigator.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <OrderDetailNavigatorComponent orderId={1} createdAt='2023-06-04' orderStatus={ORDER_STATUS.PAID} />"},null===(_OrderDetailNavigator2=OrderDetailNavigator_stories_OrderDetailNavigator.parameters)||void 0===_OrderDetailNavigator2||null===(_OrderDetailNavigator3=_OrderDetailNavigator2.docs)||void 0===_OrderDetailNavigator3?void 0:_OrderDetailNavigator3.source)})});var __namedExportsOrder=["OrderDetailNavigator"]},"./src/components/common/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],Button=function Button(_ref){var children=_ref.children,props=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(S.Button,(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({type:"button"},props),{},{children:children}))},S={Button:styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    background: none;\n    cursor: pointer;\n\n    ","\n  "])),(function(props){return props.css}))};__webpack_exports__.Z=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["css","pathFill","children"],Icon=function Icon(_ref){var css=_ref.css,pathFill=_ref.pathFill,children=_ref.children,props=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.Svg,(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},props),{},{css:css,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:props.path,fill:pathFill}),children]}))},S={Svg:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.svg(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    ","\n  "])),(function(props){return props.css}))};__webpack_exports__.Z=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},pathFill:{defaultValue:null,description:"",name:"pathFill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/common/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/icons/TrashCanIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_common_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["css","patternId","imageSize"],TrashCanIcon=function TrashCanIcon(_ref){var css=_ref.css,patternId=_ref.patternId,imageSize=_ref.imageSize,props=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_common_Icon__WEBPACK_IMPORTED_MODULE_0__.Z,(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({width:"24",height:"24",fill:"#AAA",path:"M0 0H24V24H0V0Z",viewBox:"0 0 24 24","aria-label":"trash-can-icon-button",pathFill:"url(#pattern".concat(patternId,")"),css:css},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pattern",{id:"pattern".concat(patternId),patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use",{xlinkHref:"#image".concat(patternId),transform:"scale(0.025)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("image",{id:"image".concat(patternId),width:imageSize.width,height:imageSize.height,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURbu7u////729vbu7u7y8vLy8vLy8vEdwTLy8vLy8vLy8vL+/v7u7u7y8vLu7u7u7u729vbu7u7+/v7u7u7u7u7u7u7u7u7y8vL6+vru7u7y8vL29vbu7u7u7u7y8vLy8vLu7u7u7u6hNFAIAAAAhdFJOU4ABRsRoNnsAf4N6JJOSfL2+fTBxzPxXvzN4b1Z1zcCC+y6w4fIAAACdSURBVDjL7dTJDsIgFEBROvponedZ7///pKYmDS3QIBuN8W7K4iSEqWoUmIqA9bZSnapT7YKrDVb3ow33OFta8ABr3Z1aX+BsQQXWwm6wsKA4oIapAaVpDjvpdYXZa9RAAnoPSkBxRxgAXXvY39/vgc+DFPP7h78LP3HNxAfFhCVkylMGZQvT4deftjAZD7lJYrzrIvdNnRfxP/vhHjYnSVqiKRrnAAAAAElFTkSuQmCC"})]})}))};__webpack_exports__.Z=TrashCanIcon;try{TrashCanIcon.displayName="TrashCanIcon",TrashCanIcon.__docgenInfo={description:"",displayName:"TrashCanIcon",props:{patternId:{defaultValue:null,description:"",name:"patternId",required:!0,type:{name:"number"}},imageSize:{defaultValue:null,description:"",name:"imageSize",required:!0,type:{name:"{ width: string; height: string; }"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp"}},pathFill:{defaultValue:null,description:"",name:"pathFill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/TrashCanIcon.tsx#TrashCanIcon"]={docgenInfo:TrashCanIcon.__docgenInfo,name:"TrashCanIcon",path:"src/components/icons/TrashCanIcon.tsx#TrashCanIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DF:function(){return ORDER_STATUS},HS:function(){return IMAGE_PATH},_e:function(){return DELIVERY_FEE},a$:function(){return KEY_SERVER},bo:function(){return SERVER_IMAGE_LIST},jt:function(){return DEFAULT_SERVER},lB:function(){return INITIAL_COUPON_STATE},pn:function(){return ERROR},u6:function(){return ROUTE_PATH},uT:function(){return QUANTITY}});var DEFAULT_SERVER="도이",SERVER_IMAGE_LIST=["https://avatars.githubusercontent.com/u/112045553?v=4","https://avatars.githubusercontent.com/u/62413589?v=4","https://avatars.githubusercontent.com/u/97426362?v=4"],IMAGE_PATH={EMPTY_CART:"".concat(".","/assets/nothing.png"),EMPTY_ORDER_LIST:"".concat(".","/assets/empty.png")},ROUTE_PATH={MAIN_PAGE:"/",CART_PAGE:"/cart",ORDER_LIST_PAGE:"/order-list",ERROR_PAGE:"/404"},KEY_SERVER="server",QUANTITY={INITIAL:1,NONE:0,STEP:1,MAX:10,MIN:1},DELIVERY_FEE=3e3,INITIAL_COUPON_STATE={id:0,priceDiscount:0,name:""},ORDER_STATUS={PAID:"결제완료",CANCEL:"결제취소"},ERROR={PREFIX:"[ERROR]"}},"./src/hooks/useFetchData.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return useFetchData}});var regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),PREFIX=__webpack_require__("./src/constants/index.ts").pn.PREFIX,fetchApi=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(url,options){var response,contentType,json;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(navigator.onLine){_context.next=2;break}throw new Error("".concat(PREFIX," 네트워크가 오프라인 상태입니다."));case 2:return _context.next=4,fetch(url,options);case 4:if((response=_context.sent).ok){_context.next=15;break}_context.t0=response.status,_context.next=400===_context.t0?9:401===_context.t0?10:403===_context.t0?11:409===_context.t0?12:500===_context.t0?13:14;break;case 9:throw new Error("".concat(PREFIX," 잘못된 요청입니다."));case 10:throw new Error("".concat(PREFIX," 인증되지 않은 사용자입니다."));case 11:throw new Error("".concat(PREFIX," 권한이 없습니다."));case 12:throw new Error("".concat(PREFIX," 요청한 리소스가 현재 상태와 충돌합니다."));case 13:throw new Error("".concat(PREFIX," 서버 내부 에러가 발생했습니다."));case 14:throw new Error("".concat(PREFIX," 알 수 없는 에러가 발생했습니다."));case 15:if(!(contentType=response.headers.get("content-type"))||!contentType.includes("application/json")){_context.next=21;break}return _context.next=19,response.json();case 19:return json=_context.sent,_context.abrupt("return",json);case 21:return _context.abrupt("return",response);case 22:case"end":return _context.stop()}}),_callee)})));return function fetchApi(_x,_x2){return _ref.apply(this,arguments)}}(),useFetchData=function useFetchData(){var _useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1],fetchData=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(url,body){var data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetchApi(url,body);case 3:return data=_context.sent,_context.abrupt("return",data);case 7:throw _context.prev=7,_context.t0=_context.catch(0),_context.t0;case 10:return _context.prev=10,setIsLoading(!1),_context.finish(10);case 13:case"end":return _context.stop()}}),_callee,null,[[0,7,10,13]])})));return function fetchData(_x,_x2){return _ref.apply(this,arguments)}}();return{api:{get:function get(url,headers){return fetchData(url,{method:"GET",headers:headers})},post:function post(url,body){return fetchData(url,{method:"POST",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"},body:JSON.stringify(body)})},patch:function patch(url,body){return fetchData(url,{method:"PATCH",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"},body:JSON.stringify(body)})},delete:function _delete(url,body){return fetchData(url,{method:"DELETE",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"},body:JSON.stringify(body)})}},isLoading:isLoading}}},"./src/hooks/useGoToAnotherPage.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return useGoToAnotherPage}});var react_router_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-router/dist/index.js"),useGoToAnotherPage=function useGoToAnotherPage(){var navigator=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.s0)(),location=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.TH)().pathname;return function goToPage(path){location!==path&&navigator(path)}}},"./src/recoil/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{FU:function(){return checkedItemList},Ov:function(){return quantitySelector},RT:function(){return selectedCoupon},TP:function(){return productSelector},_u:function(){return cartBadgeSelector},cu:function(){return orderListState},dl:function(){return cartState},iH:function(){return totalPriceSelector},vB:function(){return serverState},vh:function(){return productListState}});var _localStorage$getItem,recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/url.ts"),productListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"productListState",default:[]}),productSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.CG)({key:"productSelector",get:function get(id){return function(_ref){return(0,_ref.get)(productListState).find((function(product){return product.id===id}))}}}),cartState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"cartState",default:[]}),quantitySelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.CG)({key:"quantitySelector",get:function get(id){return function(_ref2){var selectedCartItem=(0,_ref2.get)(cartState).find((function(item){return item.product.id===id}));return selectedCartItem?selectedCartItem.quantity:_constants__WEBPACK_IMPORTED_MODULE_1__.uT.NONE}}}),cartBadgeSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"cartBadgeSelector",get:function get(_ref3){var cart=(0,_ref3.get)(cartState);return new Set(cart)}}),checkedItemList=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"checkedItemIdList",default:[]}),totalPriceSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"totalPriceSelector",get:function get(_ref4){var _get2=_ref4.get,cart=_get2(cartState),checkedItemIdList=_get2(checkedItemList);return cart.filter((function(item){return checkedItemIdList.includes(item.id)})).reduce((function(acc,cur){return acc+cur.product.price*cur.quantity}),0)}}),serverState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"serverState",default:null!==(_localStorage$getItem=localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.a$))&&void 0!==_localStorage$getItem?_localStorage$getItem:"".concat(_constants_url__WEBPACK_IMPORTED_MODULE_2__.iw[_constants__WEBPACK_IMPORTED_MODULE_1__.jt])}),selectedCoupon=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"selectedCoupon",default:_constants__WEBPACK_IMPORTED_MODULE_1__.lB}),orderListState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"orderListState",default:[]})}}]);