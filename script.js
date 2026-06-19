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
PROJECT: Automated Documentation Generator (FR2.3)
CLASS: SourceAnalyzer
PURPOSE: Performs AST parsing and NLP-driven comment generation.

METHODS:
  - parse_logic(code): Extracts semantic meaning from code blocks.
  - generate_docs(): Produces markdown-formatted docstrings.
"""
def parse_logic(code):
    # FR2.1: Extracting function signature
    # Identify code segments requiring documentation (FR1.3)
    return "Analyzing: " + str(code[:10]) + "..."`;

        docOutput.textContent = mockDocumentation;
        resultsArea.classList.remove('hidden');
    }, 2500);
});