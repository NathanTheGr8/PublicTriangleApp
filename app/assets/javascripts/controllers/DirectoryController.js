DirectoryApp.controller("DirectoryController", function($scope) {

    function stringStartsWith (string, prefix) {
        return string.slice(0, prefix.length) == prefix;
    }

    $scope.init = function()
    {
        console.log("Initing Directory");
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

    $scope.searchChange = function()
    {
        console.log("SearchChange");
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
        console.log("search clear");
        search.value = "";
    };

    $scope.searchReset = function()
    {
        console.log("search reset");
        search.value = "Search";
        $scope.visible_brothers = $scope.brothers.slice();
    };

    $scope.getVisibleBrothers = function()
    {
        console.log("visible brothers");
        return $scope.visible_brothers;
    };

});
