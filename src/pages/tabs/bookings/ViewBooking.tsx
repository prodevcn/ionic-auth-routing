import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const ViewBooking: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ViewBooking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>ViewBooking</IonText>
      </IonContent>
    </IonPage>
  )
}

export default ViewBooking