const Engineer = require("../lib/Engineer");

const newEngineer = new Engineer('Gary', '10', 'gary@gary.com', 'gdjewell')

describe('name', () => {
  it('Should return the name of the engineer', () => {
    expect((newEngineer.name)).toBe('Gary');

  })
})

describe('id', () => {
  it('Should return the ID of the engineer', () => {
    expect((newEngineer.id)).toBe('10')
  })
})

describe('email', () => {
  it('Should return the email of the manager', () => {
    expect((newEngineer.email)).toBe('gary@gary.com')
  })
})

describe('github', () => {
  it('Should return the GitHub username of the engineer', () => {
    expect((newEngineer.getGithub())).toBe('gdjewell')
  })
})

describe('getRole test', () => {
  it('Should return the word Manager', () => {
    expect((newEngineer.getRole())).toBe('Engineer')
  })
})