/* global define */
define(function() {
    return (function(){/*
<h2>其他工具</h2>
<div class="row">
    <% for (var i = 0; i < components.length; i++) { %>
    <div class="col-sm-4">
        <div class="panel panel-default site-panel">
            <div class="panel-heading">
                <a href="readme.html?name=<%= components[i].alias || components[i].name %>"><%= components[i].name %></a>
            </div>
            <div class="panel-body">
                <p><%= components[i].desc %></p>
                <p class="preview"><img class="img-thumbnail" src="<%= components[i].preview %>"></p>
                <p>
                    <% for (var ii = 0; ii < components[i].links.length; ii++) { %>
                    <a class="btn btn-default btn-sm" href="readme.html?name=<%= components[i].alias || components[i].name %>#<%= components[i].links[ii][0] %>"><%= components[i].links[ii][0] %> <%= components[i].links[ii][1] %></a>
                    <% } %>
                </p>
            </div>
        </div>
    </div>
    <% } %>
</div>
<p class="dependencies">
    <img style="background-color: #0769AD;" src="site-components/site-tools/images/logo_jquery.png">
    <img style="background-color: #F7931E;" src="site-components/site-tools/images/logo_handlebars.png">
    <img style="background-color: #F4F4F4;" src="site-components/site-tools/images/logo_underscore.png">
    <img style="background-color: #1D365D;" src="site-components/site-tools/images/logo_less.png">
    <img style="background-color: #6F5499;" src="site-components/site-tools/images/logo_bootstrap.png">
</p>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})