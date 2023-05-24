import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Search: React.FC = () => {
  const location = useLocation()
  const [info] = useState<any>(location.state)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>{info.productId}</IonText>
        <IonText>Search</IonText>
      </IonContent>
    </IonPage>
  )
}

export default Search