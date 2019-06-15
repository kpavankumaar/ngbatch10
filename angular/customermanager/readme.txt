authservice 
    isAuthenticated
    redirectUrl
    loginMethod
    logoutMethod
editCustomer -> routing --> editCustomer
            canActivate -- redirectUrl
        yes             No

        editCustomer   login  -- isAuthenticated,redirectUrl

navbarComponent -> login/logOut  -- isAuthenticated = true - show - logout
                                -- isAuthenticated = false - show - logIn
                -> logOut();   -- isAuthenticated = false;


LoginComponent -- isAuthenticated
            --  loginMethod
                yes                         no
            redirect to customers page      loginPage
            isAuthenticated = true          isAuthenticated = false