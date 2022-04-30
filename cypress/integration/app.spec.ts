it('loads with colors from the url hash', () => {
    cy.visit('/#000000,ffffff,ff0000,00ff00');
    cy.get('[data-cy="colors-list"] > li').should('have.length', 4);
    cy.should('not.contain', 'Please add at least 2 colors');
});

it('lets you add new colors', () => {
    cy.visit('/');
    cy.get('[data-cy="add-color-input"]').type('#ff0000');
    cy.get('[data-cy="add-color-button"]').click();
    cy.get('[data-cy="colors-list"] > li').should('have.length', 1);
});

it('lets you remove colors', () => {
    cy.visit('/#ff0000,00ff00');
    cy.get('[data-cy="colors-list"] > li').contains('Remove #ff0000').click();
    cy.get('[data-cy="colors-list"] > li').should('have.length', 1).should('contain', '#00ff00');
});

it('can filter swatches by contrast', () => {
    cy.visit('/#000000,ffffff,ff0000,00ff00');
    cy.get('input[type="range"]').setSliderValue(4.5);
    cy.get('[data-cy="swatch"]')
        .should('have.length', 6)
        .each(($swatch) => {
            const contrast = parseFloat($swatch.find('[data-contrast]').data('contrast'));
            cy.wrap(contrast).should('be.gte', 4.5);
        });
});

it('syncs colors with url hash', () => {
    cy.visit('/#000000');
    cy.get('[data-cy="add-color-input"]').type('#ffffff');
    cy.get('[data-cy="add-color-button"]').click();
    cy.url().should('include', 'ffffff');
});

it('expects 2 or more colours', () => {
    cy.visit('/#000000');
    cy.contains('Please add at least 2 colors').should('exist');
    cy.get('[data-cy="add-color-input"]').type('#ffffff');
    cy.get('[data-cy="add-color-button"]').click();
    cy.contains('Please add at least 2 colors').should('not.exist');
    cy.get('[data-cy="swatch"]').should('have.length', 2);
});

it('will show details on swatch click', () => {
    cy.visit('/#000000,ff0000');
    cy.get('[data-cy="swatch"]')
        .find('button')
        .first()
        .click()
        .then(($button) => {
            cy.get('[data-cy="popup"]')
                .should('contain', 'The quick brown fox jumped over the lazy dog')
                .should('contain', $button.attr('data-textColor'))
                .should('contain', $button.attr('data-backgroundColor'));
        });
});
