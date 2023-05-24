import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { searchOutline } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Explore: React.FC = () => {
  const history = useHistory()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>Explore</IonText>
        <IonButton fill="solid" expand="block" onClick={() => { history.push({ pathname: "explore/search", state: { productId: "0x123456" } }) }}>
          <IonIcon icon={searchOutline} />
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Explore