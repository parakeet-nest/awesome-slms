const smlData = 
  {
    "title": "Awesome SMLs",
    "description": "This is the list of the SMLs I use on my Raspberry Pi5 (8GB RAM) with Ollama",
    "models": [
      {
        "name": "CodeGemma 2b",
        "size": "1.6GB",
        "tag": "2B",
        "remark": "Fill-in-the-middle code completion",
        "kind": "code",
        "url": "https://ollama.com/library/codegemma:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Gemma 2b",
        "size": "1.7GB",
        "tag": "2B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/gemma:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Gemma2 2b",
        "size": "1.6GB",
        "tag": "2B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/gemma2:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "All-Minilm 22m",
        "size": "46MB",
        "tag": "22M",
        "remark": "Only Embeddings",
        "kind": "embedding",
        "url": "https://ollama.com/library/all-minilm:22m",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "All-Minilm 33m",
        "size": "67MB",
        "tag": "33M",
        "remark": "Only Embeddings",
        "kind": "embedding",
        "url": "https://ollama.com/library/all-minilm:33m",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "DeepSeek Coder 1.3b",
        "size": "776MB",
        "tag": "1.3B",
        "remark": "Trained on both 87% code and 13% natural language",
        "kind": "code",
        "url": "https://ollama.com/library/deepseek-coder",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "TinyLlama 1.1b",
        "size": "638MB",
        "tag": "1.1B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/tinyllama",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "TinyDolphin 1.1b",
        "size": "637MB",
        "tag": "1.1B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/tinydolphin",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Phi3 Mini",
        "size": "2.4GB",
        "tag": "3B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/phi3:mini",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Phi3.5",
        "size": "2.2GB",
        "tag": "3B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/phi3.5",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Granite-code 3b",
        "size": "2.0GB",
        "tag": "3B",
        "remark": "",
        "kind": "code",
        "url": "https://ollama.com/library/granite-code",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2.5 0.5b",
        "size": "398MB",
        "tag": "0.5B",
        "remark": "",
        "kind": "chat, tools",
        "url": "https://ollama.com/library/qwen2.5:0.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2.5 1.5b",
        "size": "986MB",
        "tag": "1.5B",
        "remark": "",
        "kind": "chat, tools",
        "url": "https://ollama.com/library/qwen2.5:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2.5 3b",
        "size": "1.9GB",
        "tag": "3B",
        "remark": "",
        "kind": "chat, tools",
        "url": "https://ollama.com/library/qwen2.5:3b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2.5 Coder 1.5b",
        "size": "986MB",
        "tag": "1.5B",
        "remark": "",
        "kind": "code, tools",
        "url": "https://ollama.com/library/qwen2.5-coder:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2 0.5b",
        "size": "352MB",
        "tag": "0.5B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/qwen2:0.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2 1.5b",
        "size": "934MB",
        "tag": "1.5B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/qwen2:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen 0.5b",
        "size": "395MB",
        "tag": "0.5B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/library/qwen:0.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Qwen2 Math 1.5b",
        "size": "935MB",
        "tag": "1.5B",
        "remark": "Specialized math language model",
        "kind": "math",
        "url": "https://ollama.com/library/qwen2-math:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "StarCoder 1b",
        "size": "726MB",
        "tag": "1B",
        "remark": "Code generation model",
        "kind": "code",
        "url": "https://ollama.com/library/starcoder:1b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "StarCoder2 3b",
        "size": "1.7GB",
        "tag": "3B",
        "remark": "",
        "kind": "code",
        "url": "https://ollama.com/library/starcoder2:3b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Stable LM 2 1.6b",
        "size": "983MB",
        "tag": "1.6B",
        "remark": "LLM trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch.",
        "kind": "",
        "url": "https://ollama.com/library/stablelm2",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Stable Code 3b",
        "size": "1.6GB",
        "tag": "3B",
        "remark": "Coding model",
        "kind": "code",
        "url": "https://ollama.com/library/stable-code:3b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Replete-Coder Qwen2 1.5b",
        "size": "1.9GB",
        "tag": "1.5B",
        "remark": "Coding capabilities + non-coding data, fully cleaned and uncensored (mat+tool? to be tested)",
        "kind": "code",
        "url": "https://ollama.com/rouge/replete-coder-qwen2-1.5b:Q8",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Dolphin-Phi 2.7b",
        "size": "1.6GB",
        "tag": "2.7B",
        "remark": "uncensored",
        "kind": "",
        "url": "https://ollama.com/library/dolphin-phi:2.7b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "Dolphin gemma2 2b",
        "size": "1.6GB",
        "tag": "2B",
        "remark": "",
        "kind": "",
        "url": "https://ollama.com/CognitiveComputations/dolphin-gemma2:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "allenporter/xlam:1b",
        "size": "873MB",
        "tag": "1B",
        "remark": "",
        "kind": "tools",
        "url": "https://ollama.com/allenporter/xlam:1b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "sam4096/qwen2tools:0.5b",
        "size": "352MB",
        "tag": "0.5B",
        "remark": "",
        "kind": "tools",
        "url": "https://ollama.com/sam4096/qwen2tools:0.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "sam4096/qwen2tools:1.5b",
        "size": "935MB",
        "tag": "1.5B",
        "remark": "",
        "kind": "tools",
        "url": "https://ollama.com/sam4096/qwen2tools:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "mxbai-embed-large",
        "size": "670MB",
        "tag": "335M",
        "remark": "Only Embeddings",
        "kind": "embedding",
        "url": "https://ollama.com/library/mxbai-embed-large:335m",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "nomic-embed-text",
        "size": "274MB",
        "tag": "137M",
        "remark": "Only Embeddings",
        "kind": "embedding",
        "url": "https://ollama.com/library/nomic-embed-text:v1.5",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "Yi Coder 1.5b",
        "size": "866MB",
        "tag": "1.5B",
        "remark": "Code",
        "kind": "code",
        "url": "https://ollama.com/library/yi-coder:1.5b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "bge-m3",
        "size": "1.2GB",
        "tag": "567M",
        "remark": "Only Embeddings",
        "kind": "embedding",
        "url": "https://ollama.com/library/bge-m3",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "reader-lm:0.5b",
        "size": "352MB",
        "tag": "0.5b",
        "remark": "convert HTML to Markdown",
        "kind": "",
        "url": "https://ollama.com/library/reader-lm:0.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "reader-lm:1.5b",
        "size": "935MB",
        "tag": "1.5b",
        "remark": "convert HTML to Markdown",
        "kind": "",
        "url": "https://ollama.com/library/reader-lm:1.5b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      },
      {
        "name": "shieldgemma:2b",
        "size": "1.7GB",
        "tag": "2b",
        "remark": "evaluate the safety of text",
        "kind": "",
        "url": "https://ollama.com/library/shieldgemma:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "llama-guard3:1b",
        "size": "1.6GB",
        "tag": "1b",
        "remark": "evaluate the safety of text",
        "kind": "",
        "url": "https://ollama.com/library/llama-guard3:1b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "granite3-dense:2b",
        "size": "1.6GB",
        "tag": "2b",
        "remark": "",
        "kind": "chat, tools, embedding",
        "url": "https://ollama.com/library/granite3-dense:2b",
        "good_on_pi5": false,
        "usable_on_pi5": true
      },
      {
        "name": "granite3-moe:1b",
        "size": "822MB",
        "tag": "1b",
        "remark": "",
        "kind": "chat, tools, embedding",
        "url": "https://ollama.com/library/granite3-moe:1b",
        "good_on_pi5": true,
        "usable_on_pi5": true
      }
    ]
  }


function generateMarkdownTable(data) {
  const headers = [
    'Name', 'Size', 'Tag', 'Remark', 'Kind', 'URL', 'Good on Pi5', 'Usable on Pi5'
  ];

  let markdown = `# ${data.title}\n\n${data.description}\n\n`;
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
  


function generate() {
  mdContent = ``

  mdContent += generateMarkdownTable(smlData)
  const fs = require('fs')
  fs.writeFileSync("README.md", mdContent);
}

// Only run the main function if this script is run directly (not imported)
if (require.main === module) {
  generate();
}