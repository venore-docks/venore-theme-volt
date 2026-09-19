import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Arranjo "bento": Header, SidebarLeft e a coluna Content+Footer viram cartões separados,
// flutuando com um vão visível entre eles (gap-4 + padding no wrapper) em vez de encostados uns
// nos outros como no Venore Slime. O vão mostra --app-background por baixo — por isso esse token
// entra aqui, no wrapper, e não mais dentro de ContentSlot (cópia deste tema: ver
// ContentSlot.tsx). Cada cartão (Header/SidebarLeft/Content) tem a própria borda/rounded-panel/
// shadow-float a partir de lg — ajuste feito nas cópias locais desses componentes, não no Shell.
//
// Abaixo de lg a SidebarLeft volta a ser off-canvas full-bleed (comportamento herdado do
// MobileNavDrawer, inalterado) — o gap/padding do wrapper ainda se aplica a Header e à coluna de
// conteúdo, então o "bento" persiste no mobile, só sem a sidebar como terceiro cartão.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-4 bg-(image:--app-background) p-4">
      <HeaderSlot {...header} />
      <div className="flex flex-1 gap-4">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
          <FooterSlot {...footer} />
        </div>
      </div>
    </div>
  );
}
