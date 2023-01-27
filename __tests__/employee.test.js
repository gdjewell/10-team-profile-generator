const Employee = require("../lib/Employee");

const newEmployee = new Employee('Gary', '10', 'gary@gary.com')

describe('name', () => {
  it('Should return the name of the employee', () => {
    expect((newEmployee.name)).toBe('Gary');

  })
})

describe('id', () => {
  it('Should return the ID of the employee', () => {
    expect((newEmployee.id)).toBe('10')
  })
})

describe('email', () => {
  it('Should return the email of the employee', () => {
    expect((newEmployee.email)).toBe('gary@gary.com')
  })
})