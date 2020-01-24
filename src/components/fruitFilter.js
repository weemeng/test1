import React from "react";

const fruits = ['apple','apricot','banana','citrus','durian','elderberry'];

class FruitsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
        }
    }

    updateInput = (event) => {
        this.setState({
            inputVal: event.target.value,
        });
    }

    render() {
        const filteredFruits = fruits.filter(fruit => fruit.startsWith(this.state.inputVal));
        console.log(filteredFruits)
        return (
        <div data-testid="fruit-filter">
            <input 
                aria-label="fruitFilter"
                type="text" 
                value={this.state.inputVal} 
                onChange={this.updateInput} />
            {filteredFruits.map(fruit => (
                <div data-testid="fruitName" key={fruit}>{fruit}</div>
            ))
            }
        </div>
        )
    }
}
export default FruitsFilter;