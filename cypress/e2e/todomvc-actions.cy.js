/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

// it('should navigate to the TodoMVC App', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh')
// })

// it('should be able to add a new todo to the list', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh')

//     cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
//     cy.get('label').should('have.text', 'Clean room')
//     cy.get('.toggle').should('not.be.checked')

//     cy.get('.toggle').click()

//     cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

//     cy.contains('Clear completed').click()
//     cy.contains('Clear').click()
//     cy.get('.todo-list').should('not.have.descendants', 'li')
// })

// describe('todos actions', () => {

    // beforeEach(() => {
    //     cy.visit('http://todomvc-app-for-testing.surge.sh')

    //     cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    // })
// it('should be able to add a new todo to the list', () => {
//     cy.get('label').should('have.text', 'Clean room')
//     cy.get('.toggle').should('not.be.checked')
// })

// it('should mark a todo as completed', () => {
    // cy.get('.toggle').click()
//     cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
// })

// it('should clear completed todos', () => {
    // cy.get('label').should('have.text', 'Clean room')
    // cy.get('.toggle').should('not.be.checked')
    
    // cy.get('.toggle').click()

    // cy.contains('Clear completed').click()
//     cy.contains('Clear').click()
//     cy.get('.todo-list').should('not.have.descendants', 'li')
// })
// })

describe('todos actions', () => {

    const todoPage = new TodoPage

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean room')
    })

it('should be able to add a new todo to the list', () => {
    todoPage.validateTodoTxt(0, 'Clean room')

    todoPage.validateToogleState(0, false)
})

describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      todoPage.toggleTodo(0)
      todoPage.validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      todoPage.toggleTodo(0)

      todoPage.clearCompleted()

      todoPage.validateNumberOfTodosShown(0)
    })
  })
})