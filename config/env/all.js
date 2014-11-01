'use strict';

module.exports = {
	app: {
		title: 'OphthalmoCare',
		description: 'Ophthalmology Clinic Management System',
		keywords: 'Ophthalmology, Doctor, Patient, Clinic'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/angular-loading-bar/build/loading-bar.css',
                'public/lib/angularjs-toaster/toaster.css',
                'public/lib/ngImgCrop/compile/minified/ng-img-crop.css'
			],
			js: [
                'public/lib/ng-file-upload/angular-file-upload-shim.min.js',
				'public/lib/angular/angular.js',
                'public/lib/ng-file-upload/angular-file-upload.min.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/ng-lodash/build/ng-lodash.js',
                'public/lib/angular-loading-bar/build/loading-bar.js',
                'public/lib/angularjs-toaster/toaster.js',
                'public/lib/moment/moment.js',
                'public/lib/angular-moment/angular-moment.js',
                'public/lib/webcam-directive/app/scripts/webcam.js',
                'public/lib/angular-deckgrid/angular-deckgrid.js',
                'public/lib/ngImgCrop/compile/minified/ng-img-crop.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};