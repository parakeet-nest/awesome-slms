const fs = require('fs')


// Read the content of models.json
const rawData = fs.readFileSync('models.json', 'utf8')

// Parse the JSON content
const smlData = JSON.parse(rawData);

console.log(smlData); // This will log the content of smlData

 
function generateMarkdownTable(data, title, description, picture) {
  const headers = [
    'Name', 'Size', 'Tag', 'Remark', 'Kind', 'URL', 'Good on Pi5', 'Usable on Pi5'
  ];

  let markdown = `# ${title}\n\n`;
  markdown += `<div align="center">\n  <img width="50%" height="50%" src="${picture}" alt="Description of the image">\n</div>\n\n`;
  markdown += `\n\n${description}\n\n`;
  markdown += `| ${headers.join(' | ')} |\n`;
  markdown += `| ${headers.map(() => '---').join(' | ')} |\n`;

  data.models.forEach(model => {
    const row = [
      model.name,
      model.size,
      model.tag,
      model.remark,
      model.kind,
      `[Link](${model.url})`,
      model.good_on_pi5 ? '✅' : '❌',
      model.usable_on_pi5 ? '✅' : '❌'
    ];
    markdown += `| ${row.join(' | ')} |\n`;
  });

  return markdown;
}
  
let title = "Awesome SMLs"
let description = "This is the list of the SMLs I use on my Raspberry Pi5 (8GB RAM) with Ollama"
let picture = "female-borg.jpg"

let mdContent = ``

mdContent += generateMarkdownTable(smlData, title, description, picture)

fs.writeFileSync("README.md", mdContent)
