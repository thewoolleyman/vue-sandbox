export function dataUrl() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'not implemented'
    case 'development':
      return 'http://localhost:3000/data-fixture.yml'
    case 'test':
      return 'mocked anyway'
    default:
      throw new Error(`unexpected NODE_ENV: ${process.env.NODE_ENV}`)
  }
}
