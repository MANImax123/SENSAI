import { authMiddleware } from "@clerk/nextjs";

// Protected routes that require authentication
const publicRoutes = [
  "/",
  "/sign-in*",
  "/sign-up*",
  "/api/inngest*"
];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes: [
    "/api/inngest"  // Ignore Inngest webhooks if you're using them
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};