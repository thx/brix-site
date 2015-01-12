<div class="datepickerwrapper <%= mode === 'multiple' ? 'multiple' : '' %>">
    <!--  -->
    <% if (mode === 'signal') { %>
    <div bx-name="components/datepicker" data-date="<%= dates[0] %>" data-type="date" class="picker"></div>
    <% } %>
    <!--  -->
    <% if (mode === 'multiple') { %>
    <% if( shortcuts ) { %>
    <div class="datepickerwrapper-shortcuts form-inline form-group">
        <div class="datepickerwrapper-shortcuts-header">
            <h4>快捷日期：</h4>
        </div>
        <div class="datepickerwrapper-shortcuts-body clearfix">
            <% for (var title in shortcuts) { %>
                <span bx-click="_change('shortcut')" data-value="<%= 
                    _.map(shortcuts[title], function(item) {
                        return item.format('YYYY-MM-DD')
                    }).join(',')
                %>" class=""><%= title %></span>
            <% } %>
        </div>
    </div>
    <% } %>
    <div class="datepickerwrapper-inputs form-inline form-group">
        <div class="datepickerwrapper-inputs-header">
            <h4>日期范围：</h4>
        </div>
        <div class="datepickerwrapper-inputs-body">
            <% for (var i = 0; i < dates.length; i++ ) { %>
                <input bx-click="_inputToggleDatePicker(<%= i %>)" bx-change="_change('date', <%= i %>)" value="<%= dates[i] %>" type="text" class="form-control">
                <%= i < dates.length -1 ? '-' : '' %>
            <% } %>
        </div>
    </div>
    <div class="datepickerwrapper-pickers">
        <% for (var i = 0; i < dates.length; i++ ) { %>
            <div bx-name="components/datepicker" data-date="<%= dates[i] %>" data-type="date" class="picker"></div>
        <% } %>
    </div>
    <div class="datepickerwrapper-footer">
        <button class="btn btn-default" bx-click="submit">确认</button>
        <a href="javascript: void(0);" bx-click="hide" class="ml5">取消</a>
    </div>
    <% } %>
</div>