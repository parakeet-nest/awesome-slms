# Duration of a chat completion from a list of SLMs.

**Prompt**:

```golang
systemInstructions := `You a useful AI agent.`
question := `Who is Jean-Luc Picard?`
```

**Options**:

```golang
Options:  map[string]interface{}{
    "temperature": 0.0,
    "num_predict": 200,
}
```

| Rank | Model | Duration (seconds) |
|------|--------|------------------|
| 1 | `qwen:0.5b` | 2.57 |
| 2 | `granite3-moe:1b` | 3.44 |
| 3 | `qwen2.5:0.5b` | 5.49 |
| 4 | `tinydolphin` | 7.11 |
| 5 | `tinyllama` | 9.13 |
| 6 | `qwen2:0.5b` | 9.24 |
| 7 | `gemma:2b` | 11.26 |
| 8 | `qwen2.5:1.5b` | 23.59 |
| 9 | `qwen2:1.5b` | 24.61 |
| 10 | `stablelm2:1.6b` | 25.42 |
| 11 | `llama3.2:1b` | 28.12 |
| 12 | `granite3-dense:2b` | 38.55 |
| 13 | `qwen2.5:3b` | 38.75 |
| 14 | `CognitiveComputations/dolphin-gemma2:2b` | 43.53 |
| 15 | `gemma2:2b` | 43.96 |
| 16 | `dolphin-phi:2.7b` | 44.99 |
| 17 | `phi3:mini` | 46.06 |
| 18 | `llama3.2:3b` | 50.43 |
| 19 | `phi3.5` | 62.23 |
