import {common, createStarryNight} from 'https://esm.sh/@wooorm/starry-night@3?bundle'
import {toHtml} from 'https://cdn.jsdelivr.net/npm/hast-util-to-html@9.0.1/+esm'
const starryNight = await createStarryNight(common);

var defaults = {
  html: false, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // autoconvert URL-like texts to links
  typographer: true, // Enable smartypants and other sweet transforms
  _highlight: true, // Custom highlight function
  _strict: false,
  _view: 'html' // html / src / debug
};

// Custom highlight function using Starry Night
defaults.highlight = (str, lang) => {
  const scope = starryNight.flagToScope(lang) || 'text.plain';
  const tree = starryNight.highlight(str, scope);
  return `<pre class="hljs"><code>${toHtml(tree)}</code></pre>`;
};

// カスタムプラグインを定義してコメントを無視する
function markdownItIgnoreComments(md) {
  md.core.ruler.before('normalize', 'ignore-comments', function (state) {
    state.src = state.src.replace(/<!--[\s\S]*?-->/g, '');
  });
}

// Initialize markdown-it with the custom defaults
const md = window.markdownit(defaults).use(markdownItIgnoreComments);

// Fetch and render the Markdown file
fetch(markdownFilePath)
  .then(response => response.text())
  .then(text => {
    document.getElementById('content').innerHTML = md.render(text);
    document.getElementById('content').classList.add('markdown-body');
    // Dispatch a custom event after loading the markdown
    const event = new Event('markdownLoaded');
    document.dispatchEvent(event);
  })
  .catch(error => console.error('Error loading markdown file:', error));
