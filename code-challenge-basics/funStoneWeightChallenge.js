var lastStoneWeight = function(stones) {
    
    
    let sort = function(array){
            let temp;
        for(let i=0; i < array.length; i++){
        for(let k=0;k< array.length;k++){
            
            if(array[i]<array[k]){
                temp=array[i];
                array[i]=array[k];
                array[k]=temp;
            }   
        }
    }
        return array
    }
    sort(stones)
    for(let i = stones.length-1; i >=0 ;i--){
        
        console.log(stones,stones[i],i)
        
        if(stones[i] === stones[i-1]){
            stones.pop();
            stones.pop();
            i--
            sort(stones)
        } 
        else if(stones[i] > stones[i-1]){
            stones[i-1] = stones[i]-stones[i-1];
            stones.pop();
            sort(stones)

        }

    }
    if(stones.length===0){return 0} else {return stones[0]}
};
