import { tool } from '@langchain/core/tools'
import { z } from 'zod';

import { strawrbrerry } from './strawrbrerry.js';

const letterCountingTool = tool(strawrbrerry, {
  name: 'strawrbrerry',
  description: 'Counts the number of times a letter appears in a string.',
  schema: z.object({
    input: z.string().describe('The string to search in.'),
    letter: z.string().describe('The letter to count.'),
  }),
})

export const tools = [
  letterCountingTool
]
