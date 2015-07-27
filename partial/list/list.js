(function(){

	angular.module('angelPro').controller('ListCtrl',function($scope, $http, list){
		var vm = $scope;
		$http
		    .get('https://www.reddit.com/new.json')
		    	.success(function (response) {
		   			vm.datas = response.data.children;
				});
		
		//vm.datas = list.serviceList();
	});

}());