import React from 'react'
import { render } from 'react-dom'
import { UserProvider } from './memory/UserContext'
import Cards from './memory/Cards'
import './assets/css/app.css';

const App = () => {
const data = [
    { key: 1, name: "angular", url: "angular.svg"         
    },
    { key: 2, name: "aurelia",url: "aurelia.svg"       
    },
    { key: 3, name: "backbone", url: "backbone.svg"        
    },
    { key: 4, name: "ember",url: "ember.svg" 
    },    
    { key: 5, name: "react", url: "react.svg"         
    },
    { key: 6, name: "vue", url: "vue.svg" 
    },
    { key: 7, name: "js-badge", url: "js-badge.svg"         
    },
];

const user = { name: 'Total dos Produtos Carrinho: ', loggedIn: true, data: data }

return ( 
    <UserProvider value={user}>
        <h1>    
            Card            
        </h1>            
        <Cards />    
    </UserProvider> 
    );
}

render(<App/>,document.getElementById('root'));