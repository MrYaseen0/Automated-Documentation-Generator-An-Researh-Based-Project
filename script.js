document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');
    const outputContent = document.getElementById('outputContent');
    const codeInput = document.getElementById('codeInput');

    const mockOutput = `"""
Calculates the final price of an item including tax.

Args:
    price (float): The base price of the item.
    tax (float): The tax rate as a decimal (e.g., 0.15 for 15%).

Returns:
    float: The total price including tax.
"""
def calculate_total(price, tax):
    # Calculate tax amount
    tax_amount = price * tax
    # Return total sum
    return price + tax_amount`;

    generateBtn.addEventListener('click', () => {
        // Optional: Check if there's any code to document, but we'll just proceed for the demo

        // 1. Hide results and show loading spinner
        resultsArea.classList.add('hidden');
        loadingState.classList.remove('hidden');
        loadingState.classList.add('flex'); // Add Bootstrap d-flex class basically, but we control it via display logic
        loadingState.style.display = 'flex'; // explicitly ensure flex

        // 2. Simulate the AI generation delay (2.5 seconds to meet NFR1.1 as mentioned in docs)
        setTimeout(() => {
            // 3. Hide loading spinner
            loadingState.classList.add('hidden');
            loadingState.style.display = 'none'; // explicitly hide

            // 4. Show results
            resultsArea.classList.remove('hidden');

            // 5. Populate mock output
            outputContent.textContent = mockOutput;

        }, 2500);
    });
});
