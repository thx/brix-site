<h2>组件库</h2>
<div class="row">
    <% for (var i = 0; i < components.length; i++) { %>
    <div class="col-sm-4">
        <div class="panel panel-default site-panel">
            <div class="panel-heading">
                <a href="readme.html?name=<%= components[i].name %>"><%= components[i].name %></a>
            </div>
            <div class="panel-body">
                <p><%= components[i].desc %></p>
                <p class="preview"><img class="img-thumbnail" src="<%= components[i].preview %>"></p>
                <p>
                    <% for (var ii = 0; ii < components[i].links.length; ii++) { %>
                    <a class="btn btn-default btn-sm" href="readme.html?name=<%= components[i].name %>#<%= components[i].links[ii][0] %>"><%= components[i].links[ii][0] %> <%= components[i].links[ii][1] %></a>
                    <% } %>
                </p>
            </div>
        </div>
    </div>
    <% } %>
</div>