const generateBtn = document.getElementById('generateBtn');
const codeInput = document.getElementById('codeInput');
const loadingState = document.getElementById('loadingState');
const resultsArea = document.getElementById('resultsArea');
const docOutput = document.getElementById('docOutput');
const emptyState = document.getElementById('emptyState');

generateBtn.addEventListener('click', () => {
    const rawCode = codeInput.value;

    if (!rawCode.trim()) {
        alert("Please paste source code first!");
        return;
    }

    // Hide empty state and results, show loading state
    emptyState.classList.add('hidden');
    resultsArea.classList.add('hidden');
    loadingState.classList.remove('hidden');
    loadingState.classList.add('d-flex');

    // Simulate NFR1.1 (2-5 seconds generation)
    setTimeout(() => {
        loadingState.classList.add('hidden');
        loadingState.classList.remove('d-flex');

        const mockDocumentation = `"""
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

        docOutput.textContent = mockDocumentation;
        resultsArea.classList.remove('hidden');
    }, 2500);
});