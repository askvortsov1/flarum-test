import app from 'flarum/common/app';

app.initializers.add('datlechin/flarum-test', () => {
  console.log('[datlechin/flarum-test] Hello, forum and admin!');
});
