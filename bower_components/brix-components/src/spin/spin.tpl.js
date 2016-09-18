/* global define */
define(function() {
    return "<div class=\"spinner\">\n" +
        "    <% if( type === 'rotating-plane' ) { %>\n" +
        "        <div class=\"rotating-plane\"></div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'double-bounce' ) { %>\n" +
        "        <div class=\"double-bounce\">\n" +
        "            <div class=\"double-bounce1\"></div>\n" +
        "            <div class=\"double-bounce2\"></div>    \n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'rectangle-bounce' ) { %>\n" +
        "        <div class=\"rectangle-bounce\">\n" +
        "            <div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div>\n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'wandering-cubes' ) { %>\n" +
        "        <div class=\"wandering-cubes\">\n" +
        "            <div class=\"cube1\"></div><div class=\"cube2\"></div>\n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'pulse' ) { %>\n" +
        "        <div class=\"pulse\"></div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'chasing-dots' ) { %>\n" +
        "        <div class=\"chasing-dots\">\n" +
        "            <div class=\"dot1\"></div>\n" +
        "            <div class=\"dot2\"></div>\n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'three-bounce' ) { %>\n" +
        "        <div class=\"three-bounce\">\n" +
        "            <div class=\"one\"></div><div class=\"two\"></div><div class=\"three\"></div>\n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "    <% if( type === 'circle-spinner' ) { %>\n" +
        "        <div class=\"circle-spinner\">\n" +
        "            <div class=\"spinner-container container1\">\n" +
        "                <div class=\"circle1\"></div>\n" +
        "                <div class=\"circle2\"></div>\n" +
        "                <div class=\"circle3\"></div>\n" +
        "                <div class=\"circle4\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"spinner-container container2\">\n" +
        "                <div class=\"circle1\"></div>\n" +
        "                <div class=\"circle2\"></div>\n" +
        "                <div class=\"circle3\"></div>\n" +
        "                <div class=\"circle4\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"spinner-container container3\">\n" +
        "                <div class=\"circle1\"></div>\n" +
        "                <div class=\"circle2\"></div>\n" +
        "                <div class=\"circle3\"></div>\n" +
        "                <div class=\"circle4\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    <% } %>\n" +
        "</div>\n" +
        ""
})