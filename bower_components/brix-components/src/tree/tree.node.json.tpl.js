/* global define */
define(function() {
    return "<div>\n" +
        "	id: <%= id %>,\n" +
        "	name: <span class=\"tree-node-content-name\"><%= name %></span>,\n" +
        "	operation: <a href=\"#\" style=\"float: right;\">+</a>\n" +
        "</div>"
})