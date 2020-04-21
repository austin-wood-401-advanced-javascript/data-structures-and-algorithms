/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let temp;
    for(let i = 0; i < coordinates.length; i++){
        
        if( i !== 0 &&
           coordinates[i+1] && 
           Math.abs(coordinates[i-1][0]- coordinates[i][0]) !== Math.abs(coordinates[i-1][1] - coordinates[i][1]) && 
           Math.abs(coordinates[i-1][0]- coordinates[i][0]) !==0 && 
           Math.abs(coordinates[i-1][1]- coordinates[i][1]) !==0
          )
        {console.log(Math.abs(coordinates[i-1][0]- coordinates[i][0]), Math.abs(coordinates[i-1][1]- coordinates[i][1]))   }
        
    }
    return true
};
