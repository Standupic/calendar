$(document).ready(function(){

	var calendar = (function(exports){
		exports.nextWeek = function(){
			$(".next").on('click', function(){
				$("#calendar").children().remove();
				calendar.showCalendar("next")
			});
		}
		exports.prevWeek = function(){
			$(".prev").on('click', function(){
				$("#calendar").children().remove();
				calendar.showCalendar("prev")
			});
		}
		exports.currentWeek = function(){
			$(".current").on('click', function(){
				$("#calendar").children().remove();
				calendar.showCalendar("current")
			});
		}
		exports.showCalendar = function(string){
 		var arr = [];
 		var day;
 		if(string == null){
 			day = moment();
 		}
 		if(string == "current"){
 			day = moment();
 		}
 		if(string == "next"){
 			day = moment().add(7, 'day');
 		}
 		if(string == "prev"){
 			day = moment().subtract(7, 'day');
 		}
	      for(var i = 1; i < 8; i++){
	     	  day.day(i);

	          if(day.format('dddd') == "Monday"){
	          		var Monday = "Понедельник /" + day.format('YYYY-MM-DD');
	              arr.push(Monday);
	          }
	          if(day.format('dddd') == "Tuesday"){
	          		var Tuesday = "Вторник /" + day.format('YYYY-MM-DD');
	              arr.push(Tuesday);
	          }
	          if(day.format('dddd') == "Wednesday"){
	          		var Wednesday = "Среда /" + day.format('YYYY-MM-DD');
	              arr.push(Wednesday);
	          }
	          if(day.format('dddd') == "Thursday"){
	          		var Thursday = "Четверг /" + day.format('YYYY-MM-DD');
	              arr.push(Thursday);
	          }
	          if(day.format('dddd') == "Friday"){ 
	          		var Friday = "Пятница /" + day.format('YYYY-MM-DD');
	              arr.push(Friday);
	          }
	          if(day.format('dddd') == "Saturday"){
	          		var Saturday = "Суббота /" + day.format('YYYY-MM-DD');
	              arr.push(Saturday);
	          }
	           if(day.format('dddd') == "Sunday"){
	          		var Sunday = "Воскресение /" + day.format('YYYY-MM-DD');
	              arr.push(Sunday);
	          }
	      }
	      for(var i = 0; i < arr.length; i++){
	      		var new_arr = arr[i].split("/");
	          var li = '<li><p>'+ new_arr[0] +'</p><p>'+new_arr[1]+'</p></li>';
	          $("#calendar").append(li);
	      }
	    }  
		return exports;

	}(calendar || {}));


	calendar.showCalendar();
	calendar.nextWeek();
	calendar.prevWeek();
	calendar.currentWeek();
});