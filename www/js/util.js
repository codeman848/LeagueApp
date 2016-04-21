/**util.js
 * a javascript file to hold the utility functions
 *
 *    Revision History:
 *        Cody Lefebvre:4.10.2016:Created getChampionData
 *        Cody Lefebvre:4.11.2016:added getSummonerStats
 */

function getChampionData(championId) {

    var link = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/";

    if(championId == 412)
    {
        link +="Thresh.png";
    }
    if(championId == 266)
    {
        link +="Aatrox.png";
    }
    if(championId == 23)
    {
        link +="Tryndamere.png";
    }
    if(championId == 79)
    {
        link +="Gragas.png";
    }
    if(championId == 69)
    {
        link +="Cassiopeia.png";
    }
    if(championId == 136)
    {
        link +="AurelionSol.png";
    }
    if(championId == 13)
    {
        link +="Ryze.png";
    }
    if(championId == 78)
    {
        link +="Poppy.png";
    }
    if(championId == 14)
    {
        link +="Sion.png";
    }
    if(championId == 202)
    {
        link +="Jhin.png";
    }
    if(championId == 1)
    {
        link +="Annie.png";
    }
    if(championId == 111)
    {
        link +="Nautilus.png";
    }
    if(championId == 43)
    {
        link +="Karma.png";
    }
    if(championId == 99)
    {
        link +="lux.png";
    }
    if(championId == 103)
    {
        link +="Ahri.png";
    }
    if(championId == 2)
    {
        link +="Olaf.png";
    }
    if(championId == 112)
    {
        link +="Viktor.png";
    }
    if(championId == 27)
    {
        link +="Singed.png";
    }
    if(championId == 86)
    {
        link +="Garen.png";
    }
    if(championId == 34)
    {
        link +="Anivia.png";
    }
    if(championId == 57)
    {
        link +="Maokai.png";
    }
    if(championId == 127)
    {
        link +="Lissandra.png";
    }
    if(championId == 25)
    {
        link +="Morgana.png";
    }
    if(championId == 105)
    {
        link +="Fizz.png";
    }
    if(championId == 28)
    {
        link +="Evelynn.png";
    }
    if(championId == 238)
    {
        link +="Zed.png";
    }
    if(championId == 74)
    {
        link +="Heimerdinger.png";
    }
    if(championId == 68)
    {
        link +="Rumble.png";
    }
    if(championId == 37)
    {
        link +="Sona.png";
    }
    if(championId == 82)
    {
        link +="Mordekaiser.png";
    }
    if(championId == 96)
    {
        link +="KogMaw.png";
    }
    if(championId == 96)
    {
        link +="Katarina.png";
    }
    if(championId == 117)
    {
        link +="Lulu.png";
    }
    if(championId == 22)
    {
        link +="Ashe.png";
    }
    if(championId == 30)
    {
        link +="Karthus.png";
    }
    if(championId == 12)
    {
        link +="Alistar.png";
    }
    if(championId == 122)
    {
        link +="Darius.png";
    }
    if(championId == 67)
    {
        link +="Vayne.png";
    }
    if(championId == 110)
    {
        link +="Varus.png";
    }
    if(championId == 77)
    {
        link +="Udyr.png";
    }
    if(championId == 89)
    {
        link +="Leona.png";
    }
    if(championId == 126)
    {
        link +="Jayce.png";
    }
    if(championId == 134)
    {
        link +="Syndra.png";
    }
    if(championId == 80)
    {
        link +="Pantheon.png";
    }
    if(championId == 92)
    {
        link +="Riven.png";
    }
    if(championId == 121)
    {
        link +="Khazix.png";
    }
    if(championId == 42)
    {
        link +="Corki.png";
    }
    if(championId == 51)
    {
        link +="Caitlyn.png";
    }
    if(championId == 268)
    {
        link +="Azir.png";
    }
    if(championId == 76)
    {
        link +="Nidalee.png";
    }
    if(championId == 485)
    {
        link +="Kennen.png";
    }
    if(championId == 3)
    {
        link +="Galio.png";
    }
    if(championId == 45)
    {
        link +="Veigar.png";
    }
    if(championId == 432)
    {
        link +="Bard.png";
    }
    if(championId == 150)
    {
        link +="Gnar.png";
    }
    if(championId == 90)
    {
        link +="Malzahar.png";
    }
    if(championId == 104)
    {
        link +="Graves.png";
    }
    if(championId == 254)
    {
        link +="Vi.png";
    }
    if(championId == 10)
    {
        link +="Kayle.png";
    }
    if(championId == 39)
    {
        link +="Irelia.png";
    }
    if(championId == 64)
    {
        link +="LeeSin.png";
    }
    if(championId == 420)
    {
        link +="Illaoi.png";
    }
    if(championId == 60)
    {
        link +="Elise.png";
    }
    if(championId == 106)
    {
        link +="Volibear.png";
    }
    if(championId == 20)
    {
        link +="Nunu.png";
    }
    if(championId == 4)
    {
        link +="TwistedFate.png";
    }
    if(championId == 24)
    {
        link +="Jax.png";
    }
    if(championId == 102)
    {
        link +="Shyvana.png";
    }
    if(championId == 429)
    {
        link +="Kalista.png";
    }
    if(championId == 36)
    {
        link +="DrMundo.png";
    }
    if(championId == 223)
    {
        link +="TahmKench.png";
    }
    if(championId == 131)
    {
        link +="Diana.png";
    }
    if(championId == 63)
    {
        link +="Brand.png";
    }
    if(championId == 113)
    {
        link +="Sejuani.png";
    }
    if(championId == 8)
    {
        link +="Vladimir.png";
    }
    if(championId == 154)
    {
        link +="Zac.png";
    }
    if(championId == 421)
    {
        link +="RekSai.png";
    }
    if(championId == 133)
    {
        link +="Quinn.png";
    }
    if(championId == 84)
    {
        link +="Akali.png";
    }
    if(championId == 18)
    {
        link +="Tristana.png";
    }
    if(championId == 120)
    {
        link +="Hecarim.png";
    }
    if(championId == 15)
    {
        link +="Sivir.png";
    }
    if(championId == 236)
    {
        link +="Lucian.png";
    }
    if(championId == 107)
    {
        link +="Rengar.png";
    }
    if(championId == 19)
    {
        link +="Warwick.png";
    }
    if(championId == 72)
    {
        link +="Skarner.png";
    }
    if(championId == 54)
    {
        link +="Malphite.png";
    }
    if(championId == 157)
    {
        link +="Yasuo.png";
    }
    if(championId == 101)
    {
        link +="Xerath.png";
    }
    if(championId == 17)
    {
        link +="Teemo.png";
    }
    if(championId == 58)
    {
        link +="Renekton.png";
    }
    if(championId == 75)
    {
        link +="Nasus.png";
    }
    if(championId == 119)
    {
        link +="Draven.png";
    }
    if(championId == 35)
    {
        link +="Shaco.png";
    }
    if(championId == 50)
    {
        link +="Swain.png";
    }
    if(championId == 115)
    {
        link +="Ziggs.png";
    }
    if(championId == 91)
    {
        link +="Talon.png";
    }
    if(championId == 40)
    {
        link +="Janna.png";
    }
    if(championId == 245)
    {
        link +="Ekko.png";
    }
    if(championId == 61)
    {
        link +="Orianna.png";
    }
    if(championId == 114)
    {
        link +="Fiora.png";
    }
    if(championId == 9)
    {
        link +="FiddleSticks.png";
    }
    if(championId == 33)
    {
        link +="Rammus.png";
    }
    if(championId == 31)
    {
        link +="Chogath.png";
    }
    if(championId == 7)
    {
        link +="Leblanc.png";
    }
    if(championId == 26)
    {
        link +="Zilean.png";
    }
    if(championId == 16)
    {
        link +="Soraka.png";
    }
    if(championId == 56)
    {
        link +="Nocturne.png";
    }
    if(championId == 222)
    {
        link +="Jinx.png";
    }
    if(championId == 83)
    {
        link +="Yorick.png";
    }
    if(championId == 6)
    {
        link +="Urgot.png";
    }
    if(championId == 203)
    {
        link +="Kindred.png";
    }
    if(championId == 21)
    {
        link +="MissFortune.png";
    }
    if(championId == 62)
    {
        link +="Wukong.png";
    }
    if(championId == 53)
    {
        link +="Blitzcrank.png";
    }
    if(championId == 98)
    {
        link +="Shen.png";
    }
    if(championId == 201)
    {
        link +="Braum.png";
    }
    if(championId == 5)
    {
        link +="XinZhao.png";
    }
    if(championId == 29)
    {
        link +="Twitch.png";
    }
    if(championId == 11)
    {
        link +="MasterYi.png";
    }
    if(championId == 44)
    {
        link +="Taric.png";
    }
    if(championId == 32)
    {
        link +="Amumu.png";
    }
    if(championId == 41)
    {
        link +="Gangplank.png";
    }
    if(championId == 48)
    {
        link +="Trundle.png";
    }
    if(championId == 38)
    {
        link +="Kassadin.png";
    }
    if(championId == 161)
    {
        link +="Velkoz.png";
    }
    if(championId == 143)
    {
        link +="Zyra.png";
    }
    if(championId == 267)
    {
        link +="Nami.png";
    }
    if(championId == 59)
    {
        link +="JarvanIV.png";
    }
    if(championId == 81)
    {
        link +="Ezreal.png";
    }
    return link;

}

function getSpell(summonerId)
{
    var htmlLink1="";
    var htmlLink2="";
    var sumIconLink2 = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/";
    var sumIconLink1 = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/";

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

    return htmlLink1+htmlLink2;
}
