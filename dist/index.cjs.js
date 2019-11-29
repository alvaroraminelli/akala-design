'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
};
var Button = function (props) { return (React.createElement("button", { onClick: props.onClick, style: styles, type: "button" }, props.children)); };
Button.defaultProps = {
    children: null,
    onClick: function () { }
};

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
