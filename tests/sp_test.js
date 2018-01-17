//import { setTimeout } from 'timers';
var setTimeout = require('timers').setTimeout;

//we use the default nodeJS association framework
//Mocha uses BDD test style: Behavior Driven Development
var assert = require('assert');

describe('my first test',function(){
    it('should work',function(){
        assert.equal('Brahima','Brahima');
    });

    it('shoud fail gracefully',function(){
        assert.equal('A','A');
    });
    
    it('async',function(done){
        setTimeout(function(){
            done();
        },25);
    });
});

/* describe('my second test',function(){
    it('just fail',function(){
        throw 'oh shit!';
    });
}); */

// Dry run : ./node_modules/.bin/mocha mocha.js
// use npm script for more concise command: mocha <test-file-name> <options>

//Run with --grep option : ./node_modules/.bin/mocha mocha.js -g option
// option can be any word in the description: ./node_modules/.bin/mocha mocha.js -g first

//Run with a reporter: ./node_modules/.bin/mocha mocha.js -R nyan 
// nyan cat is a reporter amongt others built-in (dot, xunit, ....).

//Tasks automation with gulp: create task and watch in gulpfile.js and add the task to npm script
