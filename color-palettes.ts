import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o violeta-elétrico do bloco base de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const VOLT_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.6 0.28 300)",
      primaryForeground: "oklch(0.99 0.01 300)",
      accent: "oklch(0.85 0.22 165)",
      accentForeground: "oklch(0.16 0.03 165)",
      ring: "oklch(0.6 0.24 300)",
    },
    dark: {
      primary: "oklch(0.72 0.26 300)",
      primaryForeground: "oklch(0.14 0.02 300)",
      accent: "oklch(0.4 0.15 165)",
      accentForeground: "oklch(0.95 0.03 165)",
      ring: "oklch(0.72 0.24 300)",
    },
  },
  THEME_HUE_PRESETS,
);
