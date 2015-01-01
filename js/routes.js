'use strict';

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/view1', 
    	{
    		templateUrl: 'views/view1.html', 
    		controller: 'MyController1'
    	});
    $routeProvider.when(
    	'/view2', 
    	{
    		templateUrl: 'views/view2.html', 
    		controller: 'MyController2'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/view1'
        });
});