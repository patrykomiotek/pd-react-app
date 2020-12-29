import React, {useState, useEffect} from 'react';

import {Form, TextBox, Textarea} from '../../components/Form';

function Home() {
  const [user, setUser] = useState({
    name: 'Patryk',
    surname: 'O',
    age: 35,
  });

  // with dependencies
  // useEffect(() => {
  //   console.log('componentDidUpdate');

  //   return () => {
  //     // clearIntervals, clear WS
  //     // removeListener
  //   };
  // }, [user]);

  // // with no dependencies
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      // clearIntervals, clear WS
      // removeListener
    };
  }, []);

  const handleChange = event => {
    console.log('Hej!', event.target.value);
    setUser({...user, name: event.target.value});
  };
  return (
    <div>
      <h1>Hello from Home, {user.name}</h1>
      <Form>
        <div>
          <TextBox onChange={handleChange} placeholder="123" />
        </div>
        <div>
          <Textarea />
        </div>
      </Form>
    </div>
  );
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

//   componentDidMount() {
//     console.log('Hi from componentDidMount');
//     fetch('https://evil.com')
//     .then(response => response.json())
//     .then(data => this.setState({ name: data }))
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Hi from componentDidUpdate', prevProps, prevState);
//   }

//   componentWillUnmount() {
//     console.log('Hi from componentWillUnmount');
//   }

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

// export default Home;

// component Home written in other ways
// const Home = () => {
//   return <h1>Hello from Home</h1>;
// }
// const Home = () => (<h1>Hello from Home</h1>);
// const Home = () => <h1>Hello from Home</h1>;

// export default Home;

// export default <h1>Hello from Home</h1>
