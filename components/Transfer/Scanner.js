import React, { Component } from 'react'
import QRScan from 'qrscan'
import styles from './Scanner.module.css'
export default class Scanner extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '', watching: false }
        this.onFind = this.onFind.bind(this)
    }

    onFind(value) {
        this.setState({ value, watching: false })
    }

    render() {
        return (
            <div className={styles.container}>
                <h4>Scan QR Code</h4>
                {this.state.watching
                    ? (
                        <QRScan onFind={this.onFind} />
                    )
                    : (
                        <>
                            <button className={styles.btn} onClick={() => this.setState({ watching: true })}>Scan</button>
                            {/* <h5>value: {this.state.value}</h5> */}
                        </>
                    )
                }
            </div>
        )
    }
}
