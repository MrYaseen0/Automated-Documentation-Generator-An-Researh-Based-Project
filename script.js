document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');
    const outputText = document.getElementById('outputText');

    // Hardcoded text matching the screenshot exactly
    const simulatedResponse = `"""
Calculates the final price of an item including tax.

Args:
    price (float): The base price of the item.
    tax (float): The tax rate as a decimal (e.g., 0.15 for 15%)

Returns:
    float: The total price including tax.
"""
def calculate_total(price, tax):
    # Calculate tax amount
    tax_amount = price * tax
    # Return total sum
    return price + tax_amount`;

    generateBtn.addEventListener('click', () => {
        // 1. Hide results and show loading spinner
        resultsArea.classList.add('hidden');
        loadingState.classList.remove('hidden');
        loadingState.classList.add('d-flex'); // Required for bootstrap flex utility

        // 2. Simulate the AI generation delay (2.5 seconds to meet NFR1.1)
        setTimeout(() => {
            // 3. Hide loading spinner
            loadingState.classList.add('hidden');
            loadingState.classList.remove('d-flex');

            // 4. Set the text and show results
            outputText.textContent = simulatedResponse;
            resultsArea.classList.remove('hidden');
        }, 2500);
    });
});