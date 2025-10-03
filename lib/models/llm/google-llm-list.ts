import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 01/2025) - All models from official documentation
// Source: https://ai.google.dev/gemini-api/docs/models

// ===== GEMINI 2.5 MODELS (Latest Generation) =====

// Gemini 2.5 Pro - State-of-the-art thinking model
const GEMINI_2_5_PRO: LLM = {
  modelId: "gemini-2.5-pro",
  modelName: "Gemini 2.5 Pro",
  provider: "google",
  hostedId: "gemini-2.5-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Pro TTS - Text-to-speech model
const GEMINI_2_5_PRO_TTS: LLM = {
  modelId: "gemini-2.5-pro-preview-tts",
  modelName: "Gemini 2.5 Pro TTS",
  provider: "google",
  hostedId: "gemini-2.5-pro-preview-tts",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: false
}

// Gemini 2.5 Flash - Best price-performance model
const GEMINI_2_5_FLASH: LLM = {
  modelId: "gemini-2.5-flash",
  modelName: "Gemini 2.5 Flash",
  provider: "google",
  hostedId: "gemini-2.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Flash Preview - Latest preview version
const GEMINI_2_5_FLASH_PREVIEW: LLM = {
  modelId: "gemini-2.5-flash-preview-09-2025",
  modelName: "Gemini 2.5 Flash Preview",
  provider: "google",
  hostedId: "gemini-2.5-flash-preview-09-2025",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Flash Image - Image generation model
const GEMINI_2_5_FLASH_IMAGE: LLM = {
  modelId: "gemini-2.5-flash-image",
  modelName: "Gemini 2.5 Flash Image",
  provider: "google",
  hostedId: "gemini-2.5-flash-image",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Flash Lite - Cost-efficient model
const GEMINI_2_5_FLASH_LITE: LLM = {
  modelId: "gemini-2.5-flash-lite",
  modelName: "Gemini 2.5 Flash Lite",
  provider: "google",
  hostedId: "gemini-2.5-flash-lite",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Flash Lite Preview - Latest lite preview
const GEMINI_2_5_FLASH_LITE_PREVIEW: LLM = {
  modelId: "gemini-2.5-flash-lite-preview-09-2025",
  modelName: "Gemini 2.5 Flash Lite Preview",
  provider: "google",
  hostedId: "gemini-2.5-flash-lite-preview-09-2025",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// ===== GEMINI 2.0 MODELS (Second Generation) =====

// Gemini 2.0 Flash - Second generation workhorse
const GEMINI_2_0_FLASH: LLM = {
  modelId: "gemini-2.0-flash",
  modelName: "Gemini 2.0 Flash",
  provider: "google",
  hostedId: "gemini-2.0-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Stable - Stable version
const GEMINI_2_0_FLASH_STABLE: LLM = {
  modelId: "gemini-2.0-flash-001",
  modelName: "Gemini 2.0 Flash Stable",
  provider: "google",
  hostedId: "gemini-2.0-flash-001",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Experimental - Experimental version
const GEMINI_2_0_FLASH_EXP: LLM = {
  modelId: "gemini-2.0-flash-exp",
  modelName: "Gemini 2.0 Flash Experimental",
  provider: "google",
  hostedId: "gemini-2.0-flash-exp",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Image - Image generation
const GEMINI_2_0_FLASH_IMAGE: LLM = {
  modelId: "gemini-2.0-flash-preview-image-generation",
  modelName: "Gemini 2.0 Flash Image",
  provider: "google",
  hostedId: "gemini-2.0-flash-preview-image-generation",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Live - Live API model
const GEMINI_2_0_FLASH_LIVE: LLM = {
  modelId: "gemini-2.0-flash-live-001",
  modelName: "Gemini 2.0 Flash Live",
  provider: "google",
  hostedId: "gemini-2.0-flash-live-001",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Lite - Small workhorse model
const GEMINI_2_0_FLASH_LITE: LLM = {
  modelId: "gemini-2.0-flash-lite",
  modelName: "Gemini 2.0 Flash Lite",
  provider: "google",
  hostedId: "gemini-2.0-flash-lite",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash Lite Stable - Stable lite version
const GEMINI_2_0_FLASH_LITE_STABLE: LLM = {
  modelId: "gemini-2.0-flash-lite-001",
  modelName: "Gemini 2.0 Flash Lite Stable",
  provider: "google",
  hostedId: "gemini-2.0-flash-lite-001",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// ===== GEMINI 1.5 MODELS (Previous Generation) =====

// Gemini 1.5 Flash
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Pro
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Pro Latest
const GEMINI_1_5_PRO_LATEST: LLM = {
  modelId: "gemini-1.5-pro-latest",
  modelName: "Gemini 1.5 Pro Latest",
  provider: "google",
  hostedId: "gemini-1.5-pro-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// ===== LEGACY GEMINI MODELS =====

// Gemini Pro (Legacy)
const GEMINI_PRO: LLM = {
  modelId: "gemini-pro",
  modelName: "Gemini Pro",
  provider: "google",
  hostedId: "gemini-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: false
}

// Gemini Pro Vision (Legacy)
const GEMINI_PRO_VISION: LLM = {
  modelId: "gemini-pro-vision",
  modelName: "Gemini Pro Vision",
  provider: "google",
  hostedId: "gemini-pro-vision",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [
  // Gemini 2.5 Models (Latest - Most Advanced)
  GEMINI_2_5_PRO,
  GEMINI_2_5_PRO_TTS,
  GEMINI_2_5_FLASH,
  GEMINI_2_5_FLASH_PREVIEW,
  GEMINI_2_5_FLASH_IMAGE,
  GEMINI_2_5_FLASH_LITE,
  GEMINI_2_5_FLASH_LITE_PREVIEW,
  
  // Gemini 2.0 Models (Second Generation)
  GEMINI_2_0_FLASH,
  GEMINI_2_0_FLASH_STABLE,
  GEMINI_2_0_FLASH_EXP,
  GEMINI_2_0_FLASH_IMAGE,
  GEMINI_2_0_FLASH_LIVE,
  GEMINI_2_0_FLASH_LITE,
  GEMINI_2_0_FLASH_LITE_STABLE,
  
  // Gemini 1.5 Models (Previous Generation)
  GEMINI_1_5_FLASH,
  GEMINI_1_5_PRO,
  GEMINI_1_5_PRO_LATEST,
  
  // Legacy Models
  GEMINI_PRO,
  GEMINI_PRO_VISION
]
