// src/sanityClient.js
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '41olf238',
    dataset: 'production',
    // other configuration options
});

export default client;
