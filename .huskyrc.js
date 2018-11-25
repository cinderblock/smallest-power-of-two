module.exports = {
  hooks: {
    'commit-msg': 'cspell .git/COMMIT_EDITMSG',
    'pre-push': 'yarn checks',
  },
};
