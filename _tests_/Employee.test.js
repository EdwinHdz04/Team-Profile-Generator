const addEmployee = () =>{
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'addEmployee',
      message: 'What type of employee do you want to create?',
      choices: ['sales Lead','Sales Person ','Lead Engineer','Software Engineer','Account Manager','Accountant','Legal Team Lead','Lawyer'],
    }

])
.then(answers => {
    switch (answers.addEmployee) {
        case "sales Lead" : 
             makeSaleslead();
            break;
    
        case "Sales Person" : 
            makeSalesperson();
            break;

        case "Lead Engineer " :
            makeLeadEngineer();
            break;

        case "Software Engineer" :
            makeSoftwareengineer();
             break;

        case "Account Manager" :
            makeAccountmanager();
            break;  

        case "Accountant" :
            makeAccountant();
            break;
                  
        case "Legal Team Lead" :
            makeLegalteamlead();
            break;
        
        case "Legal Team Lead" :
            makeLegalteamlead();
            break;    

        let htmlPageContent = generateHTML(answers)
        createFile('./src/barebones.html', htmlPageContent);
    }  
}) 
}
