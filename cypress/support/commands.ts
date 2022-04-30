// https://github.com/cypress-io/cypress/issues/1570#issuecomment-891244917
//
Cypress.Commands.add('setSliderValue', { prevSubject: 'element' }, (subject, value) => {
    const element = subject[0];
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
    )?.set;
    nativeInputValueSetter?.call(element, value);
    element.dispatchEvent(new Event('input', { bubbles: true }));
});

declare namespace Cypress {
    interface Chainable {
        setSliderValue(value: number): Chainable<void>;
    }
}
