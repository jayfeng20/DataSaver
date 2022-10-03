let abc = ["*://*.doubleclick.net/*"]
function cancel(requestDetails)
{
  console.log("Hello");
  return{cancel: true};
}

//image media blocking
chrome.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: ["<all_urls>"], types: ["image", "media"]},
    ["blocking"]
  );
//ad blocking
chrome.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: abc},
    ["blocking"]
  );