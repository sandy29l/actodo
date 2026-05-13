import '../index.css'
import Header from './header.js'
import Card from './card.js'
import Form from './form.jsx'
import { useLocation } from 'react-router-dom';

function Actodo() {
    const data=useLocation();
        return (
        <div className='bg-black p-10'>
            <div className='bg-white text-black p-5 border rounded-md  flex flex-col'>
                <div>
                    <Header username={data.state.user}></Header>
                </div>
                <div className="flex gap-7 justify-between my-5 flex-wrap">
                    <Card title="23^" content="chennai" clr="#8272Da"></Card>
                    <Card title="20 December" content="20.10.22" clr="#e7911d"></Card>
                    <Card title="Build Using" content="React" clr="#9fecdf"></Card>
                </div>
                <div>
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}
export default Actodo;