import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/user'
import { Link, useHistory } from 'react-router-dom'
import { mailOutline, lockClosedOutline } from 'ionicons/icons'

const Login: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>()

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const handleLogin = () => {
    dispatch(login({ uid: '1234', email: 'test@mail.com' }))
    history.replace("/")
  }

  return (
    <IonPage>
      <IonContent className="ion-padding" scrollY={false}>
        <div className="area-title">
          <IonText className="title">Login</IonText>
        </div>
        <IonItem lines="none" className="space-y">
          <IonIcon icon={mailOutline} slot="start" size="small" />
          <IonInput
            className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ion-touched`}
            fill="solid"
            type="email"
            placeholder='Email Address'
            errorText="Invalid email"
            onBlur={() => markTouched()}
            onIonInput={(event) => validate(event)}
          />
        </IonItem>
        <IonItem lines="none" className="space-y">
          <IonIcon icon={lockClosedOutline} slot="start" size="small" />
          <IonInput
            className=""
            fill="solid"
            type="password"
            placeholder='Password'
            errorText="Invalid password"
            onBlur={() => { }}
            onIonInput={() => { }}
          />
        </IonItem>
        <IonButton expand="block" className="space-ty-large" onClick={() => { handleLogin() }}>
          Login
        </IonButton>
        <div className="area-footer">
          <IonText>Don't have an account?</IonText>
          <Link to="/register" color="primary">Sign Up</Link>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login