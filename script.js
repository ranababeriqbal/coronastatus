const URL = "https://covid19.mathdro.id/api";

let app=angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http)=>{

    $scope.title="stay";
    // $scope.change= ()=>{
    //     $scope.title="home"
    // };

    // calling api
    $http.get(URL).then((Response)=>{
        // for response
        console.log(Response.data);
        $scope.all_data = Response.data;
    },(error)=>{
        console.log(error);
    });
    $scope.get_c_data=()=>{
        let country = $scope.c;
        if(country==""){
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((Response)=>{
            $scope.c_data=Response.data;
            console.log(Response.data);
        },(error)=>{
            console.log(error);
        });
    }
    
});