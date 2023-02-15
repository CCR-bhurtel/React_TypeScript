import { ReactElement } from 'react';
import './App.css';
import Button from './Components/Button';
import Container from './Components/Container';
import Greet from './Components/Greet';
import Heading from './Components/Heading';
import Input from './Components/Input';
import Oscar from './Components/Oscar';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';

function App(): ReactElement {
    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    };
    const personList = [
        {
            first: 'Bruce',
            last: 'Wayne',
        },
        {
            first: 'Clark',
            last: 'Kent',
        },
        {
            first: 'Diana',
            last: 'Prince',
        },
    ];
    return (
        <div className="App">
            <Greet name={'shishir'} messageCount={10} isLoggedIn={false} />
            <Person name={personName} />
            <PersonList personList={personList} />
            <Status status="Fetched" />
            <Heading>
                <h2>Hello world</h2>
            </Heading>

            <Oscar>
                <Heading>
                    <h2>Oscar goes to leonardo</h2>
                </Heading>
            </Oscar>
            <Button
                handleClick={(event, id) => {
                    console.log('Button Clicked', id);
                }}
            />
            <Input
                handleChange={(event) => {
                    console.log('Input value changed');
                }}
                value={'hello world'}
            />
            <Container
                styles={{ color: 'white', border: 'none', padding: '10px', background: 'navy', width: '10rem' }}
            />
        </div>
    );
}

export default App;
