/* global define */
define(function() {
    return "<div class=\"datepicker-ancient-container clearfix\">\n" +
        "    <!-- 年月日 -->\n" +
        "    <div class=\"year-month-day-container clearfix\">\n" +
        "        <% for( var page = 0, first, last; page < options.pages; page++ ) { %>\n" +
        "        <%     first = page === 0 %>\n" +
        "        <%     last = page === options.pages - 1 %>\n" +
        "        <!-- 年月日 <%= page %>/<%= options.pages %> -->\n" +
        "        <div class=\"year-month-day <%= first ? 'first' : '' %> <%= last ? 'last' : '' %>\" data-page=\"<%= page %>\">\n" +
        "            <!-- 年 YYYY -->\n" +
        "            <% var yearDisplay = typeMap.year && !typeMap.month && !typeMap.day ? '' : 'display: none;' %>\n" +
        "            <div class=\"year\" style=\"<%= yearDisplay %>\">\n" +
        "                <div class=\"year-header\">\n" +
        "                    <a class=\"year-header-prev\" href=\"javascript:;\" bx-click=\"_moveYearPicker(-1)\"><span class=\"brixfont\">&#xe601;</span></a>\n" +
        "                    <span class=\"year-header-title\">? - ?</span>\n" +
        "                    <a class=\"year-header-next\" href=\"javascript:;\" bx-click=\"_moveYearPicker(1)\"><span class=\"brixfont\">&#xe600;</span></a>\n" +
        "                </div>\n" +
        "                <div class=\"year-body\">\n" +
        "                    <div class=\"year-body-content clearfix\">\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"2014\" class=\"active\">2014</span> -->\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"2014\">2014</span> -->\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <!-- 月 MM -->\n" +
        "            <% var monthDisplay = typeMap.month && !typeMap.day ? '' : 'display: none;' %>\n" +
        "            <div class=\"month\" style=\"<%= monthDisplay %>\">\n" +
        "                <div class=\"month-header\">\n" +
        "                    <a class=\"month-header-prev\" href=\"javascript:;\" bx-click=\"_moveMonthPicker(-1)\"><span class=\"brixfont\">&#xe601;</span></a>\n" +
        "                    <span class=\"month-header-title\" bx-click=\"_slide('.month', '.year')\">?</span>\n" +
        "                    <a class=\"month-header-next\" href=\"javascript:;\" bx-click=\"_moveMonthPicker(1)\"><span class=\"brixfont\">&#xe600;</span></a>\n" +
        "                </div>\n" +
        "                <div class=\"month-body\">\n" +
        "                    <div class=\"month-body-content clearfix\">\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"1\" class=\"active\">Jan</span -->\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"1\">Jan</span -->\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <!-- 日 DD -->\n" +
        "            <% var dayDisplay = typeMap.day ? '' : 'display: none;' %>\n" +
        "            <div class=\"day\" style=\"<%= dayDisplay %>\">\n" +
        "                <div class=\"day-header\">\n" +
        "                    <a href=\"javascript:;\" class=\"day-header-prev\" bx-click=\"_moveDayPicker(-1)\"><span class=\"brixfont\">&#xe601;</span></a>\n" +
        "                    <span bx-click=\"_slide('.day', '.month')\" class=\"day-header-title\">?</span>\n" +
        "                    <a href=\"javascript:;\" class=\"day-header-next\" bx-click=\"_moveDayPicker(1)\"><span class=\"brixfont\">&#xe600;</span></a>\n" +
        "                </div>\n" +
        "                <div class=\"day-body\">\n" +
        "                    <div class=\"day-body-desc clearfix\">\n" +
        "                        <span class=\"disabled\">日</span><span class=\"disabled\">一</span><span class=\"disabled\">二</span><span class=\"disabled\">三</span><span class=\"disabled\">四</span><span class=\"disabled\">五</span><span class=\"disabled\">六</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"day-body-content clearfix\">\n" +
        "                        <!-- <span class=\"inactive\"></span> -->\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"1\" class=\"active\">01</span> -->\n" +
        "                        <!-- <span bx-click=\"_active(value, unit, pattern)\" data-value=\"1\">01</span> -->\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <% } %>\n" +
        "    </div>\n" +
        "    <!-- 时分秒 -->\n" +
        "    <% var timeDisplay = typeMap.time || typeMap.second || typeMap.minute || typeMap.hour  ? '': 'display: none;' %>\n" +
        "    <div class=\"hour-minute-second-container clearfix\" style=\"<%= timeDisplay %>\">\n" +
        "        <div class=\"hour-minute-second clearfix\">\n" +
        "            <div class=\"hour-minute-second-body clearfix\">\n" +
        "                <!-- 时 HH -->\n" +
        "                <div class=\"hour clearfix\">\n" +
        "                    <input class=\"form-control\" type=\"text\" tabindex=\"<%=options.clientId%>\" bx-keydown=\"_changeTime(undefined, 'hour', 'hours')\" bx-focusout=\"_changeTime(undefined, 'hour', 'hours')\">\n" +
        "                    <button type=\"button\" class=\"btn btn-default hour-minus\" bx-click=\"_changeTime(-1, 'hour', 'hours')\"><span class=\"glyphicon glyphicon-minus\"></span></button>\n" +
        "                    <button type=\"button\" class=\"btn btn-default hour-plus\" bx-click=\"_changeTime(1, 'hour', 'hours')\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n" +
        "                </div>\n" +
        "                <span class=\"spliter\">:</span>\n" +
        "                <!-- 分 mm -->\n" +
        "                <div class=\"minute clearfix\">\n" +
        "                    <% var minuteDisabled = typeMap.hour && !typeMap.minute  ? 'disabled': '' %>\n" +
        "                    <input class=\"form-control\" type=\"text\" tabindex=\"<%=options.clientId%>\" bx-keydown=\"_changeTime(undefined, 'minute', 'minutes')\" bx-focusout=\"_changeTime(undefined, 'minute', 'minutes')\" <%= minuteDisabled %>>\n" +
        "                    <button type=\"button\" class=\"btn btn-default minute-minus\" bx-click=\"_changeTime(-1, 'minute', 'minutes')\" <%= minuteDisabled %>><span class=\"glyphicon glyphicon-minus\"></span></button>\n" +
        "                    <button type=\"button\" class=\"btn btn-default minute-plus\" bx-click=\"_changeTime(1, 'minute', 'minutes')\" <%= minuteDisabled %>><span class=\"glyphicon glyphicon-plus\"></span></button>\n" +
        "                </div>\n" +
        "                <span class=\"spliter\">:</span>\n" +
        "                <!-- 秒 ss -->\n" +
        "                <div class=\"second clearfix\">\n" +
        "                    <% var secondDisabled = (typeMap.hour || typeMap.minute) && !typeMap.second  ? 'disabled': '' %>\n" +
        "                    <input class=\"form-control\" type=\"text\" tabindex=\"<%=options.clientId%>\" bx-keydown=\"_changeTime(undefined, 'second', 'seconds')\" bx-focusout=\"_changeTime(undefined, 'second', 'seconds')\" <%= secondDisabled %>>\n" +
        "                    <button type=\"button\" class=\"btn btn-default second-minus\" bx-click=\"_changeTime(-1, 'second', 'seconds')\" <%= secondDisabled %>><span class=\"glyphicon glyphicon-minus\"></span></button>\n" +
        "                    <button type=\"button\" class=\"btn btn-default second-plus\" bx-click=\"_changeTime(1, 'second', 'seconds')\" <%= secondDisabled %>><span class=\"glyphicon glyphicon-plus\"></span></button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"hour-minute-second-footer\">\n" +
        "                <button class=\"btn btn-default submit\" bx-click=\"_changeTime()\">确认</button>\n" +
        "                <a href=\"javascript: void(0);\" class=\"btn btn-default cancel ml5\">取消</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- 不限 -->\n" +
        "    <div class=\"unlimit-container clearfix\" style=\"<%= options.unlimit ? '' : 'display: none;' %>\">\n" +
        "        <a href=\"javascript:;\" bx-click=\"_unlimit()\">不限</a>\n" +
        "    </div>\n" +
        "</div>"
})