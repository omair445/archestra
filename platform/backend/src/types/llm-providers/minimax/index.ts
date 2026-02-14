/**
 * MiniMax Type Definitions
 *
 * MiniMax provides OpenAI-compatible inference at https://api.minimax.chat/v1
 *
 * @see https://platform.minimax.chat/document/guides/chat-completion-pro
 */
import type OpenAIProvider from "openai";
import type { z } from "zod";
import * as MinimaxAPI from "./api";
import * as MinimaxMessages from "./messages";
import * as MinimaxTools from "./tools";

namespace Minimax {
  export const API = MinimaxAPI;
  export const Messages = MinimaxMessages;
  export const Tools = MinimaxTools;

  export namespace Types {
    export type ChatCompletionsHeaders = z.infer<
      typeof MinimaxAPI.ChatCompletionsHeadersSchema
    >;
    export type ChatCompletionsRequest = z.infer<
      typeof MinimaxAPI.ChatCompletionRequestSchema
    >;
    export type ChatCompletionsResponse = z.infer<
      typeof MinimaxAPI.ChatCompletionResponseSchema
    >;
    export type Usage = z.infer<typeof MinimaxAPI.ChatCompletionUsageSchema>;

    export type FinishReason = z.infer<typeof MinimaxAPI.FinishReasonSchema>;
    export type Message = z.infer<typeof MinimaxMessages.MessageParamSchema>;
    export type Role = Message["role"];

    // Use OpenAI's stream chunk type since MiniMax is OpenAI-compatible
    export type ChatCompletionChunk =
      OpenAIProvider.Chat.Completions.ChatCompletionChunk;
  }
}

export default Minimax;
