/* global define */
define(function() {
    return "<ul>\n" +
        "    <li>moduleId: <%= moduleId %></li>\n" +
        "    <li>clientId: <%= clientId %></li>\n" +
        "    <li>parentClientId: <%= parentClientId %></li>\n" +
        "    <li>childClientIds: <%= childClientIds %></li>\n" +
        "</ul>"
})