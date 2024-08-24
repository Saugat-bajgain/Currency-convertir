// const BASE_URL = "https://api.fastforex.io/fetch-one&api_key=fe7693b6e2-85d3625544-sggn4a";

const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

// const BASE_URL = "https://api.fastforex.io/fetch-one&api_key=fe7693b6e2-85d3625544-sggn4a";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".btn");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
let amount=document.querySelector(".amount input")
let   converted=document.querySelector(".converted-value")


  for(let select of dropdowns){
  for (let currCode in countryList) {//countryList is an object so for in loop is used
    let newOption = document.createElement("option");//creating a new html tag option
    newOption.innerText = currCode;//here currcode is language like USD,NRP,etc
    newOption.value = currCode;//this is for backendk
    if(select.name==="from" && currCode==="USD" ){
      newOption.selected="selected";
    }else   if(select.name==="to" && currCode==="NPR" ){
      newOption.selected="selected";
    }
    select.append(newOption);// adds the newly created <option> element to the current <select> element
  }

//////////v this is for changing the flag



  select.addEventListener("change",(e)=>{
updateFlag(e.target)// refers to the element that triggered the event.//select
  })
}

const updateFlag=(element)=>{//here element(we can write any thing in place of element) is HTML element. This element could be any HTML element, such as a button, input field, div, etc.
  //here it means select
  let currCode = element.value;//The .value property of this element retrieves the current value of the element. For input fields, this is the text that the user has entered.
  let countryCode = countryList[currCode]; //currCode mean NRP,USD,countryCode mean NP, US
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // Use backticks for template literals
  let img = element.parentElement.querySelector("img");

  img.src=newSrc;//.src property of an <img> element specifies the URL of the image to be displayed
}

//////


const BASE_URL="https://api.fastforex.io/fetch-all?api_key=f39d15e9cc-8706b171bb-sggmeo"
btn.addEventListener("click",async(e)=>{
  e.preventDefault()//prevent form submitting form
  // let amount=document.querySelector(".amount input")
  // let amtVal=amount.value;// Assigns the value of the input field to amtVal
  // console.log(amtVal);
  // if(amtVal ==="" || amtVal < 1 ){
  //   amtVal = 1;
  //   amount.value="1"//putting value of amount in input box
  // }
  console.log(fromCurr.value,toCurr.value);
  const apiKey = "fe7693b6e2-85d3625544-sggn4a";
  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(`https://api.fastforex.io/fetch-one?from=${fromCurr.value}&to=${toCurr.value}&api_key=${apiKey}`
  );
  let data=await response.json();
  console.log(data);
  

  let rate=data.result[toCurr.value]
  msg.innerText=1+fromCurr.value+`=${rate.toFixed(2)}`+toCurr.value;
  //document.querySelector("h2").innerHTML=`Converted Amount=${amount.value*rate.toFixed(2)}`
  converted.innerText=`Converted Amount is =${amount.value*rate.toFixed(2)} `+toCurr.value;//.toFixed(2) is to write only two decimal after a point

  
  })




