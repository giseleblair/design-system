import React, { Component } from 'react'

import { FieldTypeImage } from '@zesty-io/core/FieldTypeImage'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'

export class FieldTypeImageGuide extends Component {
  state = {
    images: [
      'https://8xbq19z1.media.zestyio.com/Mozilla_logo.svg',
      'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit',
      'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    ]
  }
  handleImages = images => {
    this.setState({ images })
  }
  render() {
    return (
      <React.Fragment>
        <p>Text field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <FieldTypeImage
          images={this.state.images}
          callback={this.handleImages}
          label="Title Field"
          limit="5"
          description="Images description to load here and test"
          tooltip="Hello World"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code={`<FieldTypeImage
  default={[
    {
      id: '123',
      title: 'Image.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    },
    {
      id: '1223',
      title: 'Image2.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    }
  ]}
  callback={console.log}
  label="Title Field"
  charCount="150"
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed
            code={`<FieldTypeImage
  default={[
    {
      id: '123',
      title: 'Image.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    },
    {
      id: '1223',
      title: 'Image2.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    }
  ]}
  callback={console.log}
  label="Title Field"
  charCount="150"
/>`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
