import React, {Component} from 'react';

class Dogs extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let dogBreeds = ['Poodle','Yorkie','Beagle'];
        return(
            <div>
                <h1 className='blue'>Dogs:</h1>
                {/* Iterating through the array of dogs above and reurning each breed inside of a p tag */}
                <div className='green'>
                    {/* pass a variable to represent the current element and a variable to represent the current indec position into map - set a 'key' attribute in your returned element equal to the current index position and set the value to display  */}
                    {   
                        dogBreeds.map((dog, index) =>{
                            return <p key={index}>{dog}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dogs;