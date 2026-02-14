/**
 * Perplexity API schemas
 *
 * Perplexity uses an OpenAI-compatible API at https://api.perplexity.ai
 * @see https://docs.perplexity.ai/api-reference/chat-completions-post
 */

// Re-export schemas that are identical to OpenAI
export {
  ChatCompletionRequestSchema,
  ChatCompletionsHeadersSchema,
  ChatCompletionResponseSchema,
  ChatCompletionUsageSchema,
  FinishReasonSchema,
} from "../openai/api";
