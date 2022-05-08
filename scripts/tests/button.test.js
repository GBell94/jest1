/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");
/*
 beforeAll(() => {
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });

 */

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1s should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});