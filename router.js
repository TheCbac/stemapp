Router.map(function() {
	this.route('home', {
		path:'/',
		template:'homeTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('demos', {
		path:'/demos',
		template:'demosTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('labs', {
		path:'/labs',
		template:'labsTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('hw', {
		path:'/hw',
		template:'hwTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('quizzes', {
		path:'/quizzes',
		template:'quizzesTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('challenge', {
		path:'/challenge',
		template:'challengeTemp',
		layoutTemplate: 'layoutSlideShow',
		yieldTemplates: {
			'myHeader': {to: 'head'},
			'myNavBar': {to: 'nav'		},
			'myFooter': {to: 'foot'	}
		}
	});

	this.route('lectureNotes', {
		path:'/lectureNotes',
		template:'lectureNotesTemp',
		layoutTemplate: 'layoutSlideShow',
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