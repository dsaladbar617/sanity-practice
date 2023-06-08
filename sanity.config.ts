import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
	projectId: 'swb4mrl7',
	dataset: 'production',
	title: 'My Personal Website',
	apiVersion: '2023-06-07',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas }
});

export default config;
