import { createClient } from 'next-sanity';
export const client = createClient({
        projectId: 'alm73foo',
        dataset: 'production',
        apiVersion: '2023-01-01',
        useCdn: false, 
    });

