import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onTermChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="ui label">Video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onTermChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
