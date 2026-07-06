document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('codeForm');
    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');
    const fileUpload = document.getElementById('fileUpload');
    const codeInput = document.getElementById('codeInput');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation: check if either file or text is provided
        if (!fileUpload.files.length && !codeInput.value.trim()) {
            alert('Please upload a file or paste some source code.');
            return;
        }

        // 1. Hide results and show loading spinner
        resultsArea.classList.add('d-none');
        loadingState.classList.remove('d-none');
        loadingState.classList.add('d-flex');

        // 2. Simulate the AI generation delay (2.5 seconds to meet NFR1.1)
        setTimeout(() => {
            // 3. Hide loading spinner
            loadingState.classList.remove('d-flex');
            loadingState.classList.add('d-none');

            // 4. Show results area
            resultsArea.classList.remove('d-none');

            // Optional: clear the inputs after generation (uncomment if desired)
            // form.reset();
        }, 2500);
    });
});
