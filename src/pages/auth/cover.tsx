import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Cover: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false} className="ion-padding">
        <div className="area-title">
          <IonText className="title" color="dark">Ionic Auth Routing</IonText>
        </div>
        <div className="fab-bottom">
          <IonButton
            fill="clear"
            expand="block"
            className="fab-bottom"
            routerLink='/login'
            color="dark"
          >login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Cover