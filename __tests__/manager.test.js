const Manager = require("../lib/Manager");

const newManager = new Manager('Gary', '10', 'gary@gary.com', '459')

describe('name', () => {
  it('Should return the name of the manager', () => {
    expect((newManager.name)).toBe('Gary');

  })
})

describe('id', () => {
  it('Should return the ID of the manager', () => {
    expect((newManager.id)).toBe('10')
  })
})

describe('email', () => {
  it('Should return the email of the manager', () => {
    expect((newManager.email)).toBe('gary@gary.com')
  })
})

describe('officenumber', () => {
  it('Should return the office number of the manager', () => {
    expect((newManager.getOfficeNumber())).toBe('459')
  })
})

describe('getRole test', () => {
  it('Should return the word Manager', () => {
    expect((newManager.getRole())).toBe('Manager')
  })
})

