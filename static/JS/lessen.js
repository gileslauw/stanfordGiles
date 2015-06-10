/**
 * Created by giles on 5/06/2015.
 */

var main = function() {
    $('.vak').click(function () {

        $('.description').hide();
        $(this).children('.description').show();
    });
}
$(document).ready(main);



<script>
document.getElementById("web").addEventListener("click",function(){CookieMaken("WEB");});
document.getElementById("des").addEventListener("click",function(){CookieMaken("DES");});
document.getElementById("infrastructure").addEventListener("click",function(){CookieMaken("INF");});
document.getElementById("app").addEventListener("click",function(){CookieMaken("APP");});
document.getElementById("server").addEventListener("click",function(){CookieMaken("SSD");});
document.getElementById("alles").addEventListener("click",function(){CookieMaken("alles");});

function CookieMaken(waarde){

    var titel = document.getElementById("TitelUitleg");
    var tekst = document.getElementById("TekstUitleg");

    switch(waarde) {
        case "WEB":
            titel.innerHTML="Web & Design";
            tekst.innerHTML="You learn to communicate in an interactive, multimedia and graphical way with a user. How " +
            "to build a logical interface? How to draft an innovative design in function of a target group? ";

            break;
        case "DES":
            titel.innerHTML="Digital Expert Skills";
            tekst.innerHTML="This is the backbone of any future NMCT’er. You learn how to think critically, plan your project" +
            " and execute it. To comply with deadlines, analyse problems, but also to present your project or ideas are important. " +
            "You do this by mean of practical projects and case studies.";

            break;
        case "INF":
            titel.innerHTML="Infrastructure";
            tekst.innerHTML="You learn to use networks and operating systems both local and virtual. By innovating you " +
            "choose the right dimensioned and energy efficient hardware.";

            break;
        case "APP":
            titel.innerHTML="App Development";
            tekst.innerHTML="Object Oriented Programming is learned step by step. You use your programming skills as a " +
            "tool to develop applications and apps. These can be desktop applications, mobile apps or even apps that work on your TV.  ";

            break;
        case "SSD":
            titel.innerHTML="Server Side Development";
            tekst.innerHTML="You learn to create and manage a working database. You let the client maintain his own website " +
            "with a content management system. With server scripting you develop your own innovative plugins. Your result ends up in the cloud.";

            break;

        default:
            titel.innerHTML="";
            tekst.innerHTML="";
    }

    var classDivs=document.getElementsByClassName("col-md-4"),les,idChild;
    for (i=0;classDivs.length>i;i++){
        var children =classDivs[i].childNodes;
        idChild=children[1].id;
        if (idChild.indexOf(waarde) == -1 && waarde!="alles") {
            les = document.getElementById(idChild);
            les.style.visibility = "hidden";
            classDivs[i].classList.add("verborgen");

        } else {
            les = document.getElementById(idChild);
            les.style.visibility = "visible";
            classDivs[i].classList.remove("verborgen");
        }

    }
}

</script>
