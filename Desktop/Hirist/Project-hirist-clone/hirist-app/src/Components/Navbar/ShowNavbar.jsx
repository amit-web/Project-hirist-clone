import React, { useState } from 'react'
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import { Navbar } from './Navbar'
import { Assessment } from './Assessment'
import { Dashboard } from './Dashboard'
import { Interviews } from './Interviews'
import { SearchResume } from './SearchResume'
import { Report } from './Report'

export const ShowNavbar = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/dashbord' exact component={Dashboard} />
                    <Route path='/assessment' exact component={Assessment} />
                    <Route path='/interviews' exact component={Interviews} />
                    <Route path='/searchResume' exact component={SearchResume} />
                    <Route path='/report' exact component={Report}/>
                </Switch>
            </Router>
            
       </div>
    )
}
