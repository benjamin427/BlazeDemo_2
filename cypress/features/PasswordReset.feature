Feature: Password reset screen

    Feature Description
    Scenario: User should enter email address to reset password
    Given navigate to the website url
    Then enter email address
    |email_address      |
    |random@random.com  |
    Then click the password reset link button
    