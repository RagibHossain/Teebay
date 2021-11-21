
import { Link } from 'react-router-dom'
import { Button,Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import MyButton from '../Common/MyButton'
const Signin = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    Sign-in
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid iconPosition='left' placeholder='Email' />
                        <Form.Input
                            fluid
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Link to="/products">
                        <MyButton content="LOGIN"/>
                        </Link>
                      
                    </Segment>
                </Form>
                <Message>
                    Don't have an account?  <Link to="/signup">Sign Up</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Signin
