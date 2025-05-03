import './style.css'

if (document.body) new MutationObserver(() => document.querySelectorAll('.se-module-file').forEach(elem => {
  if (elem.querySelector('.se-file-preview-embed')) return

  const embed = document.createElement('embed')
  embed.classList.add('se-file-preview-embed')

  const src = elem.querySelector('.se-file-save-button')?.getAttribute('href')
  if (!src) return

  embed.src = src
  elem.appendChild(embed)
})).observe(document.body, { subtree: true, childList: true })
