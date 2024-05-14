// Copyright (c) 2024 Mohammed EL-hayek All rights reserved
//
// Created by: Mohammed
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //this function divides using a loop
  //input
  let number1 = parseInt(document.getElementById("number-1").value);
  let number2 = parseInt(document.getElementById("number-2").value);

  //process
  let counter = 0;
  while (number1 >= number2) {
    number1 -= number2;
    counter++
  }

  //output
  if (number1 != 0) {
    document.getElementById('answer').innerHTML = "the answer is" + counter + "with a remainder of" + number1;
  } else {
    document.getElementById('answer').innerHTML = "the answer is" + counter;
  }
}