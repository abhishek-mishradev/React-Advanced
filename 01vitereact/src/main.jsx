import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement= {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }



const anotherElement=(
    <a href="https://google.com" target='_blanl'> Visit Google</a>
)


const anotherUser= "react advance"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:"_blank"},
    'click me to google',
    anotherUser

)




ReactDOM.createRoot(document.getElementById('root')).render(

    // MyApp() aaisa bhi likh skye h 

    // <MyApp />
    // anotherElement
    reactElement

    // <App/>

)
