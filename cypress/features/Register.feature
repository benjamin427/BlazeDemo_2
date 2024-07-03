Feature: Registration form

    Feature Description
    Scenario: User should fill out the form to register to the website
    Given navigate to the registration website
    Then enter information
    |name      | company      | email_address     | password             | confirm_password |
    |Benjamin  | Acme         | random@random.com | testAdmin123         | testAdmin123     |
    Then click the register button