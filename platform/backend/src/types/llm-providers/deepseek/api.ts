/**
 * DeepSeek API schemas
 *
 * DeepSeek uses an OpenAI-compatible API at https://api.deepseek.com
 * @see https://api-docs.deepseek.com/api/create-chat-completion
 */

// Re-export schemas that are identical to OpenAI
export {
  ChatCompletionRequestSchema,
  ChatCompletionsHeadersSchema,
  ChatCompletionResponseSchema,
  ChatCompletionUsageSchema,
  FinishReasonSchema,
} from "../openai/api";
