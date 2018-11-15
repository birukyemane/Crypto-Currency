// string sorting function

function sortString(key,option,result){
    if(option==='A'){
      result.sort(function(a, b) {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }  
        
        // names must be equal
        return 0;
      });
  
    } else {
      result.sort(function(a, b) {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }  
        // names must be equal
        return 0;
      });
    } 
  }


  function sortNumber (key, option,result){
    if(option === 'A'){
      result.sort((a, b) =>{
        return  a[key] - b[key]; 
      });
    }else {
      result.sort((a, b) =>{
        return  b[key] - a[key];
      });
    }  
   }

  export {sortString,sortNumber};