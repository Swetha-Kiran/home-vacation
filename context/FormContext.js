'use client'
import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {


  const title = {
    0: 'Contact Info',
    1: 'Experience',
    2: 'Why Invest',
    3: 'Reach in India',
    4: 'Sales Roadmap',
    5: 'Time Frame',
    6: 'Sales Description',
    7: 'Payment',
    8: 'Feedback'
  }

  const [step, setStep] = useState(0)

  const [formData, setFormData] = useState({
    companyName: "",
    pan: "",
    reqcontactName: "",
    reqdesignation: "",
    reqemail: "",
    reqmobileNum: "",
    landlineNum: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    website: "",
    logo: "",
    domainOfExpertise: "",
    experience: "",
    previousSale: "",
    agents: "",
    investmentAmount: "",
    networkDescription: "",
    return: "",
    minimumProfit: "",
    maximumProfit: "",
    districtSpecific: "",
    citySpecific: "",
    stateSpecific: "",
    sales: "",
    sixMonths: "",
    oneYear: "",
    twoYears: "",
    threeYears: "",
    fourYears: "",
    fiveYears: "",
    tenYears: "",
    salesPlan: "",
    paymentMOde: "",
    feedBack: ""
  });




  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isZipValid, setIsZipValid] = useState(true)

  // Function to store form data in localStorage
  function storeFormData() {
    const formDataToStore = {
      companyName: formData.companyName,
      pan: formData.pan,
      reqcontactName: formData.reqcontactName,
      reqdesignation: formData.reqdesignation,
      reqemail: formData.reqemail,
      reqmobileNum: formData.reqmobileNum,
      landlineNum: formData.landlineNum,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      country: formData.country,
      website: formData.website,
      logo: formData.logo,
      domainOfExpertise: formData.domainOfExpertise,
      experience: formData.experience,
      previousSale: formData.previousSale,
      agents: formData.agents,
      investmentAmount: formData.investmentAmount,
      networkDescription: formData.networkDescription,
      return: formData.return,
      minimumProfit: formData.minimumProfit,
      maximumProfit: formData.maximumProfit,
      districtSpecific: formData.districtSpecific,
      citySpecific: formData.citySpecific,
      stateSpecific: formData.stateSpecific,
      sales: formData.sales,
      sixMonths: formData.sixMonths,
      oneYear: formData.oneYear,
      twoYears: formData.twoYears,
      threeYears: formData.threeYears,
      fourYears: formData.fourYears,
      fiveYears: formData.fiveYears,
      tenYears: formData.tenYears,
      salesPlan: formData.salesPlan,
      paymentMOde: formData.paymentMOde,
      feedBack: formData.feedBack

    };

    localStorage.setItem('formData', JSON.stringify(formDataToStore));
  }


  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))

    storeFormData();

    if (name === 'reqmobileNum') {
      value = value.replace(/\D/g, '')
      const mobilePattern = /^\d{10}$/;
      setIsMobileValid(mobilePattern.test(value));
    }
    else if (name === 'reqemail') {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setIsEmailValid(emailPattern.test(value));
    }
    else if (name === 'zip') {
      value = value.replace(/\D/g, '')
      const zipPattern = /^\d{6}$/;
      setIsZipValid(zipPattern.test(value));
    }


  }
  const canNextPage1 = Object.keys(formData)
    .filter(key => key.startsWith('req'))
    .map(key => formData[key])
    .every(Boolean)



  const disablePrev = step === 0

  const disableNext =
    (step === Object.keys(title).length - 1)
    || (step === 0 && !canNextPage1)

  const showText =
    (!disableNext || step === Object.keys(title).length - 1)

  const prevHide = step === 0

  const skipHide = (step === 0) || (step === Object.keys(title).length - 1)

  const nextHide = step === Object.keys(title).length - 1

  const submitHide = step !== Object.keys(title).length - 1


  return (
    <FormContext.Provider value={{
      title, step, setStep, formData, setFormData, handleInputChange, disablePrev, disableNext, prevHide, nextHide, submitHide, skipHide,
      isMobileValid, isEmailValid, isZipValid, showText
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext