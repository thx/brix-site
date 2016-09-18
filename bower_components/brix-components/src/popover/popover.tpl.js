/* global define */
define(function() {
    return "<div class=\"popover <%= placement %>\">\n" +
        "    <div class=\"arrow\"></div>\n" +
        "    <div class=\"popover-title <%= title ? '' : 'hide' %>\"><%= title %></div>\n" +
        "    <div class=\"popover-content\"><%= content %></div>\n" +
        "</div>"
})