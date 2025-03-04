
export const Data = async () => {     
   const response =  await fetch('https://jsonfakery.com/jobs');
   return await response.json();
}

export default Data