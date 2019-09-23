// ==UserScript==
// @name         ZOTAC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zotac.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

    var $ = window.jQuery;


$( document ).ready(function() {

(function() {

    'use strict';


    var totalO = "";



    $( "div.details ul.list-details li" ).each(function( index ) {
        var title= $(this).find(".col-left").text().replace(/ +(?= )/g,'');
        title = $.trim(title);
        var desc= $(this).find(".col-right").text().replace(/ +(?= )/g,'');
        desc = $.trim(desc);

        desc = desc.replace(/(\r\n|\n|\r)/gm,", ");

        var output = ""

        /*if (title!="") {
        output = "\n" + title + "::" + desc;
        } else {
        output = ", " + desc
        }*/

        output = "\n" + title + "::" + desc;

        output = output.replace(", \n","\n");

        totalO = totalO + output;

});

    // Ripulisco i campi UL
    totalO = $.trim(totalO);
    totalO = totalO.replace(",\n ",",");


$("div.spec").prepend("<textarea rows=10 cols=300>"+totalO+"");

    // Your code here...
})();

})
