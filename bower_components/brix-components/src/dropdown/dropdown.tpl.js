/* global define */
define(function() {
    return "<div class=\"dropdown <%= disabled ? 'disabled' : '' %> <%= searchbox ? 'dropdown-searchbox' : '' %> <%= popover ? 'dropdown-popover dropdown-ellipsis' : '' %>\">\n" +
        "    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" value=\"<%= value %>\" bx-click=\"toggle()\">\n" +
        "        <span class=\"dropdown-toggle-label\"><%= label %></span>\n" +
        "        <!-- <span class=\"caret\"> -->\n" +
        "        <span class=\"caret_custom caret_brixfont\"><!-- 保留 caret_brixfont 是为了向后兼容，在下个版本中移除  -->\n" +
        "            <span class=\"brixfont down\">&#xe623;</span><!-- 向下 &#xe623; -->\n" +
        "            <span class=\"brixfont up\">&#xe62e;</span><!-- 向上 &#xe62e;-->\n" +
        "        </span>\n" +
        "    </button>\n" +
        "    <div class=\"dropdown-menu-wrapper\">\n" +
        "        <% if (searchbox) { %>\n" +
        "        <div class=\"searchbox\">\n" +
        "            <label>\n" +
        "                <span class=\"brixfont\">&#xe61c;</span>\n" +
        "                <input bx-keyup=\"search()\" type=\"text\" placeholder=\"<%= placeholder %>\">\n" +
        "            </label>\n" +
        "        </div>\n" +
        "        <% } %>\n" +
        "        <ul class=\"dropdown-menu\">\n" +
        "            <% for(var i = 0, item; item = data[i]; i++ ) { %>\n" +
        "                <% if(item.children) { %>\n" +
        "                    <li class=\"dropdown-header\"><%=item.label%></li>\n" +
        "                    <% for(var ii = 0; ii < item.children.length; ii++ ) { %>\n" +
        "                        <li class=\"<%= item.children[ii].value == value ? 'active' : ''%>\">\n" +
        "                            <% if (popover) { %>\n" +
        "                            <a href=\"javascript:;\" value=\"<%= item.children[ii].value %>\" bx-click=\"select()\"\n" +
        "                                bx-name=\"components/popover\"\n" +
        "                                data-content=\"<%= item.children[ii].label %>\" \n" +
        "                                data-width=\"<%= _popoverWidth %>\">\n" +
        "                                <span><%= item.children[ii].label %></span>\n" +
        "                            </a>\n" +
        "                            <% } else { %>\n" +
        "                            <a href=\"javascript:;\" value=\"<%= item.children[ii].value %>\" bx-click=\"select()\"\n" +
        "                                title=\"<%= item.children[ii].label %>\">\n" +
        "                                <span><%= item.children[ii].label %></span>\n" +
        "                            </a>\n" +
        "                            <% } %>    \n" +
        "                        </li>\n" +
        "                    <% } %>\n" +
        "                <% } else { %>\n" +
        "                    <% if (item === 'divider') { %>\n" +
        "                        <li class=\"divider\"></li>\n" +
        "                    <% } else { %>\n" +
        "                        <li class=\"<%= item.value == value ? 'active' : ''%>\">\n" +
        "                            <% if (popover) { %>\n" +
        "                            <a href=\"javascript:;\" value=\"<%= item.value %>\" bx-click=\"select()\"\n" +
        "                                bx-name=\"components/popover\"\n" +
        "                                data-content=\"<%= item.label %>\" \n" +
        "                                data-width=\"<%= _popoverWidth %>\">\n" +
        "                                <span><%= item.label %></span>\n" +
        "                            </a>\n" +
        "                            <% } else { %>\n" +
        "                            <a href=\"javascript:;\" value=\"<%= item.value %>\" bx-click=\"select()\"\n" +
        "                                title=\"<%= item.label %>\">\n" +
        "                                <span><%= item.label %></span>\n" +
        "                            </a>\n" +
        "                            <% } %>    \n" +
        "                        </li>\n" +
        "                    <% }  %>\n" +
        "                <% } %>\n" +
        "            <% } %>\n" +
        "        </ul>\n" +
        "    </div>\n" +
        "</div>"
})