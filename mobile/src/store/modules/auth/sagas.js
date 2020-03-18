import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    yield put(
      signInSuccess(id, {
        name: response.data.name,
        email: response.data.email,
        avatar: response.data.avatar,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
      })
    );

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    console.tron.log(err);
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
