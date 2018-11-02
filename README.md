# CalHacks React Workshop Starter Code
This is the starter code for the React workshop taught at CalHacks 2018. The repo with final code can be found [here](https://github.com/abaruah117/calhacks-react).

## Components

In order to clean up your code, it’s beneficial to use components. A component is a functionality of React that allows you to separate parts of your code and abstract them in the main code.

Think of each component as an *independent and *reusable* piece of code where different components interact together in the main code.
**Independent** —  components can work in isolation. Once a fully-functioning component is created, it can be abstracted away and used independently in other parts of code
**Reusable** —  components keep you from re-copying and pasting code; instead, by sectioning off the code into a component, only the component needs to be recalled.

Components work much like JavaScript functions in the sense that they take in props (see documentation below) and determine what should appear on screen.

Take a look at our sample code to get a better understanding the necessity of having components.The to-do list items in our sample code are a perfect opportunity for us to use components. Since there are multiple items with similar styling and the text for each item is the only that changes, this means  the item itself is the component and the text is the prop.

There are two ways to define a component: as a function and as a class.
**Function**
function Welcome (props) {
	return <h1> Hello, {props.name} </h1>;
}
**Class**
class Welcome extends React.Component{
	render(){
		return <h1> Hello, {this.props.name} </h1>;
	}
}

So what exactly is happening in {this.props.name}?

## Props
Each component consists of inputs that are called props, which is short for “properties”. Props are passed to the component in the same way that arguments are passed into a function and allows you to customize each component. You can use this.props to access properties that are passed to the component.

So how do you create and use props?

From the class component that you made above, you already know that you will be passing in a prop called name from {this.props.name}.

So let’s start by making a few Welcome objects! As you can see, each Welcome object takes in a different name.

<Welcome name=’Parth’/>
<Welcome name=’Trevor’/>
<Welcome name=’Amitav’/>

Great! Now you have three different Welcome objects that will render the same output every time. But what if you want that output to change? Well, that’s why state variables exist!

## State Variables

The state is also an attribute of a component. It can be accessed using this and luckily, state variables use syntax much like props: this.state.name.

States are created in the constructor. Let’s create a counter as an example below.

	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

There can be multiple states created in a component, but here we just have one, which is count.

Like we mentioned earlier, what differentiates state variables from props is the fact that state variables can be changed. So now that we have count ready to go, how exactly do we do change it?

Well, this.setState allows us to update our states. Let’s try it out with count.

	this.setState((prevState, props) => {
		return { count: prevState.count + 1 }
	});

Here, count increases by one every time this.setState is called. It also automatically re-renders the component every time it changes so you don’t have to worry about it.

## Functionality of Components

Components can be used in defining other components as well.  For example, an App component could run our Welcome many times:

function App() {
	return (
		<div>
			<Welcome name=’Parth’/>
<Welcome name=’Trevor’/>
<Welcome name=’Amitav’/>
</div>
	);
}

A component should be simple and easy to read. If a component every becomes too complicated, don’t be afraid to split the component into smaller components! For example, in this following function we have a Comment component.

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


However, the code here is quite long and disorganized. Thus, we can abstract away some of this into different components. For example, the UserInfo div can become a different component! The UserInfo component would look something like this:

function UserInfo(props) {
  return (
 	<div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>

  );
}

With this, the Comment component can be simplified to the following:

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Notice how this can be simplified further if the Avatar className is sectioned off into another component. Try this yourself if you’d like to see more efficient code!

