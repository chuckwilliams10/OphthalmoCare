'use strict';

// Examinations controller
angular.module('examinations').controller('ExaminationsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Examinations', 'lodash', '$q',
	function($scope, $stateParams, $location, Authentication, Examinations, lodash, $q ) {
		//$scope.authentication = Authentication;
        $scope.examination={};
        /*$scope.examination.colors=null;
        $scope.availableColors=['Red', 'Green', 'Yellow', 'Cool', 'Purple', 'Moove', 'Create', 'Do']*/

       //region schema form
        $scope.schema = {
            type: "object",
            required:["name"],
            properties: {
                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                title: {
                    type: "string",
                    enum: ['dr','jr','sir','mrs','mr','NaN','dj']
                }
                , eyelid:{title:"eye lid", type:"tagsinput", placeholder:'eye lid', tags:['Red', 'Green', 'Yellow', 'Cool', 'Purple', 'Moove', 'Create', 'Do']}

            }
        };

        $scope.form = [
            "*",
            {key:'eyelid', type:'tagsinput', title:'eye lid', placeholder:'eye lid', tags:['Red', 'Green', 'Yellow', 'Cool', 'Purple', 'Moove', 'Create', 'Do']},
            {
                type: "submit",
                title: "Save",
                style: 'btn-default'
            }
        ];

        $scope.examination = {};

        $scope.onSubmit = function(form) {
            // First we broadcast an event so all fields validate themselves
            $scope.$broadcast('schemaFormValidate');

            // Then we check if the form is valid
            if (form.$valid) {
                console.log($scope.examination.eyelid);
                //$scope.create();
            }
        }
        //endregion schema form

       //region tagsInput
        /*$scope.availableColors = [{text:'Red'},{text:'Green'},{text:'Blue'},{text:'Yellow'},{text:'Magenta'},{text:'Maroon'},{text:'Umbra'},{text:'Turquoise'}];
        //$scope.colors = null;
        //$scope.multipleDemo.colors = null;//['Blue','Red'];
        $scope.loadColors=function(query){
            var deferred = $q.defer();
           // console.log(query);
            var result=lodash.filter($scope.availableColors, function(_color){
                var regEx=new RegExp(query, "i");
                var found=regEx.test(_color.text);
                return  found;
            });
            deferred.resolve($scope.availableColors);
            return deferred.promise;
            lodash.filter(availableColors, function(_color){
                return _color==query;
            });
        };*/
        //endregion tagsInput

		// Create new Examination
		$scope.create = function() {
			// Create new Examination object
			var examination = new Examinations ({
				name: this.name
			});

			// Redirect after save
			examination.$save(function(response) {
				$location.path('examinations/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Examination
		$scope.remove = function( examination ) {
			if ( examination ) { examination.$remove();

				for (var i in $scope.examinations ) {
					if ($scope.examinations [i] === examination ) {
						$scope.examinations.splice(i, 1);
					}
				}
			} else {
				$scope.examination.$remove(function() {
					$location.path('examinations');
				});
			}
		};

		// Update existing Examination
		$scope.update = function() {
			var examination = $scope.examination ;

			examination.$update(function() {
				$location.path('examinations/' + examination._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Examinations
		$scope.find = function() {
			$scope.examinations = Examinations.query();
		};

		// Find existing Examination
		$scope.findOne = function() {
			$scope.examination = Examinations.get({ 
				examinationId: $stateParams.examinationId
			});
		};
	}
]);