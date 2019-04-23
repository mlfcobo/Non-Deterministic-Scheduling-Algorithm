const attachFiles = require("cypress-form-data-with-file-upload");
beforeEach(() => {
    cy.visit("http://localhost:5000/");
});

it("uploads", () => {
    // files to upload for each input[type="file"] by name
    // we are going to construct a single text file in this test
    // for <input type="file" name="fileToUpload" />
    const files = {
        input: new File(
            [
                "Process,Arrival,CPU Burst Time,Priority,\n1,0,10,3,2,1,1,1,3,2,2,3,4,3,1,4,5,4,5,2"
            ],
            "input.txt",
            {
                type: "text/plain"
            }
        )
    };

    // get the form element and attach files to upload
    cy.get("form").then(attachFiles(files));

    // submit the form
    cy.get('button[type="submit"]').click({ force: true });

    // FCFS
    cy.get('li[id="fcfs-wtsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq("Sum = 48 ms");
    });

    cy.get('li[id="fcfs-wtaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq("Average = 9.6 ms");
    });

    cy.get('li[id="fcfs-ttsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq("Sum = 67 ms");
    });

    cy.get('li[id="fcfs-ttaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq("Average = 13.4 ms");
    });

    //SJF

    cy.get("#sjf-wtsum")
        .eq(0)
        .should("contain", "Sum = 16 ms"); // true

    cy.get("#sjf-wtaverage")
        .eq(0)
        .should("contain", "Average = 3.2 ms"); // true

    cy.get("#sjf-ttsum")
        .eq(0)
        .should("contain", "Sum = 35 ms"); // true

    cy.get("#sjf-ttaverage")
        .eq(0)
        .should("contain", "Average = 7 ms"); // true

    //FCFSPRIO

    cy.get("#fcfsprio-wtsum")
        .eq(0)
        .should("contain", "Sum = 41 ms");

    cy.get("#fcfsprio-wtaverage")
        .eq(0)
        .should("contain", "Average = 8.2 ms");

    cy.get("#fcfsprio-ttsum")
        .eq(0)
        .should("contain", "Sum = 60 ms");

    cy.get("#fcfsprio-ttaverage")
        .eq(0)
        .should("contain", "Average = 12 ms");

    //SJFPRIO

    cy.get("#sjfprio-wtsum")
        .eq(0)
        .should("contain", "Sum = 33 ms");

    cy.get("#sjfprio-wtaverage")
        .eq(0)
        .should("contain", "Average = 6.6 ms");

    cy.get("#sjfprio-ttsum")
        .eq(0)
        .should("contain", "Sum = 52 ms");

    cy.get("#sjfprio-ttaverage")
        .eq(0)
        .should("contain", "Average = 10.4 ms");
});
