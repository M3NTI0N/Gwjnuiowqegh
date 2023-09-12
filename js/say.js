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
		return { voice: foundVoice, isDefault: false };
	}

	foundVoice = voices.find(function (voice) {
		// return voice.name === "Microsoft Linda - English (Canada)";
		return voice.gender === "female";
	});
	
	if (foundVoice) {
		return { voice: foundVoice, isDefault: false };
	}

	return {
		voice: voices[1],
		isDefault: true
	};
}
