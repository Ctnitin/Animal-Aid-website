
document.addEventListener("DOMContentLoaded", function () {
    // Get the form and submit anchor element
    // const reviewForm = document.getElementById("reviewForm");
    const submitReview = document.getElementById("submitreview");

    // Handle form submission when the anchor is clicked
    submitReview.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        console.log("helo")
        // Show a confirmation dialog
        const confirmation = confirm("Are you sure you want to submit this review?");

        if (confirmation) {

            window.location.href = "index.html";
        }
        // If the user cancels, the form won't be submitted
    });
});



