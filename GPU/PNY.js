// ==UserScript==
// @name         PNY
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pny.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

var $ = window.jQuery;

$( document ).ready(function() {

(function() {

    'use strict';

    var totalO = "";

    $( "#specifications .pny-table tr" ).each(function( index ) {
        var title= $(this).find("td:nth-child(1)").text().replace(/ +(?= )/g,'');
        title = $.trim(title);
        var desc = $(this).find("td:nth-child(2)").text().replace(/ +(?= )/g,'');
        desc = $.trim(desc);

        var output = ""

        if (title!="") {
        output = "\n" + title + "::" + desc;
        } else {
        output = ", " + desc
        }

        totalO = totalO + output;




});



$("#product-detail-container").prepend("<textarea rows=10 cols=100>"+totalO+"");

    // Your code here...
})();

})
