var affiliate_id = "stuc-21";
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        if (details.url.indexOf(affiliate_id) != -1){return {};}
        var newurl = details.url;
        if (newurl.indexOf("?") > -1) {
            newurl += "&";
        } else {
            if (!newurl.endsWith("/")){newurl += "/";}
            newurl += "?";
        }
        
        newurl += "tag="+affiliate_id;
        if(newurl.indexOf("https") == -1){
            newurl = newurl.replace("http", "https");    
        }
        return {redirectUrl : newurl};
    },
    {
        urls: [ "*://amazon.es/*", "*://www.amazon.es/*"],
        types: ["main_frame", "sub_frame", "xmlhttprequest"]
    },
    ["blocking"]);