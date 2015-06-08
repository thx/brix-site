/* global define */
define(function() {
    return (function(){/*
<div class="datepicker-container">
    <!--  -->
    <% var yearDisplay = typeMap.year && !typeMap.month && !typeMap.date ? '' : 'display: none;' %>
    <div class="yearpicker picker-group" style="<%= yearDisplay %>">
        <div class="picker-header">
            <a href="javascript:;" class="minus" bx-click="_move('period', -1)"><span class="brixfont">&#xe601;</span></a>
            <!-- <button class="btn btn-default minus" type="button" bx-click="_move('period', -1)"><span class="glyphicon glyphicon-chevron-left"></span></button> -->
            <h4 >? - ?</h4>
            <a href="javascript:;" class="plus" type="button" bx-click="_move('period', 1)"><span class="brixfont">&#xe600;</span></a>
            <!-- <button class="btn btn-default plus" type="button" bx-click="_move('period', 1)"><span class="glyphicon glyphicon-chevron-right"></span></button> -->
        </div>
        <div class="picker-body picker-selectable clearfix">
            <!-- <span data-value="2014" class="active">2014</span> -->
            <!-- <span data-value="2014">2014</span> -->
        </div>
    </div>
    <!--  -->
    <% var monthDisplay = typeMap.month && !typeMap.date ? '' : 'display: none;' %>
    <div class="monthpicker picker-group" style="<%= monthDisplay %>">
        <div class="picker-header">
            <a href="javascript:;" class="minus" type="button" bx-click="_move('year', -1)"><span class="brixfont">&#xe601;</span></a>
            <!-- <button class="btn btn-default minus" type="button" bx-click="_move('year', -1)"><span class="glyphicon glyphicon-chevron-left"></span></button> -->
            <h4 bx-click="_slide('.monthpicker', '.yearpicker')">?</h4>
            <a href="javascript:;" class="plus" type="button" bx-click="_move('year', 1)"><span class="brixfont">&#xe600;</span></a>
            <!-- <button class="btn btn-default plus" type="button" bx-click="_move('year', 1)"><span class="glyphicon glyphicon-chevron-right"></span></button> -->
        </div>
        <div class="picker-body picker-selectable clearfix">
            <!-- <span data-value="1" class="active">Jan</span -->
            <!-- <span data-value="1">Jan</span -->
        </div>
    </div>
    <!--  -->
    <% var dateDisplay = typeMap.date ? '' : 'display: none;' %>
    <div class="datepicker picker-group" style="<%= dateDisplay %>">
        <div class="picker-header">
            <a href="javascript:;" class="minus" type="button" bx-click="_move('month', -1)"><span class="brixfont">&#xe601;</span></a>
            <!-- <button class="btn btn-default minus" type="button" bx-click="_move('month', -1)"><span class="glyphicon glyphicon-step-backward"></span></button> -->
            <h4 bx-click="_slide('.datepicker', '.monthpicker')">?</h4>
            <a href="javascript:;" class="plus" type="button" bx-click="_move('month', 1)"><span class="brixfont">&#xe600;</span></a>
            <!-- <button class="btn btn-default plus" type="button" bx-click="_move('month', 1)"><span class="glyphicon glyphicon-step-forward"></span></button> -->
        </div>
        <div class="picker-body">
            <div class="datepicker-body-description clearfix">
                <span class="disabled">日</span><span class="disabled">一</span><span class="disabled">二</span><span class="disabled">三</span><span class="disabled">四</span><span class="disabled">五</span><span class="disabled">六</span>
            </div>
            <div class="datepicker-body-value picker-selectable clearfix">
                <!-- <span class="inactive"></span> -->
                <!-- <span data-value="1" class="active">01</span> -->
                <!-- <span data-value="1">01</span> -->
            </div>
        </div>
    </div>
    <!--  -->
    <% var timeDisplay = typeMap.time || typeMap.second || typeMap.minute || typeMap.hour  ? '': 'display: none;' %>
    <div class="timepicker picker-group clearfix" style="<%= timeDisplay %>">
        <div class="timepicker-body clearfix">
        <div class="timepicker-group">
            <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeHour()" bx-focusout="_changeHour()">
            <button type="button" class="btn btn-default time-minus" bx-click="_changeHour(-1)"><span class="glyphicon glyphicon-minus"></span></button>
            <button type="button" class="btn btn-default time-plus" bx-click="_changeHour(1)"><span class="glyphicon glyphicon-plus"></span></button>
        </div>
        <span class="timepicker-spliter">:</span>
        <div class="timepicker-group">
            <% var minuteDisabled = typeMap.hour && !typeMap.minute  ? 'disabled': '' %>
            <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeMinute()" bx-focusout="_changeMinute()" <%= minuteDisabled %>>
            <button type="button" class="btn btn-default time-minus" bx-click="_changeMinute(-1)" <%= minuteDisabled %>><span class="glyphicon glyphicon-minus"></span></button>
            <button type="button" class="btn btn-default time-plus" bx-click="_changeMinute(1)" <%= minuteDisabled %>><span class="glyphicon glyphicon-plus"></span></button>
        </div>
        <span class="timepicker-spliter">:</span>
        <div class="timepicker-group">
            <% var secondDisabled = (typeMap.hour || typeMap.minute) && !typeMap.second  ? 'disabled': '' %>
            <input class="form-control" type="text" tabindex="<%=options.clientId%>" bx-keydown="_changeSecond()" bx-focusout="_changeSecond()" <%= secondDisabled %>>
            <button type="button" class="btn btn-default time-minus" bx-click="_changeSecond(-1)" <%= secondDisabled %>><span class="glyphicon glyphicon-minus"></span></button>
            <button type="button" class="btn btn-default time-plus" bx-click="_changeSecond(1)" <%= secondDisabled %>><span class="glyphicon glyphicon-plus"></span></button>
        </div>
        </div>
        <div class="timepicker-footer">
            <div class="timepicker-handelr">
                <button class="btn btn-default submit" bx-click="_changeTime()">确认</button>
                <a href="javascript: void(0);" class="btn btn-default cancel ml5">取消</a>
            </div>
        </div>
    </div>
    <!-- -->
    <div class="picker-footer picker-group" style="<%= options.unlimit ? '' : 'display: none;' %>">
        <a href="javascript:;" bx-click="_unlimit()">不限</a>
    </div>
</div>
    */}).toString().split("\n").slice(1,-1).join("\n")
})