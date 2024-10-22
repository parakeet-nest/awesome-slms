# SLMs tests

## 01-completion-speed

For a same SLM, compare the duration of the completion on two different architectures (e.g. Mac M2 and Raspberry Pi).

```bash
LLM=qwen2.5:0.5b \
OLLAMA_BASE_URL=http://host.docker.internal:11434 \
PI_OLLAMA_BASE_URL=http://bob.local:11434 \
docker compose up --build
```

## 02-slms-benchmark

For a same architecture, calculate the duration of the completion from a list of SLMs (e.g. qwen2.5, qwen2.5:0.5b, ...).

```bash
OLLAMA_BASE_URL=http://bob.local:11434 \
docker compose up --build
```

