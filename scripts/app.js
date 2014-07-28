/*globals require, alert, console*/
(function () {
    'use strict';
    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1',
            mustache: 'libs/mustache',
            q: 'libs/q',
            sammy: 'libs/sammy',
			underscore: 'libs/underscore'
        }
    });

    require(['sammy', 'jquery'], function (Sammy, $) {
        var app = Sammy('#main-content', function () {
            this.get('#/', function () {
				alert('Hi!');
            });
        });

        $(function() {
            app.run('#/');
        });
    });
}());
