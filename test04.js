/**
 * @aiq.servicesworkbench
 * This script requires Services Workbench
*/
 // --- - - ---
//Global headers
// --- ------ --- 
addGlobalHeader(`Connection`,`keep-alive`)
addGlobalHeader(`User-Agent`,`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36`)
addGlobalHeader(`Accept-Encoding`,`gzip`)
addGlobalHeader(`Accept-Language`,`en-US,en;q=0.9`)
// --- ------ --- 

// Entry 1 // Method POST // Response status 200
var hostname_0 = `https://accounts.google.com:443/ListAccounts?gpsia=1&source=ChromiumBrowser&json=standard`;
post(hostname_0, "", "application/x-www-form-urlencoded");
 
