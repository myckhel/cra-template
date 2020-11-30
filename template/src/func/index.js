import {NotificationManager} from 'react-notifications';

import {forOwn} from 'lodash'

export const Notify = ({type, msg, title, callback}) => NotificationManager[type](msg, title, 5000, callback)

export const readErrors = (e) => {
  const messages = []
  forOwn(e.response.data.errors, (msgs, field) => {
    msgs.map((msg) => messages.push(msg))
  });
  return messages
}

export const addErrors = (errors, payload) => {
  // remove existing
  forOwn(payload, (message, field) => {
    errors.remove(field);
  });
  // add
  forOwn(payload, (message, field) => {
    errors.add(field, message);
  });
  return errors
}

export const removeErrors = (errors) => {
  forOwn(errors, (message, field) => {
    errors.remove(field);
  });
  return errors
}
