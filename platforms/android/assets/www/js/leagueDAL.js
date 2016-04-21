/**database.js
 * a javascript file to create and manage the database
 *
 *    Revision History:
 *        Cody Lefebvre:4.10.2016:Created summoner object and functions within
 *        Cody Lefebvre:4.11.2016:Created stats object and functions within
 *        Cody Lefebvre:4.15.2016:Created match object and functions within
 */
var Summoner = {
    Insert: function(options){
        function txFunction(tx){
            //fix options for different values
            var sql ="INSERT INTO summoners(summonerId, name, level, profileIconId) values(?,?,?,?);";
            function successInsert(){
                console.info("Success: Insert successful");
                alert("new record added");
            }
                tx.executeSql(sql,options,successInsert,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    SelectAll: function(callback){
        var options = [];
        function txFunction(tx){
            var sql = "SELECT * FROM summoners;";

            tx.executeSql(sql,options,callback,errorHandler);
        }
        db.transaction(txFunction,errorHandler, successTransaction);

    },
    Select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM summoners WHERE id=?;";
            tx.executeSql(sql,options,callback,errorHandler);
        }
        db.transaction(txFunction,errorHandler, successTransaction);
    },
    Update: function(options){
        function txFunction(tx){
            console.info(options.length);
            var sql = "UPDATE summoners " + "SET summonerId=?, name=?, level=?, profileIconId=?" + " WHERE summonerId=?;";
            function successInsert() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }

            tx.executeSql(sql,options,successInsert,errorHandler);

        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    Delete: function(options){
        function txFunction(tx){
            var sql = "DELETE FROM summoners " + "WHERE summonerId=?;";

            function successDelete(){
                console.info("Success: delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql,options,successDelete,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    }

};

var Stats = {
    Insert: function(options){
        function txFunction(tx){
            //fix options for different values
            var sql ="INSERT OR REPLACE INTO stats(summonerId, playerStatSummaryType, wins, totalChampionKills, totalTurretsKilled, totalAssists) values(?,?,?,?,?,?);";
            function successInsert(){
                console.info("Success: Insert successful");
            }
            tx.executeSql(sql,options,successInsert,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    SelectAll: function(callback){
        var options = [];
        function txFunction(tx){
            var sql = "SELECT * FROM stats;";

            tx.executeSql(sql,options,callback,errorHandler);
        }
        db.transaction(txFunction,errorHandler, successTransaction);

    },
    Select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM stats WHERE summonerId=?;";
            tx.executeSql(sql,options,callback,errorHandler);
        }
        db.transaction(txFunction,errorHandler, successTransaction);
    },
    Update: function(options){
        function txFunction(tx){
            console.info(options.length);
            var sql = "UPDATE stats " + "SET id=?, playerStatSummaryType=?, wins=?, totalChampionKills=?, totalTurretsKilled=?, totalAssists=?" + " WHERE id=?;";
            function successInsert() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }

            tx.executeSql(sql,options,successInsert,errorHandler);

        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    Delete: function(options){
        function txFunction(tx){
            var sql = "DELETE FROM stats " + "WHERE summonerId=?;";

            function successDelete(){
                console.info("Success: delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql,options,successDelete,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    }

};

 var Match = {
    Insert: function(options){
        function txFunction(tx){
            //fix options for different values
            var sql ="INSERT OR REPLACE INTO match(summonerId, gameId, invalid, gameMode, gameType, subType, mapId, championId, spell1, spell2, ipEarned, createDate, kills, deaths, assists, creepScore, win, goldEarned) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            function successInsert(){
                console.info("Success: Insert successful");
            }
            tx.executeSql(sql,options,successInsert,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    SelectAll: function(callback){
        var options = [];
        function txFunction(tx){
            var sql = "SELECT * FROM match;";

            tx.executeSql(sql,options,callback,errorHandler);
        }
        db.transaction(txFunction,errorHandler, successTransaction);

    },
     Select: function(options, callback){
         function txFunction(tx){
             var sql = "SELECT * FROM match WHERE summonerId=?;";
             tx.executeSql(sql,options,callback,errorHandler);
         }
         db.transaction(txFunction,errorHandler, successTransaction);
     },
     Delete: function(options){
         function txFunction(tx){
             var sql = "DELETE FROM match " + "WHERE summonerId=?;";

             function successDelete(){
                 console.info("Success: delete successful");
                 alert("Record deleted successfully");
             }
             tx.executeSql(sql,options,successDelete,errorHandler);
         }
         db.transaction(txFunction,errorHandler,successTransaction);
     }


};