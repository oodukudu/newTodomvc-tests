/// <reference types="cypress" />

export class TodoPage {

    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoTxt(todoIndex, expectedTxt) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedTxt)
    }

    validateToogleState(todoIndex, shouldBeToogled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        label.should(`${shouldBeToogled ? '' : 'not.'}be.checked`)
    }

    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted) {
        const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    
        l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }
    
    clearCompleted() {
        cy.contains('Clear completed').click()
    }
    
    validateNumberOfTodosShown(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    showOnlyActiveTodos() {
        cy.contains('Active').click()
    }
    
    showAllTodos() {
        cy.contains('All').click()
    }

    showOnlyCompletedTodos() {
        cy.contains('Completed').click()
    }
    
}