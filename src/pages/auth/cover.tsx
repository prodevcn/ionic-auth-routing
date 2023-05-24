import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Cover: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>Cover</IonText>
        <IonButton routerLink='/login'>login</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Cover