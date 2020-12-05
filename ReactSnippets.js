
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

// LifeCycle -----------------------------------------------------
// class LifeCycle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggle: true
//         }
//         console.log("constructor");
//     }

//     static getDerivedStateFromProps() {
//         console.log("getDerivedStateFromProps");
//     }

//     shouldComponentUpdate() {
//         console.log("shouldComponentUpdate");
//         return true;
//     }

//     getSnapshotBeforeUpdate() {
//         console.log("getSnapshotBeforeUpdate");
//     }

//     componentDidMount () {
//         console.log("componentDidMount");
//     }

//     componentDidUpdate () {
//         console.log("componentDidUpdate");
//     }

//     componentWillUnmount() {
//         console.log("componentWillUnmount");
//     }

//     reRender = () => {
//         this.setState({ toggle: !this.state.toggle });
//     }

//     render() {
//         console.log("render");
//         return <button onClick={this.reRender}></button>
//     }
// }
// LifeCycle -----------------------------------------------------


// Binding ------------------
// var car = {
//     name: 'BMW',
//     tasks: ['transform', 'upgrade'],
//     showTasks: function() {
//       this.tasks.forEach(function(task) {
//         console.log(this.name + " wants to " + task);
//       });
//     }
// };

  // Binding-------------------