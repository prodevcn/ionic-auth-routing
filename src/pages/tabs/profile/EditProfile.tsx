import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const EditProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EditProfile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>EditProfile</IonText>
      </IonContent>
    </IonPage>
  )
}

export default EditProfile