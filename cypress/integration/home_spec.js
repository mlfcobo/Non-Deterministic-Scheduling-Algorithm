// describe('My First Test', function () {
//     it('Visits the Kitchen Sink', function () {
//         cy.visit('http://localhost:5000/');
//         cy.get('#file-upload').submit();
//     })
// })

const attachFiles = require('cypress-form-data-with-file-upload')
beforeEach(() => {
    cy.visit('http://localhost:5000/');
});


it('uploads', () => {
    // files to upload for each input[type="file"] by name
    // we are going to construct a single text file in this test
    // for <input type="file" name="fileToUpload" />
    const files = {
        input: new File(['Process,Arrival,CPU Burst Time,Priority,\n1,0,10,3,2,1,1,1,3,2,2,3,4,3,1,4,5,4,5,2'], 'input.txt', {
            type: 'text/plain'
        })
    }
    // get the form element and attach files to upload
    cy.get('form').then(attachFiles(files))

    // submit the form
    cy.get('button[type="submit"]').click()

    // FCFS
    cy.get('li[id="fcfs-wtsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 48 ms')
    })

    cy.get('li[id="fcfs-wtaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 9.6 ms')
    })

    cy.get('li[id="fcfs-ttsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 67 ms')
    })

    cy.get('li[id="fcfs-ttaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 13.4 ms')
    })

    //SJF

    cy.get('li[id="sjf-wtsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 16 ms')
    })

    cy.get('li[id="sjf-wtaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 3.2 ms')
    })

    cy.get('li[id="sjf-ttsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 35 ms')
    })

    cy.get('li[id="sjf-ttaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 7 ms')
    })

    //FCFSPRIO

    cy.get('li[id="fcfsprio-wtsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 41 ms')
    })

    cy.get('li[id="fcfsprio-wtaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 8.2 ms')
    })

    cy.get('li[id="fcfsprio-ttsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 60 ms')
    })

    cy.get('li[id="fcfsprio-ttaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 12 ms')
    })

    //SJFPRIO

    cy.get('li[id="sjfprio-wtsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 33 ms')
    })

    cy.get('li[id="sjfprio-wtaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 6.6 ms')
    })

    cy.get('li[id="sjfprio-ttsum"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Sum = 52 ms')
    })

    cy.get('li[id="sjfprio-ttaverage"]').should(($li) => {
        expect($li.get(0).innerText).to.eq('Average = 10.4 ms')
    })
})