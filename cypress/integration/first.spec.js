
describe('Preenchimento de período errado', () => {
  before('Cypress setup test', () => {
    cy.clearCookies()
    
    const avatarUsername = Cypress.env('AVATAR_USERNAME');
    const avatarPassword = Cypress.env('AVATAR_PASSWORD');
    
    cy.visit('http://52.40.137.207/altaperformance_v2/Comercial/ConUltimaAlteracaoPrecoReais.aspx')
    
    cy.get('#Login1_UserName').type(avatarUsername)
    cy.get('#Login1_Password').type(avatarPassword)
    cy.get('#Login1_Empresa').select("AVATAR")
    cy.contains('Entrar').click()
    
  })
  
  beforeEach( () => {
    Cypress.Cookies.preserveOnce('.ASPXAUTH', 'ASP.NET_SessionId', 'EmpresaID', 'UserID')
  
    cy.reload()
  })

  /*it('Checa se mostra popup para data inicial incorreta', () => {
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataInicial').type('dhfghfj')
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataFinal').type('31/01/2003')
    cy.get('#ContentPlaceHolder1_btnConsultar').click()
    cy.get('.sweet-alert').contains('A data Inicial não pode ser maior que a data Final.')
    cy.get('.confirm').click()
    cy.get('#ContentPlaceHolder1_btnLimparTela').click()
  })
  
  it('Checa se mostra popup para data inicial maior que data final', () => {
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataInicial').type('90/90/8049')
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataFinal').type('31/01/2003')
    cy.get('#ContentPlaceHolder1_btnConsultar').click()
    cy.get('.sweet-alert').contains('A data Inicial não pode ser maior que a data Final.')
    cy.get('.confirm').click()
    cy.get('#ContentPlaceHolder1_btnLimparTela').click()
  })

  it('Checa se mostra popup para uma data inicial vazia', () => {
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataInicial').type(' ')
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataFinal').type('31/01/2003')
    cy.get('#ContentPlaceHolder1_btnConsultar').click()
    cy.get('.sweet-alert').contains('Você deve informar uma Data Inicial. Você deve informar uma Data Inicial Válida.')
    cy.get('.confirm').click()
    cy.get('#ContentPlaceHolder1_btnLimparTela').click()
  })  
  
  it('Checa se mostra popup para uma data final vazia', () => {
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataInicial').type('01/01/2003')
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataFinal').type(' ')
    cy.get('#ContentPlaceHolder1_btnConsultar').click()
    cy.get('.sweet-alert').contains('Você deve informar uma Data Final. Você deve informar uma Data Final Válida.')
    cy.get('.confirm').click()
    cy.get('#ContentPlaceHolder1_btnLimparTela').click()
  }) */  

  it('Checa o preenchimento de campos alterados', () => {
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataInicial').type('01/01/2003')
    cy.get('#ContentPlaceHolder1_ConPeriodo_txbDataFinal').type('10/01/2003').tab()
    cy.get('#ContentPlaceHolder1_ConConvenioMulti_ASPxGridLookup_Convenios_B-1')
      .click()
    cy.get('#ContentPlaceHolder1_ConConvenioMulti_ASPxGridLookup_Convenios_DDD_gv_DXFREditorcol1 > tbody > tr > .dxic')
      .type('45')
     cy.get('#ContentPlaceHolder1_ConConvenioMulti_ASPxGridLookup_Convenios_DDD_gv_DXDataRow0 > :nth-child(2)')
      .should(($p) => {
        expect($p).to.contain('45')
      })
    cy.get('#ContentPlaceHolder1_ConConvenioMulti_ASPxGridLookup_Convenios_DDD_gv_DXSelBtn0_D')
      .click()
    cy.get('#ContentPlaceHolder1_btnConsultar').click()
    cy.get('#ContentPlaceHolder1_grvGrFaturamento', {timeout: 10000})
  })   
})
