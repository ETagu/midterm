var primes = [2];
 for (i = 3; i <= 300; i += 2) { 
   for (j = 0; i > primes[j] * primes[j] && i % primes[j] != 0; j++); 
    if (i < primes[j] * primes[j]) primes.push(i); 
 }

function prime(aaa){

 returnValue = false;

 if(Math.floor(aaa)==aaa && aaa>=1){ 

  for(i=0; i<=primes.length; i++){
   if(aaa==primes[i]){
    returnValue = true;
    break;
   }
  }

 }
 
 return returnValue;

}

