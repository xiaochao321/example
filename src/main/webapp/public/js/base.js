$(function () {
    resizeAll();
    //$("#imgShopTip").css("left", $('#globalnav').offset().left + 442);
    window.onresize = function () {
        resizeAll();
    };

    $(".productImg").hover(function () {

        $(this).css("opacity", "0.90");

    }, function () {
        $(this).css("opacity", "1.0");
    });

    $(".productDetail").hover(function () {
        //alert("123");
        $(this).children(".productIntro").stop();
        $(this).children(".productIntro").animate({ top: "-10px" }, 150);

    }, function () {
        $(this).children(".productIntro").stop();
        $(this).children(".productIntro").animate({ top: "0px" }, 150);

    });


    $("#productDH tr td a img").hover(function () {

        var newHtml = $(this).attr("src").replace("jpg", "gif");
        $(this).attr("src", newHtml);

    }, function () {
        var newHtml = $(this).attr("src").replace("gif", "jpg");
        $(this).attr("src", newHtml);

    });

});

function checkList() {
	//alert(onList);
	if(!onList)
	{
		$("#globalproductList").slideUp(300);
	}
}

function resizeAll() {
    //alert(document.documentElement.clientWidth);
	var moreWidth = "-"+(1920-document.documentElement.clientWidth)/2+"px";
	$("#imgShopTip").css("left", $('#globalnav').offset().left + 452);
	if (document.documentElement.clientWidth >= 1200 && document.documentElement.clientWidth <= 1920) {
	    $("#mainWindow img").css("margin-left", moreWidth);
	    $("#mainWindow").css("width", "100%");
	    $("#globalproductList h1").css("left", "605px");
	    //$(".productList ul li").css("width","358px");
	    $("#pmhead #headImg").css("margin-left", moreWidth);
	    $("#pmhead,#banner").css("width", "100%");
	    $("#productDH").css("width", "1200px");
	    $("#hline").css("width", "1200px");
	}
	else if (document.documentElement.clientWidth >= 900 && document.documentElement.clientWidth < 1200) {
	    $("#mainWindow img").css("margin-left", moreWidth);
	    $("#mainWindow").css("width", "100%");
	    $(".containerIndex").css("width", document.documentElement.clientWidth + "px");
	    $("#globalproductList h1").css("left", 605 - (1200 - document.documentElement.clientWidth) + "px");
	    //$(".productList ul li").css("width",(document.documentElement.clientWidth/3-42)+"px");
	    $("#pmhead #headImg").css("margin-left", moreWidth);
	    $("#pmhead,#banner").css("width", "1200px");
	    $("#productDH").css("width", document.documentElement.clientWidth + "px");
	    $("#hline").css("width", document.documentElement.clientWidth + "px");
	}
	else if (document.documentElement.clientWidth <= 900) {
	    $("#mainWindow img").css("margin-left", "-510px");
	    $("#mainWindow").css("width", "900px");
	    $(".containerIndex").css("width", "900px");
	    $("#globalproductList h1").css("left", "305px");
	    //$(".productList ul li").css("width","258px");
	    $("#pmhead #headImg").css("margin-left", "-510px");
	    $("#pmhead,#banner").css("width", "1200px");
	    $("#productDH").css("width", document.documentElement.clientWidth + "px");
	    $("#hline").css("width", document.documentElement.clientWidth + "px");
	}
	else if (document.documentElement.clientWidth > 1920) {
	    var moreWidth1 = (document.documentElement.clientWidth - 1920) / 2 + "px";
	    $("#mainWindow img").css("margin-left", moreWidth1);
	    $("#mainWindow").css("width", "100%");
	    $(".containerIndex").css("width", "1200px");
	    $("#globalproductList h1").css("left", "605px");
	    //$(".productList ul li").css("width","358px");
	    $("#pmhead #headImg").css("margin-left", moreWidth1);
	    $("#pmhead,#banner").css("width", "100%");
	    $("#productDH").css("width", "1200px");
	    $("#hotList ul li").css("width", "33%");
    }
}