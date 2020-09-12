import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Provider, rootStore } from "../models/Root"
import Counter from "./Counter";
import Cart from "./Cart";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <Provider value={rootStore}>
        <div className={'container mx-auto'}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <nav>
                <ul className="flex justify-between items-center p-8">
                    <li>
                        <Link href="/">
                            <a className="text-blue-500 no-underline">Home</a>
                        </Link>
                    </li>
                    <ul className="flex justify-between items-center space-x-4">
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/users">
                                <a>Users List</a>
                            </Link>
                        </li>
                        <li>
                            <a href="/api/users">Users API</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
        {children}
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
            <Counter/>
            <Cart />
        </footer>
      </div>
    </Provider>
)

export default Layout
