import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import Parent from './family/parent';
import Alphabet from './alphabet/alphabet';
import Counter from './alphabet/counter/counter';
import Lifecycle from './lifecycle/lifecycle';
import RemoteAPI from './remote/remoteData';
import ParentForm from './form/parentform';


ReactDOM.render(<div>
    <Root></Root>
    <hr></hr>
    <Parent nameson="Umesh" namedaughter="Uma">Shah</Parent>
    <hr></hr>
    <Parent nameson="Omkar" namedaughter="Omi">Mehta</Parent>
    <hr></hr>
    <Parent nameson="Priyam" namedaughter="Priya">Malhotra</Parent>
    <hr></hr>
    <Alphabet fcolor="red" bcolor="yellow">R</Alphabet>
    <Alphabet fcolor="yellow" bcolor="red">A</Alphabet>
    <Alphabet fcolor="green" bcolor="pink">I</Alphabet>
    <Alphabet fcolor="pink" bcolor="purple">N</Alphabet>
    <Alphabet fcolor="black" bcolor="white">B</Alphabet>
    <Alphabet fcolor="brown" bcolor="pink">O</Alphabet>
    <Alphabet fcolor="red" bcolor="yellow">W</Alphabet>
    <hr></hr>
    <Counter></Counter>
    <hr></hr>
</div>, document.getElementById('root'))

ReactDOM.render(
<Lifecycle></Lifecycle>, document.getElementById("life"));
ReactDOM.render(
    <RemoteAPI></RemoteAPI>, document.getElementById("remote"));
 ReactDOM.render(
    <ParentForm></ParentForm>, document.getElementById("form"));
    


