describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Input changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume changes with slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then($el => {
      expect($el).to.have.prop('volume', 0.33)
    });
  });

  it('Image and sound changes with radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('audio').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    });
  });

  it('Volume image changes to low', () => {
    cy.get('#volume-number').clear().type('30');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes to medium', () => {
    cy.get('#volume-number').clear().type('60');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes to high', () => {
    cy.get('#volume-number').clear().type('60');
    cy.get('#volume-number').clear().type('90');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk disabled on volume level 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk disabled on volume level NaN', () => {
    cy.get('#volume-number').clear().type('foobar');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error on invalid volume level', () => {
    cy.get('#volume-number').clear().type('155');
    cy.get('#volume-number:invalid').then($el => {
      expect($el).to.exist;
    });
  });
});
