import arrangekeys from 'arrangekeys'

/** The desired universally consistent order for the package.json properties */
export const universalOrder: Array<string> = [
	// metadata
	'title',
	'name',
	'version',
	'private',
	'license',
	'description',
	'homepage',
	'funding',
	'repository',
	'bugs',
	'keywords',
	'badges',
	// people: authorship
	'author', // CSV or active author
	'authors', // all authors as array array
	'maintainers', // all maintainers as array
	'contributors', // all contributors as array
	// people: funding
	'funders', // all funders as array
	'sponsors', // all sponsors as array
	'donors', // all donors as array
	// compatibility
	'engines',
	'editions',
	'bin',
	'types',
	'type',
	'main',
	'node',
	'cjs',
	'mjs',
	'test',
	'exports',
	'deno',
	'browser',
	'module',
	'jspm',
	// deps
	'dependencies',
	'optionalDependencies',
	'devDependencies',
	'peerDependencies',
	// scripts
	'scripts',
	// configs
	'babel',
	'boundation',
	'eslintConfig',
	'prettier',
	'vercel',
]

/**
 * Arrange the properties of package.json data to a universally consistent order.
 * Known fields are arranged to their universally consistent order. Unknown fields are placed at the end with their order maintained.
 */
export default function arrangePackageData(
	packageData: object,
	order = universalOrder
) {
	return arrangekeys(packageData, order)
}
