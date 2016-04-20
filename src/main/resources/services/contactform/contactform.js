exports.post = function(req) {
    // TODO: Check origin to make sure it's from the same origin
    log.info(JSON.stringify(req));
    // TODO: Verify input
    // TODO: Send email
    // TODO: Send OK response to consumer

    return {
        body: {

        },
        contentType: 'application/json'
    };
};
