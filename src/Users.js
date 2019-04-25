import React from 'react';

import List from './List'


class Users extends React.Component {
    state = {
        users: null,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api?results=10')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        const filteredUsers = (
            this.state.users &&
            this.state.users.filter &&
            this.state.users.filter (
                user => {
                    const name = (user.name.first + user.name.last).toLowerCase()
                    const searchTerm = this.state.searchTerm.toLowerCase()
                    const searchTermWithoutSpaces = searchTerm.replace(/ /g, '')
                    const searchTermWithoutDiacritics = searchTermWithoutSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

                    return name.includes(searchTermWithoutDiacritics)
                }
            )
        )

        return (
            <div>
                
                <List
                    users={filteredUsers}
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                />
            </div>
        )
    }
}

export default Users