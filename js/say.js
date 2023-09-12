export function doSpeak(theText) {
	let speech = new SpeechSynthesisUtterance(theText);

	speech.text = theText;
  
	const voices = window.speechSynthesis.getVoices();
  
	const { voice } = _getFemaleVoice(voices);
  
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
