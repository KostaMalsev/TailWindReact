//TODO
  console.log('starting react script')

  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  
  
  
  

const Component = props => {
		return (<div>My component!</div>);
	};

	const App = () => (
		<div className="App">
			<Component />
		</div>
	);

	const root = document.querySelector('#root');
	ReactDOM.render(<App />, root );

);