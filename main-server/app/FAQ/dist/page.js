'use-client';
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var Search_1 = require("@mui/icons-material/Search");
var AccountCircleOutlined_1 = require("@mui/icons-material/AccountCircleOutlined");
var SendOutlined_1 = require("@mui/icons-material/SendOutlined");
var DriveFolderUploadOutlined_1 = require("@mui/icons-material/DriveFolderUploadOutlined");
var BoltOutlined_1 = require("@mui/icons-material/BoltOutlined");
var ChatOutlined_1 = require("@mui/icons-material/ChatOutlined");
var HelpOutlineOutlined_1 = require("@mui/icons-material/HelpOutlineOutlined");
var styles_1 = require("@mui/material/styles");
var theme = styles_1.createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
});
function Footer() {
    return (React.createElement(material_1.Box, { alignItems: "center", justifyContent: "center", display: "flex", sx: {
            height: 150
        } },
        React.createElement(material_1.Box, { sx: {
                height: 140,
                width: 1400,
                backgroundColor: "#FEA200",
                borderRadius: "10px 10px 0 0"
            } },
            React.createElement(material_1.Box, { sx: { ml: 4, mt: 2 } },
                React.createElement(material_1.Typography, { variant: "h6", sx: {
                        color: "#00196E",
                        fontWeight: 600
                    } }, "Most find articles"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(material_1.Link, { href: "#", underline: "always", sx: { color: "#00196E" } }, 'How do credits works?')),
                    React.createElement("li", null,
                        React.createElement(material_1.Link, { href: "#", underline: "always", sx: { color: "#00196E" } }, 'Why my survey is blocked?')))))));
}
;
function CustomButton(_a) {
    var text = _a.text, icon = _a.icon, desc = _a.desc;
    return (React.createElement(material_1.Button, { variant: "outlined", sx: {
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            minHeight: "180px",
            maxHeight: "180px",
            minWidth: "330px",
            borderColor: "#FFFFFF",
            boxShadow: 6,
            maxWidth: 330
        } },
        React.createElement(material_1.Box, null, icon),
        React.createElement(material_1.Box, null,
            React.createElement(material_1.Typography, { variant: "h6", sx: {
                    color: "#00196E",
                    fontWeight: 600
                } }, text)),
        React.createElement(material_1.Box, { sx: { mt: 2 } },
            React.createElement(material_1.Typography, { variant: "h10", sx: {
                    color: "#00196E"
                } }, desc))));
}
function PageFAQ() {
    return (React.createElement(styles_1.ThemeProvider, { theme: theme },
        React.createElement("div", null,
            React.createElement(material_1.Box, { justifyContent: "center", alignItems: "center", display: "flex", sx: {
                    height: 200,
                    backgroundColor: "#CEEDF6",
                    mt: 6,
                    borderRadius: "0 0 20px 20px"
                } },
                React.createElement(material_1.Box, { textAlign: "center", justifyContent: "center", alignItems: "center" },
                    React.createElement(material_1.Typography, { variant: "h4", align: "center", sx: {
                            color: "#00196E",
                            fontWeight: 550
                        } }, "Help Articles"),
                    React.createElement(material_1.OutlinedInput, { id: "FAQ-search", placeholder: "Search for help", variant: "outlined", sx: { m: 1, width: '50ch', border: '1px solid', borderColor: "#000000", borderRadius: "5px",
                            '& ::placeholder': {
                                color: "#00196E"
                            }, mt: "20px" }, startAdornment: React.createElement(material_1.InputAdornment, { position: "start" },
                            React.createElement(Search_1["default"], null)) }))),
            React.createElement(material_1.Box, { justifyContent: "center", alignItems: "center", display: "flex", sx: {
                    height: 500
                } },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Box, { sx: { mb: 3.5 } },
                        React.createElement(material_1.Grid, { container: true, spacing: 18, justifyContent: "center" },
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Accounts & Notifications", icon: React.createElement(AccountCircleOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "Account Setting, Login issues and notification preferences" })),
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Take Surveys", icon: React.createElement(SendOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "Problem with taking surveys" })),
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Upload Surveys", icon: React.createElement(DriveFolderUploadOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "Problem with uploading surveys" })))),
                    React.createElement(material_1.Box, { sx: { mt: 3.5 } },
                        React.createElement(material_1.Grid, { container: true, spacing: 18, justifyContent: "center" },
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Credit points", icon: React.createElement(BoltOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "How to use credit points" })),
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Responses", icon: React.createElement(ChatOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "Problem with collecting responses" })),
                            React.createElement(material_1.Grid, { item: true, xs: 4 },
                                React.createElement(CustomButton, { text: "Guidances", icon: React.createElement(HelpOutlineOutlined_1["default"], { sx: { color: "#00196E", fontSize: "50px" } }), desc: "Beginner Guides" })))))),
            React.createElement(Footer, null))));
}
exports["default"] = PageFAQ;
;
