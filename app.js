// TODO
var GroceryListItem = ["Cereal", "kale", "oat meal"];

var GroceryList = props => {
  return (
    <ul>
      {props.lists.map(list => (
        <li>{list}</li>
      ))}
    </ul>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? "line-through" : "none"
    };

    return (
      <div>
        <h2>My Grocery List</h2>
        <GroceryList
          style={style}
          onClick={this.onListItemClick.bind(this)}
          lists={GroceryListItem}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
