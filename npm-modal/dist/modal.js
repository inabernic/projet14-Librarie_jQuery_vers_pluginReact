"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
var Modal = function Modal(_ref) {
  var showModal = _ref.showModal,
    hideModal = _ref.hideModal,
    message = _ref.message,
    title = _ref.title,
    modalStyle = _ref.modalStyle,
    modalHeaderStyle = _ref.modalHeaderStyle,
    titleStyle = _ref.titleStyle,
    modalBodyStyle = _ref.modalBodyStyle,
    modalFooterStyle = _ref.modalFooterStyle,
    xButtonStyle = _ref.xButtonStyle,
    modalButtonOkStyle = _ref.modalButtonOkStyle,
    modalButtonCancelStyle = _ref.modalButtonCancelStyle,
    buttonOk = _ref.buttonOk;
  return showModal && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "centeritem"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header",
    style: modalHeaderStyle
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: titleStyle
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    style: xButtonStyle,
    className: "modal-close-buttonX",
    onClick: hideModal
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body",
    style: modalBodyStyle
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer",
    style: modalFooterStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-ok-button-footer",
    style: modalButtonOkStyle,
    onClick: hideModal
  }, buttonOk)))))));
};
exports.Modal = Modal;