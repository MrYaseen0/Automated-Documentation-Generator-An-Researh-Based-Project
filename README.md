# Automated Documentation Generator

[![CECOS University](https://img.shields.io/badge/University-CECOS%20Peshawar-blue)](https://www.cecos.edu.pk/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This project, developed as part of the Software Architecture & Design course at CECOS University Peshawar, aims to automate the generation of technical documentation for source code using generative AI models and natural language processing (NLP). It addresses the challenge of maintaining high-quality, consistent documentation in software development by leveraging large language models (LLMs) to produce inline comments, API docs, function descriptions, and more.

The system integrates into CI/CD pipelines to create "living documentation" that updates automatically with code changes, reducing developer workload, ensuring uniformity, and improving software maintainability. It supports multiple programming languages (Python, Java, JavaScript, C++, Go) and includes features for consistency validation and quality evaluation.

**Submitted by:** Yaseen Ahmad (ID: CU-4417-C-2023)  
**Submitted to:** Dr. Faryal  
**Date:** January 22, 2026

## Problem Domain and Motivation

### Problem Domain
The project operates at the intersection of software engineering and NLP, focusing on automating documentation generation from source code. Key elements include:
- Parsing code structures (functions, classes, methods).
- Generating natural language descriptions.
- Evaluating output against human-written standards.

### Motivation
- **Economic:** Saves time for senior engineers, redirecting focus from writing docs to solving architectural problems.
- **Quality Assurance:** Enforces consistent style, voice, and detail across large codebases.
- **Living Documentation:** Integrates with CI/CD to update docs on every commit, treating documentation as a compilable artifact.

### Importance
- Reduces software maintenance costs (60-90% of lifecycle expenses).
- Enhances open-source project accessibility.
- Advances AI trustworthiness in technical domains.
- Improves developer experience by alleviating documentation burdens.

### Challenges
1. Accuracy in reflecting code behavior.
2. Consistency in style and terminology.
3. Capturing broader architectural context.
4. Defining metrics for documentation quality.
5. Mitigating LLM biases.

## Scope

### Included
- Generating inline comments for functions/methods.
- API documentation from code signatures.
- Function/method descriptions.
- Evaluation against human-written documentation.

### Excluded
- Generating complete user manuals.
- Documentation for binary/compiled code.
- Real-time documentation during coding.
- Integration with all programming languages.

## Features

### Functional Requirements
- **Code Parsing and Preprocessing (FR1):** Parse files in supported languages, extract structures, identify segments needing docs, handle edge cases.
- **Documentation Generation (FR2):** Inline comments, docstrings, class-level docs, README-style module docs.
- **Consistency Validation (FR3):** Compare docs to code semantics, detect contradictions, flag incompletes, generate reports.
- **Quality Evaluation (FR4):** Compute metrics (BLEU, ROUGE, semantic similarity), support human workflows, compare AI vs. human docs, produce dashboards.
- **System Management (FR5):** Batch processing, version-controlled storage, logging, prompt engineering support.

### Non-Functional Requirements
- **Performance (NFR1):** Function docs in 2-5s, 1MB codebase in <1hr, consistency checks <200ms.
- **Scalability (NFR2):** Handle 100KB-100MB codebases, 100+ concurrent requests, caching for efficiency.
- **Reliability (NFR3):** Graceful error handling, 99.5% uptime, retries with backoff.
- **Maintainability (NFR4):** Modular design, logging, config-driven, separation of concerns.
- **Security (NFR5):** Sanitize code, encrypt data, offline support, audit logs.
- **Consistency (NFR6):** Deterministic outputs, version control for models/prompts, multi-run metrics.

## Architecture

### Application Type
- **Language Processing System:** Core NLP for code understanding and text generation.
- **Information System:** Manages documentation data.
- **Transaction Processing System:** Handles generation requests with ACID properties (Atomicity, Consistency, Isolation, Durability).

### Key Principles

| Principle              | Application in Project                          | Benefit                          |
|------------------------|-------------------------------------------------|----------------------------------|
| Separation of Concerns | Independent modules for parsing, generation, evaluation | Easier maintenance and testing  |
| Modularity             | Plug-in for LLMs and languages                  | Extensibility and independence  |
| Abstraction            | Unified interface for doc types                 | Simplified API for users        |
| Loose Coupling         | Message queues between stages                   | Independent scaling             |
| High Cohesion          | Grouped related functionality                  | Reduced complexity              |

### Model Selection and Trade-offs
The project evaluates LLMs based on benchmarks:

| Feature          | LLaMA 3 (70B Instruct) | Mistral Large / Mixtral 8x7B | GPT-4o (OpenAI) |
|------------------|------------------------|------------------------------|-----------------|
| Reasoning Depth | High (excellent logic) | Moderate-High (good, but may miss subtleties) | Very High (benchmark leader) |
| Context Window  | 8k-128k (variant)     | 32k                         | 128k (whole files) |
| Throughput/Speed| Low (heavy GPU)       | High (MoE efficient)        | Variable (API)    |
| Deployment      | Self-Hosted (Privacy++)| Self-Hosted (Privacy++)     | SaaS (Privacy-)   |
| Cost            | High CAPEX (Hardware) | Moderate CAPEX              | High OPEX (Tokens)|
| Use Case        | Enterprise On-Prem Batch | Real-time Inline / IDE      | High-Accuracy Docs|

### Transaction Flow
1. Request Receipt → API Gateway
2. Validation → Input Service
3. Code Processing → Parser/Analyzer
4. Generation → LLM Inference
5. Evaluation → Quality Assessment
6. Response → Result Aggregation

### NLP Components

| Component          | Purpose                          | Technology                     |
|--------------------|----------------------------------|--------------------------------|
| Code Understanding| Parse syntax/semantics           | ASTs, static analysis          |
| Text Generation   | Produce docs                     | Instruction-tuned LLMs (LLaMA, Mistral) |
| Evaluation        | Assess quality                   | Embeddings, BLEU, ROUGE, BERTScore |
| Consistency Check | Verify code-doc alignment        | Cross-encoder, semantic similarity |

### Quality Attributes
- **Scalability:** Microservices with Kubernetes, horizontal scaling, Redis caching. Metrics: Linear scaling, <2x latency under 10x load, supports 10,000+ files.
- **Maintainability:** Hexagonal architecture, >80% test coverage, MTTR <4 hours. Indicators: Cyclomatic complexity <15, version pinning.
- **Reliability:** Circuit breakers, monitoring, backups. Targets: MTBF >720 hours, RTO <1 hour, no data loss.

### Mathematical Foundation
- Semantic Similarity: $$ \text{similarity}(D_g, D_r) = \frac{\mathbf{v_g} \cdot \mathbf{v_r}}{\|\mathbf{v_g}\| \|\mathbf{v_r}\|} $$ (using BERT embeddings).
- Consistency Score: $$ \text{consistency}(C, D) = \frac{1}{n} \sum_{i=1}^{n} \text{sim}(f_i(C), s_i(D)) $$ (feature extraction from code/docs).

## Installation

(Assuming this repo contains the implementation code; adjust as needed.)

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/automated-documentation-generator.git
   ```

2. Install dependencies (Python 3.12+):
   ```
   pip install -r requirements.txt
   ```
   - Required libraries: numpy, scipy, pandas, sympy, torch (for ML), etc.
   - LLM backends: LLaMA/Mistral via Hugging Face, or OpenAI API.

3. Configure environment:
   - Set API keys for external LLMs (e.g., OpenAI).
   - Update `config.yaml` for model selection and prompts.

## Usage

### Basic Command
```
python main.py --input path/to/code/repo --output path/to/docs --model llama3
```

### Examples
- Generate docs for a Python file:
  ```
  python generate_docs.py --file example.py --type inline
  ```
- Batch process a repo:
  ```
  python batch_process.py --repo /my/repo --evaluate true
  ```
- Run consistency check:
  ```
  python validate.py --code example.py --docs generated.md
  ```

Integrate with CI/CD (e.g., GitHub Actions) for automatic doc updates on commits.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

Focus on improving parsing for new languages, adding metrics, or optimizing performance.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- CECOS University Peshawar, Department of Software Engineering.
- Inspired by advancements in generative AI for software engineering.
