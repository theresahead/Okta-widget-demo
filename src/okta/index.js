import OktaSignIn from "@okta/okta-signin-widget";
import { OktaAuth } from "@okta/okta-auth-js";

const oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-49618240.okta.com",
  clientId: "process.env.VUE_APP_CLIENT_ID",
  redirectUri: "http://localhost:8080/login/callback",
  authParams: {
    pkce: true,
    issuer: "https://dev-49618240.okta.com/oauth2/default",
    display: "page",
    scopes: ["openid", "profile", "email"],
  },
  features: {
    registration: true, // REQUIRED for registration
  },
});

const oktaAuth = new OktaAuth({
  issuer: "https://dev-49618240.okta.com/oauth2/default",
  clientId: "process.env.VUE_APP_CLIENT_ID",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

export { oktaAuth, oktaSignIn };
