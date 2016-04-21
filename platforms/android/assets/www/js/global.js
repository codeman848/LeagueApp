/**global.js
 * a javascript file to hold global functions
 *
 *    Revision History:
 *        Cody Lefebvre:4.10.2016:Created init() and initDB()
 *        Cody Lefebvre:4.11.2016:added event handlers
 */
$(document).ready(function(){
    init();
    initDB();
});


function init(){
    $("#btnSubmit").on("click",btnSubmit_click);
    $("#btnDropDatabase").on("click",btnDropDatabase_click);
    $("#ListPage").on("pageshow", ListPage_show);
    $("#SummonerDetailsPage").on("pageshow", SummonerDetailsPage_show);
    $("#MatchDetailsPage").on("pageshow", MatchDetailsPage_show);
}

function initDB(){
     console.info("Creating Database.");
     DB.createDatabase();
     if (db) {
         console.info("Creating tables.");
         DB.createTables();
     }
     else{
         console.error("Error: cannot create tables - database not available!");
     }
}

function ListPage_show(){
    displaySummoners();
}
function MatchDetailsPage_show(){
    displayGames();
}
function SummonerDetailsPage_show(){
    displayStats();
}
function btnSubmit_click(){
    searchForSummoner();

}

function btnDropDatabase_click(){
    DB.dropTables();

}