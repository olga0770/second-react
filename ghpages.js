var ghpages = require('gh-pages');

ghpages.publish('build', {
        branch: 'master',
        message: "Auto-commit",
        repo: 'https://github.com/olga0770/olga0770.github.io.git',

        // repo: 'https://github.com/anderslatif/anderslatif.github.io.git',
        dest: "reactapp"
    },
    function(err) {
        if (err) {
            console.log(err);
        }
    });
