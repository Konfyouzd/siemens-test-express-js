import express from 'express';
import metadata from './data/templates';
import extendedMetadata from './data/extendedTemplate';

const router = express.Router();

/**
 * This route returns a merged list containing the provided
 * JSON template files as JSON.  This is to simulate making a call
 * to Mongo/Dynamo/what-have-you and retrieving a set of records.
 */
router.get('/api/metadata', (req, res) => res.json([...metadata, ...extendedMetadata]));

export default router;
