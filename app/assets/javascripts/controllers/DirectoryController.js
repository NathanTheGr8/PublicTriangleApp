DirectoryApp.controller("DirectoryController", function($scope) {

    function stringStartsWith (string, prefix) {
        return string.slice(0, prefix.length) == prefix;
    }

    $scope.init = function()
    {
        var elements = document.getElementsByClassName("brother");
        $scope.brothers = [];
        for(var i = 0; i < elements.length; i++)
        {
            e = elements[i];
            $scope.brothers.push(
                {
                    first: e.getAttribute('data-item-first'),
                    last: e.getAttribute('data-item-last')
                 });
        }
        $scope.visible_brothers = $scope.brothers.slice();
    };

    $scope.search = "Search";

    $scope.searchChanged = function()
    {
        var searchTerm = search.value.toLowerCase();
        if(searchTerm.length > 0)
        {
            $scope.visible_brothers = [];
            for(var i = 0; i < $scope.brothers.length; i++)
            {
                var b = $scope.brothers[i];
                if(stringStartsWith(b.first.toLowerCase(), searchTerm) || stringStartsWith(b.last.toLowerCase(), searchTerm))
                {
                    $scope.visible_brothers.push(b);
                }
            }
        }
        else
        {
            $scope.visible_brothers = $scope.brothers.slice();
        }
    };

    $scope.searchClear = function()
    {
        search.value = "";
    }

    $scope.searchReset = function()
    {
        search.value = "Search";
        $scope.visible_brothers = $scope.brothers.slice();
    }

    $scope.getVisibleBrothers = function()
    {
        return $scope.visible_brothers;
    }

});
