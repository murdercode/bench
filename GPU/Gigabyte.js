                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         // ==UserScript==
// @name         GPU Gigabyte
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.gigabyte.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

    var $ = window.jQuery;

$( document ).ready(function() {

(function() {

    'use strict';

    var totalO = "";

    $( ".display-table li" ).each(function( index ) {
        var title= $(this).find("div:nth-child(1) .specText").text().replace(/ +(?= )/g,'');
        title = $.trim(title);
        var desc = $(this).find("div:nth-child(2) div:nth-child(2)").text().replace(/ +(?= )/g,'');
        desc = $.trim(desc);
        var output = title + "::" + desc + "\n";
        totalO = totalO + output;
});

    //totalO = totalO.replace(/ +(?= )/g,'');
    //totalO = totalO.replace(/[\r\n]{2,}/g, "\n");
    //totalO = totalO.replace("\n::\n","::");

$("#policy-div").prepend("<textarea rows=10 cols=100>"+totalO+"");

    // Your code here...
})();

})
