describe("Поиск на YouTube", () => {
  it("Отображает результаты поиска", () => {
    cy.visit("https://www.youtube.com/");
    cy.title().should("contain", "YouTube");
    cy.get("input#search").should("be.visible").type("музыка");
    cy.get("button#search-icon-legacy").click();
    cy.get("ytd-video-renderer").should("be.visible");
  });
});

describe('Открытие главной страницы YouTube', () => {
  it('Переход на главную страницу YouTube', () => {
    cy.visit("https://www.youtube.com/");
  })
})

describe('Просмотр рекомендуемых видео', () => {
  it('Открытие первого рекомендуемого видео', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('div#contents').find('a#thumbnail').first().click()
  })
})

describe("Кнопка подписки", () => {
  it("Отображается после прокрутки страницы", () => {
    cy.visit("https://www.youtube.com/watch?v=SoTUAcp1Uwg");
    cy.title().should("contain", "YouTube");
    cy.scrollTo("bottom");
    cy.get("#subscribe-button").should("be.visible");
  });
});

it('Проверяет заголовок страницы', () => {
  cy.visit('https://www.twitch.tv/')
  cy.title().should('include', 'Twitch')
})

describe('Открытие видео у стримера на твиче', () => {
  it('Открытие определеного видео у стримера', () => {
    cy.visit('https://www.twitch.tv/videos/2050784579');
  });
});
