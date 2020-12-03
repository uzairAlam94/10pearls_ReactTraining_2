
// Parent Child Component Relation -----------------------------------

// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "testing",
//             lastValue: "olala"
//         };
      
//     }

//     changeName = (value) => {
//         this.setState({ name : value });
//         console.log(this.state);
//     }

//     render() {
//         const myProps = {
//             changeName: this.changeName
//         }
//         console.log("Parent rendering");
//         //<button onClick = {() => this.changeName("test" + Math.random())} />
//         return <div><Child {...myProps} /></div>
//     }
// }

// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     shouldComponentUpdate(nextProps) {
//         return this.props.changeName !== nextProps.changeName;
//     }

//     render() {
//         console.log("Child Rendering");
//         return <button onClick = {() => this.props.changeName("test" + Math.random())} />
//     }
// }

// Parent Child Component Relation -----------------------------------
