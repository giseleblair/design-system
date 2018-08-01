import React, { Component } from 'react'

import '../../core/src/Infotip/Infotip.less'
import { Infotip } from '../../core/src/Infotip'
import GithubEmbed from '../components/githubembed'

export class InfotipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Mouseover for more information</p>
        <p>Use prop title for the message</p>
        <Infotip title="This is the Infotip title" />
        <br />
        <br />

        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/bbb2144f9f11204dc7ee4f9ee39b94b0/raw/87242583267c8d5d8d63c5ff4db504f6eaa723c8/Infotip.js" />
      </React.Fragment>
    )
  }
}
