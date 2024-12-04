import { 
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonItem, IonLabel, IonInput, IonText, IonButton, IonIcon 
  } from '@ionic/react';
  import React, { useState } from 'react';
  import { checkmarkOutline } from 'ionicons/icons';
  import { useHistory } from 'react-router-dom';
  import './PaginaReserva.css';
  
  const IngresoRut: React.FC = () => {
    const [rut, setRut] = useState('');
    const history = useHistory();
  
    const handleRutChange = (value: string | null | undefined) => {
      if (!value) {
        setRut('');
        return;
      }
      
      // Solo permitir números y limitar a 9 dígitos
      const numericValue = value.replace(/\D/g, '').slice(0, 9);
      setRut(numericValue);
    };
  
    const handleSubmit = () => {
      if (rut.length === 8) {
        // Redirigir a PaginaReserva con el RUT como parámetro de URL
        history.push(`/reserva?rut=${rut}`);
      } else {
        alert('Por favor ingrese un RUT válido de 9 dígitos');
      }
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonToolbar style={{ textAlign: 'center' }} mode="md">
              <div className="sub-title_rut">
                <h2 className="main-title">Ingresa</h2>
                <h2 className="main-title_">tú RUT</h2>
              </div>
            </IonToolbar>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">
              <h1>RUT:</h1>
            </IonLabel>
            <IonInput
              type="number"
              value={rut}
              onIonInput={e => handleRutChange(e.detail.value)}
              maxlength={8}
              placeholder="Ej: 19247979"
            />
          </IonItem>
  
          <IonText color="medium">
            <center><h1>Ingrese los 8 dígitos de su RUT</h1></center>
            <center><h1>Sin puntos Ni guión</h1></center>
          </IonText>
          
          <IonButton 
            expand="block" 
            className="ion-margin"
            onClick={handleSubmit}
            disabled={rut.length !== 8}
          >
            <IonIcon icon={checkmarkOutline} /> Confirmar Rut
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default IngresoRut;