const URL ="https://covid19.mathdro.id/api";

let app = angular.module("CovidApp",[]);

app.controller("CovidCtrl",($scope,$http)=>{
    $scope.title = "Stay Home Stay Safe"

        console.log("APP LOADED");  
        
        //calling API

        $http.get(URL).then(
            (response) => {
                //success
                var allData = "";
             
                $scope.allData = response.data;
                console.log(allData);
        },
        (error) => {
            //error
            console.log(error);
        }
    );  
    
    //get country data

    $scope.getCountryData = () => {
        //console.log($scope.countryName);
        let country=$scope.countryName;
        if(country== ""){
            $scope.countryData= undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`).then(
            (response) => {
                console.log(response.data);
                $scope.countryData = response.data;
            },
            (error) => {
                console.log(error);
            }
        )
    }
});