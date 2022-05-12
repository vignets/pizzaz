/// <reference types="cypress" />
/// <reference types="../support" />

describe("pizzaz's pizzas app", () => {
  beforeEach(() => {
    cy.visit("/");
    Cypress.automation("remote:debugger:protocol", {
      command: "Network.clearBrowserCache",
    });
  });

  it("renders all the pizzas", () => {
    cy.get('[data-test="list-item"]').should("have.length", 5);
  });

  it("can add or remove item", () => {});

  it("places order", () => {
    cy.intercept("**/order.json", (req) => {
      req.headers["cache"] = "no-store";
    }).as("placeOrder");

    // first
    cy.getByData("list-item").first().contains("+").click();

    // last item
    cy.getByData("list-item").eq(4).scrollIntoView().contains("+").click();

    cy.getByData("order-summary").should("be.visible");

    cy.getByData("order-summary").find("button").click();

    // https://on.cypress.io/wait
    cy.wait("@placeOrder").its("response.body.success").should("equal", true);

    cy.contains("Order Placed");
  });
});
