export function valueValid (_data, _key) {
  let status = []
  // // console.log('valueValid _key')
  // // console.log(_key)
  // // console.log(_data[_key].value)
  if (_data[_key] && _data[_key].valid && _data[_key].valid.required) {
    let requiredVal = _data[_key].valid.required
    switch (requiredVal) {
      case true:

        // // console.log('_data[_key].value')
        // // console.log(_data[_key].value)
        if (!_data[_key].value || _data[_key].value === '') {
          status.push({
            key: _key,
            resValid: `${_data[_key]['title']} is required`
          })
        }
    }
  }
  return status
}

export function formValid (_data) {
  let resValid = []
  // console.log('formValid _data ================')
  // console.log(_data)
  for (let key in _data) {
    if (key !== 'config') {
      let keyValueValid = valueValid(_data, key)
      if (keyValueValid.length > 0) {
        resValid.push(keyValueValid)
      }
    }
  }
  return resValid
}
