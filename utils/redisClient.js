import { createClient } from "redis";
import util from 'node:util';

let _client = null;
let _connecting = null; // Ensure only one connection is created

export async function getRedis() {

    console.log('Before connect: ', {
        hasClient: !!_client,
        isOpen: _client?.isOpen,
        isConnecting: !!_connecting
    });
    
    if (_client?.isOpen) {
        console.log(`_client value: ${_client}`);
        return _client;
    }

    if (_connecting) {
        console.log(`_connecting value: ${_connecting}`);
        return _connecting;
    }

    const url = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
    _client = createClient({ url });

    _client.on('error', err => {
        console.error('Redis error:', err?.message || err);
    });

    _connecting = (async () => {
        await _client.connect();
        _connecting = null;
        return _client;
    })();

    console.log(`_client: ${ _client },
        _connecting: ${_connecting}`);
    return _connecting;
}

export async function quitRedis() {
    try {
        if (_client?.isOpen && _connecting?.isOpen) {
            await _client.quit();
        }
    } catch(err) {
        return console.error('Error quitting Redis:', err?.message || err);
    }
}