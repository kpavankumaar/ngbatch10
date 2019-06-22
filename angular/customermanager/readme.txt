authservice 
    isAuthenticated
    redirectUrl
    loginMethod
    logoutMethod
customer, customerscard, customergrid -> routing --> editCustomer
            canActivate -- redirectUrl
        yes             No

        editCustomer   login  -- isAuthenticated,redirectUrl
                        yes                 no --> login page
                       editCustomer 

navbarComponent -> login/logOut  -- isAuthenticated = true - show - logout
                                -- isAuthenticated = false - show - logIn
                -> logOut();   -- isAuthenticated = false;


LoginComponent -- isAuthenticated
            --  loginMethod --auth.service.ts
                yes                         no
            redirect to customers page      loginPage
            isAuthenticated = true          isAuthenticated = false