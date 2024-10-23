const fs = require('fs');

// Read the results from the JSON file
const results = JSON.parse(fs.readFileSync('results.json', 'utf8'));

// Sort the results by duration
results.sort((a, b) => a.duration - b.duration);

let markdown = `# Duration of a chat completion from a list of SLMs.

**Prompt**:

\`\`\`golang
systemInstructions := \`You are useful AI agent.\`
question := \`Who is Jean-Luc Picard?\`
\`\`\`

**Options**:

\`\`\`golang
Options:  map[string]interface{}{
    "temperature": 0.0,
    "num_predict": 200,
}
\`\`\`

## On a Raspberry Pi 5 8GB RAM
`

// Create the Markdown table
markdown += `| Rank | Model | Duration (seconds) |\n`;
markdown += `|------|--------|------------------|\n`;

// Add each result to the table
results.forEach((result, index) => {
    const duration = result.duration.toFixed(2); // Round to 2 decimal places
    markdown += `| ${index + 1} | \`${result.model}\` | ${duration} |\n`;
});

// Write the Markdown table to a file
fs.writeFileSync('benchmarks_results.md', markdown);

console.log('benchmarks_results.md generated');