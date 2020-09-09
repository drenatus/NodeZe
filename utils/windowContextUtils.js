module.exports = {

    changeWindowContext: (client, window) => {
        return client.windowHandles(function(result) {
            var handle = result.value[window];
            client.switchWindow(handle);
        });
    }
}