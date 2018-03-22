( function( global ) {
	global.app = {
		myfiziqGetAuthToken: function() {
			console.log('test');
			var success = function() {
		        console.log("MyFiziqSDK auth success");
		    }
		    var failure = function(msg) {
		        console.log("MyFiziqSDK auth failed");
		    }

		    myfiziq.mfzSdkAnswerLogins("", "", success, failure);
		}
	}

} )(window)