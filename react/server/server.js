const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const db = new sqlite3.Database('database.db');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Jobs API',
            description: 'API for managing jobs',
            contact: {
                name: 'Your Name'
            },
            servers: ['http://localhost:5000']
        }
    },
    apis: ['server.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /jobs:
 *   get:
 *     description: Get all jobs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 */
app.get('/jobs', (req, res) => {
    db.all('SELECT * FROM jobs', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            jobs: rows
        });
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
