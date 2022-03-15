import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import { AvatorRet } from "../interfaces";

interface UserInfo {
  username: string;
  passwd: string;
  avatar: string;
}

class App extends Component<{}, UserInfo> {
  constructor(props: any) {
    super(props)

    this.changeUserName = this.changeUserName.bind(this)
    this.changePasswd = this.changePasswd.bind(this)
    this.changeAvator = this.changeAvator.bind(this)
  }

  changeUserName (e: any) {
    this.setState({ username: e.target.value })
  }

  changePasswd (e: any) {
    this.setState({ passwd: e.target.value })
  }

  async changeAvator (e: any) {
    console.log('handleChange.target.value: ', e.target, e.target.value) // eslint-disable-line no-console
    console.log('handleChange.target.files: ', e.target.files) // eslint-disable-line no-console
    // const reader = new FileReader()
    // reader.readAsArrayBuffer(e.target.files[0])
    // reader.addEventListener('loadend', async (ee: any) => {
    //   console.log('handleChange.target.file: ', ee.target.result || '') // eslint-disable-line no-console
    // })
    const formData = new FormData()
    formData.append('file', e.target.files[0], e.target.files[0].name)
    const response = await axios.put('http://localhost:8888/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    if (response.data && response.data.code === 0) {
      const tmpRet = response.data as AvatorRet
        this.setState({ avatar: tmpRet.data.avatorPath })
    }
  }

  handleSubmit (e: any) {
    e.preventDefault()
  }

  public render() {
    return (
      <div className="App">
        <p> <strong> 注册账号:</strong> </p>
        <form id="login-form" onSubmit={this.handleSubmit} encType="multipart/form-data">
          用户名: <input type="text" id="username" name="username" onChange={this.changeUserName} /> <br />
          密 码: <input type="text" id="passwd" name="passwd" onChange={this.changePasswd} /> <br />
          头 像: <input type="file" id="avator" name="avator" onChange={this.changeAvator} /> <br />
          <input type="submit" value="注册"/>
        </form>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default App;
