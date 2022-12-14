import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

export default function Profile() {
  const [notes, setNotes] = useState(
    'Informações sobre o investidor deverão ser listadas aqui'
  );
  const employee = { // Informações que devem vir do banco
    ID: 7,
    PrimeiroNome: 'João Victor',
    Sobrenome: 'Balbinot',
    Prefix: 'Sr.',
    Posição: 'Controller',
    ImagemPerfil: '../../../assets/avatar.png',
    DataAniversário: new Date('1974/11/5'),
    DataDeContratação: new Date('2005/05/11'),
    Notas: notes,
    Endereço: '4600 N Virginia Rd.'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`${employee.ImagemPerfil}`}
          />
        </div>
        <span>{notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
