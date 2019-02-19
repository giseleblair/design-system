import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import { Contribute } from './Contribute'
import * as Guides from '../../guides'

import { Nav } from '../../../core/src/Nav'

import '@zesty-io/core/dist/vendor.css'
import styles from './app.less'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route
          path="/"
          render={props => {
            return (
              <section className={styles.App}>
                <header className={styles.AppHeader}>
                  <Link className={styles.Home} to="/">
                    <i className={`fa fa-home ${styles.link}`} />{' '}
                  </Link>
                  <h1>Zesty.io Component Library</h1>
                </header>
                <section className={styles.AppWrap}>
                  <nav className={styles.AppMenu}>
                    <div className={styles.Title}>CONCEPTS</div>
                    <Nav
                      id="concepts"
                      selected={'/#' + props.location.pathname.split('/')[1]}
                      content={this.props.concepts.map(el => {
                        return {
                          name: el,
                          path:
                            '/#' + el.toLowerCase().replace(' ', '-') + 'guide',
                          icon: 'lightbulb-o'
                        }
                      })}
                    />
                    <div className={styles.Title}>ATOMS</div>
                    <Nav
                      id="atoms"
                      selected={'/#' + props.location.pathname.split('/')[1]}
                      content={this.props.atoms.map(el => {
                        return {
                          name: el,
                          path:
                            '/#' + el.toLowerCase().replace(' ', '-') + 'guide',
                          icon: 'cube'
                        }
                      })}
                    />
                    <div className={styles.Title}>MOLECULES</div>
                    <Nav
                      id="molecules"
                      selected={'/#' + props.location.pathname.split('/')[1]}
                      content={this.props.molecules.map(el => {
                        return {
                          name: el,
                          path:
                            '/#' + el.toLowerCase().replace(' ', '-') + 'guide',
                          icon: 'cogs'
                        }
                      })}
                    />
                    <div className={styles.Title}>ORGANISMS</div>
                    <Nav
                      selected={'/#' + props.location.pathname.split('/')[1]}
                      content={this.props.organisms.map(el => {
                        return {
                          name: el,
                          path:
                            '/#' + el.toLowerCase().replace(' ', '-') + 'guide',
                          icon: 'fa-snowflake-o'
                        }
                      })}
                    />
                  </nav>
                  <main className={styles.AppShowcase}>
                    <Switch>
                      {/* Render routes for each component */}
                      {Object.keys(Guides).map(routeItem => (
                        <Route
                          key={routeItem}
                          path={`/${routeItem.toLowerCase()}`}
                          component={Guides[routeItem]}
                        />
                      ))}
                      <Route path="/" component={Contribute} />
                    </Switch>
                  </main>
                </section>
              </section>
            )
          }}
        />
      </HashRouter>
    )
  }
}
