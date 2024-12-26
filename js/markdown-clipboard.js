// Add event listener to wait for markdown content to be loaded and rendered
document.addEventListener('markdownLoaded', (event) => {
  // 全てのコードブロックを取得
  document.querySelectorAll('pre').forEach((block) => {
      block.style.position = 'relative';
      // コピー用のボタンを作成
      let button = document.createElement('button');
      button.innerText = 'Copy';
      button.classList.add('copy-button');
      block.appendChild(button);

      // Clipboard.jsを使ってコピー機能を追加
      let clipboard = new ClipboardJS(button, {
          target: () => block.querySelector('code')
      });

      // コピー成功時のアニメーションやメッセージ表示
      clipboard.on('success', (e) => {
          button.innerText = 'Copied!';
          setTimeout(() => {
              button.innerText = 'Copy';
          }, 2000);
      });

      clipboard.on('error', (e) => {
          button.innerText = 'Error';
          setTimeout(() => {
              button.innerText = 'Copy';
          }, 2000);
      });
  });
});
