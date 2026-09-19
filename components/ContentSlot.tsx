import type { ContentSlotProps } from "@venore/theme-sdk";
import { Breadcrumbs } from "./Breadcrumbs";

export function ContentSlot({
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ContentSlotProps) {
  const showSidebar = sidebarContextualEnabled && sidebarContextual != null;

  return (
    // Cópia deste tema: Volt trata o conteúdo como mais um cartão "bento" (bg-card + borda +
    // rounded-panel + shadow, em vez do fundo full-bleed --app-background do Venore Slime — esse
    // token vira o "vão" entre os cartões, aplicado no wrapper do Shell.tsx, não aqui).
    <div
      data-sidebar-contextual={showSidebar}
      className="flex-1 min-w-0 overflow-hidden bg-card text-card-foreground lg:rounded-panel lg:border lg:border-border lg:shadow-float"
    >
      <Breadcrumbs breadcrumbs={breadcrumbs} breadcrumbsJsonLd={breadcrumbsJsonLd} />
      <div
        className={`mx-auto flex max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:gap-10 lg:px-8 lg:py-12 ${
          showSidebar ? "flex-col lg:flex-row" : ""
        }`}
      >
        <main className="min-w-0 flex-1 text-foreground">{children}</main>
        {showSidebar && <aside className="w-full shrink-0 text-foreground lg:w-72">{sidebarContextual}</aside>}
      </div>
    </div>
  );
}
