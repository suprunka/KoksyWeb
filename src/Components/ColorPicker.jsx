
export function GetColor(idNumber){
    if(idNumber == 0)
        return "--def-orange";
    if(idNumber == 1)
        return "--def-pink";
    if(idNumber% 4 == 0)
        return "--def-orange";
    if(idNumber% 3 == 0)
       return "--def-yellow";
    if(idNumber% 2 == 0)
       return "--def-blue";
    if(idNumber% 5 == 0)
       return "--def-pink";
}
export function GetColorByDate(lastOpened){
    var daysAgo = Math.round((new Date()-new Date(lastOpened))/ (1000 * 60 * 60 * 24),0)
    console.log(lastOpened,daysAgo)
    if(daysAgo>5)
    return "--def-orange" 
    if(daysAgo<1)
    return "--def-pink"
    if(daysAgo>=1)
    return "--def-blue"
    if(daysAgo>=3)
    return "--def-yellow"
  }
