/**
 * AI No-Code Course Platform - Backend Server
 * Serves static files and proxies Claude API requests
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Claude API proxy endpoint
app.post('/api/chat', async (req, res) => {
    const apiKey = process.env.CLAUDE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: 'CLAUDE_API_KEY not configured. Please set it in Doppler.'
        });
    }

    const { messages, system } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({
            error: 'Messages array is required'
        });
    }

    const requestBody = JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4096,
        system: system || 'You are a helpful AI tutor for the AI No-Code course. Help students understand concepts, answer questions about the course content, and guide them through building AI solutions without coding. Be encouraging and practical.',
        messages: messages
    });

    const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
        }
    };

    const proxyReq = https.request(options, (proxyRes) => {
        let data = '';

        proxyRes.on('data', (chunk) => {
            data += chunk;
        });

        proxyRes.on('end', () => {
            res.status(proxyRes.statusCode);
            res.set('Content-Type', 'application/json');
            res.send(data);
        });
    });

    proxyReq.on('error', (error) => {
        console.error('Claude API error:', error);
        res.status(500).json({
            error: 'Failed to connect to Claude API',
            details: error.message
        });
    });

    proxyReq.write(requestBody);
    proxyReq.end();
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`AI No-Code Course Platform running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
