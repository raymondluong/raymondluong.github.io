const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'test',
    repo: 'https://github.com/raymondluong/raymondluong.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)