import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: '' };
    
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };
    
    onFormSubmit = event => {
        
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    
    render() {
        return (
        <div id="searchbar">
            <div className="ui search m-3">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="ui icon input" style={{ width: '60%', margin:'auto' }}>                  
                    <input 
                        className="prompt"
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Search Videos"
                        />
                    <i className="search icon"></i>
                </div>
            </form>
            </div>
        </div>
        );
    }
}

export default SearchBar;


// <div className="search-bar ui segment">
// <form onSubmit={this.onFormSubmit} className="ui form">
//     <div className="field">
//         <label>Video Search</label>
//         <input 
//             type="text" 
//             value={this.state.term}
//             onChange={this.onInputChange}
//             />
//     </div>
// </form>
// </div>