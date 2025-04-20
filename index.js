import { createReactAgent } from '@langchain/langgraph/prebuilt';

import { llm } from './llm.js';
import { tools } from './tools.js';

// create an agent
const agent = createReactAgent({
  llm,
  tools,
  verbose: true,
})

const main = async () => {
  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content: "How many times does the letter 'r' appear in the word 'strawberry'?"
      },
    ],
  })

  console.log(result.messages)
  console.log(result.messages.slice(-1)[0].content)
}

main()