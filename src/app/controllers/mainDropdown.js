/*================================================================
=>                  Controller = DropDown
==================================================================*/
/*global app*/

(function() {
    'use strict';

    angular
        .module('dreamcosplay')
        .controller('DropDownCtrl', DropDownCtrl);

    DropDownCtrl.$inject = ['$scope', '$state'];

    function DropDownCtrl($scope, $state) {
    	$scope.items = [
    	  "The first choice!",
    	  "And another choice for you.",
    	  "but wait! A third!"
    	];
    	$scope.linkItems = {
    	  "Google": "http://google.com",
    	  "AltaVista": "http://altavista.com"
    	};
    };

})();

/*-----  End of Controller = DropDown  ------*/


