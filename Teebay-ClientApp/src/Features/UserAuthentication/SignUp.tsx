import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react'
import MyButton from '../Common/MyButton'

const SignUp = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    Sign-Up
                </Header>
                <Form size='large'>
                    
                    <Segment stacked>
                        <Grid style={{margin:"20px"}} columns={5}>
                        <Grid.Row columns={2} centered>
                            <Grid.Column >
                            <Form.Input style={{width:"150px"}} placeholder='First Name' />
                            </Grid.Column>
                            <Grid.Column textAlign="right" >
                            <Form.Input style={{width:"150px"}}  placeholder='Last Name' />
                            </Grid.Column>
                           
                        </Grid.Row>
                        <Grid.Row columns={1} >
                            <Grid.Column>
                            <Form.Input  placeholder='Address' />
                            </Grid.Column>
                       
                         </Grid.Row>
                         <Grid.Row columns={2} centered>
                            <Grid.Column >
                            <Form.Input style={{width:"150px"}} placeholder='Email' />
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                            <Form.Input style={{width:"150px"}}  placeholder='Phone Number' />
                            </Grid.Column>
                           
                        </Grid.Row>
                        <Grid.Row columns={1} >
                            <Grid.Column >
                            <Form.Input
                            fluid
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1} >
                            <Grid.Column >
                            <Form.Input
                            fluid
                            iconPosition='left'
                            placeholder='Confirm Password'
                            type='password'
                        />
                            </Grid.Column>
                        </Grid.Row>
                     <Grid.Row centered> 
                     <MyButton content="REGISTER"/>
                     </Grid.Row>
                   
                        </Grid>
                      
                    </Segment>
                </Form>
                <Message>
                    Already have an account?  <Link to="/">Sign In</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp
