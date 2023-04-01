
function selectmcbrand(){
  let mctype = ["Scooter" , "OffRoad" , "OnRoad" , "Underbone"];
  
  let type = document.getElementById("type");
  let brandselect = document.getElementById("brand").value;
  console.log(brandselect);
  type.innerHTML = "<option></option>";
  if (brandselect === "Honda" || brandselect === "Suzuki" || brandselect === "Yamaha")
  {
    addTotype(mctype);
  }



  function addTotype(arr)
  {

    arr.forEach(function (item)
    {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    type.appendChild(option);

  })
}
}


function selectmctype(){
    let hscooter = ["Dio", "Beat Street(STD)" , "Beat Fashion Sport(STD)" , "Beat Premium(ISS/CBS)" , "Genio" , "Click 125" , "Click 160" , "PCX 160(CBS)" , "PCX 160(ABS)" , "AVD 160"];
    let sscooter = ["Burgman 200" , "Burgman Street 125 EX" , "Avenis 125" , "Adress 125"];
    let yscooter = ["Aerox 155" , "Mio Sporty" , "Mio Fazzio" , "Mio Gravis" , "Mio Soul i 125" , "Mio Gear" , "NMAX 155" , "Mio i 125" , "Xmax"];
    let hoffroad = ["XR 150 L" , "CRF 150" , "CRF 125" , "CRF 300 Rally" , "CRF 250rx" , "Cb 150x" , ];
    let soffroad = ["DR-ZL125L" , "DR-Z50"];
    let yoffroad = ["YTX 125"];
    let honroad = ["CB 150 X", "CBR 150 R" ];
    let sonroad = ["GSX S1000" , "GSX-S1000GT" , "GSX 8s" , "GSX S 750", "GSX S 125"];
    let yonroad = ["R15m" , "XSR 155" , "MT-15" , "YZF R3" , "XSR 700"]
    let hunderbone = ["Wave RSX (Drum)" , "Wave RSX (Disc)" , "XRM 125 DS" , "RS 125"];
    let sunderbone = ["Raider J Crossover" ,  "Raider J 115 FI(Mags)" , "Raider J 115 FI(Spokes)" , "Raider 150 (Carburator)" , "Raider 150 (FI)" , "Smash 115"];
    let yunderbone = ["Vega Force I" , "Vega" , "Sniper 150" , "Sniper 155r" , "Sight"];
    let brandselect = document.getElementById("brand").value;
    let modelselect = document.getElementById("model");
    let mctype = document.getElementById("type").value;
    console.log(mctype);
    modelselect.innerHTML = "<option></option>";
      if (mctype === "Scooter"  && brandselect === "Honda")
      {
       
      addTomctype(hscooter);

      }
      if (mctype === "Scooter"  && brandselect === "Suzuki")
      {
       
      addTomctype(sscooter);

      }
      if (mctype === "Scooter"  && brandselect === "Yamaha")
      {
       
      addTomctype(yscooter);

      }
      if (mctype === "OffRoad" && brandselect === "Honda")
      {

        addTomctype(hoffroad);

      }
      if (mctype === "OffRoad" && brandselect === "Suzuki")
      {

        addTomctype(soffroad);

      }
      if (mctype === "OffRoad" && brandselect === "Yamaha")
      {

        addTomctype(yoffroad);

      }
      if (mctype === "OnRoad" && brandselect === "Honda")
      {

        addTomctype(honroad);

      }
      if (mctype === "OnRoad" && brandselect === "Suzuki")
      {

        addTomctype(sonroad);

      }
      if (mctype === "OnRoad" && brandselect === "Yamaha")
      {

        addTomctype(yonroad);

      }
      if (mctype === "Underbone" && brandselect === "Honda")
      {
        addTomctype(hunderbone);
      }
      if (mctype === "Underbone" && brandselect === "Suzuki")
      {
        addTomctype(sunderbone);
      }
      if (mctype === "Underbone" && brandselect === "Yamaha")
      {
        addTomctype(yunderbone);
      }


    function addTomctype(arr)
    {
      arr.forEach(function (item){
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        modelselect.appendChild(option);
      })
    }
  }

  function modelchange()
  {
    let model = document.getElementById("model").value;
    console.log(model);
  }
  function adddata(){
    let payment = document.getElementById("payment").value;
    let brand = document.getElementById("brand").value;
    let type = document.getElementById("type").value;
    let model = document.getElementById("model").value;
    let request = document.getElementById("request").value;
    let date = document.getElementById("date").value;
    let fname = document.getElementById("first_name").value;
    let mname = document.getElementById("middle_name").value;
    let lname = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let mnum = document.getElementById("mobileNum").value;
 
  
    console.log(payment);
    console.log(brand);
    console.log(type);
    console.log(model);
    console.log(request);
    console.log(date);
    console.log(fname);
    console.log(mname);
    console.log(lname);
    console.log(address);
    console.log(email);
    console.log(mnum);
    let frm = document.getElementsByName('submitform')[0];
    if (fname === null || fname ==="")
    {
      alert("Please Enter your First Name.");
      
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      return false; // Prevent page refresh
    }
    else if (lname === null || lname ==="")
    {
      alert("Please Enter your Last Name");
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      return false; // Prevent page refresh
    }
    else if (address === null || address === "")
    {
      alert("Please Enter your Address");
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      return false; // Prevent page refresh
    }
    else if (mnum === null || mnum === "")
    {
      alert("Please Enter your Cellphone number");
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      return false; // Prevent page refresh
    }
    else{
    let clientinquiry = {
      clientId: Date.now(),
      firstName: fname,
      middleName: mname,
      lastName: lname,
      address: address,
      mnum: mnum,
      requestdate: date,
      request: request,
      paymenttype: payment,
      brand: brand,
      type: type,
      model: model
  }
  
  
  localStorage.setItem('clientrec', JSON.stringify(clientinquiry));

  }
  }

  function addtoexcel(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyoSthJvC_pnb6W1FRFFHKPUFyPvGrQ7SU8JtHViVZRxEcyZBebqzFCeFYYzEoNIWA/exec'
    const form = document.forms['submitform']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', form.reset(), alert("Application Sent. Please wait for admin confirmation via text message. Thank You!")))
        .catch(error => console.error('Error!', error.message))
    })
  }
  