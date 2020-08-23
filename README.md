# WhitePandaCarApp

Service is on : https://whitepanda-carapp.herokuapp.com/

Adding car Api : https://whitepanda-carapp.herokuapp.com/carApp/car/create/
Type of request : POST
parameters : 
{
 "vehicleNo" : "GJ01MK1674",
 "model" : "Maruti Swift",
 "seatingCapacity" : 2,
 "rent" : 100
}

Booking a Car Api : https://whitepanda-carapp.herokuapp.com/carApp/booking/create
Type of request : POST
Parameters : 
{
	"vehicleNo" : "GJ01VC1224",
	"customerName" : "Dhwani",
	"customerContact" : "9423455634",
	"issueDate" : "2019-10-13",
	"returnDate" : "2019-10-14"
}

Getting car availability : https://whitepanda-carapp.herokuapp.com/carApp/car/get?vehicleNo=GJ01VC1224
type of request : GET

Updating a car : https://whitepanda-carapp.herokuapp.com/carApp/car/update/
type of request : PUT
Parameters : 
{
		"vehicleNo" : "GJ01VC1224",
		"seatingCapacity": 3
}

Delete a car : https://whitepanda-carapp.herokuapp.com/carApp/car/delete?vehicleNo=GJ01NY1702
Type of request : DELETE

Filter a car : https://whitepanda-carapp.herokuapp.com/carApp/car/show
Type of request : POST
Parameter example 1 : (It will show how many cars are available for this day)
{
	  "issueDate" : "2019-10-17",
    "returnDate" : "2019-10-18"
}
Parameter example 2 : (It will show many cars are available for this day according to rent specified)
{
  "rent" : 100
}
