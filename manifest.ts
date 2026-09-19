import type { ThemeManifest } from "@venore/theme-sdk";

export const voltManifest: ThemeManifest = {
  key: "volt",
  name: "Volt",
  version: "0.1.0",
  themeContractVersion: "7.0.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o violeta-elétrico de --primary.
  brandAesthetics: { mode: "svg", size: 104, scrolledSize: 90, position: "left", color: "oklch(0.6 0.28 300)" },
  colorModes: ["light", "dark"],
};
