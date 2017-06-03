var myWebApp=angular.module("myWebApp",[]);
myWebApp.controller("shareExp",function($scope){
	$scope.formExpFlag=false;
	$scope.companyName;
	$scope.expComments;
	$scope.experiences=[
	 {Name: 'Venkateshwarlu Thota',cmpnyName: 'TCS',Comments: 'It indeed was a great experence. Technical inteview was difficult.'}
	,{Name: 'Robert Jr',cmpnyName: 'TechMahindra', Comments:'It is good expereince.'}
	,{Name: 'Bob',cmpnyName: 'Excers', Comments: 'sasg hfhfh skdfsdflsdlf klsdf lsdflskd flksdfklsdf sdflksd flksdfl sdfsd lflsdkflsdfsldfs'}
	,{Name: 'Paramesh',cmpnyName: 'Google', Comments:'sdfslkdfjsk ksdfsldkfjsd lfdslkfjsdlkf jslkdfjs dlkfjsldkfsldafs dfsldkfsdlkf'}
	];
	$scope.openExpForm = function() {
	$scope.formExpFlag = true;
	}
	$scope.submitExperience = function() {
	$scope.formExpFlag=false;
	$scope.experiences.push({Name: 'Thota',cmpnyName: $scope.companyName,Comments: $scope.expComments});
	$scope.companyName='';
	$scope.expComments='';
	}
	
});



