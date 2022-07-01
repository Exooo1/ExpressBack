import express from 'express';

const app = express();

test('Server start', () => {
    app.listen(8080, () => {
        console.log('ok');
    });
});
