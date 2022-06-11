const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test.each("sabtu,minggu", async () => {
    jest
       .useFakeDay()
       .setSystemDay(new Day("sabtu,minggu"));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    
    });
    const response = httpMocks.createResponse();
    await mathHandler.is-weekend(request, response);
    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
        data: expectedData,
        error: errorMessage
    });
});