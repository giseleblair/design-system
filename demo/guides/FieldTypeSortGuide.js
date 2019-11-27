import React, { Component } from 'react'

import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

import { FieldTypeSort } from '@zesty-io/core/FieldTypeSort'

export class FieldTypeSortGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Sort Field Type for manager app</p>
        <p>Props: label, default</p>
        <br />
        <FieldTypeSort label="Label" callback={console.log} />
        <br />
        <FieldTypeSort
          label="Default to 10"
          default={10}
          callback={console.log}
          description="This is the description text"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`
<FieldTypeSort label="Label" callback={console.log} />
<br />
<FieldTypeSort
  label="Default to 10"
  default={10}
  callback={console.log}
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`export class FieldTypeSort extends Component {
  state = {
    sortValue: Number(this.props.default) || 0,
    required: this.props.required
  }
  handleIncrement = up => {
    if (up) {
      this.setState({ sortValue: Number(this.state.sortValue) + 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue)
      })
    } else {
      this.setState({ sortValue: Number(this.state.sortValue) - 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue)
      })
    }
  }
  onChange = evt => {
    // handles a manual number entry
    if (this.props.callback) {
      this.props.callback(Number(evt.target.value))
    }
    this.setState({
      sortValue: Number(evt.target.value)
    })
  }
  render() {
    const { sortValue } = this.state
    return (
      <article className={styles.FieldTypeSort}>
        <section className={styles.FieldTypeSortLabel}>
          <label>{this.props.label}</label>
        </section>
        <section className={styles.Sort}>
          <span className={styles.IncrementL} onClick={() => this.handleIncrement(true)}>+</span>
          <Input className={styles.SortNumber} type="number" onChange={this.onChange} value={sortValue} />
          <span className={styles.IncrementR} onClick={() => this.handleIncrement()}>-</span>
        </section>
      </article>
    )
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
