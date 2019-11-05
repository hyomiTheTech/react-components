// TODO
var GroceryListItem = ["Cereal", "kale", "oat meal"];

var GroceryList = props => {
  var onListItemClick = event => {
    alert("Nice choice!");
  };

  return (
    <ul>
      {props.lists.map(list => (
        <li onClick={onListItemClick}>{list}</li>
      ))}
    </ul>
  );
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>My Grocery List</h2>
        <GroceryList lists={GroceryListItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
