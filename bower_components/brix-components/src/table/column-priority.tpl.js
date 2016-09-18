/* global define */
define(function() {
    return "<div class=\"dialog column-priority\">\n" +
        "    <div class=\"dialog-content\">\n" +
        "        <div class=\"dialog-header row\">\n" +
        "            <div class=\"col-xs-8\">\n" +
        "                <h4>\n" +
        "                    <span>请选择列</span>\n" +
        "                    <small>\n" +
        "                        <a href=\"javascript: void(0);\" bx-click=\"all\">全选</a>\n" +
        "                        <a href=\"javascript: void(0);\" bx-click=\"clear\">清空</a>\n" +
        "                    </small>\n" +
        "                </h4>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-4\">\n" +
        "                <h4>自定义列顺序</h4>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"dialog-body row\">\n" +
        "            <div class=\"col-xs-8 candidates\">\n" +
        "                <% for ( var i = 0; i < candidates.length; i++ ) { %>\n" +
        "                <label class=\"item\">\n" +
        "                    <input type=\"checkbox\" \n" +
        "                        data-<%= Constant.COLUMN.ID %>=\"<%= candidates[i].id %>\" \n" +
        "                        data-<%= Constant.COLUMN.NAME %>=\"<%= candidates[i].name %>\" \n" +
        "                        data-<%= Constant.COLUMN.FIELD %>=\"<%= candidates[i].field %>\" \n" +
        "                        data-<%= Constant.COLUMN.PRIORITY.INDEX %>=\"<%= candidates[i].index %>\" \n" +
        "                        checked>\n" +
        "                    <span title=\"<%= candidates[i].name %>\"><%= candidates[i].name %></span>\n" +
        "                </label>\n" +
        "                <% } %>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-4 queue\">\n" +
        "                <!-- immovables -->\n" +
        "                <div>\n" +
        "                    <% for( var i = 0; i < leftImmovables.length; i++ ) { %>\n" +
        "                    <div class=\"item item-not-allowed\">\n" +
        "                        <span><%= leftImmovables[i].name %></span>\n" +
        "                    </div>\n" +
        "                    <% } %>\n" +
        "                </div>\n" +
        "                <div class=\"sortable-wrapper\">\n" +
        "                    <% for ( var i = 0; i < candidates.length; i++ ) { %>\n" +
        "                    <div class=\"item item-move\" \n" +
        "                        data-<%= Constant.COLUMN.ID %>=\"<%= candidates[i].id %>\" \n" +
        "                        data-<%= Constant.COLUMN.NAME %>=\"<%= candidates[i].name %>\" \n" +
        "                        data-<%= Constant.COLUMN.FIELD %>=\"<%= candidates[i].field %>\" \n" +
        "                        data-<%= Constant.COLUMN.PRIORITY.INDEX %>=\"<%= candidates[i].index %>\">\n" +
        "                        <span class=\"item-name\" title=\"<%= candidates[i].name %>\"><%= candidates[i].name %></span>\n" +
        "                    </div>\n" +
        "                    <% } %>\n" +
        "                </div>\n" +
        "                <div>\n" +
        "                    <% for( var i = 0; i < rightImmovables.length; i++ ) { %>\n" +
        "                    <div class=\"item item-not-allowed\">\n" +
        "                        <span><%= rightImmovables[i].name %></span>\n" +
        "                    </div>\n" +
        "                    <% } %>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"dialog-footer\">\n" +
        "            <button bx-click=\"submit\" class=\"btn btn-default btn-sm\">确定</button>\n" +
        "            <a bx-click=\"cancel\" href=\"javascript: void(0);\">取消</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>"
})