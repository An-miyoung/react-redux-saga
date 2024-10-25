import { takeLatest, all, put, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithWmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  signinFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    yield put(
      signInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinWithEmail(action) {
  const {
    payload: { email, password },
  } = action;
  try {
    const { user } = yield call(
      signInAuthUserWithWmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signUp(action) {
  const {
    payload: { email, password, displayName },
  } = action;

  try {
    const { user } = yield call(
      createAuthUserWithEmailandPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp(action) {
  const {
    payload: { user, additionalInfo },
  } = action;
  yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSigninStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signinWithGoogle);
}

export function* onEmailSigninStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signinWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
