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
  // Remove espaços em branco usando regex e quebra palavras em uma array
  var words = text.replace(/\s+/, " ").split(" ");

  // Pega Quantidade de Palavras
  var wordCount = words.length;

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


/**
 * Tempo de leitura
 * @version 0.2
 */
 function readingTimeSec(text, mode){
   // Speed words/min
   var readingMode = {slow: 1.0, avg:2.5, fast:3};
   var timeSeconds = 0;
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
   
   timeSeconds = readingSpeed*wordCounter(text);
   
   return timeSeconds;
 }
