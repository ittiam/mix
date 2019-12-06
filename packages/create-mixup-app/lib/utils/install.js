'use strict';

const execa = require('execa');
const Promise = require('promise');
const messages = require('../messages');
const getInstallCmd = require('./get-install-cmd');
const output = require('./output');

module.exports = function install(opts) {
  const projectName = opts.projectName;
  const projectPath = opts.projectPath;
  const packages = opts.packages || [];

  if (packages.length === 0) {
    console.log('Missing packages in `install`, try running again.');
    process.exit(1);
  }

  const installCmd = getInstallCmd();
  const installArgs = getInstallArgs(installCmd, packages);

  process.chdir(projectPath);

  return new Promise(function(resolve, reject) {
    const stopInstallSpinner = output.wait(
      'Installing packages. This might take a couple of minutes.'
    );

    execa(installCmd, installArgs)
      .then(function() {
        // Confirm that all dependencies were installed
        return execa(installCmd, ['install']);
      })
      .then(function() {
        stopInstallSpinner();
        output.success(`Installed dependencies for ${projectName}`);
        resolve();
      })
      .catch(function() {
        stopInstallSpinner();
        console.log(messages.installError(packages));
        return reject(new Error(`${installCmd} installation failed`));
      });
  });
};

function getInstallArgs(cmd, packages) {
  if (cmd === 'npm') {
    const args = ['install', '--save', '--save-exact', '--loglevel', 'error'];
    return args.concat(packages, ['--verbose']);
  } else if (cmd === 'yarnpkg') {
    const args = ['add', '--exact'];
    return args.concat(packages);
  }
}
