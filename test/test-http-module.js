const sinon = require('sinon');

exports.handleGetRequestTest = (test) => {
    let response = {'writeHead': () => {}, 'end': () => {}};
    const responseMock = sinon.mock(response);

    responseMock.expects('end').once().withArgs('GET action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});

    let request = {};
    const requestMock = sinon.mock(request);
    requestMock.method = 'GET';

    const httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock, response);
    responseMock.verify();
    test.done()
};