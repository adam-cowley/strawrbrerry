import { ChatOllama } from '@langchain/ollama';
import { tools } from './tools.js';

export const llm = new ChatOllama({
  model: 'llama3.2',
})

export const llmWithTools = llm.bind(tools)
