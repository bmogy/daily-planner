//  makes sures javascript runs when the page is loaded
$(document).ready(function () {
// create an arrays of the moment.hour() hours
    var numbers = [09, 10, 11, 12, 13, 14, 15, 16, 17]
    //starting my setinterval, so the application is ways running
    var interval = setInterval(function () {
    // creating a variable for my moment object
        let date = moment()
        // settins the date header tag to the corect date format
        $(".today-date").html(date.format("LL"))
        // creating a ,for loop that will loop over the numbers array and all the inputs
        for (var i = 0; i < numbers.length; i++) {
            // if its more than the current iteration, i change the colors
            if (date.hour() > numbers[i]) {
                $("#input" + i).css("background-color", "red")
                $("#input" + i).css("color", "white")

            }
            // if its less than the current iteration, i change the colors for the inputs
            else if (date.hour() < numbers[i]) {
                $("#input" + i).css("background-color", "green")
                $("#input" + i).css("color", "white")

            }
            // if the dat.hour matches the current time, it changes colors
            else if (date.hour() === numbers[i]) {
                $("#input" + i).css("background-color", "blue")
                $("#input" + i).css("color", "white")
            }

        }
    }, 1000)
  // creating a delage function that will all me to save the users date
    $(".row").delegate("button", "click", function () {
      saveData()
    })
    // creating function to save users daya
    function saveData(){
        for (var i = 0; i < 9; i++) {
            localStorage.setItem("time" + i, $("#input" + i).val())
        }
    }
    // creating function that will allow the input fields to retriev the data
  function getData(){
    for (var i = 0; i < 9; i++) {
        $("#input" + i).val(localStorage.getItem("time" + i))
    }
  }
  getData()
  // creating a click wevent listener for the clear button, so, i can clear all of the input fields
  $("#clear").on("click",function(){
  localStorage.clear()
  getData()
  })
})

