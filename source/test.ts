import { equal } from 'assert-helpers'
import kava from 'kava'

import arrangePackageData from './index.js'

const fixture: object = {
	banana: true,
	apple: true,
	version: '1.0.0',
	name: 'name',
}

kava.suite('arrange-package-json', function (suite, test) {
	test('works', function () {
		const actual = arrangePackageData(fixture)
		equal(
			Object.keys(actual).join(', '),
			'name, version, banana, apple',
			'keys are in arranged order',
		)
	})
})
