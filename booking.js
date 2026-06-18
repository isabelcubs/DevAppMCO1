// If [add passenger] is clicked, another passenger card is created
let passengerCount = 1;

$("#addPassenger").click(function(){

    passengerCount++;

    $("#passengerContainer").append(`
    <div class="card border p-3 mb-3 passenger-card">
        <h5>Passenger ${passengerCount}</h5>

        <div class="row g-3">

            <div class="col-md-6">
                <label class="form-label">Full Name</label> 
                <input type="text" class="form-control">
            </div>

            <div class="col-md-6">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control">
            </div>

            <div class="col-md-6">
                <label class="form-label">Contact Number</label>
                <input type="tel" class="form-control">
            </div>

            <div class="col-md-6">
                <label class="form-label">Passport Number</label>
                <input type="text" class="form-control">
            </div>

            <div class="col-md-4">
                <label class="form-label">Nationality</label>
                <select class="form-select">
                    <option>Filipino</option>
                </select>
            </div>

            <div class="col-md-4">
                <label class="form-label">Date of Birth</label>
                    <input type="date" class="form-control">
            </div>

            <div class="col-md-4">
                <label class="form-label">Gender</label>
                <select class="form-select">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
        </div>
    </div>
    `);

    });

// If a meal card is clicked, it's either selected or removed
$(".meal-card").click(function(){

    $(".meal-card").removeClass("selected");

    $(this).addClass("selected");

});