<div class="row paginationwrapper">
    <% if(simplify) { %>
        <div class="col-md-12" style="text-align: right;">
            <ul class="pagination" style="text-align: right;">
                <li class="<%= hasPrev ? '' : 'disabled' %>"><a href="javascript: void(0);" bx-click="moveTo(<%=prev%>)"><span class="brixfont">&#xe601;</span></a></li><!-- Previous -->

                <li class="pagination-statistics-simplify"><span><%= cursor %>/<%= pages %></span></li>
                
                <li class="<%= hasNext ? '' : 'disabled' %>"><a href="javascript: void(0);" bx-click="moveTo(<%=next%>)"><span class="brixfont">&#xe600;</span></a></li><!-- Next -->
            </ul>
        </div>
    <% } else { %>

    <div class="pagination-statistics col-md-6">
        当前第 <b><%= start + 1 %> - <%=end%></b> 条，共 <b><%= total %></b> 条，每页展现
        <select bx-name="components/dropdown">
            <% for( var i = 0; i < limits.length; i++ ) { %>
            <option value="<%= limits[i] %>" <%= limits[i] == limit ? 'selected' : '' %>><%=limits[i]%></option>
            <% } %>
        </select>
        条
    </div>
    <div class="col-md-6" style="text-align: right;">
        <ul class="pagination">

            <li class="<%= hasPrev ? '' : 'disabled' %>"><a href="javascript: void(0);" bx-click="moveTo(<%=prev%>)"><span class="brixfont">&#xe601;</span></a></li><!-- Previous -->

            <% if( barStart == 2 ) { %>
                <li><a class="page" href="javascript: void(0);">1</a></li>
            <% } %>

            <% if( barStart >= 3 ) { %>
                <li><a href="javascript: void(0);" bx-click="moveTo(1)">1</a></li>
                <li><a href="javascript: void(0);" bx-click="moveTo(1)">2</a></li>
                <% if( barStart > 3 ) { %>
                    <li class="disabled"><a href="javascript: void(0);">...</a></li>
                <% } %>
            <% } %>

            <% for( var i = barStart; i <= barEnd; i++ ) { %>
                <% if( i === cursor ) { %>
                    <li class="active"><a href="javascript: void(0);"><%= i %></a></li>
                <% } else { %>
                    <li><a href="javascript: void(0);" bx-click="moveTo(<%=i%>)"><%= i %></a></li>
                <% } %>
            <% } %>

            <% if( barEnd < pages - 1) { %>
                <li class="disabled"><a href="javascript: void(0);">...</a></li>
            <% } %>

            <% if( barEnd < pages) { %>
                <li><a href="javascript: void(0);" bx-click="moveTo(<%=pages%>)"><%= pages %></a></li>
            <% } %>

            <li class="<%= hasNext ? '' : 'disabled' %>"><a href="javascript: void(0);" bx-click="moveTo(<%=next%>)"><span class="brixfont">&#xe600;</span></a></li><!-- Next -->

            <!-- <li>
                <select bx-name="components/dropdown">
                    <% for( var i = 1; i <= pages; i++ ) { %>
                        <option value="<%= i %>" <%= i == cursor ? 'selected' : '' %>><%= i %></option>
                    <% } %>
                </select>
            </li> -->
        </ul>
    </div>

    <% } %>
</div>