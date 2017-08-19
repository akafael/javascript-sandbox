/**
 * Script para indicar o tempo de leitura de um texto
 * inspirado no site: http://www.putasacada.com.br/tempo/
 * @author Rafael Lima
 */
 
/**
 * Contador de Palavras
 * @version 0.1
 */
function wordCounter(text){
  var wordCount = 0;
  //var words = text.replace(/\s+/, " ").split(" ");
  var words = text.split(" ");
	
	for (i=0; i< words.length; i++){if(words[i] != ''){wordCount++;}}

  return wordCount;
}
 
/**
 * Tempo de leitura
 * @version 0.2
 */
 function readingTimeMin(text, mode){
   // Speed words/min
   var readingMode = {slow: 130, avg:150, fast:200};
   var timeMinutes = 0;
   var readingSpeed = readingMode.avg;
   
   switch(mode){
      case "slow":
        readingSpeed = readingMode.slow;
      break;
      
      case "fast":
        readingSpeed = readingMode.fast;
      break;
      
      case "avg":
      default:
        readingSpeed = readingMode.avg;
      break;
   }
   
   timeMinutes = readingSpeed*wordCounter(text);
   
   return timeMinutes;
 }
