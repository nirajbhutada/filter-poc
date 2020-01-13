$(document).ready( function(){

	if($(".smartWayInfoWrap").length){
		$("body").addClass("smartBankingPage")
		$("#ContentPlaceHolder1_UserCMSHeader1_header").addClass("noFixed");
		var spinerTag = '<i class="topBdr"></i><i class="rightBdr"></i><i class="bottomBdr"></i><i class="leftBdr"></i>'
		$(".roundBox4").append(spinerTag);
		$(".smartWayInfoWrap .circleFilter").on("click",function(e){
		e.preventDefault();			
		var activeRound = $(this).attr("data-rel");
		if($(this).hasClass("active")){
			$(".smartBankingList .circleFilter").parent().removeClass("active");			
			$(".roundBoxText").removeClass("active")
			$(".circleFilter").removeClass("active");
			$(".roundBoxText").removeClass("inactive");	
			$(".smartCounterText").removeClass("active");			
			$(".smartMainText").show();
			$(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
		}else{	
		$(".smartBankingList .circleFilter").parent().removeClass("active");
		$(".smartMainText").show();
		$(".smartCounterText").removeClass("active");
			$(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
			$(".roundBoxText").removeClass("active")
			$(".circleFilter").removeClass("active");
			$(".roundBoxText").addClass("inactive");
			$(this).removeClass("inactive").addClass("active");			
			$(".roundBoxBg").find($("." + activeRound)).removeClass("inactive").addClass("active");
			}
		});
		var scrollTopDiv;
		$(".smartBankingList .circleFilter").on("click" ,function(e){	
		e.preventDefault();			
		setTimeout(function(){
		scrollTopDiv = $("#smartBankingWrap").offset().top + 110;
		$('html, body').animate({scrollTop:scrollTopDiv}, '50');
		},50);
		var activeRound1 = $(this).attr("data-rel");
		var selectedCount1 =  $(".roundBoxBg").find($(".hoverCircle." + activeRound1)).length;
		var selectedCountParent = $(".smartWayInfoWrap .circleFilter").find().attr("data-rel", activeRound1);
		$(".smartCounterText").text(selectedCount1).addClass("active");
		$(".smartCounterTitle, .smartCounterSmallText").addClass("active");
		if($(this).parent().hasClass("active")){
			$(".smartBankingList .circleFilter").parent().removeClass("active");
			$(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
			$(".smartCounterText").removeClass("active");			
			$(".roundBoxText").removeClass("active");
			$(".selectedCountParent").removeClass("active");
			$(".roundBoxText").removeClass("inactive");
			$(".smartMainText").show();
		}else{
			$(".smartMainText").hide();
			$(".roundBoxText").removeClass("active")
			$(".smartBankingList .circleFilter").parent().removeClass("active");
			$(this).parent().addClass("active");
			$(".roundBoxText").addClass("inactive");
			$(".selectedCountParent").addClass("active");
			$(".smartCounterText").addClass("active");
			$(".roundBoxBg").find($(".hoverCircle." + activeRound1)).removeClass("inactive").addClass("active");				
			}
		});
		$(".roundBoxText").on("mouseenter", function(){
  		var activeList = $(this).attr("data-rel");
		//$(".roundBoxText").removeClass("active")
			//$(".circleFilter").removeClass("active");
			//$(this).addClass("active");
			$(".smartBankingList").find($("." + activeList)).parent().addClass("related");
		});
		$(".roundBoxText").on("mouseleave", function(){
			 $(".smartBankingList .circleFilter").parent().removeClass("related");
			if($(this).hasClass("related")){
									 
  		}else{
			$(this).removeClass("related");			
			}
		});
		
		
	}
});