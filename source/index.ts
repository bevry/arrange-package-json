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
	'author',
	'maintainers',
	'contributors',
	// people: funding
	'funders',
	'sponsors',
	'donors',
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
