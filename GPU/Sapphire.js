// ==UserScript==
// @name         Sapphire
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sapphiretech.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

    var $ = window.jQuery;


$( document ).ready(function() {

(function() {

    'use strict';


    var totalO = "";

    $("#Specification .tab-pane:first-child .item :before").remove();

    $( "#Specification .tab-pane:first-child .item" ).each(function( index ) {
        var title= $(this).find("h4").text().replace(/ +(?= )/g,'');
        title = $.trim(title);

        var desc;

        if ($(this).find(".spec ul").length > 0) {
            $(this).find("li").each(function( index ) {

                if (desc != null)
                {
                    desc = desc + $(this).text().replace(/ +(?= )/g,'') + ",";
                } else {
                    desc = $(this).text().replace(/ +(?= )/g,'') + ",";
                }
                desc = desc.replace("\n","");

            });
        } else {
            desc = $(this).find(".spec").text().replace(/ +(?= )/g,'');
        }

        
        desc = $.trim(desc);

        desc = desc.replace(", \n",", ");

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


$("#pageNavi-sticky-wrapper").prepend("<textarea rows=10 cols=300>"+totalO+"");

    // Your code here...
})();

})