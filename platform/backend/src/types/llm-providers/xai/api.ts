/**
 * x.ai (Grok) API schemas
 *
 * x.ai uses an OpenAI-compatible API, so we re-export OpenAI schemas.
 * @see https://docs.x.ai/docs/api-reference
 */

// Re-export schemas that are identical to OpenAI
export {
  ChatCompletionRequestSchema,
  ChatCompletionsHeadersSchema,
  ChatCompletionResponseSchema,
  ChatCompletionUsageSchema,
  FinishReasonSchema,
} from "../openai/api";
