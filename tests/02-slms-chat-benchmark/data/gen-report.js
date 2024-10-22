const fs = require('fs');

// Read the results from the JSON file
const results = JSON.parse(fs.readFileSync('results.json', 'utf8'));

// Sort the results by duration
results.sort((a, b) => a.duration - b.duration);

// Create the Markdown table
let markdown = `| Rank | Model | Duration (seconds) |\n`;
markdown += `|------|--------|------------------|\n`;

// Add each result to the table
results.forEach((result, index) => {
    const duration = result.duration.toFixed(2); // Round to 2 decimal places
    markdown += `| ${index + 1} | \`${result.model}\` | ${duration} |\n`;
});

// Write the Markdown table to a file
fs.writeFileSync('benchmark_results.md', markdown);

console.log('benchmark_results.md generated');