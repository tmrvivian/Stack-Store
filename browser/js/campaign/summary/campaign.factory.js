app.factory('CampaignFactory',function($http, $interval){
	function getAllCampaigns(id){
		//console.log('factory',id);
		if(id){
			return $http.get('/api/campaigns/'+id).then(function(response){
				//console.log(response);
				return response.data;
			})
		}
		return $http.get('/api/campaigns').then(function(response){
			//console.log(response);
			return response.data;
		})
	};

	function startTimer(expDate) {
		//expect expDate = [year,month,day];
		var current = new Date();
		//month is 0-11, day+1 to indicate stop at midnight;
		var exp = new Date(expDate[0],expDate[1]-1,expDate[2]+1);
		console.log('exp',expDate);
		var timer = parseInt((exp.getTime()-current.getTime())/1000,10),
		days,
		hours,
		minutes,
		seconds;
		if(timer<=0){
			document.querySelector('#countdown').textContent= "Deal expired."
		}
		//$interval(function() {
	    	days=parseInt(timer/3600/24,10);
	    	hours=parseInt(timer/3600 % 24, 10);
	        minutes= parseInt((timer - days*24*3600 -hours*3600)/ 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        var dd = days+" day" + (days >1 ? 's ': ' '),
	        hh = hours+" hour" + (hours >1 ? 's ': ' '),
	        m = minutes+" minute" + (minutes >1  ? 's ' : ' '),
	        s = seconds+" second" + (seconds >1  ? 's': '');
	        
	        document.querySelector('#countdown').textContent= "Deal ends in "+ dd+hh+m+s;
	    //}, 1000);
	};

	return {
			getAllCampaigns : getAllCampaigns,
			startTimer: startTimer
			}
})