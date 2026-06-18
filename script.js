document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');

    // Initially hide the results area to show loading sequence when clicked
    // But per the screenshot, it starts with results shown.
    // When the button is clicked, we'll simulate a loading state.

    generateBtn.addEventListener('click', () => {
        // 1. Hide results and show loading spinner
        resultsArea.classList.add('d-none');
        loadingState.classList.remove('d-none');
        loadingState.classList.add('d-flex');

        // 2. Simulate the AI generation delay (2.5 seconds to meet NFR1.1)
        setTimeout(() => {

            // 3. Hide loading spinner
            loadingState.classList.add('d-none');
            loadingState.classList.remove('d-flex');
            resultsArea.classList.remove('d-none');
        }, 2500);
    });
});