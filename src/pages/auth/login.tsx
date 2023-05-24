import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/user'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(login({ uid: '1234', email: 'test@mail.com' }))
    history.replace("/")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>Login</IonText>
        <IonButton expand="block" onClick={() => { handleLogin() }}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Login