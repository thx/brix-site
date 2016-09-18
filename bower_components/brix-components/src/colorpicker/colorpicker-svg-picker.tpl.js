/* global define */
define(function() {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\">\n" +
        "    <defs>\n" +
        "        <lineargradient id=\"gradient-black\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n" +
        "            <stop offset=\"0%\" stop-color=\"#000000\" stop-opacity=\"1\"></stop>\n" +
        "            <stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop>\n" +
        "        </lineargradient>\n" +
        "        <lineargradient id=\"gradient-white\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\">\n" +
        "            <stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"></stop>\n" +
        "            <stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop>\n" +
        "        </lineargradient>\n" +
        "    </defs>\n" +
        "    <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-white)\"></rect>\n" +
        "    <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-black)\"></rect>\n" +
        "</svg>"
})