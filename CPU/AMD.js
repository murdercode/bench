// ==UserScript==
// @name         CPU AMD
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.amd.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

(function() {
    'use strict';

    var totalO = "";
    var final = "";

    $( "#product-specs .field--label-inline" ).each(function( index ) {
        var title= $(this).find(".field__label").text().replace(/ +(?= )/g,'');
        title = $.trim(title);
        var desc = $(this).find(".field__item").text().replace(/ +(?= )/g,'');
        desc = $.trim(desc);
        var output = "{\""+title + "\":\"" + desc + "\"},";
        totalO = totalO + output;
});

    // Remove last ,
    totalO = totalO.substring(0, totalO.length - 1);

    final = "["+totalO+"]";


    //totalO = totalO.replace(/ +(?= )/g,'');
    //totalO = totalO.replace(/[\r\n]{2,}/g, "\n");
    //totalO = totalO.replace("\n::\n","::");


$("body").prepend("<textarea rows=10 cols=100>"+final+"");

    // Your code here...
})();
