# congress-market-activity-fe

Congress Market Activity front end set up to view data from the Office of the Clerk, U.S. House of Representatives. Currently supports the ability to retrieve the list of congress people that have transacted in the market from the year 2017-forward as well as the transaction details that were scraped directly from the Transaction Reports downloaded from: [Office of the Clerk](https://disclosures-clerk.house.gov/PublicDisclosure/FinancialDisclosure)

[Back-End Repo](https://github.com/g3or3/congress-market-activity-be)

[Database Creation](https://github.com/g3or3/congress-market-activity-db)

[Database Updates](https://github.com/g3or3/cron-congress-market-activity)

---

## Requirements

For development, you will need Node.js installed on your environement.

[Node](http://nodejs.org/) is really easy to install & includes [NPM](https://npmjs.org/).
You should be able to run the following command to confirm your current version.

### Node

    $ node --version
    v14.15.5

    $ npm --version
    7.17.0

## Install

    $ git clone https://github.com/g3or3/congress-market-activity-fe.git
    $ cd congress-market-activity-fe
    $ npm install

## Start

    $ npm start

## Built With

- [React](https://reactjs.org/) v17.0.2
- [Firebase Auth](https://firebase.google.com/docs/auth) v8.9.1
- [React Table](https://react-table.tanstack.com/) v7.7.0
- [Nivo](https://nivo.rocks/circle-packing/) v0.72.0
