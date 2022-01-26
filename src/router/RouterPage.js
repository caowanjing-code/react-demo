
import { Route} from 'react-router-dom';
import React,{ useState } from 'react';
import List from '../pages/List/List';
import Table from '../pages/Table/Desceiption'
import ChartCom from '../pages/Echarts/ChartCom';
import LineMarkerEcharts from '../pages/Echarts/LineMarkerEcharts';
import Stactic from '../pages/Echarts/Stactic';
import Form1  from '../pages/Team/Form1';
import AxiosTest from '../pages/AxiosTest';

export default class RouterPage extends React.Component{
render(){
    return(
        <div>
            <Route path="/list" component={List}/>
            <Route path="/table1" component={ChartCom}/>
            <Route path="/table2" component={LineMarkerEcharts}/>
            <Route path="/description" component={Table}/>
            <Route path="/table3" component={Stactic} />
            <Route path="/form1" component={Form1} />
            <Route path="/axiosTest" component={AxiosTest}/>
        </div>
    )
}
}