import store from '../redux/store'
import {Notify} from './'
import _ from 'lodash'

window.store = store
window.Notify = Notify

window.merge = _.merge

window.empty = (checks, condition = 'or') => {
  if (!checks) {
    return true
  }
  let bool = false
  let count = 0
  const checksSize = checks.length
  for (let i = 0; i < checksSize; i++) {
    if (!checks[i]) {
      if (condition === 'or') {
        bool = true
        break
      } else {
        count++
      }
    } else if (checks[i].constructor === Array) {
      if(!checks[i] || checks[i].length === 0){
        if (condition === 'or') {
          bool = true
          break
        } else {
          count++
        }
      }
    } else if (checks[i].constructor === String) {
      if(!checks[i] || checks[i] === ''){
        if (condition === 'or') {
          bool = true
          break
        } else {
          count++
        }
      }
    } else if (checks[i].constructor === Object){
      if (Object.entries(checks[i]).length === 0) {
        if (condition === 'or') {
          bool = true
          break
        } else {
          count++
        }
      }
    }
  }
  if (condition === 'or') {
    return bool
  } else {
    return checksSize === count
  }
}

const emp = {
  i: 'i',
}

export default emp
