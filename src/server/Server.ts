// import assert from 'assert';
// import fs from 'fs';
import type { Application } from 'express';
import express from 'express';
import asyncHandler from 'express-async-handler';
import HttpStatus from 'http-status-codes';

import { PORT } from './ServerTypes.ts';

async function main(): Promise<void> {
    const app:Application = express();
    app.use((request, response, next) => {
        response.set('Access-Control-Allow-Origin', '*');
        next();
    });

    /* SETUP GAME SCREEN */
    app.get('/number/:val', asyncHandler(async (request, response) => {
        const n = parseInt(request.params.val);
        // console.log('received request');
        try {
            response
                .status(HttpStatus.OK) // 200
                .type('text')
                .send(n.toString());

        }
        catch {
            response
            .status(HttpStatus.BAD_REQUEST) // 400
            .type('text')
            .send('Idk bro');
        }
    }));

    return new Promise(resolve => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
            resolve();  
        });
    });
}

// if (require.main === module) {
//     void main();
// }
void main();

