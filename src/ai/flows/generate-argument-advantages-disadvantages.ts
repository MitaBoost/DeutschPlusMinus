// This file is machine-generated - edits will be lost.
'use server';
/**
 * @fileOverview Generates advantages and disadvantages for a given discussion topic and CEFR level.
 *
 * - generateArguments - A function that generates advantages and disadvantages for a given topic and CEFR level.
 * - GenerateArgumentsInput - The input type for the generateArguments function.
 * - GenerateArgumentsOutput - The return type for the generateArguments function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const CEFRLevelSchema = z.enum(['A1', 'A2', 'B1', 'B2']);
export type CEFRLevel = z.infer<typeof CEFRLevelSchema>;

const GenerateArgumentsInputSchema = z.object({
  topic: z.string().describe('The discussion topic.'),
  cefrLevel: CEFRLevelSchema.describe('The CEFR language level (A1, A2, B1, or B2).'),
});
export type GenerateArgumentsInput = z.infer<typeof GenerateArgumentsInputSchema>;

const GenerateArgumentsOutputSchema = z.object({
  advantages: z.array(z.string()).describe('Ten advantages for the topic at the given CEFR level.'),
  disadvantages: z.array(z.string()).describe('Ten disadvantages for the topic at the given CEFR level.'),
});
export type GenerateArgumentsOutput = z.infer<typeof GenerateArgumentsOutputSchema>;

export async function generateArguments(input: GenerateArgumentsInput): Promise<GenerateArgumentsOutput> {
  return generateArgumentsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArgumentsPrompt',
  input: {
    schema: z.object({
      topic: z.string().describe('The discussion topic.'),
      cefrLevel: CEFRLevelSchema.describe('The CEFR language level (A1, A2, B1, or B2).'),
    }),
  },
  output: {
    schema: z.object({
      advantages: z.array(z.string()).describe('Ten advantages for the topic at the given CEFR level.'),
      disadvantages: z.array(z.string()).describe('Ten disadvantages for the topic at the given CEFR level.'),
    }),
  },
  prompt: `You are a helpful assistant for German language learners. Your task is to generate arguments for a given discussion topic at a specific CEFR level.

  Topic: {{{topic}}}
  CEFR Level: {{{cefrLevel}}}

  Generate ten advantages and ten disadvantages for the given topic, tailored to the specified CEFR level in German. The arguments should be appropriate for learners at that level, using grammar and vocabulary suitable for that level.

  The output should be structured as two arrays:
  - advantages: An array of ten strings, each representing an advantage.
  - disadvantages: An array of ten strings, each representing a disadvantage.`,
});

const generateArgumentsFlow = ai.defineFlow<
  typeof GenerateArgumentsInputSchema,
  typeof GenerateArgumentsOutputSchema
>(
  {
    name: 'generateArgumentsFlow',
    inputSchema: GenerateArgumentsInputSchema,
    outputSchema: GenerateArgumentsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
