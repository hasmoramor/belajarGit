const TypeOfFruit = () => {
	return (
	<div>
		<h2> Fruits : </h2>
		<ul>
			<li>Apples</li>
			<li>Blueberries</li>
			<li>Strawberries</li>
			<li>Banana</li>
		</ul>
	</div>
	
const Fruits = () => {
	return (
		<div>
			<TypeOfFruit />
		</div>
	);
}

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div>
				<h1> Type Of Fruits </h1>
					<Fruit />
			</div>
		);
	}
	
export default App;