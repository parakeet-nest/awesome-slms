# Awesome SLMs

<div align="center">
  <img width="50%" height="50%" src="female-borg.jpg" alt="Description of the image">
</div>



This is the list of the SLMs I use on my Raspberry Pi5 (8GB RAM) with Ollama

| Name | Size | Tag | Remark | Kind | URL | Good on Pi5 | Usable on Pi5 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| codegemma:2b | 1.6GB | 2B | Fill-in-the-middle code completion | code | [Link](https://ollama.com/library/codegemma:2b) | ❌ | ✅ |
| gemma:2b | 1.7GB | 2B |  | chat | [Link](https://ollama.com/library/gemma:2b) | ❌ | ✅ |
| gemma2:2b | 1.6GB | 2B |  | chat | [Link](https://ollama.com/library/gemma2:2b) | ❌ | ✅ |
| all-minilm:22m | 46MB | 22M | Only Embeddings | embedding | [Link](https://ollama.com/library/all-minilm:22m) | ✅ | ✅ |
| all-minilm:33m | 67MB | 33M | Only Embeddings | embedding | [Link](https://ollama.com/library/all-minilm:33m) | ✅ | ✅ |
| deepseek-coder:1.3b | 776MB | 1.3B | Trained on both 87% code and 13% natural language | code | [Link](https://ollama.com/library/deepseek-coder:1.3b) | ✅ | ✅ |
| tinyllama | 638MB | 1.1B |  | chat | [Link](https://ollama.com/library/tinyllama) | ✅ | ✅ |
| tinydolphin | 637MB | 1.1B |  | chat | [Link](https://ollama.com/library/tinydolphin) | ✅ | ✅ |
| phi3:mini | 2.4GB | 3B |  | chat | [Link](https://ollama.com/library/phi3:mini) | ❌ | ✅ |
| phi3.5 | 2.2GB | 3B |  | chat | [Link](https://ollama.com/library/phi3.5) | ❌ | ✅ |
| granite-code:3b | 2.0GB | 3B |  | code | [Link](https://ollama.com/library/granite-code:3b) | ❌ | ✅ |
| qwen2.5:0.5b | 398MB | 0.5B |  | chat, tools | [Link](https://ollama.com/library/qwen2.5:0.5b) | ✅ | ✅ |
| qwen2.5:1.5b | 986MB | 1.5B |  | chat, tools | [Link](https://ollama.com/library/qwen2.5:1.5b) | ❌ | ✅ |
| qwen2.5:3b | 1.9GB | 3B |  | chat, tools | [Link](https://ollama.com/library/qwen2.5:3b) | ❌ | ✅ |
| qwen2.5-coder:1.5b | 986MB | 1.5B |  | code, tools | [Link](https://ollama.com/library/qwen2.5-coder:1.5b) | ❌ | ✅ |
| qwen2:0.5b | 352MB | 0.5B |  | chat | [Link](https://ollama.com/library/qwen2:0.5b) | ✅ | ✅ |
| qwen2:1.5b | 934MB | 1.5B |  | chat | [Link](https://ollama.com/library/qwen2:1.5b) | ❌ | ✅ |
| qwen:0.5b | 395MB | 0.5B |  | chat | [Link](https://ollama.com/library/qwen:0.5b) | ✅ | ✅ |
| qwen2-math:1.5b | 935MB | 1.5B | Specialized math language model | math | [Link](https://ollama.com/library/qwen2-math:1.5b) | ❌ | ✅ |
| starcoder:1b | 726MB | 1B | Code generation model | code | [Link](https://ollama.com/library/starcoder:1b) | ✅ | ✅ |
| starcoder2:3b | 1.7GB | 3B |  | code | [Link](https://ollama.com/library/starcoder2:3b) | ❌ | ✅ |
| stablelm2:1.6b | 983MB | 1.6B | LLM trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch. | chat | [Link](https://ollama.com/library/stablelm2:1.6b) | ✅ | ✅ |
| stable-code:3b | 1.6GB | 3B | Coding model | code | [Link](https://ollama.com/library/stable-code:3b) | ❌ | ✅ |
| rouge/replete-coder-qwen2-1.5b:Q8 | 1.9GB | 1.5B | Coding capabilities + non-coding data, fully cleaned and uncensored (mat+tool? to be tested) | code | [Link](https://ollama.com/rouge/replete-coder-qwen2-1.5b:Q8) | ❌ | ✅ |
| dolphin-phi:2.7b | 1.6GB | 2.7B | uncensored | chat | [Link](https://ollama.com/library/dolphin-phi:2.7b) | ❌ | ✅ |
| CognitiveComputations/dolphin-gemma2:2b | 1.6GB | 2B |  | chat | [Link](https://ollama.com/CognitiveComputations/dolphin-gemma2:2b) | ❌ | ✅ |
| allenporter/xlam:1b | 873MB | 1B |  | tools | [Link](https://ollama.com/allenporter/xlam:1b) | ❌ | ✅ |
| sam4096/qwen2tools:0.5b | 352MB | 0.5B |  | tools | [Link](https://ollama.com/sam4096/qwen2tools:0.5b) | ✅ | ✅ |
| sam4096/qwen2tools:1.5b | 935MB | 1.5B |  | tools | [Link](https://ollama.com/sam4096/qwen2tools:1.5b) | ❌ | ✅ |
| mxbai-embed-large:335m | 670MB | 335M | Only Embeddings | embedding | [Link](https://ollama.com/library/mxbai-embed-large:335m) | ✅ | ✅ |
| nomic-embed-text:v1.5 | 274MB | 137M | Only Embeddings | embedding | [Link](https://ollama.com/library/nomic-embed-text:v1.5) | ✅ | ✅ |
| yi-coder:1.5b | 866MB | 1.5B | Code | code | [Link](https://ollama.com/library/yi-coder:1.5b) | ❌ | ✅ |
| bge-m3 | 1.2GB | 567M | Only Embeddings | embedding | [Link](https://ollama.com/library/bge-m3) | ❌ | ✅ |
| reader-lm:0.5b | 352MB | 0.5b | convert HTML to Markdown | conversion | [Link](https://ollama.com/library/reader-lm:0.5b) | ✅ | ✅ |
| reader-lm:1.5b | 935MB | 1.5b | convert HTML to Markdown | conversion | [Link](https://ollama.com/library/reader-lm:1.5b) | ✅ | ✅ |
| shieldgemma:2b | 1.7GB | 2b | evaluate the safety of text | safety | [Link](https://ollama.com/library/shieldgemma:2b) | ❌ | ✅ |
| llama-guard3:1b | 1.6GB | 1b | evaluate the safety of text | safety | [Link](https://ollama.com/library/llama-guard3:1b) | ❌ | ✅ |
| granite3-dense:2b | 1.6GB | 2b |  | chat, tools, embedding | [Link](https://ollama.com/library/granite3-dense:2b) | ❌ | ✅ |
| granite3-moe:1b | 822MB | 1b |  | chat, tools, embedding | [Link](https://ollama.com/library/granite3-moe:1b) | ✅ | ✅ |
| llama3.2:1b | 1.3GB | 1b |  | chat, tools | [Link](https://ollama.com/library/llama3.2:1b) | ❌ | ✅ |
| llama3.2:3b | 2.0GB | 3b |  | chat, tools | [Link](https://ollama.com/library/llama3.2:3b) | ❌ | ✅ |
| smollm:135m | 92MB | 135m | 🖐️ can run on a Pi 3A+ | 🤪 hard to control | chat | [Link](https://ollama.com/library/smollm:135m) | ✅ | ✅ |
| smollm:360m | 229MB | 360m | 🖐️ can run well on a Pi 4 8GB | chat | [Link](https://ollama.com/library/smollm:360m) | ✅ | ✅ |
| smollm:1.7b | 991MB | 1.7b |  | chat | [Link](https://ollama.com/library/smollm:1.7b) | ✅ | ✅ |
| smollm2:135m | 271MB | 135m | 🖐️ can run well on a Pi 4 8GB | chat, tools | [Link](https://ollama.com/library/smollm2:135m) | ✅ | ✅ |
| smollm2:360m | 726MB | 360m | 🖐️ can run on a Pi 4 8GB | chat, tools | [Link](https://ollama.com/library/smollm2:360m) | ✅ | ✅ |
| smollm2:1.7b | 1.8GB | 1.7b |  | chat, tools | [Link](https://ollama.com/library/smollm2:1.7b) | ❌ | ✅ |
