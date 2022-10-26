const buttons = document.querySelectorAll('[data-toggle]')

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btn = e.currentTarget
    const content = btn.nextElementSibling
    let state = btn.dataset.toggle === 'show' ? 'collapsed' : 'show'
    btn.dataset.toggle = state
    if (state === 'show') {
      requestAnimationFrame(() => {
        content.style.height = `${content.scrollHeight}px`
      })
    } else {
      requestAnimationFrame(() => {
         content.style.height = ''
      })
    }
  })
})