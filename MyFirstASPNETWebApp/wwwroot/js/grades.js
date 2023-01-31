/*Grade calculation function*/
$("#buttonsend").click(function () {
    /*creating a variable which is taking in all of the numeric grades inputted by the user
     and generating a total grade using the weighting from the syllabus. This variable also
     uses Math.round() to round the product to two decimal places.*/
    const totalgrade = Math.round(((parseInt($("#assignments").val()) * .5) +
        (parseInt($("#quizzes").val()) * .1) + (parseInt($("#groupprojects").val()) * .1) +
        (parseInt($("#intex").val()) * .1) + (parseInt($("#midterm").val()) * .1) +
        (parseInt($("#final").val()) * .1)) * 100) / 100;

    /*Creating a variable that will hold the letter grade based on the total numeric grade*/
    let lettergrade = "";

    if (totalgrade >= 94) {
        lettergrade = 'A';
    } else if (totalgrade >= 90) {
        lettergrade = 'A-';
    } else if (totalgrade >= 87) {
        lettergrade = "B+";
    } else if (totalgrade >= 84) {
        lettergrade = "B";
    } else if (totalgrade >= 80) {
        lettergrade = "B-";
    } else if (totalgrade >= 77) {
        lettergrade = "C+";
    } else if (totalgrade >= 74) {
        lettergrade = "C";
    } else if (totalgrade >= 70) {
        lettergrade = "C-";
    } else if (totalgrade >= 67) {
        lettergrade = "D+";
    } else if (totalgrade >= 64) {
        lettergrade = "D";
    } else if (totalgrade >= 60) {
        lettergrade = "D-";
    } else {
        lettergrade = "E";
    }

    /*Printing the end statement in the "result" div on the HTML page.*/
    document.getElementById("result").innerHTML = totalgrade + "%  " + lettergrade;
})

/*This function will reset each of the values to an empty string value when the user clicks on 
 the "restart" button.*/
$("#restart").click(function () {
    $("#assignments").val("");
    $("#quizzes").val("");
    $("#groupprojects").val("");
    $("#intex").val("");
    $("#midterm").val("");
    $("#final").val("");
    $("#result").html("");
})

