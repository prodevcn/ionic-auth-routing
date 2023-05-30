import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { IonReactRouter } from '@ionic/react-router'
import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { libraryOutline, personOutline, searchOutline } from 'ionicons/icons'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/reducers/user'

import Cover from '../pages/auth/cover'
import Login from '../pages/auth/login'

import Explore from '../pages/tabs/explore'
import Search from '../pages/tabs/explore/search'

import Profile from '../pages/tabs/profile'
import EditProfile from '../pages/tabs/profile/EditProfile'

import Bookings from '../pages/tabs/bookings'
import ViewBooking from '../pages/tabs/bookings/ViewBooking'


const AuthRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Switch>
        <Route exact path="/">
          <Redirect to="/cover" />
        </Route>
        <Route exact path="/cover" component={Cover} />
        <Route exact path="/login" component={Login} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </IonRouterOutlet>
  )
}

const MainRoutes: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/explore" />
        </Route>
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore/search" component={Search} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/bookings/view-booking" component={ViewBooking} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route>
          <Redirect to="/explore" />
        </Route> 
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="explore" href="/explore">
          <IonIcon icon={searchOutline} />
        </IonTabButton>
        <IonTabButton tab="bookings" href="/bookings">
          <IonIcon icon={libraryOutline} />
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

const AppRoutes: React.FC = () => {
  const user = useSelector(selectUser)

  return (
    <IonReactRouter>
      {user ? <MainRoutes /> : <AuthRoutes />}
    </IonReactRouter>
  )
}

export default AppRoutes