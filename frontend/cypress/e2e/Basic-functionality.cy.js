describe("Signing up", () => {
  it("can render correct components when clicked on bedroom page", () => {
    cy.signup("test@test.com", "password");
    cy.wait(1000);
    cy.get('[data-test="wardrobe"]').click();
    cy.get('[data-test="back-to-bedroom"]').should("exist");
    cy.get('[data-test="pick-title"]').should(
      "contain.text",
      "Pick your outfit"
    );
    cy.get('[data-test="character-display"]').should("exist");

    cy.dropCollection("users", { failSilently: true }).then((res) => {
      cy.log(res); // prints 'Collection dropped'
    });
  });
});
