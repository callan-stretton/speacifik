import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { connect } from 'react-redux'

const propTypes = {
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Translate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      finalTranscript: '',
      finished: false,
      transcriptStarted: false
    }
  }

  componentWillReceiveProps ({ finalTranscript, transcript, randomVid, dispatch, round }) {
    if (finalTranscript.length && !this.state.finished) { // IF STATETMENT: if finalTranscript.length is truthy and the state of finished is false
      this.setState({ finished: true }) // set the state of finished to true (to not exceed call stack)
      this.compareFinalTranscript(finalTranscript)
    } else if (transcript.length && !this.state.transcriptStarted) {
      this.setState({ transcriptStarted: true })
    }
  }

  render () {
    const { transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return <div>
      <h3>I am the Translate component</h3>
    </div>
  }
}

Translate.propTypes = propTypes

export default Translate
