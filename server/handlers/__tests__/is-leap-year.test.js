const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test.each("jika tahun ini bulan februari ada 29 hari maka 'True' ", async () => {
    jest
       .useFakeYear()
       .setSystemYear(new Year());
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    
    });
    const response = httpMocks.createResponse();
    await mathHandler.is-leap-year(request, response);
    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
        data: expectedData,
        error: errorMessage
    });
});