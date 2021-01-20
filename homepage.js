<script>
function lastupdated (){
var string = document.lastmodified;

document.getElementById("homefooterp").innerHTML = string;
 }
</script>

// <!-- <script>
//  lastUpdated() {
//    let daynames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
//    let d= new Date();
//    let dayName = daynames[d.getDay()];
//    let monthName = months[d.getMonth()];
//    let year = d.getFullYear();
//    let fulldate = dayName + ", " + monthName + ", " + year;

//    document.getElementById("updated").textContent = fulldate;
//  }

//    try {
//      let options = {
//        weekday: "long",
//        day: "numeric",
//        month: "long",
//        year: "numeric",
//      };
//      document.getElementById("updated").textContent = new Date().toLocaleDateString("en-us", options);
//    }
// </script> -->