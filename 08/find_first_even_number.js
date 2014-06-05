function findFirstEvenNumber(aaa){
 if(aaa instanceof Array){

 returnValue = null;

  for(i=0; i<10; i++){
  	if(aaa[i]%2 == 0){
  	 returnValue = aaa[i];
  	 i=100;
  	}
  }

 return returnValue;

 }
}
