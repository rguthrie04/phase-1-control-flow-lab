function scuberGreetingForFeet(feet){
  let result
  if (feet<=400) {
    result = 'This one is on me!'    
  }
  else if (feet>2000 && feet<2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (feet>=2500){
    result = `No can do.`
  }
  return result
}

function ternaryCheckCity(city){
  return city === 'NYC'?"Ok, sounds good." : "No go."
}

let statement;

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' :
      return statement = 'Thank you so much.'
    case 'not as generous' :
      return statement = 'Thank you.'
    default :
      return statement = 'Bye.'
  }
}