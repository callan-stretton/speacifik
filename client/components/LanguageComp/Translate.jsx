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
  render () {
    return <div>
      <h3>I am the Translate component</h3>
    </div>
  }
}

export default Translate
