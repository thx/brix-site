define(["jquery","underscore","mousetrap","brix/base","./editor.tpl.js","css!./editor.css","css!./bower_components/fontawesome/css/font-awesome.css"],function(t,e,n,o,a){function i(){}function r(t,e){var n=new FileReader;n.onload=function(t){e&&e(t.target.result)},n.onerror=n.onprogress=function(){console.log(arguments)},n.readAsDataURL(t)}function c(n){n=t(".toolbar"),e.each(n.find("[data-command]"),function(e){var n=t(e),o=n.data("command");document.queryCommandState(o)?n.addClass("btn-primary"):n.removeClass("btn-primary")})}function s(t,e){var n=t.split(" "),o=n.shift(),a=n.join(" ")+(e||"");document.execCommand(o,0,a),c()}function d(o){e.each(v,function(e,a){n.bind(a.split(" "),function(n){n.target===o&&(n=new t.Event(n),n.preventDefault(),n.stopPropagation(),s(e))})})}function u(){var t=window.getSelection();return t.getRangeAt&&t.rangeCount?t.getRangeAt(0):void 0}function l(){h=u()}function f(){var t=window.getSelection();if(h){try{t.removeAllRanges()}catch(e){document.body.createTextRange().select(),document.selection.empty()}t.addRange(h)}}function m(n){var o=t(".editor");o.focus(),e.each(n,function(t){/^image\//.test(t.type)?r(t,function(t){s("insertimage",t)}):console.log("unsupported file type",t.type)})}function p(n,o){n=t(".editor"),o=t(".toolbar"),e.each(o.find("[data-command]"),function(e){t(e).on("click",function(){f(),n.focus(),s(t(this).data("command")),l()})})}function g(){var e=t(".editor");e.on("dragenter dragover",!1).on("drop",function(t){var e=t.originalEvent.dataTransfer;t.stopPropagation(),t.preventDefault(),e&&e.files&&e.files.length>0&&m(e.files)})}e.extend(i.prototype,o.prototype,{options:{},render:function(){this.data=this.data||e.extend({},this.options);var n=this.$element=t(this.element),o=e.template(a)(this.data);n.append(o);var i=this.$toolbar=n.find(".btn-toolbar"),r=this.$editor=n.find(".editor");return d(r[0]),p(r[0]),g(),r.attr("contenteditable",!0).on("mouseup keyup mouseout",function(){l(),c(i)}),this},clean:function(){var t=this.$editor.html(),e=/(<br>|\s|<div><br><\/div>|&nbsp;)*$/;return this.$editor.html(t&&t.replace(e,"")),this}});var h,v={"ctrl+b meta+b":"bold","ctrl+i meta+i":"italic","ctrl+u meta+u":"underline","ctrl+z meta+z":"undo","ctrl+y meta+y meta+shift+z":"redo","ctrl+l meta+l":"justifyleft","ctrl+r meta+r":"justifyright","ctrl+e meta+e":"justifycenter","ctrl+j meta+j":"justifyfull","shift+tab":"outdent",tab:"indent"};return i});