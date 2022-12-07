describe('Verivox Technical Task Test Cases', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });

  it('Check if Show Details button Exits', () => {
    cy.visit('/');
    cy.get(
      ':nth-child(1) > .card > app-product > :nth-child(4) > .card-link'
    ).should('have.text', ' Show Details ');
  });

  it('search product with name brass', function () {
    cy.visit('localhost:4200/');
    cy.get('#mat-input-0').clear('b');
    cy.get('#mat-input-0').type('brass');
  });

  it('Check if show details button works and show descroption of the product', function () {
    cy.visit('localhost:4200');
    cy.get(
      ':nth-child(1) > .card > app-product > :nth-child(4) > .card-link'
    ).click();
    cy.get(
      ':nth-child(6) > .card > app-product > .list-group > :nth-child(1)'
    ).click();
    cy.get(
      ':nth-child(5) > .card > app-product > :nth-child(4) > .card-link'
    ).click();
    cy.get(
      ':nth-child(5) > .card > app-product > :nth-child(4) > .card-link'
    ).click();
    cy.get(
      ':nth-child(1) > .card > app-product > :nth-child(4) > .card-link'
    ).click();
  });

  it('Test products api response', () => {
    cy.request('http://localhost:4200/assets/json/MOCK_DATA.json').should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('length').and.be.greaterThan(0);
      }
    );
  });

  it('Search product with rating 3', function () {
    cy.visit('localhost:4200/');
    cy.get('form.ng-untouched > :nth-child(4) > :nth-child(5)').click();
  });

  it('Search product between 400-800Euros', function () {
    cy.visit('localhost:4200/');
    cy.get('.min > .ng-untouched').clear('5');
    cy.get('.min > .ng-untouched').type('400');
    cy.get('.max > .ng-untouched').clear();
    cy.get('.max > .ng-untouched').type('800');
    cy.get('.numberfield > button').click();
  });

  it('Search recording through filter and reset data after', function () {
    cy.visit('localhost:4200/');
    cy.get(':nth-child(4) > :nth-child(6)').click();
    cy.get('form.ng-untouched > :nth-child(8)').click();
    cy.get('.min > .ng-untouched').clear('5');
    cy.get('.min > .ng-untouched').type('500');
    cy.get('.max > .ng-untouched').clear();
    cy.get('.max > .ng-untouched').type('800');
    cy.get('.numberfield > button').click();
    cy.get('.ng-submitted > :nth-child(8)').click();
  });
});
