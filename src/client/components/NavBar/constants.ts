import { routes } from "wasp/client/router";
import type { NavigationItem } from "./NavBar";

export const marketingNavigationItems: NavigationItem[] = [
  { name: "Demo", to: routes.DemoRoute.to },
  { name: "Pricing", to: routes.PricingPageRoute.to },
  { name: "Contact", to: routes.ContactRoute.to },
] as const;

export const demoNavigationItems: NavigationItem[] = [
  // This is for logged-in users in the app
  // You can add app-specific links here later
] as const;