# Duration of a chat completion from a list of SLMs.

**Prompt**:

```golang
systemInstructions := `You are useful AI agent.`
question := `Who is Jean-Luc Picard?`
```

**Options**:

```golang
Options:  map[string]interface{}{
    "temperature": 0.0,
    "num_predict": 200,
}
```

## On a Raspberry Pi 5 8GB RAM
| Rank | Model | Duration (seconds) |
|------|--------|------------------|
| 1 | `qwen:0.5b` | 2.42 |
| 2 | `granite3-moe:1b` | 3.33 |
| 3 | `smollm:135m` | 3.35 |
| 4 | `qwen2.5:0.5b` | 5.29 |
| 5 | `smollm2:360m` | 6.36 |
| 6 | `smollm2:135m` | 6.51 |
| 7 | `tinydolphin` | 7.09 |
| 8 | `smollm:360m` | 7.37 |
| 9 | `tinyllama` | 8.96 |
| 10 | `qwen2:0.5b` | 9.09 |
| 11 | `gemma:2b` | 11.11 |
| 12 | `qwen2.5:1.5b` | 23.26 |
| 13 | `qwen2:1.5b` | 24.05 |
| 14 | `stablelm2:1.6b` | 24.93 |
| 15 | `llama3.2:1b` | 27.61 |
| 16 | `smollm:1.7b` | 28.77 |
| 17 | `granite3-dense:2b` | 37.86 |
| 18 | `qwen2.5:3b` | 38.12 |
| 19 | `smollm2:1.7b` | 39.85 |
| 20 | `gemma2:2b` | 42.61 |
| 21 | `CognitiveComputations/dolphin-gemma2:2b` | 42.65 |
| 22 | `dolphin-phi:2.7b` | 44.61 |
| 23 | `phi3:mini` | 45.46 |
| 24 | `llama3.2:3b` | 49.33 |
| 25 | `phi3.5` | 61.28 |
