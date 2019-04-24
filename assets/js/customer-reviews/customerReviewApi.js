(function () {
    'use strict';

    angular
        .module('storefrontApp')
        .factory('customerReviewService', ['$http', function ($http) {
        var service = {
            createCustomerReview: createCustomerReview,
            saveCustomerEvaluation: saveCustomerEvaluation
        };

        return service;

        function saveCustomerEvaluation(evaluation) {
            return $http.put('storefrontapi/customerreviews/evaluation', evaluation);
        }

        function createCustomerReview(customerReview) {
            return $http.post('storefrontapi/customerreviews', customerReview);
        }
    }
]);

}) ();
