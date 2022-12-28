import styled from 'styled-components'
//implement the styled-components logic here.

const Card = styled.div`
    box-sizing: border-box;
    max-width: 410px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Input = styled.input`
    padding: 1rem;
    border: 1px solid #999;
    margin-bottom: 1rem;
    font-size: 0.8rem;
`

const Button = styled.button`
    background: linear-gradient(to bottom, #6371c7, #5563c1);
    border-color: #3f4eae;
    border-radius: 3px;
    padding: 1rem;
    color: white;
    font-weight: 700;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    cursor: pointer;
`
export default function LoginForm() {
    return (
    <Card>
        <Form id="login-form">
            <Input type="email" id="email" name="email"></Input>
            <Input type="password" id="password" name="password"></Input>
        </Form>
        <Button type='submit' value="Submit" form='login-form'>Submit</Button>
    </Card>
    )
}