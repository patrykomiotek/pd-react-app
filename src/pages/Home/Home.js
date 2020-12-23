function Home() {
  return <h1>Hello from Home</h1>;
}

export default Home;

// class Home extends React.Component {
//   state = {
//     name: 'Patryk',
//     surname: 'O',
//     age: 35
//   };
//   // constructor(props) {
//   //   super(props);

//   //   // 1.
//   //   this.handleChange = this.handleChange.bind(this);
//   // }

//   // 3. bind using arrow functions
//   handleChange = (event) => {
//     console.log('Hej!', event.target.value);
//     this.setState({ name: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello from Home</h1>
//         {/* <input type="text" onChange={this.handleChange.bind(this)} /> */}
//         <input type="text" onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

// component Home written in other ways
// const Home = () => {
//   return <h1>Hello from Home</h1>;
// }
// const Home = () => (<h1>Hello from Home</h1>);
// const Home = () => <h1>Hello from Home</h1>;

// export default Home;

// export default <h1>Hello from Home</h1>