module.exports = {
  hooks: {
    'commit-msg': 'cspell .git/COMMIT_EDITMSG',
    'pre-push': 'npm run checks',
  },
};
