import portfinder from 'portfinder';

export default class Configuration {
    async getUri(port = 0) {

        port = port === 0 ? await this.__freeTcpPort() : port;

        return `http://localhost:${port}`;
    }

    async getPort() {
        return await this.__freeTcpPort();
    }

    __freeTcpPort() {
        return new Promise((resolve, reject)=> {
            portfinder.getPort((err, port)=> {
                if (err) return reject(err);

                resolve(port);
            });
        });
    }
}