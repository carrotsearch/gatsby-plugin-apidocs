const shell = require('shelljs');

shell.rm("-rf", "./dist");
shell.mkdir("./dist");

shell.cp("-r", [ "components", "styles", "templates",
                 "gatsby-browser.js", "gatsby-node.js", "package.json",
                 "index.js" ], "./dist");
shell.exec('yarn run babel ./components --out-dir ./dist/components -s inline');