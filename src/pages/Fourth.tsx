import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../components/reUse/GlobalButton'
import circle5 from "../assets/circle5.png"

const Fourth = () => {
  return (
    <div>
        <Container>

        <Leftpics>
              <Oneimage src={circle5}/>
              <Twoimage/>
              <Thirdimage/>
              <Fourthimage/>
            </Leftpics>

            <Pics />
            <Div>
                <Title>Select the best from various online courses.</Title>
                <Text>Our online video courses give you the freedom to learn remotely, and our experts will <br/> guide you properly.</Text>
                <GlobalButton text='Join Today' width='150px' />
            </Div>
            <Pics />
            <Rightpic>
            <Oneimage  src={circle5}/>
              <Twoimage/>
              <Thirdimage/>
              <Fourthimage/>
            </Rightpic>
        </Container>
    </div>
  )
}

export default Fourth

const Text = styled.div`
font-size: 20px;
margin: 20px 0;
text-align: center;
line-height: 1.8;
`

const Title = styled.div`
font-size: 40px;
font-weight: 700;
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:1300px
`

const Rightpic = styled.div`
width:400px;
height:450px;
background-color:green;
display: flex;
justify-content: center;
align-items: center;
`;


const Leftpics = styled.div`
width:400px;
height:450px;
background-color:green;
display: flex;
justify-content: center;
align-items: center;
`;

const Oneimage = styled.img`
width:40px;
height:45px;
top:70px;
border-radius:50%
background-color:blue;
`;

const Twoimage = styled.img``;

const Thirdimage = styled.img``;

const Fourthimage = styled.img``;

const Pics = styled.img``;

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 500px;
background-color: #FEF0EF;
`