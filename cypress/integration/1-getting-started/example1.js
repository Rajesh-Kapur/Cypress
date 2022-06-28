it('Loads up Dev itrent', function() {

    /// <reference types= "Cypress" />
    // Get to Itrent Website:

    cy.visit( "https://ce0550de.webitrent.com/ce0550de_web/wrd/run/etadm001gf.open");
    //cy.wait(10000); //desperation wait
    //cy.get('html > body.logon > div.logon-background > div.login-container > table#theme2_bg.login.ss > tbody > tr > td >form > table.login > tbody > tr > td > table#loginTab > tbody > tr > td#cyanUserfield > input#USER_NM\.TUSER\.TRENT_SEC\.1').type("kapurr");
    
    //Login to Itrent
    cy.get('input[name="USER_NM\.TUSER\.TRENT_SEC\.1"]').type("kapurr");    
    cy.get('input[name="USER_PWD.TUSER.TRENT_SEC.1"]').type("");

   // cy.get('input[name="BU_LOGIN.FRM_BUTTON.ET_BASE.1"]').click
   cy.get('#login_bu').click();


   // second Screen of logon
   cy.get('select[name="ROLE_ID\.TUSER\.TRENT_SEC\.1"]').select('Tech Team')
   .type('{downArrow}')

   cy.get('#login_bu').click();
   cy.wait(10000); //desperation wait
   cy.get('.hybrid-menu-icon').click();
   cy.switchToIframe('main_trnt');
   // Next going dealing with iframes on loaded page
   //cy.windows.frames[0].runfunction();
  // cy.visit( 'https://ce0550de.webitrent.com/ce0550de_web/wrd/run/ETADM002GF.TASK_OBJECT?ItemID=%1BPS=OID=%15%1BPT=0%15%1BEFD=28/06/2022%1BUI=ed=28/06/2022&od=|1^0^Organisation^auto_i%3dT%26A%3d0^ORG%3d482698000o^VolkerWessels%20UK^%1BUSESSION=9DB13901A135141E754CBA84A27D9415');
   
  //cy.get('.hybrid-menu-icon').click();
   
})
