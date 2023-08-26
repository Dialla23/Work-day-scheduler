// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("D/MM/YY"))
  console.log(dayjs().hour())
  $("textarea").each(function(){
    console.log($(this))
    var textareaid= parseInt($(this).attr("id"))
    console.log(textareaid)
    if(textareaid== dayjs().hour()){
      $(this).addClass("present")
    }
    if(textareaid>dayjs().hour()){
      $(this).addClass("future")
    }
   if(textareaid<dayjs().hour()){
    $(this).addClass("past")
   }
  })
});


$(document).ready(function(){
  $('.saveBtn').on('click',function(){

    console.log("Inside Click")
    console.log($(this))
   
  
    let content= $(this).prev().val()
var textarea_valu= $(this).siblings("textarea").val()
var textareaid = $(this).siblings("textarea").attr("id")
console.log(textarea_valu)
localStorage.setItem(textareaid,textarea_valu)
    // let notesdata= {
    //   "notes_number":textareaid,
    //   "notes_text": content,
    // }
    // let localStoragedata= JSON.parse(localStorage.getItem('notesdata'))
  
    // if(localStoragedata){
    //   localStoragedata.push(notesdata)
    // }else{
    //   localStoragedata=[]
    //   localStoragedata.push(notesdata)
    // }
  
    // localStorage.setItem("notesdata",JSON.stringify(localStoragedata))
  })
  $("#9").val(localStorage.getItem("9"))
  $("#10").val(localStorage.getItem("10"))
  $("#11").val(localStorage.getItem("11"))
  $("#12").val(localStorage.getItem("12"))
  $("#13").val(localStorage.getItem("13"))
  $("#14").val(localStorage.getItem("14"))
  $("#15").val(localStorage.getItem("15"))
  $("#16").val(localStorage.getItem("16"))
  $("#17").val(localStorage.getItem("17"))
})