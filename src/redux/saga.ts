import authWatcher from "./sagas/authSaga";
import {fork} from 'redux-saga/effects'

export default function* saga() {
    yield ([
        fork(authWatcher),
    ])
}
