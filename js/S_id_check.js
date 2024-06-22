// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAVQL2zfHhxXw85unCjqtcgjhEDyXuNU5A",
	authDomain: "test-18a6e.firebaseapp.com",
	projectId: "test-18a6e",
	storageBucket: "test-18a6e.appspot.com",
	messagingSenderId: "680829798332",
	appId: "1:680829798332:web:944f51de1aa28e18308db9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Web3 with Metamask provider
const web3 = new Web3(window.ethereum);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the location where the data is stored
var ref = database.ref("medicines");


  // Attach event listener to submit button
  const submit  = document.getElementById('submit'); //      
  submit.addEventListener('click', handleTransaction); //



    // Handle transaction submission
  async function handleTransaction() {
  event.preventDefault();
  


      // Check if all fields are filled
      const search = document.getElementById("search").value;

    if (!search ) {
      alert('Please fill all the fields');
      return;
    }
  
    // Get user's accounts from Metamask
    const accounts = await web3.eth.getAccounts();
  
    // Get the transaction data
    const txData = {
      from: accounts[0],  // define the 'from' field with your account address
      to: '0x4230A88D667513903fEB9Ff37a6561424E313529', // specify the contract address you want to interact with
      value: web3.utils.toWei('1', 'ether'), // specify the amount of ether you want to send
  };
  
  // Send the transaction using the Metamask provider
  await web3.eth.sendTransaction(txData)
    .on('error', function(error) {
      console.error('Transaction error:', error);
      alert('Transaction failed: ' + error.message); // Display error message
  });
  
        // Show a success message to the user
        alert('Transaction successful!');

// Get the ID entered in the box
  var id = document.getElementById("search").value;

  // Create a query to search for the ID
  var query = ref.orderByKey().equalTo(id);

  // Attach a listener for the "value" event to the query
  query.on("value", function(snapshot) {
    if (snapshot.exists()) {
      // The ID exists in the database
      // Get the child data associated with the ID
      var data = snapshot.val()[id];
      console.log("Child data:", data);
      alert("Verified By Drug Tracer");
    //   alert(` Data:: ${data}`);
      

    } else {
      // The ID does not exist in the database
      alert("Fake Drugs");
      console.log("Fake Drugs");
    }
  });
}







