document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("stabilityForm");
    const resultElement = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const numerator = form.numerator.value;
        const denominator = form.denominator.value;

        // Perform stability analysis here and display the result
        const isStable = isSystemStable(numerator, denominator);

        if (isStable) {
            resultElement.textContent = "The system is stable.";
        } else {
            resultElement.textContent = "The system is not stable.";
        }
    });

    function isSystemStable(numerator, denominator) {
        // Implement your stability analysis logic here
        // You'll need to parse the input and perform the calculations.
        // This is where you'd apply Roth's Stability Criterion.
        // You may need to create functions to extract coefficients, analyze roots, etc.
        // For this example, we're using a placeholder function.
        return true;
    }
});
