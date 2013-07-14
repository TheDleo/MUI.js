'use strict';

angular.module('mui.jsAngularAddressbookApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.mySelections = [];
    
    // TODO Date String formats?!?
    $scope.myData = [{id: 1, name: 'Moroni', age: 50, email: 'moron@blue.com', country: 'Switzerland', phone: '78 837 31 33', since: '05/01/2013'},
                     {id: 2, name: 'Teancum', age: 43},
                     {id: 3, name: 'Jacob', age: 27},
                     {id: 4, name: 'Nephi', age: 29},
                     {id: 5, name: 'Enos', age: 34}];

    // TODO Live column chooser!! Wrap that in a new component.. contribute (OSS) as plugin to ng-grid.
    // This allows you to push/pop/splice/reassign column definitions and the changes will be reflected in the grid.
    $scope.myColumns = [{field: 'name', displayName: 'Name'},
                        {field: 'age', displayName: 'Age'},
                        // TODO create a CSS style for centering, and use cellClass & headerClass instead..
                        {displayName: 'In.', width: 30, cellTemplate: '<div style="vertical-align: middle; text-align: center;"><i style="vertical-align: middle; " class="icon-edit"></i></div>' }];
    
    $scope.myGridOptions = { data: 'myData',
            selectedItems: $scope.mySelections,
            columnDefs: 'myColumns',
            enableRowSelection: true, multiSelect: false };
            
    // you can also specify data as: $scope.myGridOptions = { data: $scope.myData }.
    // However, updates to the underlying data will not be reflected in the grid
    
  });
