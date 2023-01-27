const Intern = require("../lib/intern");

const newIntern = new Intern('Gary', '10', 'gary@gary.com', 'Stanford')

describe('name', () => {
  it('Should return the name of the intern', () => {
    expect((newIntern.name)).toBe('Gary');

  })
})

describe('id', () => {
  it('Should return the ID of the intern', () => {
    expect((newIntern.id)).toBe('10')
  })
})

describe('email', () => {
  it('Should return the email of the intern', () => {
    expect((newIntern.email)).toBe('gary@gary.com')
  })
})

describe('school', () => {
  it('Should return the school of the intern', () => {
    expect((newIntern.getSchool())).toBe('Stanford')
  })
})

describe('getRole test', () => {
  it('Should return the word intern', () => {
    expect((newIntern.getRole())).toBe('Intern')
  })
})