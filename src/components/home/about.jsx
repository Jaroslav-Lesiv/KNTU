import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { PostImage } from '../../ui'
import { connect } from 'react-redux'

export class About extends Component {

    render() {
        const { classes } = this.props
        return (
            <Paper style={{ padding: '25px 10px', marginTop: 5, marginBottom: 25 }} elevation={4}>
                <Typography className={classes.title} type="headline"  component="h1">
                    Хто ми такі?
                </Typography>
                <Typography paragraph component="p">
                    Кафедра «Обладнання хімічних виробництв і підприємств будівельних матеріалів» факультету машинобудування ХНТУ проводить підготовку інженерів-механіків хімічного профілю за фахом «Обладнання хімічних виробництв і підприємств будівельних матеріалів» та «Обладнання переробних і харчових виробництв».
                </Typography>
                <PostImage
                    image="/images/uploads/home/tech.jpg"
                    title="Contemplative Reptile"
                    />
                <Typography paragraph component="p">
                    Це ті спеціальності, що і сьогодні, і в майбутньому будуть користуватися особливим попитом як у нашій країні, так і в усьому світі.
                </Typography>
                <Typography className={classes.title} type="headline"  component="h1">
                Актуальність спеціальності
                </Typography>
                <PostImage
                    image="/images/uploads/home/set.jpg"
                    title="Contemplative Reptile"
                    />
                <Typography paragraph component="p">
                Актуальною для хімічних виробництв і промисловості будівельних матеріалів є підготовка спеціалістів, які могли б не тільки експлуатувати існуюче технологічне обладнання, але і здійснювати його модернізацію, проектування. Вміли б організувати переоснащення технологічної ланки виробництва новим устаткуванням з переводом її на безвідходний цикл отримання якісної продукції, професіонально здійснювати всю низку операцій  пов'язаних з продажем (придбанням) нового технологічного обладнання та запасних частин до нього.
                </Typography>
                <Typography paragraph component="p">
                    Підготовка спеціалістів та магістрів з „Обладнання хімічних виробництв і підприємств будівельних матеріалів” на базі бакалавріата дозволяє забезпечити підготовку фахівців, які з одного боку, володіють знанням сучасного технологічного устаткування та передових технологій отримання хімічної та будівельної продукції, методиками сучасних інженерних розрахунків, а з другого боку володіють навичками експлуатаційника. 
                    Випускники цієї спеціальності отримують навички роботи, як інженера - проектувальника так і навички експлуатаційника - механіка сучасного хімічного та будівельного виробництва.
                </Typography>
                <Typography paragraph component="p">
                У зв'язку з цим їм привласнюється комплексна кваліфікація "бакалавр" (після 4 років), «інженер-механік» або "магістр " (після магістратури).
                </Typography>
                <Button className={classes.button_center} component={Link} to={`/specialty`}color="primary" className={classes.button}>
                    До спеціальностей 
                </Button>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(About)
