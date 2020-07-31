import React, { useState, useEffect } from 'react';

import { Container, Title } from './styles';

import { Button, TouchableHighlight } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { addCourse } from '../../store/actions/courses'

import { makeLogin } from '../../services/login'

import Input from './Input'

const Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const handleEmail = (text) => {
    setState({
      ...state,
      email: text
    })
  }

  const handlePassword = (text) => {
    setState({
      ...state,
      password: text
    })
  }

  useEffect(() => {
    console.log('Teste console');
  }, [])

  useEffect(() => {
    console.log('courses', courses);
  }, [courses])

  useEffect(() => {
    console.log('state', state);
  }, [state])

  const login = async () => {
    try {
      const result = await makeLogin(state.email, state.password);
      console.log('retorno api', result);
      navigation.navigate('Courses')
    } catch (error) {
      console.log('error', error);
    }
    
  }

  return (
    <Container>
      <TouchableHighlight onPress={() => {
        console.log('Teste');
      }}>
        <Title>Projeto React Native</Title>
      </TouchableHighlight>
      <Input func={handleEmail} value={state.email} />
      <Input 
        secureText={true}
        func={handlePassword} 
        value={state.password} />
      <Button
        onPress={() => {
          login();
        }}
        title="Teste"
      />
    </Container>
  );
}

export default Home;