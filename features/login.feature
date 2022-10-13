Feature: Jeff tests a calculator app using appium

  Scenario: As a user, I can open the app and press the square root button

    Given I am on the calculator app
    And I click on the square root button
    Then Square root displays on the calculator

  Scenario: As a user, I can do simple math like 2+4

    Given I am on the calculator app
    And I click on the 2 button
    And I click on the plus button
    And I click on the 4 button
    When I click on the equals button
    Then 6 is displayed on the calculator


  Scenario: As a user, I can do more complex math like 2+4+4+4
    Given I am on the calculator app
    And I click on the 2 button
    And I click on the plus button
    And I click on the 4 button
    And I click on the plus button
    And I click on the 4 button
    And I click on the plus button
    And I click on the 4 button
    And I click on the equals button
    Then 14 is displayed on the calculator

    @jefftest
  Scenario: As a user, I can use the minus button to do math like 2-4
    Given I am on the calculator app
    And I click on the 2 button
    And I click on the minus button
    And I click on the 4 button
    And I click on the equals button
    Then -2 is displayed on the calculator


