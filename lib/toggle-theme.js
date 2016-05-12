'use babel'

export default {
  activate () {
    atom.commands.add(
      'atom-workspace',
      'toggle-theme:toggle',
      () => {
        const dark = atom.config.get('core.themes')[0].includes('dark')
        if (dark) {
          atom.config.set('core.themes', atom.config.get('toggle-theme.lightThemes'))
        } else {
          atom.config.set('core.themes', atom.config.get('toggle-theme.darkThemes'))
        }
      }
    )
  }
}
