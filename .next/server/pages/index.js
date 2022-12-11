"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./containers/Login.tsx":
/*!******************************!*\
  !*** ./containers/Login.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_2__]);\n_services_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Login = ()=>{\n    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const doLogin = async ()=>{\n        try {\n            setErrorMsg(\"\");\n            if (!login || !password) {\n                return setErrorMsg(\"Favor preencher os campos\");\n            }\n            setLoading(true);\n            const body = {\n                login,\n                password\n            };\n            const result = await (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.executeRequest)(\"login\", \"POST\", body);\n            if (result && result.data) {\n                const obj = result.data;\n                localStorage.setItem(\"accessToken\", obj.token);\n                localStorage.setItem(\"name\", obj.name);\n                localStorage.setItem(\"email\", obj.email);\n            }\n        } catch (e) {\n            console.log(\"Ocorreu erro ao efetuar login:\", e);\n            if (e?.response?.data?.error) {\n                setErrorMsg(e?.response?.data?.error);\n            } else {\n                setErrorMsg(\"Ocorreu erro ao efetuar login\");\n            }\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/logo.svg\",\n                alt: \"Logo Fiap\",\n                className: \"logo\"\n            }, void 0, false, {\n                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form\",\n                children: [\n                    errorMsg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: errorMsg\n                    }, void 0, false, {\n                        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 30\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/mail.svg\",\n                                alt: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Login\",\n                                value: login,\n                                onChange: (event)=>setLogin(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/lock.svg\",\n                                alt: \"Senha\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Senha\",\n                                value: password,\n                                onChange: (event)=>setPassword(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: doLogin,\n                        disabled: loading,\n                        children: loading ? \"...Carregando\" : \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/containers/Login.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL0xvZ2luLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNpQztBQUNnQjtBQUUxQyxNQUFNRSxRQUFrQixJQUFNO0lBRWpDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1XLFVBQVUsVUFBWTtRQUN4QixJQUFJO1lBQ0FILFlBQVk7WUFDWixJQUFJLENBQUNMLFNBQVMsQ0FBQ0UsVUFBVTtnQkFDckIsT0FBT0csWUFBWTtZQUN2QixDQUFDO1lBRURFLFdBQVcsSUFBSTtZQUVmLE1BQU1FLE9BQU87Z0JBQ1RUO2dCQUNBRTtZQUNKO1lBRUEsTUFBTVEsU0FBUyxNQUFNWiw2REFBY0EsQ0FBQyxTQUFTLFFBQVFXO1lBQ3JELElBQUdDLFVBQVVBLE9BQU9DLElBQUksRUFBQztnQkFDckIsTUFBTUMsTUFBTUYsT0FBT0MsSUFBSTtnQkFDdkJFLGFBQWFDLE9BQU8sQ0FBQyxlQUFlRixJQUFJRyxLQUFLO2dCQUM3Q0YsYUFBYUMsT0FBTyxDQUFDLFFBQVFGLElBQUlJLElBQUk7Z0JBQ3JDSCxhQUFhQyxPQUFPLENBQUMsU0FBU0YsSUFBSUssS0FBSztZQUMzQyxDQUFDO1FBQ0wsRUFBRSxPQUFPQyxHQUFRO1lBQ2JDLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NGO1lBQzlDLElBQUdBLEdBQUdHLFVBQVVWLE1BQU1XLE9BQU07Z0JBQ3hCakIsWUFBWWEsR0FBR0csVUFBVVYsTUFBTVc7WUFDbkMsT0FBTTtnQkFDRmpCLFlBQVk7WUFDaEIsQ0FBQztRQUNMO1FBRUFFLFdBQVcsS0FBSztJQUNwQjtJQUVBLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJQyxLQUFJO2dCQUFZQyxLQUFJO2dCQUFZSCxXQUFVOzs7Ozs7MEJBQy9DLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1ZwQiwwQkFBWSw4REFBQ3dCO2tDQUFHeEI7Ozs7OztrQ0FDakIsOERBQUNtQjs7MENBQ0csOERBQUNFO2dDQUFJQyxLQUFJO2dDQUFZQyxLQUFJOzs7Ozs7MENBQ3pCLDhEQUFDRTtnQ0FBTUMsTUFBSztnQ0FBT0MsYUFBWTtnQ0FDM0JDLE9BQU9oQztnQ0FBT2lDLFVBQVVDLENBQUFBLFFBQVNqQyxTQUFTaUMsTUFBTUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBSXBFLDhEQUFDVDs7MENBQ0csOERBQUNFO2dDQUFJQyxLQUFJO2dDQUFZQyxLQUFJOzs7Ozs7MENBQ3pCLDhEQUFDRTtnQ0FBTUMsTUFBSztnQ0FBV0MsYUFBWTtnQ0FDL0JDLE9BQU85QjtnQ0FBVStCLFVBQVVDLENBQUFBLFFBQVMvQixZQUFZK0IsTUFBTUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBSTFFLDhEQUFDSTt3QkFBT0MsU0FBUzdCO3dCQUFTOEIsVUFBVWhDO2tDQUFVQSxVQUFVLGtCQUFrQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlcmVuY2lhZG9yLXRhcmVmYXMtbmV4dDJhb2pyLy4vY29udGFpbmVycy9Mb2dpbi50c3g/MGJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV4ZWN1dGVSZXF1ZXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgTG9naW46IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZG9Mb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldEVycm9yTXNnKCcnKTtcbiAgICAgICAgICAgIGlmICghbG9naW4gfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKCdGYXZvciBwcmVlbmNoZXIgb3MgY2FtcG9zJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICAgICAgbG9naW4sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVJlcXVlc3QoJ2xvZ2luJywgJ1BPU1QnLCBib2R5KTtcbiAgICAgICAgICAgIGlmKHJlc3VsdCAmJiByZXN1bHQuZGF0YSl7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgb2JqLnRva2VuKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG9iai5uYW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCBvYmouZW1haWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPY29ycmV1IGVycm8gYW8gZWZldHVhciBsb2dpbjonLCBlKTtcbiAgICAgICAgICAgIGlmKGU/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcil7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNc2coZT8ucmVzcG9uc2U/LmRhdGE/LmVycm9yKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1zZygnT2NvcnJldSBlcnJvIGFvIGVmZXR1YXIgbG9naW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGFsdD1cIkxvZ28gRmlhcFwiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAge2Vycm9yTXNnICYmIDxwPntlcnJvck1zZ308L3A+fVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21haWwuc3ZnXCIgYWx0PVwiTG9naW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9naW59IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRMb2dpbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9jay5zdmdcIiBhbHQ9XCJTZW5oYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCJTZW5oYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb0xvZ2lufSBkaXNhYmxlZD17bG9hZGluZ30+e2xvYWRpbmcgPyAnLi4uQ2FycmVnYW5kbycgOiAnTG9naW4nfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXhlY3V0ZVJlcXVlc3QiLCJMb2dpbiIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZG9Mb2dpbiIsImJvZHkiLCJyZXN1bHQiLCJkYXRhIiwib2JqIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwibmFtZSIsImVtYWlsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/Login.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Login */ \"./containers/Login.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_Login__WEBPACK_IMPORTED_MODULE_1__]);\n_containers_Login__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Login__WEBPACK_IMPORTED_MODULE_1__.Login, {}, void 0, false, {\n        fileName: \"/Users/thiagobarbosadesouza/Documents/Projeto Aula Front End/gerenciador-tarefas-next2aojr/nextByReact/pages/index.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBRTVCLFNBQVNDLFFBQVE7SUFDOUIscUJBQ0UsOERBQUNELG9EQUFLQTs7Ozs7QUFFVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VyZW5jaWFkb3ItdGFyZWZhcy1uZXh0MmFvanIvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4uL2NvbnRhaW5lcnMvTG9naW4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxMb2dpbi8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTG9naW4iLCJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"executeRequest\": () => (/* binding */ executeRequest)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst executeRequest = (endpoint, method, body)=>{\n    const headers = {\n        \"Content-Type\": \"application/json\"\n    };\n    const token = localStorage.getItem(\"accessToken\");\n    if (token) {\n        headers[\"Authorization\"] = \"Bearer \" + token;\n    }\n    const URL = \"http://localhost:3000/api/\" + endpoint;\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request({\n        url: URL,\n        method,\n        data: body ? body : \"\",\n        headers,\n        timeout: 30000\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFN0IsTUFBTUMsaUJBQWlCLENBQUNDLFVBQWtCQyxRQUFnQkMsT0FBZTtJQUM1RSxNQUFNQyxVQUFVO1FBQUMsZ0JBQWlCO0lBQWtCO0lBRXBELE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxJQUFHRixPQUFNO1FBQ0xELE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZQztJQUMzQyxDQUFDO0lBRUQsTUFBTUcsTUFBTSwrQkFBNkJQO0lBQ3pDLE9BQU9GLHFEQUFhLENBQUM7UUFDakJXLEtBQUtGO1FBQ0xOO1FBQ0FTLE1BQU9SLE9BQU9BLE9BQU8sRUFBRTtRQUN2QkM7UUFDQVEsU0FBUztJQUNiO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlcmVuY2lhZG9yLXRhcmVmYXMtbmV4dDJhb2pyLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7TWV0aG9kfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBleGVjdXRlUmVxdWVzdCA9IChlbmRwb2ludDogc3RyaW5nLCBtZXRob2Q6IE1ldGhvZCwgYm9keT8gOiBhbnkpID0+e1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9IGFzIGFueTtcblxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gICAgaWYodG9rZW4pe1xuICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8nK2VuZHBvaW50O1xuICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBVUkwsXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgZGF0YSA6IGJvZHkgPyBib2R5IDogJycsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAwXG4gICAgfSk7XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZXhlY3V0ZVJlcXVlc3QiLCJlbmRwb2ludCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVVJMIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();