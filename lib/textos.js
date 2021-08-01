var FRASES = () => {
	var frases = [
		'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.',
		'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
		'Tudo o que um sonho precisa para ser realizado é alguém que acredite quele possa ser realizado',
		'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante'
	];

var i = Math.floor(Math.random() * frases.length)
	
	return frases[i];
};

var TRAVALINGUA = () => {
	const LINGUA = [
		"Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos",
		"Trazei três pratos de trigo para três tigres tristes comerem",
		"A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha",
		"O tempo perguntou ao tempo quanto tempo o tempo tem, o tempo respondeu ao tempo que o tempo tem o tempo que o tempo tem.",
		"Se percebeste, percebeste. Se não percebeste, faz que percebeste para que eu perceba que tu percebeste. Percebeste?"
		]

	var i = Math.floor(Math.random() * LINGUA.length)
	
	return LINGUA[i]
	
}



module.exports = { 
	FRASES,
	TRAVALINGUA
};
