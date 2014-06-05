function fizzbuzz(aaa){
 if(!isNaN(aaa)){
  if(aaa%15 == 0){
   return "fizzbuzz";
  } else if(aaa%5 == 0){
   return "buzz";
  } else if(aaa%3 == 0){
  return "fizz";
  } else {
  return aaa;
  }
 } else {
  return aaa;
 }
}