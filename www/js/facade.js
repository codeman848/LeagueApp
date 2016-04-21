/**facade.js
 * a javascript file to manage the flow of data
 *
 *    Revision History:
 *        Cody Lefebvre:4.09.2016:Created and added methods displaySummoner/getSummoner
 *        Cody Lefebvre:4.10.2016:added methods displayStats/getStats
 *        Cody Lefebvre:4.14.2016:added methods displayGames/getGames
 *        Cody Lefebvre:4.15.2016:added methods updateSummoner/deleteSummoner
 */
function displaySummoners()
{
    function successShowAll(tx, results) {
        var htmlCode = "";
        var summonerId;
        for(var i =0; i < results.rows.length; i++)
        {
            var row = results.rows[i];
            var name = row['name'];
            var link;
            var id = row['summonerId'];
            var id2 = [id];
            var link1 = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/"+ row['profileIconId'] +".png";
            link = "<img src='"+link1+"'>";

            htmlCode += "<li><a data-role='button' data-row-id=" + row['summonerId'] +
                " href='#'> " +link+"<h1>Summoner Name: " + row['name'] + "</h1>" +
                "<h2>Level: "+ row['level']+"</h2>" +
                "</a></li><button data-role='button' data-theme='b' id='btnUpdate' onclick='updateSummoner("+id2+")'>Update</button><button data-role='button' data-theme='b' id='btnDelete' onclick='deleteSummoner("+id2+")'>Delete</button>";
        }
        var lv = $("#summonerList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#summonerList a").on("click", clickHandler);

        function clickHandler()
        {
            localStorage.setItem("Id",$(this).attr("data-row-id"));
            var summonerId = localStorage.getItem("Id");

            if($("#statsRadio").is(':checked'))
            {
                if($("#statsList").children().length <6)
                {
                    getSummonerStats(summonerId);
                }
                else if(!$("#statsList").children().length <6)
                {
                    $.mobile.changePage("#SummonerDetailsPage", {transition:'none'});
                }
            }
            if($("#matchRadio").is(':checked'))
            {
                if($("#matchList").children().length < 10)
                {
                    getRecentGames(summonerId);
                }
                else if(!$("#matchList").children().length < 10)
                {
                    $.mobile.changePage("#MatchDetailsPage", {transition:'none'});
                }
            }
        }
    }
    Summoner.SelectAll(successShowAll);
}
function deleteSummoner(summonerId)
{
    if(summonerId == null)
    {
        alert("Summoner is not in the list");
        console.log("Error: summoner not found");
    }
    else
    {
        var options = [summonerId];
        Summoner.Delete(options);
        Stats.Delete(options);
        Match.Delete(options);
    }
    $.mobile.changePage("#HomePage", {transition:'none'});
}
function updateSummoner(summonerId)
{
    var API_KEY = "e99e38aa-ac37-4654-bf4d-8b0dfd68eeaf";
    var link = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/"+summonerId+"?api_key="+API_KEY;

    if(summonerId == null)
    {
        alert("Summoner is not in the list");
        console.log("Error: summoner not found");
    }
    else
    {
        $.ajax({
            url:link,
            type:'GET',
            dataType:'json',
            data:{},
            success: function(json){
                var summonerID =  json.id;
                var summonerName = json.name;
                var summonerLevel = json.summonerLevel;
                var profileIconId = json.profileIconId;
                    // save to db
                var options = [summonerID,summonerName,summonerLevel,profileIconId,summonerId];
                Summoner.Update(options);
               // $.mobile.changePage("#ListPage", {transition:'none'});

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner!");
            }
        });

    }
}
function searchForSummoner()
{
    var summonerName = "";
    summonerName = $("#txtSummonerName").val();
    var API_KEY = "e99e38aa-ac37-4654-bf4d-8b0dfd68eeaf";
    var link = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+summonerName+"?api_key="+API_KEY;

    var summonerNameNoSpaces = summonerName.replace(" "," ");
    summonerNameNoSpaces = summonerNameNoSpaces.trim().toLowerCase();


    if(summonerName !== "")
    {
        $.ajax({
            url:link,
            type:'GET',
            dataType:'json',
            data:{},
            success: function(json){
                var summonerID =  json[summonerNameNoSpaces].id;
                localStorage.setItem("Id",summonerID);
                var summonerLevel = json[summonerNameNoSpaces].summonerLevel;
                var profileIconId = json[summonerNameNoSpaces].profileIconId;
                // save to db
                var options = [summonerID,summonerName,summonerLevel,profileIconId];
                Summoner.Insert(options);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    }
    else
    {

    }
}

function getSummonerStats(summonerId)
 {
    var htmlCode = "";
    var API_KEY = "e99e38aa-ac37-4654-bf4d-8b0dfd68eeaf";
    var link = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/"+summonerId+ "/summary?season=SEASON2016" + "&api_key="+API_KEY;

    if(summonerId !== "")
    {
        $.ajax({
            url:link,
            type:'GET',
            dataType:'json',
            data:{},
            success: function(json){
                for(var i =0;i< json.playerStatSummaries.length;i++)
                {
                    var gameType = json.playerStatSummaries[i].playerStatSummaryType;
                    var winCount = json.playerStatSummaries[i].wins;
                    var championKills = json.playerStatSummaries[i].aggregatedStats.totalChampionKills;
                    //var minionKills = json.playerStatSummaries[5].aggregatedStats.totalMinionKills;
                    var turretKills = json.playerStatSummaries[i].aggregatedStats.totalTurretsKilled;
                    //var jungleKills = json.playerStatSummaries[5].aggregatedStats.totalNeutralMinionsKilled;
                    var totalAssists = json.playerStatSummaries[i].aggregatedStats.totalAssists;

                    //save stats to db
                    var options = [summonerId,gameType,winCount,championKills,turretKills,totalAssists];
                    Stats.Insert(options);
                }
                $.mobile.changePage("#SummonerDetailsPage", {transition:'none'});

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner stats!");
            }
        });
    }
    else
    {

    }
}

function displayStats() {

    var id =localStorage.getItem('Id');
    var options= [id];


    function successSelect(tx, results) {
        var htmlCode = "";

        for(var i =0; i < results.rows.length; i++)
        {

            var row = results.rows[i];
                htmlCode += "<li><a data-role='button' data-row-id=" + row['summonerId'] +
                    " href='#'> " + "<h1>Game Mode: " + row['playerStatSummaryType'] + "</h1>" +
                    "<h2>Wins: "+ row['wins']+"</h2>" +
                    "<h3>Champion Kills: "+ row['totalChampionKills'] +"</h3>" +
                    "<h4>Turrets Destroyed: "+ row['totalTurretsKilled'] +"</h4>" +
                    "<h4>Total Assists: "+ row['totalAssists'] +"</h4>" +
                    "</a></li>";

        }
        var lv = $("#statsList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

    }
    Stats.Select(options,successSelect);
}

function getRecentGames(summonerId){

    var API_KEY ="e99e38aa-ac37-4654-bf4d-8b0dfd68eeaf";
    var link = "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/"+summonerId+"/recent?api_key=" + API_KEY;

    if(summonerId !== null)
    {
        $.ajax({
            url:link,
            type:'GET',
            dataType:'json',
            data:{},
            success: function(json){

                var games = json.games;

                for(var i=0;i<10;i++)
                {
                    var gameId = games[i].gameId;
                    var invalid =games[i].invalid;
                    var gameMode = games[i].gameMode;
                    var gameType = games[i].gameType;
                    var subType = games[i].subType;
                    var mapId = games[i].mapeId;
                    var championId = games[i].championId;
                    var spell1 = games[i].spell1;
                    var spell2 = games[i].spell2;
                    var ipEarned = games[i].ipEarned;
                    var createDate = games[i].createDate;
                    var kills = games[i].stats.championsKilled;
                    var deaths = games[i].stats.numDeaths;
                    var assists = games[i].stats.assists;
                    var cs = games[i].stats.minionsKilled;
                    var win =games[i].stats.win;
                    var gold = games[i].stats.goldEarned;

                    var options = [summonerId,gameId,invalid,gameMode,gameType,subType,mapId ,championId,spell1,spell2,ipEarned,createDate,kills,deaths,assists,cs,win,gold];

                    Match.Insert(options);
                }
                $.mobile.changePage("#MatchDetailsPage", {transition:'none'});
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    }
    else
    {

    }
}

function displayGames()
{
    var id =localStorage.getItem('Id');
    var options= [id];

    function successSelect(tx,results){

        var htmlCode="";

        for(var i=0;i<results.rows.length;i++)
        {
            var row = results.rows[i];
            var htmlLink1="";
            var htmlLink2="";
            var sumIconLink2 = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/";
            var sumIconLink1 = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/";

            var championLink = getChampionData(row['championId']);
            var championIcon = "<img src='"+championLink+"' />";
            if(row['spell2'] == 13)
            {
                sumIconLink2+="SummonerMana.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 6)
            {
                sumIconLink2+="SummonerHaste.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 7)
            {
                sumIconLink2+="SummonerHeal.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 32)
            {
                sumIconLink2+="SummonerSnowBall.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 21)
            {
                sumIconLink2+="SummonerBarrier.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 3)
            {
                sumIconLink2+="SummonerExhaust.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 1)
            {
                sumIconLink2+="SummonerBoost.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 12)
            {
                sumIconLink2+="SummonerTeleport.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 4)
            {
                sumIconLink2+="SummonerFlash.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 14)
            {
                sumIconLink2+="SummonerDot.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 11)
            {
                sumIconLink2+="SummonerSmite.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 30)
            {
                sumIconLink2+="SummonerPoroRecall.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
            if(row['spell2'] == 31)
            {
                sumIconLink2+="SummonerPoroThrow.png";
                htmlLink2 = "<img src='"+sumIconLink2+"' />";
            }
/*-------------------------------------------------------------------------------------------*/
            if(row['spell1'] == 13)
            {
                sumIconLink1+="SummonerMana.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 6)
            {
                sumIconLink1+="SummonerHaste.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 7)
            {
                sumIconLink1+="SummonerHeal.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 32)
            {
                sumIconLink1+="SummonerSnowBall.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 21)
            {
                sumIconLink2+="SummonerBarrier.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 3)
            {
                sumIconLink1+="SummonerExhaust.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 1)
            {
                sumIconLink1+="SummonerBoost.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 12)
            {
                sumIconLink1+="SummonerTeleport.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 4)
            {
                sumIconLink1+="SummonerFlash.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 14)
            {
                sumIconLink1+="SummonerDot.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 11)
            {
                sumIconLink1+="SummonerSmite.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 30)
            {
                sumIconLink1+="SummonerPoroRecall.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }
            if(row['spell1'] == 31)
            {
                sumIconLink1+="SummonerPoroThrow.png";
                htmlLink1 = "<img src='"+sumIconLink1+"' />";
            }

            var winLine;
            if(row['win'] == "true")
            {
                winLine = "<h5 style='color: green;font-weight: bold;'>Win: " + row['win'] + "</h5>";
            }
            if(row['win'] == "false")
            {
                winLine = "<h5 style='color: red;font-weight: bold;'>Win: " + row['win'] + "</h5>";
            }

            htmlCode += "<li><a data-role='button' data-row-id=" + row['summonerId'] +
            "href='#'> " + "<h1>" + row['gameMode'] + "</h1>" +
            "<h2>" + row['subType'] + "</h2>" +
            "<h2 style=' font-weight: bold;color:darkolivegreen'>" + row['kills']+"/"+row['deaths']+"/"+row['assists'] + "</h2>" +
            championIcon+
            htmlLink1 +
            htmlLink2 +
            "<h6> +" + row['ipEarned'] + " IP</h6>" +
            "<h3>Creep Score: " + row['creepScore'] + "</h3>" +
            winLine +
            "<h4>Gold Earned: " + row['goldEarned'] + "</h4>";

        }

        var lv = $("#matchList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
    }
    Match.Select(options,successSelect);
    $("#matchList").listview("refresh");
}
