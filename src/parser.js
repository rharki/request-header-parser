export class Parser {
	static parseRequest(req) {
		// Do magic and return JSON
		return {
    		ipaddress: Parser.getIP(req.connection.remoteAddress),
			language: Parser.getLanguage(req.headers["accept-language"]),
			software: Parser.getOS(req.headers["user-agent"])
    	}
	}

	static getIP(remoteAddress) {
    // Parse IP
    let isV6 = remoteAddress.indexOf(':') >= 0;
 
    // We split the address every colon, then reverse the array
    // and grab the first item, which will be the actual IPv4 address
    return isV6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;
  	}
 
  	static getOS(userAgent) {
    // Parse user-agent header
    let osInfo = userAgent.split(/[\(\)]/)[1]; // We grab the second field with [1]
    return osInfo.trim(); // Trim extra space
  	}
 
	static getLanguage(acceptLanguage) {
    // Parse accept-language header
    return acceptLanguage.split(',')[0].trim();
  	}
}

