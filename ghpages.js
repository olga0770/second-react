var ghpages = require('gh-pages');

ghpages.publish('build', {
        branch: 'master',
        message: "Auto-commit",
        repo: 'git+https://github.com/olga0770/staticpage.github.io.git',

        // repo: 'https://github.com/anderslatif/anderslatif.github.io.git',
        dest: "reactapp"
    },
    function(err) {
        if (err) {
            console.log(err);
        }
    });
