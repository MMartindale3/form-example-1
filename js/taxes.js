/* 
			Tax Calculator
			1. Ref var to the form element
			2. null
 */

// refVar to the form (do not use the submit button) refVar = reference variable
const taxForm = document.querySelector("#tax-form");
// the tax rate
const taxRate = 0.33;

// submit event works on form elements 
// addEventListener(eventType, eventHandlerFunction)
taxForm.addEventListener("submit", onCalculateTax);

// Event Handler Function Submit Event
// e parameter ---> Event Object
function onCalculateTax(e) {
	// submit event to stop the form from refreshing the browser
	// and sending the name value pairs
	e.preventDefault();
	// refVar to the input element(aka node) from the DOM
	const incomeRef = document.querySelector("#income");
	const taxes = Number(incomeRef.value) * taxRate;
	const formattedTax = taxes.toFixed(2);
	// can combine lines 24 and 25 to be a One Liner ... Caution it can be hard for others to read. He recommends 2 seperate statements
	// const taxes = (Number(incomeRef.value) * taxRate).toFixed(2);
	const template = `$${taxRate}`;
	console.log(template);
	document.querySelector("#tax-display").textContent = formattedTax;
	taxDisplay.textContent = formattedTax;
}