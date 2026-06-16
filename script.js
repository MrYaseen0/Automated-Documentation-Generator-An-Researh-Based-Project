const docOutput = document.getElementById('docOutput');

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
