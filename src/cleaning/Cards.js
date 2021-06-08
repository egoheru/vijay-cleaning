import React, { Component } from 'react'
import Header from '../Header'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import "./Cards.css";
import HowWork from '../realstate/HowWork';
import HeaderAir from '../AirCleaning/HeaderAir';
import FeaturedScreen from '../screens/FeaturedScreen'
import CleanFooter from './CleanFooter';
    
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
           return(
               <div className="projects-grid">
                  {/* <HeaderAir/> */}
                   {/* PART-1 */}
                {/* // Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1620952563communal-areas-cleaning.jpg) center / cover' }}>
                   Cleaning services #1
                   </CardTitle>
                   <CardText>
                   Our Cleaning services are secured & available 24/7. We have made it so flexible for you so that, you can book us anytime you want, you do not need to run around ring for companies.
                   </CardText>
                   <CardActions border>
                       <Button colored>Proposals</Button>
                       {/* <Button colored>property</Button> */}
                       <Button colored>Analyze</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>

                {/* // Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621553895fogger2.png) center / cover' }}>
                   Domestic Cleaning #2
                   </CardTitle>
                   <CardText>
                   Your tenants will not have to ring you to report any problem as they will do all that through ours and or their individual dashboard where they will report any problem and will be attend. 
                   </CardText>
                   <CardActions border>
                       <Button colored>Consultancy</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Services</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                
                {/* // Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621468752after-build.jpg) center / cover' }}>
                   Handyman Services #3
                   </CardTitle>
                   <CardText>
                   Do not worry about anything anymore as we take all the burden off your shoulder. You can sleep peace, go on holidays, or do anything you want as your properties will be in safe hands.
                   </CardText>
                   <CardActions border>
                       <Button colored>FUNDING</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>RESOURCES</Button>
                   </CardActions>
                   <CardMenu style={{color: 'green'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
               </div>
               
           )       
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* PART-2 */}
                {/* // Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621557283YIW7VA6LWBBFVBE64OLRIVF7MI.jpg) center / cover' }}>
                   Office Cleaning #1
                   </CardTitle>
                   <CardText>
                   Our cleaning services what you need, deserve and desire. So, what are you waiting for? Just take less than 10 munities of your time to register with us or give us a call today and finally complete.
                   </CardText>
                   <CardActions border>
                       <Button colored>Strategy</Button>
                       {/* <Button colored>property</Button> */}
                       <Button colored>Investment</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>

                {/* // Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_162155447626062037-worker-cleaning-the-train-at-station-thailand-.jpg) center / cover' }}>
                   Industrial Cleaning #2
                   </CardTitle>
                   <CardText>
                    Tazzer Clean will help you with all your cleaning work. We offer all types of cleaning services including apartment cleaning, carpet cleaning, house cleaning, orafter renovation services
                   </CardText>
                   <CardActions border>
                       <Button colored>Management</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Restructuring</Button>
                   </CardActions>
                   <CardMenu style={{color: 'yellow'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                
                {/* // Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                   <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621468957office-cleaning-in-Kenya.jpg) center / cover' }}>
                   Medical Cleaning #3
                   </CardTitle>
                   <CardText>
                   We are the best Traditional and Eco-Friendly cleaning services that helps you with any  type cleaning work. You can instantly book your top-class cleaning professional at affordable prices.
                   </CardText>
                   <CardActions border>
                       <Button colored>Savings</Button>
                       {/* <Button colored>CodePen</Button> */}
                       <Button colored>Negotiation</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                   </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                {/* PART-3 */}
          {/* // Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621549455318f54a08b8ab8daad79823563a79257.jpg) center / cover' }}>
             Appliances Cleaning #1
             </CardTitle>
             <CardText>
             We at Tazzer Clean take care of Home cleaning, furniture assembly, TV mounting, wall hanging, and all other cleaning works. Refund Policy: We provide a hassle-free refund policy for our buyer
             </CardText>
             <CardActions border>
                 <Button colored>Acquisition</Button>
                 {/* <Button colored>property</Button> */}
                 <Button colored>Startup</Button>
             </CardActions>
             <CardMenu style={{color: 'yellow'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>

          {/* // Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1620924862body-01.jpg) center / cover' }}>
             window Cleaning #2
             </CardTitle>
             <CardText>
             We always great home cleaning services to our customers & we are the best home service professionals with affordable pricing and flexible scheduling. Our Cleaning services are secured & available
             </CardText>
             <CardActions border>
                 <Button colored>DueDiligence</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>Forecasting</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          
          {/* // Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1622423173shutterstock_1579297081.jpg) center / cover' }}>
             Carpet & Rug #3
             </CardTitle>
             <CardText>
             Tazzer Clean a professional marketplace where you can find any type of cleaning services including pest control services, cleaners and cleaning services or any popular event. We covers all types
             </CardText>
             <CardActions border>
                 <Button colored>Finance</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>CapitalMarket</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                {/* PART-4 */}
          {/* // Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1620904265house-cleaning.jpg) center / cover' }}>
             Industrial Cleaning #1
             </CardTitle>
             <CardText>
             We are a team of professionals where we make every effort to provide reliable services. However, in any case, you are not satisfied with our cleaning services, please let us know & we will re-do
             </CardText>
             <CardActions border>
                 <Button colored>Corporate</Button>
                 {/* <Button colored>property</Button> */}
                 <Button colored>Partnerships</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>

          {/* // Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1620905939tile-and-grout-cleaning-products.png) center / cover' }}>
             Medical Cleaning  #2
             </CardTitle>
             <CardText>
             And if still, you are not satisfied with the work, then we will replace and send other professional cleaners to do the job and make sure the mistake never repeats we will do the complete for free
             </CardText>
             <CardActions border>
                 <Button colored>Mergers</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>BusinessPlanning</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          
          {/* // Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
             <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://www.tazzerclean.co.uk/uploads/services/se_full_1621472751585107178-612x612.jpg) center / cover' }}>
             Choose Professionals #3
             </CardTitle>
             <CardText>
             Do not worry about anything anymore as we take all the burden off your shoulder. You can sleep peace, go on holidays, or do anything you want as your properties will be in safe hands with us
             </CardText>
             <CardActions border>
                 <Button colored>Improvement</Button>
                 {/* <Button colored>CodePen</Button> */}
                 <Button colored>Alternatives</Button>
             </CardActions>
             <CardMenu style={{color: 'green'}}>
                <IconButton name="share" />
             </CardMenu>
          </Card>
          </div>
            )
        }
     }


    render() {
        return (
            <div className="card-background">
               {/* <Header />  */}
               <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                  <Tab> Cleaning </Tab>
                  <Tab> commercial </Tab>
                  <Tab> Appliances </Tab>
                  <Tab> Industrial </Tab>
               </Tabs>
                 {/* <section className="projects-grid"> */}
                    <Grid  >
                       <Cell col={12}>
                           <div className="content"> {this.toggleCategories()} </div>
                       </Cell>
                    </Grid>
                  {/* </section> */}
            </div>
            <HowWork />
             <FeaturedScreen/>
             <CleanFooter />
            </div>
        )
    }
}

export default Cards;
