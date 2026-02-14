/**
 * MiniMax API schemas
 *
 * MiniMax uses an OpenAI-compatible API at https://api.minimax.chat/v1
 * @see https://platform.minimax.chat/document/guides/chat-completion-pro
 */

// Re-export schemas that are identical to OpenAI
export {
  ChatCompletionRequestSchema,
  ChatCompletionsHeadersSchema,
  ChatCompletionResponseSchema,
  ChatCompletionUsageSchema,
  FinishReasonSchema,
} from "../openai/api";
