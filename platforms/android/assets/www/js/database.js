/**database.js
 * a javascript file to create and manage the database
 *
 *    Revision History:
 *        Cody Lefebvre:4.10.2016:Created database object and callbacks
 *        Cody Lefebvre:4.11.2016:added dropTables and createTables
 */
var db;

function errorHandler(tx,error){
    console.error("SQL error: " + tx + " (" + error.code + ") -- " + error.message);
}
function successTransaction(){
    console.info("Success: Transaction Successful");
}

var DB = {
    createDatabase: function(){
        var shortName= "LeagueDB";
        var version = "1.0";
        var displayName = "DB for LeagueDB app";
        var dbSize = 2*1024*1024;
        console.info("Creating Database..");

        db = openDatabase(shortName,version,displayName,dbSize,dbCreateSuccess);

        function dbCreateSuccess(){
            console.info("Success: Database Creation Successful");
        }
    },
    createTables:function(){
        function successCreate() {
            console.info("Success; Create Table Successful");
        }
        function txFunction(tx) {
            var options = [];
            console.info("Creating table: summoner");

            var sql_table1 = "CREATE TABLE IF NOT EXISTS summoners( " + "id INTEGER PRIMARY KEY AUTOINCREMENT,"
                +"summonerId INTEGER NOT NULL,"
                +"name VARCHAR(20) NOT NULL,"
                +"level INTEGER,"
                +"profileIconId INTEGER);";

            var sql_table2 = "CREATE TABLE IF NOT EXISTS stats( " + "id INTEGER PRIMARY KEY AUTOINCREMENT,"
                +"summonerId INTEGER,"
                +"playerStatSummaryType VARCHAR(20),"
                +"wins INTEGER,"
                +"totalChampionKills INTEGER,"
                +"totalTurretsKilled INTEGER,"
                +"totalAssists INTEGER);";

            var sql_table3 ="CREATE TABLE IF NOT EXISTS match( " + "id INTEGER PRIMARY KEY AUTOINCREMENT,"
                +"summonerId INTEGER,"
                +"gameId INTEGER,"
                +"invalid BOOL,"
                +"gameMode VARCHAR(12),"
                +"gameType VARCHAR(12),"
                +"subType VARCHAR(20),"
                +"mapId INTEGER,"
                +"championId INTEGER,"
                +"spell1 INTEGER,"
                +"spell2 INTEGER,"
                +"ipEarned INTEGER,"
                +"createDate INTEGER,"
                +"kills INTEGER,"
                +"deaths INTEGER,"
                +"assists INTEGER,"
                +"creepScore INTEGER,"
                +"win BOOL,"
                +"goldEarned INTEGER);";

            tx.executeSql(sql_table1,options,successCreate,errorHandler);
            tx.executeSql(sql_table2,options,successCreate,errorHandler);
            tx.executeSql(sql_table3,options,successCreate,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    dropTables: function(){
        function successDrop(){
            console.info("Success: Dropping tables successful");
        }
        function txFunction(tx){
            var options = [];
            var sql = "DROP TABLE IF EXISTS summoners;";
            var sql2 = "DROP TABLE IF EXISTS stats;";
            var sql3 = "DROP TABLE IF EXISTS match;";
            tx.executeSql(sql,options,successDrop,errorHandler);
            tx.executeSql(sql2,options,successDrop,errorHandler);
            tx.executeSql(sql3,options,successDrop,errorHandler);
            alert("Tables dropped successfully");
        }
        db.transaction(txFunction,errorHandler,successDrop);
    }

};