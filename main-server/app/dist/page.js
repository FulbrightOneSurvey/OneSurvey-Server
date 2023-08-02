'use-client';
"use strict";
exports.__esModule = true;
var page_1 = require("./login/page");
var page_2 = require("@/app/FAQ/page");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return (
    // shows the login page for now
    React.createElement("div", null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(page_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/FAQ", element: React.createElement(page_2["default"], null) })))));
}
exports["default"] = Home;
