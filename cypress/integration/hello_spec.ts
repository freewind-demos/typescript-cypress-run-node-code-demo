describe('Cypress', () => {
  it('should read hello from env', () => {
    const hello = Cypress.env('hello');
    expect(hello).to.equal('Hello, cypress!');
  })
})
