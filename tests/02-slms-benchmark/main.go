// Package main provides functions to preload models and run chat completions using the Ollama API.
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"time"

	"github.com/ollama/ollama/api"
)

// PreloadModel preloads the specified model using the given URL.
func PreloadModel(ctx context.Context, ollamaURL, model string) {
	fmt.Println("⏳ Preloading:", model, "on", ollamaURL)
	url, _ := url.Parse(ollamaURL)

	client := api.NewClient(url, http.DefaultClient)

	req := &api.ChatRequest{
		Model:    model,
		Messages: []api.Message{},
		Options:  map[string]interface{}{},
	}

	respFunc := func(resp api.ChatResponse) error {
		fmt.Print(resp.Message.Content)
		return nil
	}

	err := client.Chat(ctx, req, respFunc)
	if err != nil {
		log.Fatal("😡:", err)
	}
	fmt.Println()
	fmt.Println("✅ Preloaded:", model, "on", ollamaURL)
	fmt.Println()
}

// RunChatCompletion runs a chat completion using the specified model and URL.
func RunChatCompletion(ctx context.Context, ollamaURL, model string) {
	url, _ := url.Parse(ollamaURL)

	client := api.NewClient(url, http.DefaultClient)

	systemInstructions := `You a useful AI agent.`
	question := `Who is Jean-Luc Picard?`

	// Prompt construction
	messages := []api.Message{
		{Role: "system", Content: systemInstructions},
		{Role: "user", Content: question},
	}
	req := &api.ChatRequest{
		Model:    model,
		Messages: messages,
		Options:  map[string]interface{}{
			"temperature": 0.0,
			"num_predict": 200,
		},
	}

	respFunc := func(resp api.ChatResponse) error {
		fmt.Print(resp.Message.Content)
		return nil
	}

	err := client.Chat(ctx, req, respFunc)
	if err != nil {
		log.Fatal("😡:", err)
	}
	fmt.Println()
	fmt.Println()

}

// Result struct to hold the duration of each call
type Result struct {
	CallNumber int     `json:"call_number"`
	Duration   float64 `json:"duration"`
	OllamaURL  string  `json:"ollama_url"`
	Model      string  `json:"model"`
	RunOnPi    bool    `json:"run_on_pi"`
}

// Model struct to represent the model data
type Model struct {
	Name string `json:"name"`
}

func main() {
	ctx := context.Background()
	var results []Result

	ollamaURL := os.Getenv("OLLAMA_BASE_URL")
	//piOllamaURL := os.Getenv("PI_OLLAMA_BASE_URL")

	// Read the JSON fileRes
	jsonFileModels, err := os.ReadFile("/data/models.json")
	if err != nil {
		fmt.Println("Error reading JSON file:", err)
		return
	}

	// Unmarshal the JSON data into a slice of Model structs
	var models []Model
	err = json.Unmarshal(jsonFileModels, &models)
	if err != nil {
		fmt.Println("Error unmarshalling JSON data:", err)
		return
	}

	for i, model := range models {
		fmt.Println("🚀 Testing 🦙 Model:", model)
		fmt.Println()
		fmt.Println()

		fmt.Println("🦙 Ollama URL:", ollamaURL)
		PreloadModel(ctx, ollamaURL, model.Name)
		start := time.Now() // Record the start time
		RunChatCompletion(ctx, ollamaURL, model.Name)
		duration := time.Since(start).Seconds() // Calculate the duration
		fmt.Printf("🖐️ Chat completion on %s took %f seconds\n", ollamaURL, duration)
		fmt.Println()
		fmt.Println()
		results = append(results, Result{
			CallNumber: i + 1,
			Duration:   duration,
			OllamaURL:  ollamaURL,
			Model:      model.Name,
			RunOnPi:    false,
		})
	}

	// generate a json file with the results
	// Marshal the results to JSON
	jsonData, err := json.MarshalIndent(results, "", "  ")
	if err != nil {
		fmt.Println("Error marshalling to JSON:", err)
		return
	}

	// Write the JSON to a file
	jsonFileRes, err := os.Create("/data/results.json")
	if err != nil {
		fmt.Println("Error creating file:", err)
		return
	}
	defer jsonFileRes.Close()

	_, err = jsonFileRes.Write(jsonData)
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return
	}

	fmt.Println("Results written to results.json")

}
