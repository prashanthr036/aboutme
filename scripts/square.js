console.log('SCRIPT START')
console.log('Declare testable functions......................')


function myfunction(x)
{
	
 return parseInt(x) * parseInt(x);
 
// let side =  document.getElementById("myid").value;
//  let area = parseInt(side) * parseInt(side);
// document.getElementById("myPara").innerHTML=parseInt(x) * parseInt(x);

}


 
        /* global localStorage */
        
        
        console.log('Defined add=' + myfunction)
        console.log('Declare event listeners .......................')
        window.addEventListener('load', (event) => {
          console.log('  Starting initialization ')
          
          if (localStorage.getItem('number1')) {
            document.getElementById('myid').value = parseInt(localStorage.number1)
            console.log(`  Stored num1 = ${localStorage.number1}`)
          }
          
          console.log('  Finished initialization')
        })
        document.getElementById('clicker').addEventListener('click', () => {
          console.log('  Starting clicker click handler')
          const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
          
          const i = parseInt(document.getElementById('myid').value)
          console.log('i=' + i)
          
          const ct = origCount + 1
          const ans = 'Prashanth , your value is '+myfunction(i)+', And this has been run ' + ct + ' times.'
          document.getElementById('result').innerHTML = ans
          localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
         
          localStorage.setItem('number1', i)
         
          console.log('  Finished clicker click handler')
        })
		
        document.getElementById('wiper').addEventListener('click', () => {
          console.log('  Starting wiper click handler')
      
		  
		  localStorage.removeItem('countOfClicks')
		  
		  localStorage.removeItem('number1')
         
          console.log('  Finished wiper click handler - localStorage entries removed')
        })
        console.log('SCRIPT END')
     





console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('simpbutt').addEventListener('mouseover', function() {
    fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })
})
console.log('Script End')