import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData( (prevData) => {
      return {
        ...prevData,
        [name]: (type === 'checkbox' ? checked : value)
      };
    });
  }
  
  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing all data:");
    console.log(formData);
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form onSubmit={submitHandler}
      className="space-y-2"
      >
        <label htmlFor="firstName"
        className="text-sm font-medium leading-6 text-gray-900"
        >First name</label>
        <br />
        <input 
        type="text" 
        name="firstName" 
        id="firstName" 
        placeholder="Akshit" 
        value={formData.firstName} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />

        <label htmlFor="lastName"
        className="text-sm font-medium leading-6 text-gray-900"
        >Last name</label>
        <br />
        <input 
        type="text" 
        name="lastName" 
        id="lastName" 
        placeholder="Sangwan" 
        value={formData.lastName} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        
        <br />

        <label htmlFor="email"
        className="text-sm font-medium leading-6 text-gray-900"
        >Email address</label>
        <br />
        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder="akshitsangwan10@gmail.com" 
        value={formData.email} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />

        <label htmlFor="country"
        className="text-sm font-medium leading-6 text-gray-900"
        >Country</label>
        <br />
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />

        <label htmlFor="streetAddress"
        className="text-sm font-medium leading-6 text-gray-900"
        >Street address</label>
        <br />
        <input 
        type="text" 
        name="streetAddress" 
        id="streetAddress" 
        placeholder="ABC/11" 
        value={formData.streetAddress} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />

        <label htmlFor="city"
        className="text-sm font-medium leading-6 text-gray-900"
        >City</label>
        <br />
        <input 
        type="text" 
        name="city" 
        id="city" 
        placeholder="Meerut" 
        value={formData.city} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />

        <label htmlFor="state"
        className="text-sm font-medium leading-6 text-gray-900"
        >State / Province</label>
        <br />
        <input 
        type="text" 
        name="state" 
        id="state" 
        placeholder="Uttar Pradesh" 
        value={formData.state} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />

        <label htmlFor="postalCode"
        className="text-sm font-medium leading-6 text-gray-900"
        >ZIP / Postal code</label>
        <br />
        <input 
        type="text" 
        name="postalCode" 
        id="postalCode" 
        placeholder="250001" 
        value={formData.postalCode} 
        onChange={changeHandler}
        className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />
        <fieldset>
          <legend
          className="text-sm font-medium leading-6 text-gray-900"
          >By Email</legend>

          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input 
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-4 rounded"
                /> 
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" 
                className="font-medium text-gray-900"
                >Comments</label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex h-6 items-center">
                <input 
                type="checkbox"
                id="candidates"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                className="h-4 w-4 rounded"
                /> 
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="candidates"
                className="font-medium text-gray-900"
                >Candidates</label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex h-6 items-center">
                <input 
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-4 rounded"
                /> 
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers"
                className="font-medium text-gray-900"
                >Offers</label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend className="contents text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>

          <div className="mt-4 space-y-2">

            <div className="flex items-center">
              <input 
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="h-4 w-4"
              />
              <label htmlFor="pushEverything"
              className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >Everything</label>
            </div>

            <div className="flex items-center">
              <input 
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="h-4 w-4"
              />
              <label htmlFor="pushEmail"
              className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >Same as email</label>
            </div>

            <div className="flex items-center">
              <input 
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No push notification"
              onChange={changeHandler}
              className="h-4 w-4"
              />
              <label htmlFor="pushNothing"
              className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >No push notification</label>
            </div>
            
          </div>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>

      </form>
    </div>
  );
}

export default App;
