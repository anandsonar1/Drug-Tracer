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
  // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig)
  
  // Reference messages collection
  var database = firebase.database();
  var medicineRef = database.ref('medicines');
  
  // Attach event listener to submit button
  const submit  = document.getElementById('submit'); //      
  submit.addEventListener('click', handleTransaction); //
  
      // Handle transaction submission
  async function handleTransaction() {
  event.preventDefault();
  
  
  // Get values
  var companyName = getInputVal('companyName');
  var medicineName = getInputVal('medicineName');
  var dosage = getInputVal('dosage');
  var batchno = getInputVal('batchno');
  var mfgDate = getInputVal('mfgDate');
  var expDate = getInputVal('expDate');
  
  if (!companyName || !medicineName || !dosage || !batchno || !mfgDate || !expDate) {
  alert('Please fill all the fields');
  return;
  }
  
  // Save message
  saveMessage(companyName, medicineName, dosage, batchno, mfgDate, expDate );
  
  // Show alert
  // alert('Data saved successfully')
  }
  
  // Function to get  form values
  function getInputVal(id){
  return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(companyName, medicineName, dosage, batchno, mfgDate, expDate){
  var newMedicineRef = medicineRef.push();
  newMedicineRef.set({
  companyName: companyName,
  medicineName:medicineName,
  dosage:dosage,
  batchno:batchno,
  mfgDate:mfgDate,
  expDate:expDate
  }, function(error) {
  if (error) {
    alert('Error saving data', + error.message);
  } else {
    alert('Data saved successfully');
  
    // Get the unique key of the newly added entry
    const entryKey = newMedicineRef.key;
    // Show the key in the console
  //   console.log(`New entry added with key: ${entryKey}`);
    alert(`The Hash Code For Your Drug: ${entryKey}`);
  }
  });
  }