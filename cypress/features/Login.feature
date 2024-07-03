Feature: Login screen

    Feature Description
    Scenario: User should enter login credentials after being registered
    Given navigate to the website
    Then enter login credentials
    |  email_address     | password             |
    |  random@random.com | testAdmin123         |
    Then click login button
