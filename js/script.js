var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
var currentStep = 1; // Variable to keep track of the current step

function showModal() {
    const modal = document.getElementById("myModal1");
    modal.style.display = "block";
}

// Event listener for the second "Dashboard" link
const secondDashboardLink = document.querySelector(".dashboard-link");
secondDashboardLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (navigation)
    showModal();
});



// Close the modal when the "x" button is clicked
const closeModalButton = document.querySelector(".close1");
closeModalButton.addEventListener("click", function () {
    const modal = document.getElementById("myModal1");
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("myModal1");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Event listener for the button inside the modal to change the content
const modalContent = document.getElementById("modal-content1");
modalContent.addEventListener("click", function (event) {
    const target = event.target;
    if (target.id === "changeContentButton") {
        // Remove the previous event listener before updating the content
        modalContent.removeEventListener("click", modalContentEventListener);

        // Switch between steps based on the current step variable
        if (currentStep === 1) {

            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Step 2: Feature Extraction and Selection</h3>
            <br>
                    <div><img src="./images/Extraction1.png" width="600px" height="324px"></div>
            <br>
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Time Domain Features </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Frequency Domain Features </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Wavelet Transform </label><br>
                <input type="checkbox" id="vehicle4" name="vehicle4" value="Bus">
                <label for="vehicle4"> Time-frequency Analysis </label><br><br>
            </form>
                <button id="changeContentButton"> Run </button>
                <button id="changeContentButton"> Skip </button>     
                <button id="previousButton"> Previous </button>
                <button id="changeContentButton"> Next </button>
            `;
            currentStep = 2;
        } else if (currentStep === 2) {
            // Update the content for Step 3
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Step 3: Machine Learning Models</h3>
            <br>
                <!--   <div><img src="./images/Extraction1.png" width="600px" height="324px"></div> -->
            <br>
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Support Vector Machines (SVM) </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Random Forest </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Deep Learning Model </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> ResMTN </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Multilayer Voting Network </label><br><br>
            </form>
            <button id="changeContentButton"> Run </button>
            <button id="changeContentButton"> Skip </button>     
                <button id="previousButton"> Previous </button>
                <button id="changeContentButton"> Next </button>
            `;
            currentStep = 3;
        } else if (currentStep === 3) {
            // Update the content for Step 4
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Step 4: Model Evaluation and Optimizations</h3>
            <!--
            <br>
                    <div><img src="./images/popup.png"></div>
            <br>
            -->
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Cross-validation </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Confusion Matrix </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Accuracy </label><br>
                <input type="checkbox" id="vehicle4" name="vehicle4" value="Bus">
                <label for="vehicle4"> Recall Rate </label><br><br>
            </form>

            <button id="changeContentButton"> Run </button>    
                <button id="previousButton"> Previous </button>  
                <button id="changeContentButton"> Next </button>
            `;
            currentStep = 4;
        } else if (currentStep === 4) {
            // Update the content for Step 4
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Final Result</h3>
            <style>
            .image-container {
                display: inline-block;
                margin-right: 0px;
              }
            </style>
            <form action="#" class="formimage">
            <br>
                <label for="vehicle1"> Probability of onset: </label>
                <br>
                <div class="image-container"><img src="./images/Accuracy.svg" width="356" height="233">
                <img src="./images/MTN2_conf.svg" width="356" height="233">
                </div>
                <div image-container><img src="./images/bar2.png" width="330" height="67"></div>
                <div class="image-container"></div>
                <br>
            </form>

            <button id="changeContentButton"> Run </button>     
                <button id="previousButton"> Previous </button>  
                <button id="changeContentButton"> Finish </button>
            `;
            currentStep = 5;
        } else {
            // If all steps are completed, close the modal
            const modal = document.getElementById("myModal1");
            modal.style.display = "none";
        }

        // Add the event listener again after updating the content
        modalContent.addEventListener("click", modalContentEventListener);
    }

});

// Event listener for the "Previous" button inside the modal to go back
const modalContentEventListener = function (event) {
    const target = event.target;
    if (target.id === "previousButton") {
        // Remove the previous event listener before updating the content
        modalContent.removeEventListener("click", modalContentEventListener);

        // Switch between steps based on the current step variable for going back
        if (currentStep === 5) {
            // Update the content for Step 4
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
                        <h3>Step 4: Model Evaluation and Optimizations</h3>
                        <!--
                        <br>
                                <div><img src="./images/popup.png"></div>
                        <br>
                        -->
                        <form action="#">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                            <label for="vehicle1"> Cross-validation </label><br>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                            <label for="vehicle2"> Confusion Matrix </label><br>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                            <label for="vehicle3"> Accuracy </label><br>
                            <input type="checkbox" id="vehicle4" name="vehicle4" value="Bus">
                            <label for="vehicle4"> Recall Rate </label><br><br>
                        </form>
            
                        <button id="changeContentButton"> Run </button>     
                            <button id="previousButton"> Previous </button>  
                            <button id="changeContentButton"> Next </button>
                        `;
            currentStep = 4;
        } else if (currentStep === 4) {
            // Update the content for Step 3
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Step 3: Machine Learning Models</h3>
            <br>
            <div><img src="./images/Extraction1.png"></div>
    <br>
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Support Vector Machines (SVM) </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Random Forest </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Deep Learning Model </label><br><br>
            </form>
            <button id="changeContentButton"> Run </button>
            <button id="changeContentButton"> Skip </button>     
                <button id="previousButton"> Previous </button>
                <button id="changeContentButton"> Next </button>
            `;
            currentStep = 3;
        } else if (currentStep === 3) {
            // Update the content for Step 2
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `
            <h3>Step 2: Feature Extraction and Selection</h3>
            <br>
                    <div><img src="./images/Preprocessing1.png"></div>
            <br>
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Time Domain Features </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Frequency Domain Features </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Wavelet Transform </label><br>
                <input type="checkbox" id="vehicle4" name="vehicle4" value="Bus">
                <label for="vehicle4"> Time-frequency Analysis </label><br><br>
            </form>
            <button id="changeContentButton"> Run </button>
            <button id="changeContentButton"> Skip </button>     
                <button id="previousButton"> Previous </button>
                <button id="changeContentButton"> Next </button>
            `;
            currentStep = 2;
        } else if (currentStep === 2) {
            // Update the content for Step 1
            const clubIntroduction = document.getElementById("club-introduction1");
            clubIntroduction.innerHTML = `<h3>Step 1: Data Acquisition and Preprocessing</h3>
            <!--
            <br>
                    <div><img src="./images/popup.png"></div>
            <br>
            -->
            <form action="#">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> Remove Noise </label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> Defiltering </label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> Motion Artifact Removal Filtering </label><br><br>
            </form>
            
            <button id="changeContentButton"> Run </button>
            <button id="changeContentButton"> Skip </button>     
            <button id="changeContentButton"> Next </button>
            `;
            currentStep = 1;
        }

        // Add the event listener again after updating the content
        modalContent.addEventListener("click", modalContentEventListener);
    }
};

// Add the initial event listener for the button inside the modal
modalContent.addEventListener("click", modalContentEventListener);