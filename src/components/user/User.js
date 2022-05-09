import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
//import ScatterPlot from '../plots/ScatterPlot';
import { loadUsers, updateSelectedUser, getSleepTime } from './userDucks';
//Activity Indicator
//import { css} from '@emotion/core';
//import { ClipLoader } from 'react-spinners/ClipLoader';
//import ReactLoading from 'react-loading';


// Semanti ui
import 'semantic-ui-css/semantic.min.css'
import { Button,Divider,Header ,Grid} from 'semantic-ui-react';
//import { Button } from 'react-bootstrap';

// Google chart
import { Chart } from "react-google-charts";

// Uber chart
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

// Recharts
import LinePlot  from '../plots/LinePlot.recharts';

class User extends Component {
   
  render() {
    

    return (
      <div style={{ padding: '5em 5em' }}>
        <h1>
            Get Data from Dynamo Database 3
        </h1>
        <p>Get user's e-mail and child name followed by sleep time</p>

       
        <Grid>
            <Grid.Row>
                <Grid.Column>  
                <Button primary onClick={this.props.loadUsers}> get users </Button>      
                <Button primary  onClick={this.props.getSleepTime}> show data graph </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row container  style={{ position:'fixed',top:'50%', left:'50%', zIndex:1}}> 
            {/* <ClipLoader color={"orange"} size={100} loading={this.props.user.isloading} /> */}
            {/* <ReactLoading type={"bubbles"} color={"orange"} height={667} width={375}/> */}
            </Grid.Row>
        </Grid>
       
       
           {/*<Button primary onClick={this.props.loadUsers}> get users? </Button>*/}      
          {/*<Button secondary  onClick={this.props.getSleepTime}> show data graph </Button>*/}
       
         
          <hr />
        <Select value={this.props.user.selectedOption} onChange={(sel)=>this.props.updateSelectedUser(sel)}
                 options={this.props.user.allUsers} />
          


             
          
              
          
          
       
            {/* scatter plot  */}
            
            {/*
            <ScatterPlot xData={this.props.user.plotData.x}
                          yData={this.props.user.plotData.y} />
            */}
            

            
      {/*   
                      <XYPlot xType="time"
                        width={900}
                        height={300}>
                         <HorizontalGridLines /> 
                        <LineSeries
                          data={this.props.user.plotData}/>
                       <XAxis tickLabelAngle={45}/>
                        <YAxis />
                      </XYPlot>
      */}
      <hr/>
            <LinePlot data={this.props.user.plotData} />
            
          
      </div>
       )
      }
}

    

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
    return {
       loadUsers : () => dispatch(loadUsers()),
       getSleepTime : () => dispatch(getSleepTime()),
       updateSelectedUser : (selection)=> dispatch(updateSelectedUser(selection))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(User);

  
  
