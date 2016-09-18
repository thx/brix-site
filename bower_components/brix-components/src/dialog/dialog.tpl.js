/* global define */
define(function() {
    return "<div class=\"dialog dialog-singleton dialog-<%= placement %>\">\n" +
        "    <button bx-click=\"close\" type=\"button\" class=\"dialog-close <%= closable ? '' : 'hide' %>\"><span class=\"brixfont\">&#xe62d;</span><!-- &times; --></button>\n" +
        "    <div class=\"dialog-content\">\n" +
        "        <%= content %>\n" +
        "        <!-- \n" +
        "        <div class=\"dialog-header\">\n" +
        "            <h4 class=\"dialog-title\">Title</h4>\n" +
        "        </div>\n" +
        "        <div class=\"dialog-body\">Body</div>\n" +
        "        <div class=\"dialog-footer\">\n" +
        "            <button bx-click=\"close\" type=\"button\" class=\"btn btn-default\">Close</button>\n" +
        "            <button bx-click=\"close\" type=\"button\" class=\"btn btn-primary\">Save</button>\n" +
        "        </div>\n" +
        "         -->\n" +
        "    </div>\n" +
        "</div>"
})