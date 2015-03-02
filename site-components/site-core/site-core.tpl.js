/* global define */
define(function() {
    return (function(){/*
<h2>基础类库</h2>
<div class="row">
    <% for (var i = 0, component; component = components[i]; i++) { %>
    <div class="col-sm-4">
        <div class="panel panel-default site-panel">
            <div class="panel-heading">
                <a href="readme.html?core=1&name=<%= component.resp %>" class="name"><%= component.name %></a>
            </div>
            <div class="panel-body">
                <p class="desc" bx-name="components/ellipsis" data-lines="2"><%= component.desc %></p>
                <p class="link">
                    <% for (var ii = 0, link; link = component.links[ii]; ii++) { %>
                    <a class="btn btn-default btn-sm" href="<%= component.links[ii][1] %>">
                        <%= component.links[ii][0] %>
                    </a>
                    <% } %>
                </p>
            </div>
        </div>
    </div>
    <% } %>
</div>

    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})