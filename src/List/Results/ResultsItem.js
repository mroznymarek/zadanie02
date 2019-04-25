import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const ResultsItem = ({ user }) => {
  const name = user.name.first + ' ' + user.name.last

  return (
    <ListItem
      alignItems={'flex-start'}
    >
      <ListItemAvatar>
        <Avatar
          alt={name}
          src={user.picture.medium}
        />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={user.email}
      />
    </ListItem>
  )
}

export default ResultsItem