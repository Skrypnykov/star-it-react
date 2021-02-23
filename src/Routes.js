import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, TestPage1, TestPage2, MainForm } from './Pages'

export default function MainRouter() {
  return (
    <Switch>
      <Route path={'/mainform'}>
        <MainForm/>
      </Route>
      <Route path={'/page1'}>
        <TestPage1/>
      </Route>
      <Route path={'/page2'}>
        <TestPage2/>
      </Route>
      <Route path={'/'}>
        <HomePage/>
      </Route>
    </Switch>
  )
}
