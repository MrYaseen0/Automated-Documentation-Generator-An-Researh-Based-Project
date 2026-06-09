document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const loadingState = document.getElementById('loadingState');
    const resultsArea = document.getElementById('resultsArea');
    const outputCode = document.getElementById('outputCode');

    generateBtn.addEventListener('click', () => {
        // 1. Hide results and show loading spinner
        resultsArea.classList.add('d-none');
        loadingState.classList.remove('d-none');
        loadingState.classList.add('d-flex');

        // 2. Simulate the AI generation delay (2.5 seconds)
        setTimeout(() => {
            // 3. Hide loading spinner
            loadingState.classList.remove('d-flex');
            loadingState.classList.add('d-none');

            // 4. Show results
            resultsArea.classList.remove('d-none');

            // 5. Hardcoded output for demonstration (similar to screenshot)
            outputCode.textContent = `"""
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
        }, 2500);
    });
});
