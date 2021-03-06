import './main.html'
import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header'
import CreateLink from './components/create-link'
import { Links } from '../imports/collections/links'
import LinkList from './components/link-list'

const App = () => {
  return (
    <div>
      <Header />

      <CreateLink />

      <LinkList />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})