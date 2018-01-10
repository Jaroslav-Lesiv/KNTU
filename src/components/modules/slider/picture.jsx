import React, { Component } from 'react'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class Picture extends Component {
  render() {
    const { image, text, title } = this.props
    return (
        <Card style={{ width: '100%', borderRadius: 4 }}>
            {image &&
            <CardMedia
                style={{ minHeight: 500, borderRadius: 4 }}
                image={`/images/uploads/slider/${image}`}
                title={title || 'KNTU'}
                />}
            <CardContent>
            {title &&
            <Typography type="headline" component="h2">
                {title}
            </Typography>}
            {text &&
            <Typography component="p">
                {text}
            </Typography>}
            </CardContent>
        </Card>
    )
  }
}
 