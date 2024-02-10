// Test Solutions

// Task 1

const isNotANumber = (a) => (typeof a === "number"&& !isNaN(a) ? false : true);
const validateEntries = (
  entries,
  keysRange = [0, 5],
  valuesRange = [0, 100]
) => {
    let isError= false
    let message=''
  entries.every(([key, val]) => {
    if (isNotANumber(Number(key)))
       {console.log('key', key)
         message= "Some key is not an integer", isError= true 
    return false};
    if (isNotANumber(val))
       { message= "Some value is not an integer", isError= true
       return false };
    if (key < keysRange[0] || key > keysRange[1])
       { message= "Some key is out of range", isError= true
       return false };
    if (val < valuesRange[0] || val > valuesRange[1])
       { message= "Some value is out of range", isError= true 
       return false};
  });
  return {
    isError,message
  };
};

const getAccumulatedResults = (data) => {
  try{if (Array.isArray(data)) return console.log("Not an Object");
  const entries = Object.entries(data);
  if (entries.length == 0) return console.log("Object is Empty");
  const { isError, message = "" } = validateEntries(entries);
  if (isError) {
    console.log(message);
    return;
  }
  const result = entries.reduce(
    (acc, [key, val]) => {
      acc.accumulatePercentage += val;
      acc.accumulateNote += key * val;
      return acc;
    },
    { accumulatePercentage: 0, accumulateNote: 0 }
  );
  if (result.accumulatePercentage > 100) {
    console.log("Total sum of percentage exceeds the maximum");
    return;
  }
  console.log(result)
  return result;}catch(error){console.warn("Error",error)}
};



// getAccumulatedResults({2.9:40,3.1:30})
// getAccumulatedResults([{2.9:40,3.1:30}])
// getAccumulatedResults({})
// getAccumulatedResults()
getAccumulatedResults({2.9:null,3.1:30})
getAccumulatedResults({undefined:10,3.1:30})