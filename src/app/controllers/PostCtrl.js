/*================================================================
=>                  Controller = DropDown
==================================================================*/
/*global app*/

(function() {
    'use strict';

    angular
        .module('dreamcosplay')
        .controller('PostCtrl', PostCtrl);

    PostCtrl.$inject = ['$scope', '$stateParams', 'posts'];

    function PostCtrl($scope, $stateParams, posts) {
        $scope.posts = posts.posts;

        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });

    };

})();

/*-----  End of Controller = DropDown  ------*/


