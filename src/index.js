import RecaptchaComponent from "./RecaptchaComponent";
import makeAsyncScriptLoader from "react-async-script";

const callbackName = "onloadcallback";
const globalName = "grecaptcha";

function getOptions() {
  return (typeof window !== "undefined" && window.recaptchaOptions) || {};
}

function getURL() {
  console.log("recaptcha-wrapper.GetUrl");
  const dynamicOptions = getOptions();
  const hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  if (dynamicOptions.enterprise) {
    return `https://${hostname}/recaptcha/enterprise.js?onload=${callbackName}&render=explicit`;
  }
  return `https://${hostname}/recaptcha/api.js?onload=${callbackName}&render=explicit`;
}

// Wrap the RecaptchaComponent in a React HOC (Higher Order Component) which will load reCAPTCHA scripts asynchronously.
export default makeAsyncScriptLoader(getURL, {
  callbackName,
  globalName,
  attributes: getOptions().nonce ? { nonce: getOptions().nonce } : {},
})(RecaptchaComponent);
