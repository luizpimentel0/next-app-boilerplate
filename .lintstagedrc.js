module.exports = {
  // Lint & prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npx vitest related --run ${filenames.join(' ')}`
  ]
}
