// ==UserScript==
// @name         Asus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.asus.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

    var $ = window.jQuery;

alert("Assicurati di entrare nella pagina Specifiche");

$( document ).ready(function() {

(function() {

    'use strict';

    var totalO = "";

    $( ".product-spec li" ).each(function( index ) {
        var title= $(this).find(".spec-item").text().replace(/ +(?= )/g,'');
        title = $.trim(title);
        var desc = $(this).find(".spec-data").text().replace(/ +(?= )/g,'');
        desc = $.trim(desc);

        var output = ""

        if (title!="") {
        output = "\n" + title + "::" + desc;
        } else {
        output = ", " + desc
        }

        totalO = totalO + output;




});



$("#main-zone").prepend("<textarea rows=10 cols=100>"+totalO+"");

    // Your code here...
})();

})
