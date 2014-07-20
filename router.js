Router.map(function() {
	this.route('home', {
		path:'/',
		template:'homeTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('demos', {
		path:'/demos',
		template:'demosTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('labs', {
		path:'/labs',
		template:'labsTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('hw', {
		path:'/hw',
		template:'hwTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('quizzes', {
		path:'/quizzes',
		template:'quizzesTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('challenge', {
		path:'/challenge',
		template:'challengeTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('solutions', {
		path:'/solutions',
		template:'solutionsTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('about', {
		path:'/about',
		template:'aboutTemp',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});
});