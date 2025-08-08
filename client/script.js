// Fetch locations from Flask server
window.onload = function() {
    fetch("http://127.0.0.1:5000/get_location_names")
        .then(response => response.json())
        .then(data => {
            let locationSelect = document.getElementById("location");
            data.locations.forEach(loc => {
                let option = document.createElement("option");
                option.value = loc;
                option.textContent = loc;
                locationSelect.appendChild(option);
            });
        });
}

// Handle form submit
document.getElementById("predictionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("total_sqft", document.getElementById("total_sqft").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("bhk", document.getElementById("bhk").value);
    formData.append("bath", document.getElementById("bath").value);

    fetch("http://127.0.0.1:5000/predict_home_price", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = `Estimated Price: ₹ ${data.estimated_price} Lakhs`;
    })
    .catch(err => console.error(err));
});
