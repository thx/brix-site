/* global define */
define(function() {
    return "<div class=\"taginput-item\" bx-click=\"\"><!-- _active -->\n" +
        "    <div class=\"taginput-item-name\"><%= data %></div>\n" +
        "    <div class=\"taginput-item-delete\" bx-click=\"delete\" data-taginput-clientid=\"<%= clientId %>\">\n" +
        "        <span class=\"glyphicon glyphicon-remove\"></span>\n" +
        "    </div><!-- &times; -->\n" +
        "</div>"
})