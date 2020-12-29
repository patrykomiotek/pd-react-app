import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {Form, TextBox, Textarea, Select, Checkbox} from '../../components/Form';

function Home() {
  // const {register, handleSubmit, errors} = useForm({ defaultValues: {first_name: 'Ola'}});
  const {register, handleSubmit, errors, setValue} = useForm();
  // eslint-disable-next-line
  const [user, setUser] = useState({
    name: 'Patryk',
    surname: 'O',
    age: 35,
  });
  useEffect(() => {
    const user = {first_name: 'Ola', last_name: 'Kowalska'};
    Object.keys(user).forEach(prop => setValue(prop, user[prop]));
    // setValue('first_name', 'Alandnfnsdnfsnfnsdnfnsdnfnsdnfsdnfnsnsndf', { shouldValidate: true })
  }, [setValue]);
  const handlePingwin = data => console.log(data);

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

  // const handleChange = event => {
  //   console.log('Hej!', event.target.value);
  //   setUser({...user, name: event.target.value});
  // };
  // console.log(errors);
  return (
    <div>
      <h1>Hello from Home, {user.name}</h1>
      <Form onSubmit={handleSubmit(handlePingwin)}>
        <div>
          <TextBox
            name="first_name"
            label="First name"
            ref={register({
              required: 'This filed is required',
              maxLength: {
                value: 20,
                message: 'You should type max 20 characters!',
              },
            })}
            errors={errors}
          />
        </div>
        <div>
          <TextBox
            name="last_name"
            label="Last name"
            ref={register({
              required: 'This filed is required',
              maxLength: {
                value: 20,
                message: 'You should type max 20 characters!',
              },
            })}
            errors={errors}
          />
        </div>
        <div>
          <Textarea name="bio" label="User biography" errors={errors} ref={register} />
        </div>
        <div>
          <Select
            name="services"
            label="Select super value"
            items={[
              {value: 2, label: 'Two'},
              {value: 3, label: 'Three'},
            ]}
            errors={errors}
            ref={register}
          />
        </div>
        <div>
          <Checkbox
            name="terms"
            elemName="terms"
            label="I agree"
            ref={register({required: 'You should accept terms'})}
            errors={errors}
          />
        </div>
        <input type="submit" />
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
