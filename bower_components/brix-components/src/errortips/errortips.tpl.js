/* global define */
define(function() {
    return " <div class=\"btn-error-tips\" data-btn-error=\"true\" style=\"width: {{width}}px\">\n" +
        "  {{{msg}}}\n" +
        "  <i class=\"arrow\" style=\"left: {{left}}px;\"></i>\n" +
        "  {{^duration}}\n" +
        "  <i class=\"errortips-icon\">&#xe601;</i>\n" +
        "  {{/duration}}\n" +
        "</div>"
})