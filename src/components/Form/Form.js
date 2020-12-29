import styled from 'styled-components';

// <Form className="super-form" onSubmit={}><input /></Form>

function Form({children, className, ...restProps}) {
  return (
    <form className={className} {...restProps}>
      {children}
    </form>
  );
}

// styled.a
// styled.p
// styled.div

const FormWrapper = styled(Form)`
  border: #000 1px solid;
  padding: 10px;
`;

export {Form};
export default FormWrapper;
