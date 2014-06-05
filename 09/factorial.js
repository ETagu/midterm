function factorial(aaa){
 if(aaa>0){
  aaa =  Math.floor(aaa);
   for(i=aaa-1; i>0; i--){
    aaa = aaa*(i);
   }
  return aaa;
 } else {
  return null;
 }

}
