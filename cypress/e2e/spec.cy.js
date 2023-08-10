

describe('teste hatedetector', () => {

  beforeEach (() => {
    cy.visit('http://localhost:5041/')
  })

  it('exibição legenda', () => {
    cy.get('.legend').should('be.visible')
  })

  it('testa botão', () => {
    cy.get('.input-container > button').click()
  })

  it('testa novo input', () => {
    cy.get('input').type('batata')
    cy.get('.input-container > button').click()
  })

  it('testa api', () => {
    const texto = {
      comment: 'pumpkin napkin'
    }
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/predict',
      body: texto
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      //o proximo codigo vai dar erro pois a api retorna uma string
      expect(res.body.prediction).to.be.a('float')
    })
  })

  it('teste de navegação', () => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(3) > .nav-link').click()
  })
})