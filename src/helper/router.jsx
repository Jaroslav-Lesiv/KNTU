import { Redirect, Route, RouteProps, Link as RouterLink, NavLink as RouterNavLink, LinkProps } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { branch, pure, renderComponent, compose, setDisplayName, setPropTypes } from 'recompose'

// import removeInvalidProps from './invalidProps'
// import LangProps from './langProps'
// import { ITranslateP } from '../interfaces'

// const enhance = compose(
// 	setDisplayName('Connected(Link|NavLink)'),
// 	connect(({ lang, router }) => ({ lang, router })),
// 	setPropTypes({
// 		lang: LangProps.isRequired,
// 		router: PropTypes.shape({
// 			location: PropTypes.object.isRequired
// 		}).isRequired
// 	})
// )

/**
 * Create `Route` `path` with `lang`
 */
// const createPath = (lang: ITranslateP, to: string) => lang.current === lang.default ? to : `/${(lang.current ? lang.current : lang.default)}${to}`

/**
 * Wraper `Router` `Link`
 * @param {{}} [lang] Lang from store
 * @param {string} [to] `Router` path
 * @param {any} [children] `React` childrens
 * @param {{}} [rest] any other params
 */
const Link = ({ to, children }) => (
	<RouterLink to={to}>{children}</RouterLink>
)

// /**
//  * Wraper `Router` `NavLink`
//  * @param {{}} [lang] Lang from store
//  * @param {string} [to] `Router` path
//  * @param {any} [children] `React` childrens
//  * @param {{}} [rest] any other params
//  */
export const NavLink = ({ to, children }) => (
	<RouterNavLink activeClassName={'active'} to={to}>{children}</RouterNavLink>
)

export const RedirectToHome = () => <Redirect to={'/'} />;