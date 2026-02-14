/**
 * OpenRouter API schemas
 *
 * OpenRouter uses an OpenAI-compatible API at https://openrouter.ai/api/v1
 * @see https://openrouter.ai/docs/api-reference/overview
 */

// Re-export schemas that are identical to OpenAI
export {
  ChatCompletionRequestSchema,
  ChatCompletionsHeadersSchema,
  ChatCompletionResponseSchema,
  ChatCompletionUsageSchema,
  FinishReasonSchema,
} from "../openai/api";
