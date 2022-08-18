import React from 'react'

const ValidationForm = () => {
  const [ login, setLogin ] = React.useState<string>('')
  const [ password, setPassword ] = React.useState<string>('')
  const [ loginDirty, setLoginDirty ] = React.useState<boolean>(false)
  const [ passwordDirty, setPasswordDirty ] = React.useState<boolean>(false)
  const [ loginError, setLoginError ] = React.useState<string>('Введите логин!')
  const [ passwordError, setPasswordError ] = React.useState<string>('Введите пароль!')
  const [ formValid, setFormValid ] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [loginError, passwordError])
  
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError("Неккоректный логин")
    } else {
      setLoginError("")
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length <= 6 || e.target.value.length > 13) {
      setPasswordError("Неккоректный пароль")
      if (!e.target.value) {
        setPasswordError("Введите пароль!")
      }
    } else {
      setPasswordError("")
    }
  }
  
  
  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  
  return (
    <form>
      <h1>Авторизация</h1>
      <div className="inputs">
        {(loginDirty && loginError) && <div className="text-error">{loginError}</div>}
        <input 
          onBlur={e => blurHandler(e)} 
          name="login" 
          type="text" 
          placeholder="Enter your login . . ."
          value={login}
          onChange={e => loginHandler(e)}
        />
        {(passwordDirty && passwordError) && <div className="text-error">{passwordError}</div>}
        <input 
          onBlur={e => blurHandler(e)} 
          name="password" 
          type="password" 
          placeholder="Enter your password . . ." 
          value={password}
          onChange={e => passwordHandler(e)}
        />
      </div>
      <button className="button button-form" disabled={!formValid} type="submit">Войти</button>
    </form>
  )
}

export default ValidationForm