export function doSpeak(theText) {
	
  // let utterance = new SpeechSynthesisUtterance('cat');

  // utterance.text = theText;
	// window.speechSynthesis.cancel();
	// window.speechSynthesis.speak(utterance);


	let speech = new SpeechSynthesisUtterance(theText);

	speech.text = theText;
	
	const voices = window.speechSynthesis.getVoices();
	
	const { isDefault, voice } = _getVoice(voices);

	speech.default = isDefault;
	
  speech.voice = voice;

	speech.lang = "en-GB";
	
  window.speechSynthesis.speak(speech);
}

const _getVoice = (voices) => {
	let foundVoice = voices.find(function (voice) {
		return voice.name === "Google UK English Female";
	  });
	
	  if (foundVoice) {
		return { voice: foundVoice };
	  }
	
	  foundVoice = voices.find(function (voice) {
		return voice.name === "Microsoft Linda - English (Canada)";
	  });
	
	  if (foundVoice) {
		return { voice: foundVoice };
	  }
	
	  // If no specific female voice is found, fallback to the first available female voice
	  foundVoice = voices.find(function (voice) {
		return voice.gender === "female";
	  });
	
	  return {
		voice: foundVoice || voices[0], // Fallback to the first available voice if no female voice is found
	  };
}
