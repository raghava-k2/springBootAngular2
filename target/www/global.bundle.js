webpackJsonp([2,3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==============================================================\nBootstrap tweaks\n===============================================================*/\nbody, h1, h2, h3, h4 {\n  font-weight: 300; }\n\n/* ==========================================================================\nBrowser Upgrade Prompt\n========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\n/* ==========================================================================\nGeneric styles\n========================================================================== */\n/* Error highlight on input fields */\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid green; }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid red; }\n\n/* other generic styles */\n.jh-card {\n  padding: 1.5%;\n  margin-top: 20px;\n  border: none; }\n\n.error {\n  color: white;\n  background-color: red; }\n\n.pad {\n  padding: 10px; }\n\n.w-40 {\n  width: 40% !important; }\n\n.w-60 {\n  width: 60% !important; }\n\n.break {\n  white-space: normal;\n  word-break: break-all; }\n\n.readonly {\n  background-color: #eee;\n  opacity: 1; }\n\n/*FIXME this is to support grids in table class; */\ntable td[class*=col-], table th[class*=col-] {\n  position: static;\n  display: table-cell;\n  float: none; }\n\n.footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n\n/* ==========================================================================\nmake sure browsers use the pointer cursor for anchors, even with no href\n========================================================================== */\na:hover {\n  cursor: pointer; }\n\n.hand {\n  cursor: pointer; }\n\n/* ==========================================================================\nCustom alerts for notification\n========================================================================== */\n.alerts .alert {\n  text-overflow: ellipsis; }\n  .alerts .alert pre {\n    background: none;\n    border: none;\n    font: inherit;\n    color: inherit;\n    padding: 0;\n    margin: 0; }\n  .alerts .alert .popover pre {\n    font-size: 10px; }\n\n.alerts .toast {\n  position: fixed;\n  width: 100%; }\n  .alerts .toast.left {\n    left: 5px; }\n  .alerts .toast.right {\n    right: 5px; }\n  .alerts .toast.top {\n    top: 55px; }\n  .alerts .toast.bottom {\n    bottom: 55px; }\n\n@media screen and (min-width: 480px) {\n  .alerts .toast {\n    width: 50%; } }\n\n/* ==========================================================================\nentity tables helpers\n========================================================================== */\n/* Remove Bootstrap padding from the element\n   http://stackoverflow.com/questions/19562903/remove-padding-from-columns-in-bootstrap-3 */\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n/* bootstrap 3 input-group 100% width\n   http://stackoverflow.com/questions/23436430/bootstrap-3-input-group-100-width */\n.width-min {\n  width: 1% !important; }\n\n/* Makes toolbar not wrap on smaller screens\n   http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#right */\n.flex-btn-group-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end; }\n\n/* ==========================================================================\nentity detail page css\n========================================================================== */\n.row.jh-entity-details > dd {\n  margin-bottom: 15px; }\n\n@media screen and (min-width: 768px) {\n  .row.jh-entity-details > dt {\n    margin-bottom: 15px; }\n  .row.jh-entity-details > dd {\n    border-bottom: 1px solid #eee;\n    padding-left: 180px;\n    margin-left: 0; } }\n\n/* ==========================================================================\nui bootstrap tweaks\n========================================================================== */\n.nav, .pagination, .carousel, .panel-title a {\n  cursor: pointer; }\n\n.datetime-picker-dropdown > li.date-picker-menu div > table .btn-default,\n.uib-datepicker-popup > li > div.uib-datepicker > table .btn-default {\n  border: 0; }\n\n.datetime-picker-dropdown > li.date-picker-menu div > table:focus,\n.uib-datepicker-popup > li > div.uib-datepicker > table:focus {\n  outline: none; }\n\n/* ==========================================================================\nSocial button\n========================================================================== */\n.jh-btn-social {\n  margin-bottom: 5px; }\n\n.jh-btn-google {\n  background-color: #dd4b39;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.jh-btn-google:hover, .jh-btn-google:focus, .jh-btn-google:active, .jh-btn-google.active, .open > .dropdown-toggle.jh-btn-google {\n  background-color: #c23321;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.jh-btn-facebook {\n  background-color: #3b5998;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.jh-btn-facebook:hover, .jh-btn-facebook:focus, .jh-btn-facebook:active, .jh-btn-facebook.active, .open > .dropdown-toggle.jh-btn-facebook {\n  background-color: #2d4373;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.jh-btn-twitter {\n  background-color: #55acee;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.jh-btn-twitter:hover, .jh-btn-twitter:focus, .jh-btn-twitter:active, .jh-btn-twitter.active, .open > .dropdown-toggle.jh-btn-twitter {\n  background-color: #2795e9;\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n/* jhipster-needle-scss-add-main JHipster will add new css style */\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/content/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(21)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(864);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:9060");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main/webapp/content/scss/global.scss");


/***/ })

},[25]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9zY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3M/OTA3ZiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdU1BQXdNLHFCQUFxQixFQUFFLDJNQUEyTSxvQkFBb0IscUJBQXFCLGdCQUFnQixxQkFBcUIsRUFBRSxrUUFBa1EsaUNBQWlDLEVBQUUsMkJBQTJCLCtCQUErQixFQUFFLDBDQUEwQyxrQkFBa0IscUJBQXFCLGlCQUFpQixFQUFFLFlBQVksaUJBQWlCLDBCQUEwQixFQUFFLFVBQVUsa0JBQWtCLEVBQUUsV0FBVywwQkFBMEIsRUFBRSxXQUFXLDBCQUEwQixFQUFFLFlBQVksd0JBQXdCLDBCQUEwQixFQUFFLGVBQWUsMkJBQTJCLGVBQWUsRUFBRSxvREFBb0QsbURBQW1ELHFCQUFxQix3QkFBd0IsZ0JBQWdCLEVBQUUsYUFBYSwrQ0FBK0MsRUFBRSxxUEFBcVAsb0JBQW9CLEVBQUUsV0FBVyxvQkFBb0IsRUFBRSxrTkFBa04sNEJBQTRCLEVBQUUsd0JBQXdCLHVCQUF1QixtQkFBbUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEVBQUUsaUNBQWlDLHNCQUFzQixFQUFFLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEVBQUUseUJBQXlCLGdCQUFnQixFQUFFLDBCQUEwQixpQkFBaUIsRUFBRSx3QkFBd0IsZ0JBQWdCLEVBQUUsMkJBQTJCLG1CQUFtQixFQUFFLDBDQUEwQyxvQkFBb0IsaUJBQWlCLEVBQUUsRUFBRSx1VkFBdVYsK0JBQStCLEVBQUUsdUJBQXVCLGdDQUFnQyxFQUFFLHFCQUFxQiw4QkFBOEIsRUFBRSx3QkFBd0IsaUNBQWlDLEVBQUUsaUJBQWlCLDBCQUEwQixFQUFFLDRJQUE0SSx5QkFBeUIsRUFBRSx3SkFBd0osMEJBQTBCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHNDQUFzQyw4QkFBOEIsRUFBRSx1TkFBdU4sd0JBQXdCLEVBQUUsMENBQTBDLGlDQUFpQywwQkFBMEIsRUFBRSxpQ0FBaUMsb0NBQW9DLDBCQUEwQixxQkFBcUIsRUFBRSxFQUFFLHFPQUFxTyxvQkFBb0IsRUFBRSxxSkFBcUosY0FBYyxFQUFFLHVJQUF1SSxrQkFBa0IsRUFBRSxpTUFBaU0sdUJBQXVCLEVBQUUsb0JBQW9CLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUUsc0lBQXNJLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUUsc0JBQXNCLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUUsZ0pBQWdKLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUUscUJBQXFCLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUUsMklBQTJJLDhCQUE4QixxQ0FBcUMsZ0JBQWdCLEVBQUU7O0FBRS90TDs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQSwrQyIsImZpbGUiOiJnbG9iYWwuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5Cb290c3RyYXAgdHdlYWtzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCB7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5Ccm93c2VyIFVwZ3JhZGUgUHJvbXB0XFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYnJvd3NlcnVwZ3JhZGUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDsgfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuR2VuZXJpYyBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIEVycm9yIGhpZ2hsaWdodCBvbiBpbnB1dCBmaWVsZHMgKi9cXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjsgfVxcblxcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDsgfVxcblxcbi8qIG90aGVyIGdlbmVyaWMgc3R5bGVzICovXFxuLmpoLWNhcmQge1xcbiAgcGFkZGluZzogMS41JTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuXFxuLnBhZCB7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLnctNDAge1xcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50OyB9XFxuXFxuLnctNjAge1xcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50OyB9XFxuXFxuLmJyZWFrIHtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7IH1cXG5cXG4ucmVhZG9ubHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKkZJWE1FIHRoaXMgaXMgdG8gc3VwcG9ydCBncmlkcyBpbiB0YWJsZSBjbGFzczsgKi9cXG50YWJsZSB0ZFtjbGFzcyo9Y29sLV0sIHRhYmxlIHRoW2NsYXNzKj1jb2wtXSB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIGZsb2F0OiBub25lOyB9XFxuXFxuLmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbm1ha2Ugc3VyZSBicm93c2VycyB1c2UgdGhlIHBvaW50ZXIgY3Vyc29yIGZvciBhbmNob3JzLCBldmVuIHdpdGggbm8gaHJlZlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuYTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uaGFuZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkN1c3RvbSBhbGVydHMgZm9yIG5vdGlmaWNhdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmFsZXJ0cyAuYWxlcnQge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gIC5hbGVydHMgLmFsZXJ0IHByZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgLmFsZXJ0cyAuYWxlcnQgLnBvcG92ZXIgcHJlIHtcXG4gICAgZm9udC1zaXplOiAxMHB4OyB9XFxuXFxuLmFsZXJ0cyAudG9hc3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5hbGVydHMgLnRvYXN0LmxlZnQge1xcbiAgICBsZWZ0OiA1cHg7IH1cXG4gIC5hbGVydHMgLnRvYXN0LnJpZ2h0IHtcXG4gICAgcmlnaHQ6IDVweDsgfVxcbiAgLmFsZXJ0cyAudG9hc3QudG9wIHtcXG4gICAgdG9wOiA1NXB4OyB9XFxuICAuYWxlcnRzIC50b2FzdC5ib3R0b20ge1xcbiAgICBib3R0b206IDU1cHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLmFsZXJ0cyAudG9hc3Qge1xcbiAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbmVudGl0eSB0YWJsZXMgaGVscGVyc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogUmVtb3ZlIEJvb3RzdHJhcCBwYWRkaW5nIGZyb20gdGhlIGVsZW1lbnRcXG4gICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NTYyOTAzL3JlbW92ZS1wYWRkaW5nLWZyb20tY29sdW1ucy1pbi1ib290c3RyYXAtMyAqL1xcbi5uby1wYWRkaW5nLWxlZnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubm8tcGFkZGluZy1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubm8tcGFkZGluZy10b3Age1xcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxcblxcbi5uby1wYWRkaW5nLWJvdHRvbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XFxuXFxuLm5vLXBhZGRpbmcge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XFxuXFxuLyogYm9vdHN0cmFwIDMgaW5wdXQtZ3JvdXAgMTAwJSB3aWR0aFxcbiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM0MzY0MzAvYm9vdHN0cmFwLTMtaW5wdXQtZ3JvdXAtMTAwLXdpZHRoICovXFxuLndpZHRoLW1pbiB7XFxuICB3aWR0aDogMSUgIWltcG9ydGFudDsgfVxcblxcbi8qIE1ha2VzIHRvb2xiYXIgbm90IHdyYXAgb24gc21hbGxlciBzY3JlZW5zXFxuICAgaHR0cDovL3d3dy5za2V0Y2hpbmd3aXRoY3NzLmNvbS9zYW1wbGVjaGFwdGVyL2NoZWF0c2hlZXQuaHRtbCNyaWdodCAqL1xcbi5mbGV4LWJ0bi1ncm91cC1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5lbnRpdHkgZGV0YWlsIHBhZ2UgY3NzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ucm93LmpoLWVudGl0eS1kZXRhaWxzID4gZGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucm93LmpoLWVudGl0eS1kZXRhaWxzID4gZHQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuICAucm93LmpoLWVudGl0eS1kZXRhaWxzID4gZGQge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxudWkgYm9vdHN0cmFwIHR3ZWFrc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdiwgLnBhZ2luYXRpb24sIC5jYXJvdXNlbCwgLnBhbmVsLXRpdGxlIGEge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmRhdGV0aW1lLXBpY2tlci1kcm9wZG93biA+IGxpLmRhdGUtcGlja2VyLW1lbnUgZGl2ID4gdGFibGUgLmJ0bi1kZWZhdWx0LFxcbi51aWItZGF0ZXBpY2tlci1wb3B1cCA+IGxpID4gZGl2LnVpYi1kYXRlcGlja2VyID4gdGFibGUgLmJ0bi1kZWZhdWx0IHtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5kYXRldGltZS1waWNrZXItZHJvcGRvd24gPiBsaS5kYXRlLXBpY2tlci1tZW51IGRpdiA+IHRhYmxlOmZvY3VzLFxcbi51aWItZGF0ZXBpY2tlci1wb3B1cCA+IGxpID4gZGl2LnVpYi1kYXRlcGlja2VyID4gdGFibGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuU29jaWFsIGJ1dHRvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmpoLWJ0bi1zb2NpYWwge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLmpoLWJ0bi1nb29nbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uamgtYnRuLWdvb2dsZTpob3ZlciwgLmpoLWJ0bi1nb29nbGU6Zm9jdXMsIC5qaC1idG4tZ29vZ2xlOmFjdGl2ZSwgLmpoLWJ0bi1nb29nbGUuYWN0aXZlLCAub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuamgtYnRuLWdvb2dsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIzMzIxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5qaC1idG4tZmFjZWJvb2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uamgtYnRuLWZhY2Vib29rOmhvdmVyLCAuamgtYnRuLWZhY2Vib29rOmZvY3VzLCAuamgtYnRuLWZhY2Vib29rOmFjdGl2ZSwgLmpoLWJ0bi1mYWNlYm9vay5hY3RpdmUsIC5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5qaC1idG4tZmFjZWJvb2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3MztcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uamgtYnRuLXR3aXR0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uamgtYnRuLXR3aXR0ZXI6aG92ZXIsIC5qaC1idG4tdHdpdHRlcjpmb2N1cywgLmpoLWJ0bi10d2l0dGVyOmFjdGl2ZSwgLmpoLWJ0bi10d2l0dGVyLmFjdGl2ZSwgLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmpoLWJ0bi10d2l0dGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLyogamhpcHN0ZXItbmVlZGxlLXNjc3MtYWRkLW1haW4gSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IGNzcyBzdHlsZSAqL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9wb3N0Y3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nbG9iYWwuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9zY3NzL2dsb2JhbC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoODY0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9