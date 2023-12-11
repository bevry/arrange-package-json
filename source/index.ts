import arrangekeys from 'arrangekeys'

/** The desired universally consistent order for the package.json properties */
export const universalOrder: Array<string> = [
	// metadata
	'title',
	'name',
	'version',
	'private',
	'description',
	'homepage',
	'license',
	'keywords',
	'badges',
	// people: funding
	'funding',
	'sponsors',
	'funders',
	'backers',
	// people: authorship
	'author',
	'maintainers',
	'contributors',
	// support and compat
	'bugs',
	'repository',
	'engines',
	'editions',
	// entries
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
	'vercel',
	'eslintConfig',
	'prettier',
	'babel',
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
