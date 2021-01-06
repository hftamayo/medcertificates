import React from 'react'
import UsersProvider from './Contenedor'
import Form from './Form'
import List from './List'


function APIFetchingFull() {
    return (
        <div className="App-frmusers">
            <UsersProvider>
                <List />
                <Form />            
            </UsersProvider>
        </div>
    )
}

export default APIFetchingFull
